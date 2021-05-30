import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Log extends BaseItem {
  public id = ItemKey.Log;
  public name = "log";
  public value = 10;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You pick up the log and put it into your duffle bag. The bullseye on the end stares back at you like an angry eye.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the log to the ground. Who needs a dirty old target practice log anyway?!";
  }

  public examine(gameEngine: GameEngine): string {
    return "The log has a small red bullseye and outer ring painted on the cut end. It's barely thicker than your forearm, and about the same length as well. It smells of oak and spray paint.";
  }

  public use(gameEngine: GameEngine): string {
    return (
      super.useInLivingRoom(gameEngine) ||
      "You try to use the log, but realize that it probably isn't meant for whatever activity for which you intended it. Perhaps you should try again in a different spot?"
    );
  }
}
