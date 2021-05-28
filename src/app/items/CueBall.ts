import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LivingRoom, LocationKey } from "../locations";

export class CueBall extends BaseItem {
  public id = ItemKey.CueBall;
  public name = "cue ball";
  public value = 10;
  public isShown = true;
  public billiardsWon = false;

  public canTake(gameEngine: GameEngine): boolean {
    return this.billiardsWon;
  }

  public take(gameEngine: GameEngine): string {
    if (this.billiardsWon) {
      if (gameEngine.currentLocation.hasItem(ItemKey.CueBall)) {
        gameEngine.currentLocation.removeItem(ItemKey.CueBall);
      }
      return "You put the cue ball into your duffle bag. It rolls around pleasantly trying to knock everything else into side and corner pockets.";
    }
    return "Try as you might, you can't seem to remove the cue ball from the table. Perhaps if the rack has been cleared...?";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the cue ball on the ground. Oddly, it doesn't roll at all.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The cue ball is a glossy eggshell white, and looks perfectly smooth despite the abuse it must've been through.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.LivingRoom) {
      const livingRoom = gameEngine.currentLocation as LivingRoom;
      return livingRoom.addTrophy(gameEngine, this.id);
    }
    return "You toss the cue ball from hand to hand, hoping for some magic. None happens. Maybe if you were somewhere else?";
  }
}
