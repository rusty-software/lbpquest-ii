import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Crayons extends BaseItem {
  public id = ItemKey.Crayons;
  public name = "crayons";
  public value = 5;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You place the crayons into your duffle bag. They don't seem to be in danger of melting, as they're at least partially in the refrigerated part of the bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the crayons. You're not sure how long they'll last given the current climate.";
  }

  public examine(gameEngine: GameEngine): string {
    return "While the collection of crayons is not prolific, they all appear to be in good repair.";
  }

  public use(gameEngine: GameEngine): string {
    return "TODO: can be used in combination with other arts and crafts supplies";
  }
}
