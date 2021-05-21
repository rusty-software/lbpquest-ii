import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class GoldMedal extends BaseItem {
  id = ItemKey.GoldMedal;
  name = "gold medal";
  value = 10;
  isShown = true;

  canTake(gameEngine: GameEngine): boolean {
    return true;
  }
  take(gameEngine: GameEngine): string {
    return "You place the gold medal into your duffle bag.";
  }
  drop(gameEngine: GameEngine): string {
    return "You drop the gold medal. It's probably not REAL gold anyway.";
  }
  examine(gameEngine: GameEngine): string {
    return "The gold medal looks untarnished despite the fact that it's been in the possession of a wild child for who knows how long.";
  }
  use(gameEngine: GameEngine): string {
    return "TODO: using the gold medal should place it on the trophy case.";
  }
}
