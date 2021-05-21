import { GameEngine } from "../GameEngine";
import { Item } from "../Item";
import { ItemKey } from "../items/ItemKey";
import { Location } from "../Location";
import { NeighborMap } from "../NeighborMap";
import { LocationKey } from "./LocationKey";

export abstract class BaseLocation implements Location {
  id: LocationKey = -1;
  customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map();
  title: string = "";
  entered: boolean = false;
  descriptionText = "";
  neighbors = new NeighborMap();
  items: Item[] = [];

  showItem(itemKey: ItemKey) {
    this.items.find((item) => item.id === itemKey)!.isShown = true;
  }

  public enter(): void {
    this.entered = true;
  }

  protected appendItems(): string {
    let s = "";
    this.items
      .filter((item) => item.isShown)
      .map((item) => (s += `\n\nThere is a(n) ${item.name} here.`));

    return s;
  }

  public description(): string {
    let s = this.descriptionText;
    s += this.appendItems();
    return s;
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public removeItem(item: Item): void {
    this.items.splice(this.items.indexOf(item), 1);
  }

  protected enterLocation(
    gameEngine: GameEngine,
    locationKey: LocationKey
  ): string {
    const location = gameEngine.getLocation(locationKey);
    location.enter();
    gameEngine.changeLocation(location);
    return "";
  }
}
