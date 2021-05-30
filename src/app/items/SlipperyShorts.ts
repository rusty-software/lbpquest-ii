import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class SlipperyShorts extends BaseItem {
  public id = ItemKey.SlipperyShorts;
  public name = "shorts";
  public value = 5;
  public currentlyWearing = false;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["wear", this.wear],
    ["remove", this.remove],
  ]);

  public getName(): string {
    return "are some " + this.name;
  }

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You pick up the shorts. They're quite slippery, but you manage to get the into your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    this.currentlyWearing = false;
    return "Dropped. You're not sure you'll be able to pick them up again.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The shorts have a shiny shimmer to them, and looks like greased lightning.";
  }

  public use(gameEngine: GameEngine): string {
    return this.wear(gameEngine);
  }

  private wear(gameEngine: GameEngine): string {
    const shorts = gameEngine.getItem(ItemKey.SlipperyShorts) as SlipperyShorts;
    shorts.currentlyWearing = true;
    return "You put the shorts on. Running your hands over your butt cheeks, you gain understanding of what a frictionless surface is.";
  }

  private remove(gameEngine: GameEngine): string {
    const livingRoomUse = super.useInLivingRoom(gameEngine);
    if (livingRoomUse) {
      return livingRoomUse;
    }

    const shorts = gameEngine.getItem(ItemKey.SlipperyShorts) as SlipperyShorts;
    shorts.currentlyWearing = false;
    return "You remove the shorts. Your butt cheeks feel much more touchable than it did a moment ago.";
  }
}
