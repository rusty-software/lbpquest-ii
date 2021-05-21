import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class BlackBelt extends BaseItem {
  public id = ItemKey.BlackBelt;
  public name = "black belt";
  public value = 10;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You place the black belt into your duffle bag, although you're pretty tempted to wear it.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the black belt. It falls to the ground, and suddenly the ground feels much more like a martial arts expert.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The black belt reflects very little light, and feels heftier than you expect. It makes you feel like you could win any one-step encounter.";
  }

  public use(gameEngine: GameEngine): string {
    return "TODO: using the black belt should place it on the trophy case.";
  }
}
