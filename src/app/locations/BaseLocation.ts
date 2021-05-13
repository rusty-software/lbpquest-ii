import { Item } from "../Item";
import { Location } from "../Location";
import { NeighborMap } from "../NeighborMap";

export abstract class BaseLocation implements Location {
  title: string = "";
  entered: boolean = false;

  constructor(public neighbors: NeighborMap, public items: Item[]) {}
  abstract enter(): void;
  abstract description(): string;
}
