import { GameEngine } from "./GameEngine";
import { Item } from "./Item";
import { ItemKey } from "./items/ItemKey";
import { NeighborMap } from "./NeighborMap";

export interface Location {
  title: string;
  items: Item[];
  neighbors: NeighborMap;
  entered: boolean;
  customVerbs: Map<string, (gameEngine: GameEngine) => string>;

  enter(): void;
  description(): string;
  addItem(item: Item): void;
  removeItem(item: Item): void;
  showItem(itemKey: ItemKey): void;
}
