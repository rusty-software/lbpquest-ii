import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class BlackBelt extends BaseItem {
  id = ItemKey.BlackBelt;
  name = "black belt";
  value = 10;
  isShown = true;

  canTake(gameEngine: GameEngine): boolean {
    return true;
  }
  take(gameEngine: GameEngine): string {
    return "You place the black belt into your duffle bag, although you're pretty tempted to wear it.";
  }
  drop(gameEngine: GameEngine): string {
    return "You drop the black belt. It falls to the ground, and suddenly the ground feels much more like a martial arts expert.";
  }
  examine(gameEngine: GameEngine): string {
    return "The black belt reflects very little light, and feels heftier than you expect. It makes you feel like you could win any one-step encounter.";
  }
  use(gameEngine: GameEngine): string {
    return "TODO: using the black belt should place it on the trophy case.";
  }
}
