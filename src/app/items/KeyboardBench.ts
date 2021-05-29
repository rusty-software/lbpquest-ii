import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class KeyboardBench extends BaseItem {
  public id = ItemKey.KeyboardBench;
  public name = "bench";

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "Any attempt to take the bench would probably result in it either falling apart or you getting splinters in places you really don't want them.";
  }

  public drop(gameEngine: GameEngine): string {
    return "";
  }

  public examine(gameEngine: GameEngine): string {
    gameEngine.currentLocation.showItem(ItemKey.Cider);
    let s =
      "The keyboard bench is made of something only slightly sturdier than decade-old plywood. It is also piano style, having a small storage area beneath the seat.";
    if (!gameEngine.getItem(ItemKey.Cider).taken) {
      s += " Opening it reveals a lovely can of cider.";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You sit on the keyboard bench long enough to rest your tired legs but not so long as to collapse the bench or get splinters in your butt cheeks.";
  }
}
