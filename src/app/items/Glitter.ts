import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { ArtsAndCraftsSupply } from "./ArtsAndCraftsSupply";

export class Glitter extends ArtsAndCraftsSupply {
  public id = ItemKey.Glitter;
  public name = "glitter";
  public isShown = true;
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the glitter and put it into the duffle bag. Hopefully it won't dump out and cover everything else in there.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the glitter. Amazingly, not a single flake is disbursed.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The glitter brightly reflects every color of the rainbow in tiny shiny squares.";
  }
}
