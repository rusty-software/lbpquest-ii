import { GameEngine } from "../GameEngine";
import { Item } from "../Item";
import { ItemKey } from "./ItemKey";

export class BaseItem implements Item {
  public id = ItemKey._Nothing;
  public name = "";
  public isShown = false;
  public value = 0;
  public taken = false;
  public customVerbs: Map<string, (gameEngine: GameEngine) => string> =
    new Map();

  public canTake(gameEngine: GameEngine): boolean {
    throw new Error("Method not implemented.");
  }

  public take(gameEngine: GameEngine): string {
    this.taken = true;
    return "Taken.";
  }

  public drop(gameEngine: GameEngine): string {
    return "Dropped.";
  }

  public examine(gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }

  public use(gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }
}
