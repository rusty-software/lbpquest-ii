import { ArtsAndCraftsSupply } from "./ArtsAndCraftsSupply";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class GooglyEyes extends ArtsAndCraftsSupply {
  public id = ItemKey.GooglyEyes;
  public name = "googly eyes";
  public value = 5;
  public isShown = true;

  public getName(): string {
    return "are some " + this.name;
  }

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You peel the googly eyes off of the surface and stick them to the outside of your duffle bag. No sense in not letting the bag have a sense of what's going on visually.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You peel the googly eyes off of the surface of the duffle bag and drop them to the surface of the ground. Now the ground looks like it knows what's up.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The googly eyes are totes adorbs, and you can't remember why you don't have stock in a cryptogooglyeye company.";
  }
}
