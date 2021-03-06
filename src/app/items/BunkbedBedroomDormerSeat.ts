import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class BunkbedBedroomDormerSeat extends BaseItem {
  public id = ItemKey.BunkbedBedroomDormerSeat;
  public name = "seat";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["sit on", this.use],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "You pull out your non-existent crowbar and start pretending to pry the seat out of the wall. Then you return to reality and stop what you're doing.";
  }

  public drop(gameEngine: GameEngine): string {
    return "Dropping the seat is much like taking it -- an exercise in fantasy.";
  }

  public examine(gameEngine: GameEngine): string {
    let s =
      "The dormer seat looks uncomfortable to sit on, but perfectly capable of storing things in.";
    const cheetos = gameEngine.getItem(ItemKey.Cheetos);
    if (!cheetos.isShown) {
      gameEngine.currentLocation.showItem(ItemKey.Cheetos);
      s += " Opening it, you see a partially eaten bag of Cheetos.";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You sit on the seat briefly. It is precisely as uncomfortable as you'd imagined.";
  }
}
