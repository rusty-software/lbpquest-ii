import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class BlueRibbon extends BaseItem {
  public id = ItemKey.BlueRibbon;
  public name = "blue ribbon";
  public value = 10;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(gameEngine: GameEngine): string {
    return 'The blue ribbon is silky smooth and says "First Place" in gold lettering.';
  }

  public use(gameEngine: GameEngine): string {
    return "TODO: used at trophy case.";
  }
}
