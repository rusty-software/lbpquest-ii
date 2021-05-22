import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class EastWoods extends BaseLocation {
  public id = LocationKey.EastWoods;
  public title = "East Woods";
  public challengeWon = false;
  private challengeGiven = false;

  public description(): string {
    let s =
      "You are in the large East Woods. Wandering about, you stumble upon a group of hillbillies, hoopin' and hollerin' as they take turns shooting at a stack of logs with a bow. The logs all have tiny targets painted on them.";

    if (this.challengeWon) {
      s +=
        " Noticing you there, they hoop and holler in your direction for a minute, raising their jugs of moonshine in your honor, before returning to their soiree. You are left to your own devices";
    } else if (this.challengeGiven) {
      s +=
        '\n\n"Are you ready to shoot at one o\' them thar targets?" asks the longest-beared hillbilly.';
    } else {
      this.challengeGiven = true;
      s +=
        '\n\nThe hillbilly with the longest beard notices you there and, with a friendly wave, invites you over. "Howdy! You look like you could use some target practice! Tell ye what: if you can score a bullseye on one of them thar logs, we\'ll give you a target practice prize! All you need to do is shoot yer bow and see how you do."';
    }

    s +=
      "\n\nTo the northwest, you can see a bridge that crosses an inlet to the pond. To the west is an open field, and to the south is a dirt path.";

    s += super.appendItems();
    return s;
  }
}
