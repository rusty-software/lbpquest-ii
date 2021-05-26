import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class CrossesBedroomNightstand extends BaseItem {
  public id = ItemKey.CrossesBedroomNightstand;
  public name = "nightstand";

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
      "The nightstand is nondescript except for the fact that it seems to have been constructed from wood that is considered sacred to one religion or another. It has a deep drawer with a narrow knob.";
    const belt = gameEngine.getItem(ItemKey.ChastityBelt);
    if (!belt.isShown) {
      gameEngine.currentLocation.showItem(ItemKey.ChastityBelt);
      s += " Opening it, you see a chastity belt inside.";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "The nightstand is already covered in holy symbols, and really can't hold anymore. You decide against using it and potentially angering a lingering deity.";
  }
}
