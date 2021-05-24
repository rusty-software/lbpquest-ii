import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { Magazine } from "./Magazine";

export class Desk extends BaseItem {
  public id = ItemKey.Desk;
  public name = "desk";

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
    let s =
      "The desk is made of sturdy mahogany and is of the roll top variety.";
    const magazine = gameEngine.getItem(ItemKey.Magazine) as Magazine;
    if (!magazine.isShown) {
      gameEngine.currentLocation.showItem(ItemKey.Magazine);
      gameEngine.currentLocation.showItem(ItemKey.Pencils);
      s +=
        " Rolling the top up, you immediately notice a magazine of questionable content and some map pencils inside.";
    }

    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You take care of some correspondence. Bills don't pay themselves, after all, and the note from the Queen really did deserve a reply BEFORE you headed out to LBP.";
  }
}
