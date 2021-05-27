import { ArtsAndCraftsSupply } from "./ArtsAndCraftsSupply";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Glue extends ArtsAndCraftsSupply {
  public id = ItemKey.Glue;
  public name = "glue";
  public value = 5;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the glue and put it into your duffle bag, managing not to get anything else in there too gooey.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the glue to the ground, where it stands vertically, not a drop spilling.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The glue isn't nearly as sticky as you'd imagined. Must be the stickiest bits were already used on the eagle's talons.";
  }
}
