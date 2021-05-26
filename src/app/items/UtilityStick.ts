import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { BilliardsRoom, GolfCourse, LocationKey } from "../locations";

export class UtilityStick extends BaseItem {
  public id = ItemKey.UtilityStick;
  public name = "utility stick";
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the utility stick from its former location, putting it into your duffle bag. Somehow, it fits without any issue.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the utility stick. Apparently it's not as useful to you as you'd originally hoped.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The utility stick is makeshift, but that's what makes it special. You've never seen two balusters taped together more nicely.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.GolfCourse) {
      return (gameEngine.currentLocation as GolfCourse).playGolf(gameEngine);
    } else if (gameEngine.currentLocation.id === LocationKey.BilliardsRoom) {
      return (gameEngine.currentLocation as BilliardsRoom).shootPool(
        gameEngine
      );
    } else {
      return "You attempt to use the utility stick, and while it does seem useful in multiple ways, it is not so here...";
    }
  }
}
