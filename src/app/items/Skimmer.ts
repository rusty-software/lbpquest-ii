import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { SlipperyShorts } from "./SlipperyShorts";

export class Skimmer extends BaseItem {
  public id = ItemKey.Skimmer;
  public name = "skimmer";

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "";
  }

  public drop(gameEngine: GameEngine): string {
    return "";
  }

  public examine(gameEngine: GameEngine): string {
    const shorts = gameEngine.getItem(ItemKey.SlipperyShorts) as SlipperyShorts;
    if (!shorts.isShown) {
      gameEngine.currentLocation.showItem(ItemKey.SlipperyShorts);
      return "A quick examination of the skimmer reveals the source of the sucking, slurping sound. A pair of slippery looking shorts is stuck in the skimmer basket. Apparently at least one swimmer has entered the grotto sans shorts...";
    } else {
      return "The skimmer looks fully operational and is free of debris.";
    }
  }

  public use(gameEngine: GameEngine): string {
    return "The pool is already really clean. You don't need to use the skimmer.";
  }
}
