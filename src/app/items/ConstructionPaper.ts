import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class ConstructionPaper extends BaseItem {
  public id = ItemKey.ConstructionPaper;
  public name = "construction paper";
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You roll up the construction paper and put it neatly into your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the construction paper on the ground. It unrolls like a scroll, revealing a blank page.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The construction paper is sturdy and roughly textured. Everything that plain ol' construction paper should be...";
  }

  public use(gameEngine: GameEngine): string {
    return "TODO: can be used in combination with other arts and crafts supplies";
  }
}
