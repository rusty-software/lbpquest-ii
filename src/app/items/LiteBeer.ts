import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class LiteBeer extends BaseItem {
  public id = ItemKey.LiteBeer;
  public name = "beer";
  public value = 5;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["drink", this.drink],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the beer and put it in the refrigerated section of your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the beer on the ground. It doesn't explode in a frothy mess, so you consider yourself fortunate.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The beer is of the lite-est quality. Heavy beer at LBP is a thing of ages long past, after all.";
  }

  public use(gameEngine: GameEngine): string {
    return this.drink(gameEngine);
  }

  private drink(gameEngine: GameEngine): string {
    return "You take a swig of the beer. It flows straight to your bladder. Luckily, your bladder is prepared for LBP, and it will distend as necessary.";
  }
}
