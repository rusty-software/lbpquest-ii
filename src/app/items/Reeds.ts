import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { Oar } from "./Oar";

export class Reeds extends BaseItem {
  public id = ItemKey.Reeds;
  public name = "reeds";

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
      "The reeds are lovely, dark, and deep. But you've got miles to go before you sleep.";
    const oar = gameEngine.getItem(ItemKey.Oar) as Oar;
    if (!oar.isShown) {
      gameEngine.currentLocation.showItem(ItemKey.Oar);
      s +=
        "The thing hidden in the reeds appears to be an oar, a pretty nice one at that.";
    }

    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You can't use the reeds.";
  }
}
