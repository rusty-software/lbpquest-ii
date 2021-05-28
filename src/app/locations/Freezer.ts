import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";
import { BaseLocation } from "./BaseLocation";

export class Freezer extends BaseLocation {
  public id = LocationKey.Freezer;
  public title = "Walk-in Freezer";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["exit", this.exit],
    ["exit freezer", this.exit],
    ["leave", this.exit],
    ["leave freezer", this.exit],
    ["press winery", this.pushWineryButton],
    ["press winery button", this.pushWineryButton],
    ["press library", this.pushLibraryButton],
    ["press library button", this.pushLibraryButton],
    ["push winery", this.pushWineryButton],
    ["push winery button", this.pushWineryButton],
    ["push library", this.pushLibraryButton],
    ["push library button", this.pushLibraryButton],
  ]);

  public descriptionText =
    "You are inside the freezer. It's not as cold as you expected, but chilly enough to not want to remain for too long. It smells of uncured meats, but none are hanging from the hooks along the walls.\n\nOn the back wall of the freezer are two buttons: they are labeled 'Library' and 'Winery' respectively.";

  private pushLibraryButton(gameEngine: GameEngine): string {
    return super.enterLocation(gameEngine, LocationKey.Library);
  }

  private pushWineryButton(gameEngine: GameEngine): string {
    return super.enterLocation(gameEngine, LocationKey.Winery);
  }

  private exit(gameEngine: GameEngine): string {
    const freezerPort = gameEngine.getLocation(LocationKey.FreezerPort);
    gameEngine.changeLocation(freezerPort);
    return "";
  }
}
