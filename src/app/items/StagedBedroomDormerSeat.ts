import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class StagedBedroomDormerSeat extends BaseItem {
  public id = ItemKey.StagedBedroomDormerSeat;
  public name = "seat";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["sit on", this.use],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "It would be a shame to ruin such a well-staged bedroom by taking its dormer seat. Your aesthetics decide against it.";
  }

  public drop(gameEngine: GameEngine): string {
    return "Dropping the seat would require taking it first, which you are firmly resolved against doing.";
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
