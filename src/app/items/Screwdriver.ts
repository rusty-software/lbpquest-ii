import { GameEngine } from "../GameEngine";
import { Item } from "../Item";

export class Screwdriver implements Item {
  id = "screwdriver";
  name = "screwdriver";

  takeable(): boolean {
    return true;
  }
  take(gameEngine: GameEngine): string {
    return "You have successfully put the screwdriver into your haversack!";
  }
  drop(gameEngine: GameEngine): string {
    return "You have successfully dropped the screwdriver.";
  }
  examine(gameEngine: GameEngine): string {
    return "The screwdriver looks like it can be used to screw things.";
  }
  use(gameEngine: GameEngine): void {
    console.log("screwdriver used");
  }
}
