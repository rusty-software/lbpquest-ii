import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class SlipperyShorts extends BaseItem {
  id = ItemKey.SlipperyShorts;
  name = "shorts";
  public currentlyWearing = false;

  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["wear", this.wear],
    ["remove", this.remove],
  ]);

  canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  take(gameEngine: GameEngine) {
    this.taken = true;
    return "You pick up the shorts. They're quite slippery, but you manage to get the into your duffle bag.";
  }

  drop(gameEngine: GameEngine) {
    this.currentlyWearing = false;
    return "Dropped. You're not sure you'll be able to pick them up again.";
  }

  examine(gameEngine: GameEngine): string {
    return "The shorts have a shiny shimmer to them, and looks like greased lightning.";
  }

  use(gameEngine: GameEngine): string {
    return this.wear(gameEngine);
  }

  private wear(gameEngine: GameEngine) {
    const shorts = gameEngine.getItem(ItemKey.SlipperyShorts) as SlipperyShorts;
    shorts.currentlyWearing = true;
    return "You put the shorts on. Running your hands over your butt cheeks, you gain understanding of what a frictionless surface is.";
  }

  private remove(gameEngine: GameEngine) {
    const shorts = gameEngine.getItem(ItemKey.SlipperyShorts) as SlipperyShorts;
    shorts.currentlyWearing = false;
    return "You remove the shorts. Your butt cheeks feel much more touchable than it did a moment ago.";
  }
}
