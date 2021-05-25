import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class PeachCandle extends BaseItem {
  public id = ItemKey.PeachCandle;
  public name = "peach candle";
  public value = 5;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the peach candle and put it into your duffle bag. It smells of spiced peaches.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You remove the peach candle from your duffle bag. The smell of spiced peaches remains, but will fade with time.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The peach candle smells of spiced peaches and feels heftier than you expected.";
  }

  public use(gameEngine: GameEngine): string {
    if (
      gameEngine.inventoryContains(ItemKey.Matches) ||
      gameEngine.currentLocation.hasItem(ItemKey.Matches)
    ) {
      const loko = gameEngine.getItem(ItemKey.PeachFourLoko);
      gameEngine.addToInventory(ItemKey.PeachFourLoko);
      gameEngine.score += loko.value;
      if (gameEngine.inventoryContains(ItemKey.PeachCandle)) {
        gameEngine.removeFromInventory(ItemKey.PeachCandle);
      }
      if (gameEngine.currentLocation.hasItem(ItemKey.PeachCandle)) {
        gameEngine.currentLocation.removeItem(ItemKey.PeachCandle);
      }
      return 'You light the peach candle using the matches. A moment later, the candle has burned away enough to reveal a wild looking can with the label "Peach Four Loko" on it. Realizing the treasure you\'ve just discovered, you quickly stash it in your duffle bag as the rest of the candle melts away.';
    } else {
      return "You smell the peach candle, and it's nice enough, but you feel like candles were made to be burned...";
    }
  }
}
