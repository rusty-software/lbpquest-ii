import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Marg extends BaseItem {
  public id = ItemKey.Marg;
  public name = "marg";
  public value = 5;
  public isShown = true;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["drink", this.drink],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "It takes a little extra effort due to the fact that there's scott tape on the bottom of the cup, but you finally manage to put the marg into your duffle bag. No way that red Solo cup will spill with that handy tape on the bottom!";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the marg on the ground. Miraculously, it lands bottom first without spilling a drop. As extra bonus, the scott tape is securing it in place so it won't fall over!";
  }

  public examine(gameEngine: GameEngine): string {
    return "The marg looks freshly Vitamix'd, with cool, tequila-y vapors rising gently from its surface.";
  }

  public use(gameEngine: GameEngine): string {
    return this.drink(gameEngine);
  }

  private drink(gameEngine: GameEngine): string {
    return "You take a sip of the marg. It's as perfect as always, and just keeps getting better the more you drink.";
  }
}
