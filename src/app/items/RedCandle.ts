import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class RedCandle extends BaseItem {
  public id = ItemKey.RedCandle;
  public name = "red candle";
  public value = 5;
  public isShown = true;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["light", this.use],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the red candle and put it into your duffle bag. The duffle bag immediately begins smelling of spiced apples.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You remove the red candle from your duffle bag. The smell of spiced apples remains, but will fade with time or replacement by something else smelly.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The red candle of the wax variety, is as wide as it is tall, and smells of spiced apples. Even given its substantial size, it feels heftier than you expected.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.isItemAvailable(ItemKey.Matches)) {
      const potion = gameEngine.getItem(ItemKey.ShrinkingPotion);
      gameEngine.addToInventory(ItemKey.ShrinkingPotion);
      gameEngine.score += potion.value;
      if (gameEngine.inventoryContains(ItemKey.RedCandle)) {
        gameEngine.removeFromInventory(ItemKey.RedCandle);
      }
      if (gameEngine.currentLocation.hasItem(ItemKey.RedCandle)) {
        gameEngine.currentLocation.removeItem(ItemKey.RedCandle);
      }
      return 'You light the red candle using the matches. A moment later, the candle has burned away enough to reveal a vial of dark red liquid hidden inside. You think at first that this is a strange trick, that the melted wax is somehow accumulating in the vial, but then realize that the vial is sealed and has a very tiny label on it: "Shrinking Potion". You promptly put the Shrinking Potion into your duffle bag as the rest of the candle melts away.';
    } else {
      return "You smell the red candle, and it's nice enough, but you feel like candles were made to be burned...";
    }
  }
}
