import { CommandType } from "./CommandType";
import { Direction } from "./Direction";
import {
  GameErrorEvent,
  GameEvent,
  HelpEvent,
  InventoryEvent,
  ItemEvent,
  LocationChangeEvent,
  NewInputEvent,
} from "./events";
import { GameError } from "./GameError";
import { Item } from "./Item";
import { GoogleMap, ItemKey } from "./items";
import { Location } from "./Location";
import { LivingRoom, LocationKey } from "./locations";
import { Startup } from "./Startup";

export class GameEngine {
  public currentLocation: Location;
  public score: number;
  public actionCount: number;
  public display: string;
  public events: GameEvent[];

  private readonly inventory: Item[];
  private items: Map<ItemKey, Item> = new Map();
  private locations: Map<LocationKey, Location> = new Map();

  public init(): void {
    Startup.init();
    this.items = Startup.items;
    this.locations = Startup.locations;
  }

  public constructor() {
    this.init();

    this.score = 0;
    this.actionCount = 0;

    this.currentLocation = this.getLocation(LocationKey.Driveway);
    this.display = this.currentLocation.description();
    this.inventory = [];
    this.events = [];
    // HACK ZONE
    this.addToInventory(ItemKey.Screwdriver);
    this.addToInventory(ItemKey.UtilityStick);
  }

  public getEvents(): GameEvent[] {
    return this.events;
  }

  private parseCommand(input: string): CommandType | undefined {
    if (input.startsWith(CommandType.google.name.toLowerCase())) {
      return CommandType.google;
    } else {
      const cmdText = input.split(" ").shift()!;
      return CommandType.values.find(
        (type) => cmdText === type.name.toLowerCase()
      );
    }
  }
  public send(input: string) {
    this.actionCount++;
    const lowerInput = input.toLowerCase().trim();
    const cmd = this.parseCommand(lowerInput);
    const rest = lowerInput.substr(!!cmd ? cmd.name.length + 1 : 0);

    this.events.push(new NewInputEvent(input));
    switch (cmd) {
      case CommandType.n:
      case CommandType.s:
      case CommandType.e:
      case CommandType.w:
      case CommandType.ne:
      case CommandType.nw:
      case CommandType.se:
      case CommandType.sw:
      case CommandType.up:
      case CommandType.down: {
        this.move(lowerInput as Direction);
        break;
      }

      case CommandType.l:
      case CommandType.look: {
        this.changeLocation(this.currentLocation);
        break;
      }

      case CommandType.ex:
      case CommandType.examine: {
        const item = this.getAvailableItemByName(rest);
        if (item) {
          this.events.push(new ItemEvent(item!.examine(this)));
        }
        break;
      }

      case CommandType.inv:
      case CommandType.inventory: {
        this.events.push(new InventoryEvent(this.inventory));
        break;
      }

      case CommandType.help: {
        const commands = CommandType.values.map((type) => type.name);
        this.events.push(new HelpEvent(commands));
        break;
      }

      case CommandType.take: {
        // TODO: consider adding "all" option
        const item = this.getLocationItemByName(rest);
        if (item) {
          if (item.canTake(this)) {
            this.score += !item.taken ? item.value : 0;
            item.taken = true;
            this.inventory.push(item);
            this.currentLocation.items.splice(
              this.currentLocation.items.indexOf(item),
              1
            );
          }
          this.events.push(new ItemEvent(item.take(this)));
        } else if (this.getInventoryItemByName(rest)) {
          this.events.push(
            new ItemEvent(`You're already carrying the ${rest}.`)
          );
        } else {
          this.events.push(
            new GameErrorEvent(
              GameError.NoItem,
              `Sorry, there is no ${rest} here.`
            )
          );
        }
        break;
      }

      case CommandType.drop: {
        const item = this.getInventoryItemByName(rest);
        if (item) {
          this.currentLocation.items.push(item);
          this.inventory.splice(this.inventory.indexOf(item), 1);
          this.events.push(new ItemEvent(item.drop(this)));
        } else if (
          () => {
            const locationItem = this.getLocationItemByName(rest);
            return locationItem && locationItem.canTake(this);
          }
        ) {
          this.events.push(
            new GameErrorEvent(
              GameError.NoItem,
              "Maybe try taking it first...?"
            )
          );
        } else {
          this.events.push(new GameErrorEvent(GameError.NoItem, ""));
        }
        break;
      }

      case CommandType.use: {
        const item = this.getAvailableItemByName(rest);
        if (item) {
          this.events.push(new ItemEvent(item.use(this)));
        } else {
          this.events.push(
            new GameErrorEvent(
              GameError.NoItem,
              `Sorry, there is no ${rest} here.`
            )
          );
        }
        break;
      }

      case CommandType.google: {
        if (this.isItemAvailable(ItemKey.GoogleMap)) {
          let targetItem: Item | null = null;
          for (let itemObject of this.items.values()) {
            const item = itemObject as Item;
            if (item.name === rest) {
              targetItem = item;
            }
          }

          let s = "Google Maps ALPHA replies:";
          if (targetItem) {
            this.events.push(new ItemEvent(s + this.locateItem(targetItem)));
          } else {
            this.events.push(
              new GameErrorEvent(
                GameError.NoItem,
                s +
                  ` Nope, there's no such thing as a "${rest}", and there never will be.`
              )
            );
          }
        } else {
          this.events.push(
            new GameErrorEvent(
              GameError.NoItem,
              "It appears the Google Maps function is not available."
            )
          );
        }
        break;
      }

      default: {
        const targetItem = this.currentLocation.items
          .concat(this.inventory)
          .find((item) => input.endsWith(item.name));

        if (targetItem) {
          const customVerbText = lowerInput.substr(
            0,
            lowerInput.length - (targetItem.name.length + 1)
          );
          const customVerb = targetItem.customVerbs.get(customVerbText);
          if (customVerb) {
            this.events.push(new ItemEvent(customVerb(this)));
          }
        } else {
          const customVerb = this.currentLocation.customVerbs.get(lowerInput);
          if (customVerb) {
            // TODO: ItemEvent from Location verb feels odd
            this.events.push(new ItemEvent(customVerb(this)));
          }
        }
        break;
      }
    }
  }

