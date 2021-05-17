import { ItemKey } from "./ItemKey";
import { BaseItem } from "./BaseItem";
import { GameEngine } from "../GameEngine";
import { LocationKey } from "../locations";

export class Freezer extends BaseItem {
  id = ItemKey.Freezer;
  name = "freezer";
  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["enter", this.enter],
    ["exit", this.exit],
  ]);

  public enter(gameEngine: GameEngine): string {
    return "You're in the freezer!";
  }

  public exit(gameEngine: GameEngine) {
    const location = gameEngine.getLocation(LocationKey.FreezerPort);
    console.log(location);
    gameEngine.changeLocation(location);
    return "";
  }
}
