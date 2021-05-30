import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class PeachFourLoko extends BaseItem {
  public id = ItemKey.PeachFourLoko;
  public name = "four loko";
  public value = 5;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["drink", this.drink],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the four loko and put it into your duffle bag. It muscles around a bit, establishing its dominance over the other drinks in the bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You remove the four loko from your duffle bag, put it on the ground, and step away. It looks like it's going to move to follow you, but stays put instead.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The Peach Four Loko looks like it's the perfect mix of smooth, bold, and juicy. It's also more intimidating than you'd expected.";
  }

  public use(gameEngine: GameEngine): string {
    return super.useInLivingRoom(gameEngine) || this.drink(gameEngine);
  }

  private drink(gameEngine: GameEngine): string {
    return "You take a drink of the Peach Four Loko. It punches and kicks you on the way down, and doesn't stop once it hits your stomach. You regret a fair number of the life decisions that brought you to this sad point, but fight through the worst of it to live another day.";
  }
}
