import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class CrossesBedroomDormerSeat extends BaseItem {
  public id = ItemKey.CrossesBedroomDormerSeat;
  public name = "seat";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["sit on", this.use],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "There is absolutely no way you're going to be able to pull that thing out of the wall.";
  }

  public drop(gameEngine: GameEngine): string {
    return "Excellent notion, only you can't actually pick the seat up.";
  }

  public examine(gameEngine: GameEngine): string {
    let s =
      "The dormer seat looks uncomfortable (maybe even forbidden) to sit on, but perfectly capable of storing things in.";
    const yarn = gameEngine.getItem(ItemKey.Yarn);
    if (!yarn.isShown) {
      gameEngine.currentLocation.showItem(ItemKey.Yarn);
      s += " Opening it, you see a ball of yarn.";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You try to sit on the seat, but quickly realize that the room doesn't want you sitting in it.";
  }
}
