import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GolfCourse, LocationKey } from "../locations";

export class GolfBall extends BaseItem {
  public id = ItemKey.GolfBall;
  public name = "golf ball";
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    this.isShown = true;
    return "You take the Lucky golf ball and put it in your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the Lucky golf ball. It rolls to a stop near your feet.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The golf ball looks pristine. It's a brand you haven't heard of -- Lucky -- and has a number of 1.";
  }

  public use(gameEngine: GameEngine): string {
    const s =
      gameEngine.currentLocation.id === LocationKey.GolfCourse
        ? (gameEngine.currentLocation as GolfCourse).playGolf(gameEngine)
        : "You mess around with the golf ball a bit but realize this isn't really the place to try to use it...";
    return super.useInLivingRoom(gameEngine) || s;
  }
}
