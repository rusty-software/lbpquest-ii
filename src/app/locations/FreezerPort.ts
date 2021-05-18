import { LocationKey } from ".";
import { GameEngine } from "../GameEngine";
import { BaseLocation } from "./BaseLocation";

export class FreezerPort extends BaseLocation {
  public readonly title = "Freezer Port";
  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["enter", this.enterFreezer],
    ["enter freezer", this.enterFreezer],
  ]);

  descriptionText =
    "You are in what appears to be a small car port with a walk-in freezer in the back. The freezer emits a happy hum and a more questionable smell.\n\nThe freezer door looks unlocked.\n\n(hint, you can _enter_ it)";

  public enterFreezer(gameEngine: GameEngine) {
    const freezer = gameEngine.getLocation(LocationKey.Freezer);
    freezer.enter();
    gameEngine.changeLocation(freezer);
    return "";
  }
}
