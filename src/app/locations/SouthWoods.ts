import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "../items";

export class SouthWoods extends BaseLocation {
  public id = LocationKey.SouthWoods;
  public title = "South Woods";
  public challengeWon = false;
  private challengeGiven = false;

  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["fight", this.fight],
    ["fight deer", this.fight],
  ]);

  public description(): string {
    let s =
      "You are in the south woods. You are somewhat surprised to see a Tan Stag here, on its hind legs, wearing a black belt, and practicing karate.";

    if (this.challengeWon) {
      s +=
        ' The deer stops practicing long enough to bow to you, says "Later, bro!", and returns to its forms.';
    } else if (!this.challengeGiven) {
      this.challengeGiven = true;
      s +=
        '\n\n"WHAT..." it yells at you as it finishes a swift roundhouse kick. "...ARE YOU DOING?! If you can beat me in a sparring match, I\'ll hand over my black belt. Do you want to fight me?';
    }

    s += super.appendItems();
    return s;
  }

  private fight(gameEngine: GameEngine): string {
    const woods = gameEngine.currentLocation as SouthWoods;
    if (woods.challengeWon) {
      return "You have already defeated the Tan Stag. Beating it again would only tarnish your honor.";
    } else if (!gameEngine.hasKarateTraining()) {
      return "You step up to fight the stag. They punch you, and while you try to block it, it gets through your defenses and leaves a mark. They then execute a forward snap kick which hits you in the gut like a sledgehammer. You feel the breath leave your body. They step back and, with a flying spinning side kick in splits style, finish you off. You lay on the ground a moment, feeling defeated.\n\n\"That wasn't much of a contest. Come back when you've gotten some training.\" They straighten the black belt, then return to their practicing.";
    }
    woods.challengeWon = true;
    const belt = gameEngine.getItem(ItemKey.BlackBelt);
    gameEngine.score += !belt.taken ? belt.value : 0;
    belt.taken = true;
    gameEngine.addToInventory(ItemKey.BlackBelt);
    return 'You step up to the Tan Stag and remember the all of the training from No Retreat No Surrender. The stag punches at you, but you block it, saying "Not fast enough! Easy to defend against!" You counter with a long move that connects in the small of the stag\'s back. Slightly shaken, they try a roundhouse kick to your head, but you drop to the ground and, using a break dancing back spin then shifting to a head spin, your feet strike the stag no less than 10 times about the face, neck, chest, and head (thanks RJ!). The stag seems to, well, stagger, and you move in for the final blow: a roundhouse kick of your own. The stag unexpectedly catches your foot mid-strike, but you "trained" for this as well; you execute a perfect one-legged back-flipping snap kick to the stag\'s chin, knocking them out cold. A few moments later, they come to and get unsteadily to their feet.\n\n"You\'re obviously a master of the martial arts. This now belongs to you." They remove the black belt from their waist and hand it to you. You fold it neatly and put it into your duffle bag. They bow to you and return to their practice. You can hear them muttering "...gotta be faster!" as they go through their motions.';
  }
}
