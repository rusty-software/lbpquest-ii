import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LocationKey, Splashpad } from "../locations";

export class ShrinkingPotion extends BaseItem {
  public id = ItemKey.ShrinkingPotion;
  public name = "potion";
  public currentlyConsumed = false;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["drink", this.drink],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You pick up the chastity belt. It feels heavier than you expected, and looks snug. You put it into your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "Dropped. Chastity belts at LBP are definitely NOT on the menu.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The potion is a dark red color, and smells like cherry cough syrup.";
  }

  public use(gameEngine: GameEngine): string {
    return this.drink(gameEngine);
  }

  private drink(gameEngine: GameEngine): string {
    const potion = gameEngine.getItem(
      ItemKey.ShrinkingPotion
    ) as ShrinkingPotion;
    if (potion.currentlyConsumed) {
      return "You have already taken enough of the potion to shrink you as small as you dare go.";
    } else {
      if (gameEngine.currentLocation.id !== LocationKey.Splashpad) {
        return "It would be inappropriate to use the Shrinking Potion here.";
      } else {
        const splashpad = gameEngine.currentLocation as Splashpad;
        if (!splashpad.inGauntlet) {
          return "Hmm... it's possible you could find a use for the potion in The Gauntlet...";
        } else if (splashpad.inGauntlet && !splashpad.slideDone) {
          return "The potion is a Shrinking Potion, which would make your entire body smaller, not just your butt. Seems like overkill.";
        } else if (
          splashpad.inGauntlet &&
          splashpad.slideDone &&
          !splashpad.swingsDone
        ) {
          return "You can't fathom how the Shrinking Potion would help you keep your seat in the swing.";
        } else if (
          splashpad.inGauntlet &&
          splashpad.slideDone &&
          splashpad.swingsDone &&
          !splashpad.bridgeDone
        ) {
          potion.currentlyConsumed = true;
          return "You take a sip of the Shrinking Potion, which is apparently all it takes. You shrink down to the size of one of the feral children.";
        }
        return "You realize that you've already consumed the last of the Shrinking Potion.";
      }
    }
  }
}
