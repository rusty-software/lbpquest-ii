import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class CookieDough extends BaseItem {
  public id = ItemKey.CookieDough;
  public name = "cookie dough";
  public value = 5;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["eat", this.eat],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You put the package of cookie dough into the refrigerated section of duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the cookie dough on the ground. Ants immediately start making their way toward it.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The cookie dough is Nestle Toll House Chocolate Chip and is in a sausage-like roll container. It looks partially eaten.";
  }

  public use(gameEngine: GameEngine): string {
    return this.eat(gameEngine);
  }

  private eat(gameEngine: GameEngine): string {
    return "Who needs cooked cookies when you can have them straight from the doughy nipple? You break off a chunk with your teeth and eat it. You regret nothing. You will always regret nothing.";
  }
}
