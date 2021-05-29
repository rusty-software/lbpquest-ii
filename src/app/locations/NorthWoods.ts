import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";
import { CowskinRug, ItemKey } from "../items";

export class NorthWoods extends BaseLocation {
  public id = LocationKey.NorthWoods;
  public title = "North Woods";
  public challengeWon = false;
  private challengeGiven = false;

  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["play", this.play],
    ["play dodgeball", this.play],
  ]);

  public description(): string {
    let s =
      "You have entered a small clearing in the North Woods. There are a pair of White Stags here.";

    if (this.challengeWon) {
      s +=
        " The stags appear to be talking quietly to each other, but on seeing you, they give you a brief wave and nod. They apparently aren't ready to play against you again yet (and may not ever be).";
    } else if (this.challengeGiven) {
      s +=
        ' The stags stop tossing the dodgeball long enough to ask "Are you ready to play? If you can dodge it, you can have it!"';
    } else {
      this.challengeGiven = true;
      s +=
        ' The stags appear to be tossing a dodgeball back and forth at each other. Noticing you, they stop and call out. "Hey you! You wanna play some Dodge It? If you manage to dodge it and beat us, we\'ll let you have the ball!"';
    }

    s += "\n\nTo the south lies the golf course.";
    s += super.appendItems();
    return s;
  }

  private play(gameEngine: GameEngine): string {
    const woods = gameEngine.currentLocation as NorthWoods;
    if (woods.challengeWon) {
      return "You've already won the dodgeball. There's no point in beating up the Stag Twins again.";
    }
    const rug = gameEngine.getItem(ItemKey.CowskinRug) as CowskinRug;
    if (rug.currentlyWearing) {
      const dodgeball = gameEngine.getItem(ItemKey.DodgeBall);
      gameEngine.addToInventory(ItemKey.DodgeBall);
      gameEngine.score += !dodgeball.taken ? dodgeball.value : 0;
      dodgeball.taken = true;
      woods.challengeWon = true;
      rug.currentlyWearing = false;
      return 'You race to the center of the clearing, but the stags beat you to it. They smile as they grab the dodgeball, but their smiles falter as they seem to have trouble spotting you. They throw the ball where they think you are, but it misses by at least a foot. You grab the ball and, as they look around confusedly, you pelt one of them in the pelt. They scream in surprise, but the one that\'s not out picks up the dodgeball and hurls it with all their might in your direction. You consider catching it, but it looks like a Scott-sized cannonball coming at you, so you wisely dodge it. The remaining stag looks stunned as you scoop up the ball, run to the center of the clearing, and toss the ball at them underhanded. They have no idea how to handle it and bobble the catch, dropping it. You have won the game!\n\nYou slip the cowskin rug off, and the stags are able to finally focus on you again. "You were too elusive for us! Well played, old sport! Good game!" they exclaim, handing you the dodgeball. You put it into your duffle bag as they huddle up and start whispering dodgeball strategies to each other.';
    } else {
      return "You race to the center of the clearing, grabbing the dodgeball before the stags can get there. You quickly throw it at one of them, but they dodge it. A moment later, they've confused you about which is which, and you're pelted with what feels like a meteor. You're definitely out.\n\nThey walk over to you and collect the dodge ball. \"Nice try, but you're a really visible target. Come back and try again when you're move elusive.\"";
    }
  }
}
