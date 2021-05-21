import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class RightSmoker extends BaseItem {
  public id = ItemKey.RightSmoker;
  public name = "right smoker";

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
      "The smoker is surprisingly cold until you realize that it's full of ice. The ice itself looks nondescript, however.";
    const beer = gameEngine.getItem(ItemKey.LiteBeer);
    if (!beer.isShown) {
      gameEngine.currentLocation.showItem(ItemKey.LiteBeer);
      s += " Nestled in the middle of the ice is a single lite beer.";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "Given the ice in the smoker, you quickly realize that you're not going to be able to actually use the smoker for its intended, or indeed any other, purpose.";
  }
}
