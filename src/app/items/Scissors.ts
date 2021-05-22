import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Scissors extends BaseItem {
  public id = ItemKey.Scissors;
  public name = "scissors";
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You pick up the scissors, consider running with them, but put them in your duffle bag instead.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the scissors on the ground. They stick straight up, pointy end down.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The scissors are the type used in sewing, and were quite shiny at one point. They look moderately sharp.";
  }

  public use(gameEngine: GameEngine): string {
    return "TODO: can be used in combination with other arts and crafts supplies";
  }
}
