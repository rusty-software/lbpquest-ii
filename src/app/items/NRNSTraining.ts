import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class NRNSTraining extends BaseItem {
  public id = ItemKey.NRNSTraining;
  public name = "nrns training";
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "You can't take what has already been given. Or at least seen on a vhs tape.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You can't drop what cannot be taken.";
  }

  public examine(gameEngine: GameEngine): string {
    return "You introspect for a moment on all of the dance moves you learned from RJ, and how much karate you know from all of Jason's training.";
  }

  public use(gameEngine: GameEngine): string {
    return "You don't need to actively use the training. It will emerge as needed, when the time is right.";
  }
}
