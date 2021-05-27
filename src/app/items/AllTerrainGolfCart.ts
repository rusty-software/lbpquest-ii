import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GolfBall } from "./GolfBall";

export class AllTerrainGolfCart extends BaseItem {
  public id = ItemKey.AllTerrainGolfCart;
  public name = "golf cart";

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "Placing your duffle bag on the ground, you attempt to push the golf cart into it. It, predictably, doesn't work.";
  }

  public drop(gameEngine: GameEngine): string {
    return "Your attempts to drop the golf cart are met with... failure.";
  }

  public examine(gameEngine: GameEngine): string {
    let s =
      "The cart looks well used, being at least as muddy as it is swanky.";
    const golfBall = gameEngine.getItem(ItemKey.GolfBall) as GolfBall;
    if (!golfBall.isShown) {
      gameEngine.currentLocation.showItem(ItemKey.GolfBall);
      s +=
        " You notice that there's a golf ball in one of the cup holders next to an empty beer can.";
    }

    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You try to start the cart, but quickly realize that whoever last used it left it in a state of disrepair beyond your ability to fix.";
  }
}
