import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class RedCandle extends BaseItem {
  public id = ItemKey.RedCandle;
  public name = "red candle";
  public value = 5;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the red candle and put it into your duffle bag. It smells of spiced apples.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You remove the red candle from your duffle bag. The smell of spiced apples remains, but will fade with time.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The red candle smells of spiced apples and feels heftier than you expected.";
  }

  public use(gameEngine: GameEngine): string {
    if (
      gameEngine.inventoryContains(ItemKey.Matches) ||
      gameEngine.currentLocation.hasItem(ItemKey.Matches)
    ) {
      const potion = gameEngine.getItem(ItemKey.ShrinkingPotion);
      gameEngine.addToInventory(ItemKey.ShrinkingPotion);
      gameEngine.score += potion.value;
      if (gameEngine.inventoryContains(ItemKey.RedCandle)) {
        gameEngine.removeFromInventory(ItemKey.RedCandle);
      } else if (gameEngine.currentLocation.hasItem(ItemKey.RedCandle)) {
        gameEngine.currentLocation.removeItem(ItemKey.RedCandle);
      }
      return 'You light the red candle using the matches. A moment later, the candle has burned away enough to reveal a vial of dark red liquid hidden inside. You think at first that this is a strange trick, that the melted wax is somehow accumulating in the vial, but then realize that the vial is sealed and has a very tiny label on it: "Shrinking Potion". You promptly put the Shrinking Potion into your duffle bag as the rest of the candle melts away.';
    } else {
      return "You smell the red candle, and it's nice enough, but you feel like candles were made to be burned...";
    }
  }
}
