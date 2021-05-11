import { Direction } from "../Direction";
import { Item } from "../Item";
import { Location } from "../Location";

export abstract class BaseLocation implements Location {
  title: string = "";

  constructor(public neighbors: Map<Direction, Location>, public items: Item[]) {}

  abstract description(): string;
}
