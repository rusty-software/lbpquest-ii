import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";
import { ChastityBelt, ItemKey, SlipperyShorts } from "../items";

export class Splashpad extends BaseLocation {
  id = LocationKey.Splashpad;
  title = "Splash Pad";
  public challengeWon = false;
  private challengeGiven = false;
  public inGauntlet: boolean = false;
  public slideDone: boolean = false;
  public swingsDone: boolean = false;
  public bridgeDone: boolean = false;

  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["try gauntlet", this.runGauntlet],
    ["run gauntlet", this.runGauntlet],
    ["swing", this.swing],
  ]);

  description(): string {
    let s =
      "The splash pad is obviously designed for children. It's obvious because there is a group of children here, at least a dozen, splashing about. Even though they're playing as children should, there's a very feral look to them -- their movements are quick, sharp, almost animalistic.";
    if (this.challengeWon) {
      s +=
        "\n\nThe former owner of the gold medal stops splashing around long enough to acknowledge your presence with a slight inclination of their head. They quickly return to playing in the water with the group, ignoring you otherwise.";
    } else if (this.inGauntlet) {
      s +=
        '\n\nThe owner of the gold medal glares at you. "What are you waiting for?! FINISH IT!" they scream. The rest of the wild children cheer you on.';
    } else if (this.challengeGiven) {
      s +=
        '\n\nThe owner of the gold medal calls out to you over the splashing of their companions. "You ready to give The Gauntlet a try?" they yell to you, waving vaguely toward the fort near the splashpad. "Remember: slide the slide, loop-diddy-loop the swing, and crawl through the bridge to win!"';
    } else {
      this.challengeGiven = true;
      s +=
        '\n\nOne of the children, this one wearing a gold medal around their neck, calls to you. "Hey there! If you finish The Gauntlet by sliding the slide, loop-diddy-looping the swing, and crawling through the fort bridge, I\'ll give you this medal! You wanna try running it?"';
    }

    return s;
  }

  enter() {
    super.enter();
    this.inGauntlet = false;
    if (!this.challengeWon) {
      this.slideDone = false;
      this.swingsDone = false;
      this.bridgeDone = false;
    }
  }

  private runGauntlet(gameEngine: GameEngine) {
    const splashpad = gameEngine.currentLocation as Splashpad;
    splashpad.inGauntlet = true;
    const shorts = gameEngine.getItem(ItemKey.SlipperyShorts) as SlipperyShorts;
    if (!shorts.currentlyWearing) {
      return 'You begin The Gauntlet by trying to slide down the slide. Try as you might, you can\'t manage to get your butt to make rapid progress, or in fact any progress. The gold medal bearer looks at you with ultimately disdain, shouting "Your butt needs to be slippery to get down that slide!"\n\nYou have failed to complete The Gauntlet.';
    }

    splashpad.slideDone = true;
    shorts.currentlyWearing = false;
    return "The shorts make your butt as slippery as an eel, and you slip down the slide in slightly less than nothing, flat! Removing the shorts and storing them in the duffle bag, you notice the gold medal bearer raising their eyebrows in mild surprise, but still looking skeptical that you'll successfully complete the next challenge: loop-diddy-loop on the swings!\n\nTo proceed to the swings, type _swing_. You can also perform other actions, or _quit_ The Gauntlet.";
  }

  private swing(gameEngine: GameEngine) {
    const splashpad = gameEngine.currentLocation as Splashpad;
    splashpad.inGauntlet = true;
    const belt = gameEngine.getItem(ItemKey.ChastityBelt) as ChastityBelt;
    let s =
      "You climb onto the swings, backing up onto your tip toes before pulling your legs up and swinging forward. You pump your legs back and forth, going higher and higher, until you realize that you're about to flip over the top. As you begin the final ascent into what will surely be the loop-diddy-loop,";
    if (!belt.currentlyWearing) {
      s +=
        ' you find yourself unable to keep your seat in the seat, and you fall backwards onto the ground. The children all groan at you sympathetically as the gold medal bearer yells "Looks like you\'ll have to find something to keep you in that seat!"\n\nYou have failed to complete The Gauntlet.';
      return s;
    }

    splashpad.swingsDone = true;
    belt.currentlyWearing = false;
    s +=
      " you find that the chastity belt holds you firmly in place as your feet point straight up, then backwards as your head points to the earth below, then finally, with the blood rushing to your head from the massive g-forces, you glide to a gentle stop. You remove the chastity belt and tuck it into your duffle bag. Cheers come from the children as the gold medal bears screams in mock outrage. They point to the bridge between the kiddy forts and looks at you expectantly.\n\nTo proceed to the bridge, type _bridge_. You can also perform other actions, or _quit_ The Gauntlet.";
    return s;
  }

  private quitGauntlet(gameEngine: GameEngine) {
    const splashpad = gameEngine.currentLocation as Splashpad;
    if (splashpad.inGauntlet) {
      splashpad.inGauntlet = false;
      return 'The gold medal bearer shakes their head at you and yells "Come back when you\'re serious about getting this medal!" They return to playing on the splashpad.';
    }
    return "Um... maybe you should try running it first?";
  }
}
