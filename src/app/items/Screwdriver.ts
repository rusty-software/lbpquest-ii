import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class Screwdriver extends BaseItem {
  constructor() {
    super();
    this.id = ItemKey.Screwdriver;
    this.name = "screwdriver";
    this.value = 5;
  }

  canTake(gameEngine: GameEngine): boolean {
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
