import { Direction } from "./Direction";
import { Item } from "./Item";

export interface Location {
  title: string;
  items: Item[];
  neighbors: Map<Direction, Location>;
  entered: boolean;

  enter(): void;
  description(): string;
}