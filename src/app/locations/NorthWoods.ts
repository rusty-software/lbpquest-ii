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
      s +=
        ' The stags appear to be tossing a dodgeball back and forth at each other. Noticing you, they stop and call out. "Hey you! You wanna play some Dodge It? If you manage to doge it and beat us, we\'ll let you have the ball!"';
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
      return "";
    } else {
      return "You race to the center of the field, grabbing the dodgeball before the stags can get there. You quickly throw it at one of them, but they dodge it. A moment later, they've confused you about which is which, and you're pelted with what feels like a meteor. You're definitely out.\n\nThey walk over to you and collect the dodge ball. \"Nice try, but you're a really visible target. Come back and try again when you're move elusive.\"";
    }
  }
}
