import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class NutterButters extends BaseItem {
  public id = ItemKey.NutterButters;
  public name = "nutter butters";
  public value = 5;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["eat", this.eat],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You put the nutter butters into your mouth. I mean duffle bag. Yes, they definitely went into the duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the nutter butters. The ground spontaneously forms a mouth and begins to try to eat them.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The nutter butters are almost all of what you've ever hoped for. Crunchy peanut-shaped cookie shells surround the almost-peanut butter filling. They smell of wonder and delight.";
  }

  public use(gameEngine: GameEngine): string {
    return super.useInLivingRoom(gameEngine) || this.eat(gameEngine);
  }

  private eat(gameEngine: GameEngine): string {
    return "You put one of the nutter butters into your mouth. You have a hard time chewing over the rush of emotions that fill your heart. The sense of loving-kindness that you feel for all the world at this moment is hard to overstate. You. Feel. Complete.";
  }
}
