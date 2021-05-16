import { Item } from "./Item";
import { ItemKey } from "./items/ItemKey";
import { NeighborMap } from "./NeighborMap";

export interface Location {
  showItem(itemKey: ItemKey): void;
  title: string;
  items: Item[];
  neighbors: NeighborMap;
  entered: boolean;

  enter(): void;
  description(): string;
  addItem(item: Item): void;
  removeItem(item: Item): void;
}
