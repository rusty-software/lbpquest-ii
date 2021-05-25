import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class StagedBedroomDormerSeat extends BaseItem {
  public id = ItemKey.StagedBedroomDormerSeat;
  public name = "dormer seat";

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
      "The dormer seat looks uncomfortable to sit on, but perfectly capable of storing things in.";
    const psds = gameEngine.getItem(ItemKey.PSDs);
    if (!psds.isShown) {
      gameEngine.currentLocation.showItem(ItemKey.PSDs);
      s += " Opening it, you see a partially eaten bag of PSDs.";
    }

    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You try to sit on the seat, but quickly find it is even more uncomfortable than you'd imagined.";
  }
}
