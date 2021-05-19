import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class ExPresidentialMedal extends BaseItem {
  id = ItemKey.ExPresidentialMedal;
  name = "presidential medal";
  value = 10;
  isShown = true;

  canTake(gameEngine: GameEngine): boolean {
    return true;
  }
  take(gameEngine: GameEngine): string {
    return "You place the presidential medal into your duffle bag.";
  }
  drop(gameEngine: GameEngine): string {
    return "You drop the presidential medal. It almost shimmers on the ground here...";
  }
  examine(gameEngine: GameEngine): string {
    return "The presidential medal is a shiny golden plastic in the shape of George Bush's head on a cheap red, white, and blue ribbon.";
  }
  use(gameEngine: GameEngine): string {
    return "TODO: using the medal should place it on the trophy case.";
  }
}
