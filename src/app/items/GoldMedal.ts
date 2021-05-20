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
    return "The wine is a very dark color, somewhere between burgundy and black. The cork is sealed with a waxy coating that you feel uncomfortable messing with.";
  }
  use(gameEngine: GameEngine): string {
    return "TODO: using the wine should place it on the trophy case.";
  }
}
