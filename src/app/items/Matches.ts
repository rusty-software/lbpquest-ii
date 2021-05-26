import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Matches extends BaseItem {
  public id = ItemKey.Matches;
  public name = "matches";
  public value = 5;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the matches and put them into your duffle bag. You just never know when you'll need to set fire to something.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the matches on the ground. Can't afford to be labeled as an arsonist.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The match box is about half full and is of the simple striking variety, perfect for making the smallest imaginable fires.";
  }

  public use(gameEngine: GameEngine): string {
    if (
      !gameEngine.isItemAvailable(ItemKey.RedCandle) &&
      !gameEngine.isItemAvailable(ItemKey.PeachCandle)
    ) {
      return "You take out a match and strike it. For a moment, it provides the palest light and the merest warmth. Then it snuffs itself out.";
    }

    let s = "You take out a match and strike it.";
    if (gameEngine.isItemAvailable(ItemKey.RedCandle)) {
      const redCandle = gameEngine.getItem(ItemKey.RedCandle);
      s += "\n\n" + redCandle.use(gameEngine);
    }
    if (gameEngine.isItemAvailable(ItemKey.PeachCandle)) {
      const peachCandle = gameEngine.getItem(ItemKey.PeachCandle);
      s += "\n\n" + peachCandle.use(gameEngine);
    }
    return s;
  }
}
