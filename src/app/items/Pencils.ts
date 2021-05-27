import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { ArtsAndCraftsSupply } from "./ArtsAndCraftsSupply";

export class Pencils extends ArtsAndCraftsSupply {
  public id = ItemKey.Pencils;
  public name = "pencils";
  public value = 5;

  public getName(): string {
    return "are some " + this.name;
  }

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You put the pencils into your duffle bag, careful to make sure they don't leave marks on the inside.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the pencils. Who needs that kind of color in the world anyway!";
  }

  public examine(gameEngine: GameEngine): string {
    return "The pencils are limited in selection, but all have enough tips exposed to do some serious coloring.";
  }
}
