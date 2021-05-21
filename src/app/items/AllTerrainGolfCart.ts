import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class AllTerrainGolfCart extends BaseItem {
  public id = ItemKey.AllTerrainGolfCart;
  public name = "golf cart";

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
    gameEngine.currentLocation.showItem(ItemKey.GolfBall);
    return "The cart looks well used, being at least as muddy as it is swanky. You notice that there's a golf ball in one of the cup holders next to an empty beer can.";
  }

  public use(gameEngine: GameEngine): string {
    return "You try to start the cart, but quickly realize that whoever last used it left it in a state of disrepair beyond your ability to fix.";
  }
}
