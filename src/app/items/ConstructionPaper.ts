import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { ArtsAndCraftsSupply } from "./ArtsAndCraftsSupply";

export class ConstructionPaper extends ArtsAndCraftsSupply {
  public id = ItemKey.ConstructionPaper;
  public name = "construction paper";
  public value = 5;
  public isShown = true;

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
    return (
      super.useInLivingRoom(gameEngine) ||
      "The construction paper is sturdy and roughly textured. Everything that plain ol' construction paper should be..."
    );
  }
}
