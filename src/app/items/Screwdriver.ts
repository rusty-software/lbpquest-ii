import { GameEngine } from "../GameEngine";
import { Item } from "../Item";

export class Screwdriver implements Item {
  id = "screwdriver";
  name = "screwdriver";
  displayable = true;

  takeable(gameEngine: GameEngine): boolean {
    return true;
  }
  take(gameEngine: GameEngine): string {
    return "You have successfully put the screwdriver into your duffle bag!";
  }
  drop(gameEngine: GameEngine): string {
    return "You have successfully dropped the screwdriver.";
  }
  examine(gameEngine: GameEngine): string {
    return "The screwdriver looks like it can be used to screw things.";
  }
  use(gameEngine: GameEngine): string {
    return "You've used the screwdriver.";
  }
}
