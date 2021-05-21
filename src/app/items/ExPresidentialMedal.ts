import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class ExPresidentialMedal extends BaseItem {
  public id = ItemKey.ExPresidentialMedal;
  public name = "presidential medal";
  public value = 10;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You place the presidential medal into your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the presidential medal. It almost shimmers on the ground here...";
  }

  public examine(gameEngine: GameEngine): string {
    return "The presidential medal is a shiny golden plastic in the shape of George Bush's head on a cheap red, white, and blue ribbon.";
  }

  public use(gameEngine: GameEngine): string {
    return "TODO: using the medal should place it on the trophy case.";
  }
}
