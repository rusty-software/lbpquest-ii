import { ArtsAndCraftsSupply } from "./ArtsAndCraftsSupply";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Yarn extends ArtsAndCraftsSupply {
  public id = ItemKey.Yarn;
  public name = "yarn";
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You pick up the yarn and put it into your duffle bag. No doubt it will come in handy during a knitting emergency.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the yarn, realizing that emergency knitting isn't as likely as emergency crocheting.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The yarn is a warm, fuzzy, bright red. We'll tell Phil it's green, though.";
  }
}
