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
