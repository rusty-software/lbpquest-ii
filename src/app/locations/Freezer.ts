import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";
import { BaseLocation } from "./BaseLocation";

export class Freezer extends BaseLocation {
  public readonly title = "Inside Freezer";
  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["exit", this.exit],
    ["exit freezer", this.exit],
    ["leave", this.exit],
    ["leave freezer", this.exit],
    ["push winery", this.pushWineryButton],
    ["push winery button", this.pushWineryButton],
    ["push library", this.pushLibraryButton],
    ["push library button", this.pushLibraryButton],
  ]);

  descriptionText =
    "You are inside the freezer. It's not as cold as you expected, but chilly enough to not want to remain for too long. It smells of uncured meats, but none are hanging from the hooks along the walls.\n\nOn the back wall of the freezer are two buttons: they are labeled 'Library' and 'Winery' respectively.\n\n(hints: you can _push_ one of the buttons, or _exit_ the freezer to return to the Freezer Port)";

  private pushLibraryButton(gameEngine: GameEngine) {
    return super.enterLocation(gameEngine, LocationKey.Library);
  }

  private pushWineryButton(gameEngine: GameEngine) {
    return super.enterLocation(gameEngine, LocationKey.Winery);
  }

  private exit(gameEngine: GameEngine) {
    const freezerPort = gameEngine.getLocation(LocationKey.FreezerPort);
    gameEngine.changeLocation(freezerPort);
    return "";
  }
}
