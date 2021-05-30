import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class IceCream extends BaseItem {
  public id = ItemKey.IceCream;
  public name = "ice cream";
  public value = 5;
  public isShown = true;
  public bitesEaten = 0;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["eat", this.eat],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the ice cream and put it into the refrigerated part of your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the ice cream. It probably won't melt and/or make a mess right there...";
  }

  public examine(gameEngine: GameEngine): string {
    return "The ice cream is labeled \"Blue Bell Bread Pudding\", and it looks like it's had a bite or two taken from it. It's only slightly fuzzy, so can probably be safely eaten.";
  }

  public use(gameEngine: GameEngine): string {
    return this.eat(gameEngine);
  }

  // getting a reference to the ice cream object since "this" semantics are vague here
  private eat(gameEngine: GameEngine) {
    const iceCream = gameEngine.getItem(ItemKey.IceCream) as IceCream;
    iceCream.bitesEaten++;
    if (iceCream.bitesEaten === 5) {
      gameEngine.score -= iceCream.value;
      return "With that bite, you feel something change in your tummy. You're not exactly sure what it was, but you hope that you can still excrete in your normal fashion.";
    } else if (iceCream.bitesEaten > 5) {
      return "Your tummy in no uncertain terms tells your brain that you've had quite enough of the ice cream. You wisely do NOT take another bite.";
    }
    const herbs: string[] = [
      "basil",
      "bay leaf",
      "chives",
      "cilantro",
      "dill",
      "hemp",
      "marjoram",
      "mugwort",
      "oregano",
      "sage",
    ];

    return `You take a bite of the ice cream. It tastes not entirely unlike bread pudding, with a dash of... ${
      herbs[Math.floor(Math.random() * herbs.length)]
    }?`;
  }
}
