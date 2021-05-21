import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LocationKey, Splashpad } from "../locations";

export class ChastityBelt extends BaseItem {
  public id = ItemKey.ChastityBelt;
  public name = "chastity belt";
  public currentlyWearing = false;

  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["wear", this.wear],
    ["remove", this.remove],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You pick up the chastity belt. It feels heavier than you expected, and looks snug. You put it into your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    this.currentlyWearing = false;
    return "Dropped. Chastity belts at LBP are definitely NOT on the menu.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The belt looks like a jock strap made of steel. It looks as if it could secure pretty much anything you put into it, even DK's loins or Chase's crypto investments.";
  }

  public use(gameEngine: GameEngine): string {
    return this.wear(gameEngine);
  }

  private wear(gameEngine: GameEngine): string {
    const belt = gameEngine.getItem(ItemKey.ChastityBelt) as ChastityBelt;
    if (belt.currentlyWearing) {
      return "You're already wearing the chastity belt.";
    }
    if (gameEngine.currentLocation.id !== LocationKey.Splashpad) {
      return "It seems like wearing the chastity belt here would be counterproductive...";
    } else {
      const splashpad = gameEngine.currentLocation as Splashpad;
      if (!splashpad.inGauntlet) {
        return "Hmm... it's possible you could find a use for the chastity belt in The Gauntlet...";
      } else if (splashpad.inGauntlet && !splashpad.slideDone) {
        return "You're pretty sure the chastity belt will NOT help your butt slide...";
      } else if (
        splashpad.inGauntlet &&
        splashpad.slideDone &&
        !splashpad.swingsDone
      ) {
        belt.currentlyWearing = true;
        return "You slip the chastity belt over your loins and the swing seat, securing you firmly in place.";
      }
      return "You've already used the chastity belt for its intended purpose -- securing your butt to the swing for the loop-diddy-loop. No need to put it back on.";
    }
  }

  private remove(gameEngine: GameEngine): string {
    const belt = gameEngine.getItem(ItemKey.ChastityBelt) as ChastityBelt;
    belt.currentlyWearing = false;
    return "You remove the chastity belt. Your loins have never felt so potentially promiscuous!";
  }
}
