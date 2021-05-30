import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class ReligiousIcons extends BaseItem {
  public id = ItemKey.ReligiousIcons;
  public name = "religious icons";
  public value = 5;
  public isShown = true;

  public getName(): string {
    return "are some " + this.name;
  }

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You pick up some religious icons and put them into your duffle bag. You feel the power of $DEITY grow in you. Or maybe it's just indigestion.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the religious icons on the ground. You're pretty sure $DEITY wanted you to do that.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The religious icons are very typical of your faith. They are small, somewhat fragile, and offensive to a lot of other people on the planet.";
  }

  public use(gameEngine: GameEngine): string {
    return (
      super.useInLivingRoom(gameEngine) ||
      "You use your religious icons as part of the observance of your faith. You and $DEITY feel much better."
    );
  }
}
