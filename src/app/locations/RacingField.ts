import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";
import { ItemKey, WingedShoes } from "../items";

export class RacingField extends BaseLocation {
  public id = LocationKey.RacingField;
  public title = "Open Field";
  public challengeWon = false;
  private challengeGiven = false;

  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["race", this.race],
    ["race deer", this.race],
    ["race stag", this.race],
    ["race brown stag", this.race],
  ]);

  public description(): string {
    let s =
      "You are in a wide open field. A Brown Stag is here, wearing a set of 80's warmups.";

    if (this.challengeWon) {
      s +=
        " The Brown Stag gives you a friendly wave just before attaching ankle weights to its hind feet. It takes off on a brisk jog.";
    } else if (this.challengeGiven) {
      s +=
        "\n\nThe Brown Stag looks you up and down and says \"Well well well... look's like you've got nowhere left to run... Except racing against me in a 40 yard dash. Let me know when you want to race.\"";
    } else {
      this.challengeGiven = true;
      s +=
        '\n\nThe Brown Stag jogs over to you. "Hey there, wanna race? If you win, I\'ll let you have this blue ribbon," it says, pointing to a field day-style blue ribbon pinned to its warmup top.';
    }

    s +=
      "\n\nThe shore of the pond can be seen to the northwest. To the north, a bridge crosses over the pond feeder. To the east lie some thick woods, and to the south are the pool behind the house.";

    s += super.appendItems();
    return s;
  }

  private race(gameEngine: GameEngine): string {
    const field = gameEngine.currentLocation as RacingField;
    if (field.challengeWon) {
      return "You've already received the blue ribbon. There's no point in racing the deer again.";
    }
    const shoes = gameEngine.getItem(ItemKey.WingedShoes) as WingedShoes;
    if (shoes.currentlyWearing) {
      const ribbon = gameEngine.getItem(ItemKey.BlueRibbon);
      gameEngine.addToInventory(ItemKey.BlueRibbon);
      gameEngine.score += !ribbon.taken ? ribbon.value : 0;
      ribbon.taken = true;
      field.challengeWon = true;
      return "You and the stag take off. At first, it's neck and neck. Then you feel the power of your winged shoes kick in, and your feet become a blur. The stag's eyes widen as you open a gap of a foot, then a yard, then five yards. You blow across the finish line as the stag is pulling up, cheeks puffing out of breath, shaking their head in disbelief.\n\n\"Well, you beat me, straight up. This is yours,\" they say, handing you the blue ribbon. They slowly walk back to their original spot and look like they're beginning a training regimen.";
    } else {
      return "You and the stag take off. Try as you might, you just can't match the stag's foot speed. You even try to throw an elbow, but they're already five yards ahead of you. The race ends with you losing handily.\n\n\"Come back when you're faster. I'm always ready for a race. I'm also nobody's lunch,\" they say as they jog back to their original spot and start cooling down.";
    }
  }
}
