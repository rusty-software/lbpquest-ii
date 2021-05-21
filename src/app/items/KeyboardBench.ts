import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class KeyboardBench extends BaseItem {
  id = ItemKey.KeyboardBench;
  name = "keyboard bench";

  canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  take(gameEngine: GameEngine): string {
    return "";
  }

  drop(gameEngine: GameEngine): string {
    return "";
  }

  examine(gameEngine: GameEngine): string {
    gameEngine.currentLocation.showItem(ItemKey.Cider);

    return "The keyboard bench is piano style, and opening it reveals a lovely can of cider.";
  }

  use(gameEngine: GameEngine): string {
    return "You sit on the keyboard bench long enough to rest your tired legs but not so long as to collapse the bench.";
  }
}
