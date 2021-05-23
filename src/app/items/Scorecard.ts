import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Scorecard extends BaseItem {
  public id = ItemKey.Scorecard;
  public name = "scorecard";
  public value = 15;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the scorecard on the ground. No one will believe you actually shot a hole in one anyway...";
  }

  public examine(gameEngine: GameEngine): string {
    return "The scorecard clearly states that you have hit a hole in one on the prestigious ranch golf course.";
  }

  public use(gameEngine: GameEngine): string {
    return "TODO: can be put in the trophy case";
  }
}
