import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class ScotchTape extends BaseItem {
  public id = ItemKey.ScotchTape;
  public name = "scotch tape";
  public value = 5;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You place the scotch tape into your duffle bag, careful not to get it stuck to anything else in there.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the scotch tape. It's sturdy enough to take the impact without injury.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The scotch tape appears to be in good condition and feels very sticky, like it's meant to adhere to things.";
  }

  public use(gameEngine: GameEngine): string {
    return "TODO: can be used in combination with other arts and crafts supplies";
  }
}
