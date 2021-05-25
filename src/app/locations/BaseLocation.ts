import { GameEngine } from "../GameEngine";
import { Item } from "../Item";
import { ItemKey } from "../items/ItemKey";
import { Location } from "../Location";
import { NeighborMap } from "../NeighborMap";
import { LocationKey } from "./LocationKey";

export abstract class BaseLocation implements Location {
  public id = LocationKey._Nowhere;
  public customVerbs: Map<string, (gameEngine: GameEngine) => string> =
    new Map();
  public title = "";
  public entered = false;
  public descriptionText = "";
  public neighbors = new NeighborMap();
  public items: Item[] = [];

  public showItem(itemKey: ItemKey): void {
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

  public hasItem(itemKey: ItemKey): boolean {
    return this.items.find((i) => i.id === itemKey) !== undefined;
  }

  public addItem(itemKey: ItemKey): void {
    const item = this.items.find((i) => i.id === itemKey)!;
    this.items.push(item);
  }

  public removeItem(itemKey: ItemKey): void {
    const item = this.items.find((i) => i.id === itemKey)!;
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
