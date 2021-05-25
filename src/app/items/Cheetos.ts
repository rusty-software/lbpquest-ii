import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Cheetos extends BaseItem {
  public id = ItemKey.Cheetos;
  public name = "cheetos";
  public value = 5;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["eat", this.eat],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You put the bag of Cheetos into your duffle bag and double-check your fingers. They seem clean.";
  }

  public drop(gameEngine: GameEngine): string {
    return 'You drop the Cheetos to the ground. You hear the cheese go "crunch" as it falls.';
  }

  public examine(gameEngine: GameEngine): string {
    return "The Cheetos are cheesy, crunchy, and smell vaguely of... scorpion sauce? Someone probably double-dipped without thinking...";
  }

  public use(gameEngine: GameEngine): string {
    return this.eat(gameEngine);
  }

  private eat(gameEngine: GameEngine): string {
    return "You pop a handful of Cheetos into your mouth. A moment later, the scorpion sauce hits you. You grit your teeth and bear it before getting another handful. This one goes down a little easier. You clean your fingertips in the traditional manner, saving the rest for later.";
  }
}
