import { GameEngine } from "../game-engine";
import { Item } from "../item";

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
  examine(gameEngine: GameEngine): void {
    console.log("screwdriver examined");
  }
  use(gameEngine: GameEngine): void {
    console.log("screwdriver used");
  }
}
