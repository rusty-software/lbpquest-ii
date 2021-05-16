import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class AllTerrainGolfCart extends BaseItem {
  constructor() {
    super();
    this.id = ItemKey.AllTerrainGolfCart;
    this.name = "golf cart";
  }

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
    const desc =
      "The cart looks well used, being at least as muddy as it is swanky. You notice that there's a golf ball in one of the cup holders next to an empty beer can.";

    gameEngine.currentLocation.showItem(ItemKey.GolfBall);

    return desc;
  }

  use(gameEngine: GameEngine): string {
    return "You try to start the cart, but quickly realize that whoever last used it left it in a state of disrepair beyond your ability to fix.";
  }
}
