import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class DarkSweetWine extends BaseItem {
  public id = ItemKey.DarkSweetWine;
  public name = "wine";
  public value = 10;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You place the wine into your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the wine. Luckily, the bottle seems to be made of sturdier stuff than your desire to hold onto it...";
  }

  public examine(gameEngine: GameEngine): string {
    return "The wine is a very dark color, somewhere between burgundy and black. The cork is sealed with a waxy coating that you feel uncomfortable messing with.";
  }

  public use(gameEngine: GameEngine): string {
    return (
      super.useInLivingRoom(gameEngine) ||
      "You consider opening the bottle, but think better of it. This looks too valuable to be consumed in a sloshy manner. Maybe if you were in another place?"
    );
  }
}
