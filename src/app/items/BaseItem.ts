import { GameEngine } from "../GameEngine";
import { Item } from "../Item";

export class BaseItem implements Item {
  id: number = 0;
  name: string = "";
  isShown: boolean = false;
  value: number = 0;
  taken: boolean = false;
  customVerbs: Map<string, (gameEngine: GameEngine) => string> = new Map();

  canTake(gameEngine: GameEngine): boolean {
    throw new Error("Method not implemented.");
  }
  take(gameEngine: GameEngine): string {
    this.taken = true;
    return "Taken.";
  }
  drop(gameEngine: GameEngine): string {
    return "Dropped.";
  }
  examine(gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }
  use(gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }
}
