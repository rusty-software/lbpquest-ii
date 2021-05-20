import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LocationKey, Splashpad } from "../locations";

export class ChastityBelt extends BaseItem {
  id = ItemKey.ChastityBelt;
  name = "chastity belt";

  use(gameEngine: GameEngine) {
    if (gameEngine.currentLocation.id !== LocationKey.Splashpad) {
      return "You REALLY don't need to use the chastity belt here.";
    } else {
      const splashpad = gameEngine.currentLocation as Splashpad;
      if (!splashpad.inGauntlet) {
        return "Hmm... it's possible you could find a use for the chastity belt in The Gauntlet...";
      } else if (splashpad.inGauntlet && !splashpad.slideDone) {
        return "You're pretty sure the chastity belt will NOT help your butt slide...";
      }
    }
    return "You've already completed the loop-diddy-loop, and don't need to use the chastity belt again.";
  }
}
