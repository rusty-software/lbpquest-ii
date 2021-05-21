import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Cider extends BaseItem {
  public id = ItemKey.Cider;
  public name = "cider";
  public value = 5;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["drink", this.drink],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the cider and put it ashamedly into your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the cider. You can always pick it up later, if you're desperate.";
  }

  public examine(gameEngine: GameEngine): string {
    return 'The can of cider reads "Austin Eastciders Spiced Sweet Corn". ';
  }

  public use(gameEngine: GameEngine): string {
    return this.drink(gameEngine);
  }

  private drink(gameEngine: GameEngine): string {
    return "You take a swig of the cider. You're slightly surprised at the taste. It's not completely unlike Spiced Sweet Corn, but it doesn't seem... natural... either.";
  }
}
