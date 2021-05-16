import { Item } from "../Item";
import { Location } from "../Location";
import { NeighborMap } from "../NeighborMap";

export abstract class BaseLocation implements Location {
  title: string = "";
  entered: boolean = false;
  descriptionText = "";

  constructor(public neighbors: NeighborMap, public items: Item[]) {}

  abstract enter(): void;

  public description(): string {
    let s = this.descriptionText;
    this.items
      .filter((item) => item.displayable)
      .map((item) => (s += `\n\nThere is a(n) ${item.name} here.`));
    return s;
  };

  public addItem(item: Item): void {
    this.items.push(item);
  }
  
  public removeItem(item: Item): void {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
