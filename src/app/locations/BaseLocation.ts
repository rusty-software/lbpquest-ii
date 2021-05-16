import { Item } from "../Item";
import { ItemKey } from "../items/ItemKey";
import { Location } from "../Location";
import { NeighborMap } from "../NeighborMap";

export abstract class BaseLocation implements Location {
  title: string = "";
  entered: boolean = false;
  descriptionText = "";
  neighbors = new NeighborMap();
  items: Item[] = [];

  constructor() {}

  showItem(itemKey: ItemKey) {
    this.items.find((item) => item.id === itemKey)!.isShown = true;
  }

  abstract enter(): void;

  public description(): string {
    let s = this.descriptionText;
    this.items
      .filter((item) => item.isShown)
      .map((item) => (s += `\n\nThere is a(n) ${item.name} here.`));
    return s;
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public removeItem(item: Item): void {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
