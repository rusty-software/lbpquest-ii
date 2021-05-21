import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";
import {
  ChastityBelt,
  ItemKey,
  ShrinkingPotion,
  SlipperyShorts,
} from "../items";

export class Splashpad extends BaseLocation {
  id = LocationKey.Splashpad;
  title = "Splash Pad";
  challengeWon = false;
  inGauntlet = false;
  slideDone = false;
  swingsDone = false;
  bridgeDone = false;
  private challengeGiven = false;

  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["try gauntlet", this.runGauntlet],
    ["run gauntlet", this.runGauntlet],
    ["swing", this.swing],
    ["bridge", this.bridge],
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
        '\n\nThe owner of the gold medal calls out to you over the splashing of their companions. "You ready to give The Gauntlet a try?" they yell to you, waving vaguely toward the fort near the splash pad. "Remember: slide the slide, loop-diddy-loop the swing, and crawl through the bridge to win!"';
    } else {
      this.challengeGiven = true;
      s +=
        '\n\nOne of the children, this one wearing a gold medal around their neck, calls to you. "Hey there! If you finish The Gauntlet by sliding the slide, loop-diddy-looping the swing, and crawling through the fort bridge, I\'ll give you this medal! You wanna try running it?"';
    }

    s +=
      "\n\nTo your south, there is a kid's fort. To the southeast is some kind of covered sitting area.";

    s += super.appendItems();

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

  private runGauntlet(gameEngine: GameEngine): string {
    const splashpad = gameEngine.currentLocation as Splashpad;
    splashpad.inGauntlet = true;
    const shorts = gameEngine.getItem(ItemKey.SlipperyShorts) as SlipperyShorts;
    if (!shorts.currentlyWearing) {
      return 'You begin The Gauntlet by trying to slide down the slide. Try as you might, you can\'t manage to get your butt to make rapid progress, or in fact any progress. The gold medal bearer looks at you with ultimate disdain, shouting "Your butt needs to be slippery to get down that slide!"\n\nYou have failed to complete The Gauntlet.';
    }

    splashpad.slideDone = true;
    shorts.currentlyWearing = false;
    return "The shorts make your butt as slippery as an eel, and you slip down the slide in slightly less than nothing, flat! Removing the shorts and storing them in the duffle bag, you notice the gold medal bearer raising their eyebrows in mild surprise, but still looking skeptical that you'll successfully complete the next challenge: loop-diddy-loop on the swings!\n\nTo proceed to the swings, type _swing_. You can also perform other actions, or _quit_ The Gauntlet.";
  }

  private swing(gameEngine: GameEngine): string {
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
      " you find that the chastity belt holds you firmly in place as your feet point straight up, then backwards as your head points to the earth below, then finally, with the blood rushing to your head from the massive g-forces, you glide to a gentle stop. You remove the chastity belt and tuck it into your duffle bag. Cheers come from the children as the gold medal bearer screams in mock outrage. They point to the bridge between the kiddy forts and look at you expectantly.\n\nTo proceed to the bridge, type _bridge_. You can also perform other actions, or _quit_ The Gauntlet.";
    return s;
  }

  private bridge(gameEngine: GameEngine): string {
    const splashpad = gameEngine.currentLocation as Splashpad;
    splashpad.inGauntlet = true;
    const potion = gameEngine.getItem(
      ItemKey.ShrinkingPotion
    ) as ShrinkingPotion;

    if (!potion.currentlyConsumed) {
      return "You approach the bridge, and try as you might, you simply cannot squeeze your girth through its childlike dimensions. The children shout encouragement, excited to see you struggle, but the gold medal bearer takes pity on you, yelling \"You won't fit that way! Looks like you'll have to ungrow a little bit!\n\nYou have failed to complete The Gauntlet.";
    }

    potion.currentlyConsumed = false;
    const medal = gameEngine.getItem(ItemKey.GoldMedal);
    gameEngine.addToInventory(ItemKey.GoldMedal);
    gameEngine.score += !medal.taken ? medal.value : 0;
    medal.taken = true;
    splashpad.challengeWon = true;
    return 'In your more diminutive stature, you wriggle through the bridge with no problem, sliding down the tiny slide on the other side. As you head back to the splash pad, you return to your normal size.\n\nThe children are howling and cheering their approval, and the gold medal bearer is smiling at you. "Here," they say, taking off the medal and handing it to you. "You earned it!" With that, the children let forth one more cheer for you, then return to their splash pad games.';
  }

  private quitGauntlet(gameEngine: GameEngine): string {
    const splashpad = gameEngine.currentLocation as Splashpad;
    if (splashpad.inGauntlet) {
      splashpad.inGauntlet = false;
      return 'The gold medal bearer shakes their head at you and yells "Come back when you\'re serious about getting this medal!" They return to playing on the splash pad.';
    }
    return "Um... maybe you should try running it first?";
  }
}
