import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";

export class Screwdriver extends BaseItem {
  public id = ItemKey.Screwdriver;
  public name = "screwdriver";
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You have successfully put the screwdriver into your duffle bag!";
  }

  public drop(gameEngine: GameEngine): string {
    return "You have successfully dropped the screwdriver.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The screwdriver looks like it can be used to screw or poke things.";
  }

  public use(gameEngine: GameEngine): string {
    return "TODO: can be used on the VCR";
  }
}
