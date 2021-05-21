import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Glitter extends BaseItem {
  id = ItemKey.Glitter;
  name = "glitter";
  isShown = true;
  value = 5;

  canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  take(gameEngine: GameEngine): string {
    return "You take the glitter and put it into the duffle bag. Hopefully it won't dump out and cover everything else in there.";
  }

  drop(gameEngine: GameEngine): string {
    return "You drop the glitter. Amazingly, not a single flake is disbursed.";
  }

  examine(gameEngine: GameEngine): string {
    return "The glitter brightly reflects every color of the rainbow in tiny shiny squares.";
  }

  use(gameEngine: GameEngine): string {
    return "TODO: glitter can be used if you have enough arts and crafts supplies.";
  }
}
