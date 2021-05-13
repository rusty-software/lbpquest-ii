import { GameEngine } from "../GameEngine";
import { Item } from "../Item";

export class Screwdriver implements Item {
  id = "screwdriver";
  name = "screwdriver";

  description(): string {
    return "The screwdriver is a Philips head.";
  }
  takeable(): boolean {
    return true;
  }
  take(gameEngine: GameEngine): void {
    console.log("screwdriver taken.");
  }
  examine(gameEngine: GameEngine): string {
    return "The screwdriver looks like it can be used to screw things.";
  }
  use(gameEngine: GameEngine): void {
    console.log("screwdriver used");
  }
}
