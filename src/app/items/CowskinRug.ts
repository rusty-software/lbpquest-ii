import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { BilliardsRoom, LocationKey } from "../locations";

export class CowskinRug extends BaseItem {
  public id = ItemKey.CowskinRug;
  public name = "cowskin rug";
  public value = 5;
  public currentlyWearing = false;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["wear", this.wear],
    ["remove", this.remove],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    this.isShown = true;
    const billiardsRoom = gameEngine.getLocation(
      LocationKey.BilliardsRoom
    ) as BilliardsRoom;
    billiardsRoom.rugTaken = true;
    return "You take the cowskin rug, roll it up, and put it into your duffle bag. You notice that it's hard to see in there.";
  }

  public drop(gameEngine: GameEngine): string {
    this.currentlyWearing = false;
    return "You drop the cowskin rug on the ground. You take your eyes off of it for a moment and it's gone, then there again.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The cowskin rug is elusive. One moment it's there, the next it's not, then it's back again. You have no idea how the cow that sported this skin was ever actually captured such that the skin could be removed.";
  }

  public use(gameEngine: GameEngine): string {
    return super.useInLivingRoom(gameEngine) || this.wear(gameEngine);
  }

  private wear(gameEngine: GameEngine): string {
    const rug = gameEngine.getItem(ItemKey.CowskinRug) as CowskinRug;
    rug.currentlyWearing = true;
    return "You sling the rug over your shoulders. You get the sense that you're hard to target while donning the rug thusly.";
  }

  private remove(gameEngine: GameEngine): string {
    const rug = gameEngine.getItem(ItemKey.CowskinRug) as CowskinRug;
    rug.currentlyWearing = false;
    return "You remove the rug from your shoulders. For a moment, you lose sight of it, then you realize it's still there as you see it again.";
  }
}
