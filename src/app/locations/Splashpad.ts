import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";

export class Splashpad extends BaseLocation {
  id = LocationKey.Splashpad;
  title = "Splash Pad";
  public challengeWon = false;
  private challengeGiven = false;

  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["try gauntlet", this.runGauntlet],
    ["run gauntlet", this.runGauntlet],
  ]);

  description(): string {
    let s =
      "The splash pad is obviously designed for children. It's obvious because there is a group of children here, at least a dozen, splashing about. Even though they're playing as children should, there's a very feral look to them -- their movements are quick, sharp, almost animalistic.";
    if (this.challengeWon) {
      s +=
        "\n\nThe former owner of the gold medal stops splashing around long enough to acknowledge your presence with a slight inclination of their head. They quickly return to playing in the water with the group, ignoring you otherwise.";
    } else if (this.challengeGiven) {
      s +=
        '\n\nThe owner of the gold medal calls out to you over the splashing of their companions. "You ready to give The Gauntlet a try?" they yell to you, waving vaguely toward the fort near the splashpad. "Remember: slide the slide, loop-diddy-loop the swing, and crawl through the bridge to win!"';
    }

    this.challengeGiven = true;
    s +=
      '\n\nOne of the children, this one wearing a gold medal around their neck, calls to you. "Hey there! If you finish The Gauntlet by sliding the slide, loop-diddy-looping the swing, and crawling through the fort bridge, I\'ll give you this medal! You game?"';
    return s;
  }

  private runGauntlet(gameEngine: GameEngine) {
    if (!gameEngine.wearingShorts) {
      return 'You begin The Gauntlet by trying to slide down the slide. Unfortunately, you\'re butt is much too sticky to make rapid progress, or in fact any progress. The gold medal bearer looks at you with ultimately disdain, shouting "Your butt needs to be slippery to get down that slide!" You have failed to complete The Gauntlet.';
    }

    return "TODO: You win!";
  }
}
