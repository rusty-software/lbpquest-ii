import { LocationKey } from ".";
import { GameEngine } from "../GameEngine";
import { BaseLocation } from "./BaseLocation";

export class Freezer extends BaseLocation {
  public readonly title = "Inside the Freezer";
  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["exit", this.exit],
    ["exit freezer", this.exit],
    ["leave", this.exit],
    ["leave freezer", this.exit],
    ["push winery", this.pushWineryButton],
    ["push winery button", this.pushWineryButton],
    ["push library", this.pushWineryButton],
    ["push library button", this.pushWineryButton],
  ]);

  descriptionText =
    "You are inside the freezer. It's not as cold as you expected, but chilly enough to not want to remain for too long. It smells of uncured meats, but none are hanging from the hooks along the walls.\n\nThere's a circle on the floor at the back of the freezer. You also see two buttons on the wall there: they are labeled 'Library' and 'Winery' respectively.\n\n(hints: you can _exit_ the freezer to return to the Freezer Port)";

  public pushLibaryButton(gameEngine: GameEngine) {
    const location = gameEngine.getLocation(LocationKey.Library);
    gameEngine.changeLocation(location);
    return "";
  }

  public pushWineryButton(gameEngine: GameEngine) {
    const location = gameEngine.getLocation(LocationKey.Winery);
    gameEngine.changeLocation(location);
    return "";
  }

  public exit(gameEngine: GameEngine) {
    const location = gameEngine.getLocation(LocationKey.FreezerPort);
    gameEngine.changeLocation(location);
    return "";
  }
}
