import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class IceCream extends BaseItem {
  id = ItemKey.IceCream;
  name = "ice cream";
  value = 5;
  isShown = true;
  bitesEaten = 0;
  // "eat" handler defined inline because "this" semantics require such
  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    [
      "eat",
      (gameEngine: GameEngine) => {
        this.bitesEaten++;
        if (this.bitesEaten === 5) {
          gameEngine.score -= this.value;
          return "With that bite, you feel something change in your tummy. You're not exactly sure what it was, but you hope that you can still excrete in your normal fashion.";
        } else if (this.bitesEaten > 5) {
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
      },
    ],
  ]);

  canTake(gameEngine: GameEngine): boolean {
    return true;
  }
  take(gameEngine: GameEngine): string {
    return "You take the ice cream and put it into the refrigerated part of your duffle bag.";
  }
  drop(gameEngine: GameEngine): string {
    return "You drop the ice cream. It probably won't melt and/or make a mess right there...";
  }
  examine(gameEngine: GameEngine): string {
    return "The ice cream is labeled \"Blue Bell Bread Pudding\", and it looks like it's had a bite or two taken from it. It's only slightly fuzzy, so can probably be safely eaten.";
  }
  use(gameEngine: GameEngine): string {
    return "Aside from eating it, there doesn't seem to be another use for the ice cream.";
  }
}
