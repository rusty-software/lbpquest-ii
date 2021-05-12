import { Direction } from "../Direction";
import { Item } from "../Item";
import { Location } from "../Location";

export abstract class BaseLocation implements Location {
  title: string = "";
  entered: boolean = false;

  constructor(public neighbors: Map<Direction, Location>, public items: Item[]) {}
  abstract enter(): void;
  abstract description(): string;
}
