import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";
import { BlackBelt, ItemKey } from "../items";

export class SouthWoods extends BaseLocation {
  id = LocationKey.SouthWoods;
  title = "South Woods";
  public challengeWon = false;
  private challengeGiven = false;

  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["fight", this.fight],
  ]);

  description(): string {
    let s =
      "You are in the south woods. You are somewhat surprised to see a Tan Stag here, on its hind legs, practicing karate.";

    s += super.appendItems(s);
    return s;
  }

  private fight(gameEngine: GameEngine): string {
    const woods = gameEngine.currentLocation as SouthWoods;
    const belt = gameEngine.getItem(ItemKey.BlackBelt) as BlackBelt;
    return "";
  }
}
