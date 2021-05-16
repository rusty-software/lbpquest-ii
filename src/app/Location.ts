import { Item } from "./Item";
import { NeighborMap } from "./NeighborMap";

export interface Location {
  title: string;
  items: Item[];
  neighbors: NeighborMap;
  entered: boolean;

  enter(): void;
  description(): string;
  addItem(item: Item): void;
  removeItem(item: Item): void;
}
