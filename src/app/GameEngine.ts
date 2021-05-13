import { CommandType } from "./CommandType";
import { Direction } from "./Direction";
import {
  GameErrorEvent,
  GameEvent,
  LocationChangeEvent,
  NewInputEvent,
} from "./events";
import { GameError } from "./GameError";
import { Item } from "./Item";
import { ItemKey } from "./items/ItemKey";
import { Location } from "./Location";
import { LocationKey } from "./locations";
import { Startup } from "./Startup";

export class GameEngine {
  public currentLocation: Location;
  public score: number;
  public actionCount: number;
  public display: string;

  private inventory: Map<string, Item>;
  private items: Map<ItemKey, Item> = new Map();
  private locations: Map<LocationKey, Location> = new Map();
  private events: GameEvent[];

  init() {
    Startup.init();
    this.items = Startup.items;
    this.locations = Startup.locations;
  }

  constructor() {
    this.init();

    this.score = 0;
    this.actionCount = 0;

    this.currentLocation = this.locations.get(LocationKey.Driveway)!;
    this.display = this.currentLocation.description();
    this.inventory = new Map<string, Item>();
    this.events = [];
  }

  public getEvents(): GameEvent[] {
    return this.events;
  }

  public send(input: string) {
    this.actionCount++;
    const lowerInput = input.toLowerCase().trim();
    const inputSplit = lowerInput.split(" ");
    const cmdText = inputSplit.shift()!;
    const cmd = CommandType.values.find(
      (type) => cmdText === type.name.toLowerCase()
    );
    const rest = lowerInput.substr(!!cmd ? cmd.name.length + 1 : 0);

    this.events.push(new NewInputEvent(input));
    switch (cmd) {
      case CommandType.N:
      case CommandType.S:
      case CommandType.E:
      case CommandType.W:
      case CommandType.NE:
      case CommandType.NW:
      case CommandType.SE:
      case CommandType.SW: {
        this.move(lowerInput as Direction);
        break;
      }

      case CommandType.GO: {
        this.move(rest as Direction);
        break;
      }
    }

    console.log("sent:", input);
  }

  private changeLocation(location: Location) {
    this.currentLocation = location;
    this.events.push(
      new LocationChangeEvent(location.title, location.description())
    );
  }

  public move(direction: Direction) {
    const newLocation = this.currentLocation.neighbors.get(direction);
    if (newLocation) {
      if (!newLocation.entered) {
        newLocation.entered = true;
        newLocation.enter();
      }
      this.changeLocation(newLocation);
    } else {
      this.events.push(new GameErrorEvent(GameError.InvalidPath));
    }
  }
}
