import { GameEngine } from "../GameEngine";
import { Item } from "../Item";

export class BaseItem implements Item {
  id: number;
  name: string;
  isShown: boolean;
  value: number;
  taken: boolean;

  constructor() {
    this.id = 0;
    this.name = "";
    this.isShown = false;
    this.value = 0;
    this.taken = false;
  }

  canTake(gameEngine: GameEngine): boolean {
    throw new Error("Method not implemented.");
  }
  take(gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }
  drop(gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }
  examine(gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }
  use(gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }
}