  public trophiesPlaced(): boolean {
    const livingRoom = this.getLocation(LocationKey.LivingRoom) as LivingRoom;
    return livingRoom.trophyPlacementSatisfied();
  }

  public changeLocation(location: Location): void {
    this.currentLocation = location;
    this.events.push(
      new LocationChangeEvent(location.title, location.description())
    );
  }

  public move(direction: Direction): void {
    const newLocation = this.currentLocation.neighbors.get(direction);
    if (newLocation) {
      newLocation.enter();
      this.changeLocation(newLocation);
    } else {
      this.events.push(new GameErrorEvent(GameError.InvalidPath, ""));
    }
  }

  public getLocation(locationKey: LocationKey): Location {
    return this.locations.get(locationKey)!;
  }

  public getItem(itemKey: ItemKey): Item {
    return this.items.get(itemKey)!;
  }

  public availableItems(): Item[] {
    return this.currentLocation.items.concat(this.inventory);
  }

  public isItemAvailable(itemKey: ItemKey): boolean {
    return (
      this.inventoryContains(itemKey) || this.currentLocation.hasItem(itemKey)
    );
  }

  public inventoryContains(itemKey: ItemKey): boolean {
    return this.getInventoryItemByKey(itemKey) !== undefined;
  }

  public removeFromInventory(itemKey: ItemKey): void {
    const item = this.getItem(itemKey);
    this.inventory.splice(this.inventory.indexOf(item), 1);
  }

  public addToInventory(itemKey: ItemKey): void {
    this.inventory.push(this.getItem(itemKey));
  }

  public inventoryArtsAndCraftsSupplies(): Item[] {
    const artsAndCraftsItems = [
      this.getItem(ItemKey.ConstructionPaper),
      this.getItem(ItemKey.Crayons),
      this.getItem(ItemKey.DuctTape),
      this.getItem(ItemKey.Glitter),
      this.getItem(ItemKey.Glue),
      this.getItem(ItemKey.GooglyEyes),
      this.getItem(ItemKey.Magazine),
      this.getItem(ItemKey.Pencils),
      this.getItem(ItemKey.PipeCleaners),
      this.getItem(ItemKey.Scissors),
      this.getItem(ItemKey.ScotchTape),
      this.getItem(ItemKey.Yarn),
    ];
    return this.inventory.filter((i) => artsAndCraftsItems.includes(i));
  }

  private getAvailableItemByName(itemName: string): Item | undefined {
    return this.availableItems().find((i) => {
      return i.name === itemName;
    });
  }

  private getLocationItemByName(itemName: string): Item | undefined {
    return this.currentLocation.items.find((i) => {
      return i.name === itemName;
    });
  }
  private getInventoryItemByName(itemName: string): Item | undefined {
    return this.inventory.find((i) => {
      return i.name === itemName;
    });
  }

  private getInventoryItemByKey(itemKey: ItemKey): Item | undefined {
    return this.inventory.find((i) => i.id === itemKey);
  }

  public maxScore(): number {
    let max = 0;
    for (let itemObject of this.items.values()) {
      const item = itemObject as Item;
      max += item.value;
    }
    return max;
  }

  private locateItem(item: Item): string {
    const itemKey: ItemKey = item.id;

    if (this.inventoryContains(itemKey)) {
      return ` "I don't know how to put this gently: look in your duffle bag for the ${item.name}. On second thought, you... ah... probably forgot it at home. You should leave LBP now to fetch it."`;
    } else if (this.currentLocation.hasItem(itemKey)) {
      return `"Well, I've got some good news and some bad news. Good news: the ${item.name} is here. Bad news: you apparently can't see it. Maybe it really is time to get those glasses?"`;
    } else {
      const location = this.itemLocation(itemKey);
      if (location !== undefined) {
        return ` The ${item.name} appears to be in the ${location.title}. Good luck finding that spot.`;
      } else {
        return ` The best I can tell, there is no "${item.name}" anywhere in the universe. Apparently, you'll need to invent it or otherwise earn it from the party hiding it from my location service.`;
      }
    }
  }

  private itemLocation(itemKey: ItemKey): Location | undefined {
    for (let location of this.locations.values()) {
      if (location.hasItem(itemKey)) {
        return location;
      }
    }
    return undefined;
  }
}
