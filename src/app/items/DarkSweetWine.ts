import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class DarkSweetWine extends BaseItem {
  id = ItemKey.DarkSweetWine;
  name = "wine";
  value = 5;
  isShown = true;

  canTake(gameEngine: GameEngine): boolean {
    return true;
  }
  take(gameEngine: GameEngine): string {
    return "You place the wine into your duffle bag.";
  }
  drop(gameEngine: GameEngine): string {
    return "You drop the wine. Luckily, the bottle seems to be made of sturdier stuff than your desire to hold onto it...";
  }
  examine(gameEngine: GameEngine): string {
    return "The wine is a very dark color, somewhere between burgundy and black. The cork is sealed with a waxy coating that you feel uncomfortable messing with.";
  }
  use(gameEngine: GameEngine): string {
    return "TODO: using the wine should place it on the trophy case.";
  }
}
