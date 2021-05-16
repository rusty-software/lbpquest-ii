import { GameEngine } from "../GameEngine";
import { Item } from "../Item";
import { ItemKey } from "./ItemKey";

export class GolfBall implements Item {
  id = ItemKey.GolfBall;
  name = "golf ball";
  isShown = false;
  canTake(gameEngine: GameEngine): boolean {
    return true;
  }
  take(gameEngine: GameEngine): string {
    return "You take the Lucky golf ball and put it in your duffle bag.";
  }
  drop(gameEngine: GameEngine): string {
    return "You drop the Lucky golf ball. It rolls to a stop near your feet.";
  }
  examine(gameEngine: GameEngine): string {
    return "The golf ball looks pristine. It's a brand you haven't heard of -- Lucky -- and has a number of 1.";
  }
  use(gameEngine: GameEngine): string {
    return "You attempt to use the golf ball.";
  }
}
