import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { CookieDough } from "./CookieDough";

export class Fridge extends BaseItem {
  public id = ItemKey.Fridge;
  public name = "fridge";

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "Are you sick? The fridge's brother's my sensei! They're spoken for... by ME!";
  }

  public drop(gameEngine: GameEngine): string {
    return "";
  }

  public examine(gameEngine: GameEngine): string {
    const cookieDough = gameEngine.getItem(ItemKey.CookieDough) as CookieDough;
    let s =
      "The fridge is double-doored with a freezer underneath. A quick look in the freezer reveals emptiness.";
    if (!cookieDough.taken) {
      cookieDough.isShown = true;
      s +=
        " The refrigerated section is more fruitful, if you consider tube of cookie dough inside a fruit.";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You try to use the fridge, but abandon the plan once you realize that your duffle bag already has a refrigerated section.";
  }
}
