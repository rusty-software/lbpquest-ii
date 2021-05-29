import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class WingedShoes extends BaseItem {
  public id = ItemKey.WingedShoes;
  public name = "winged shoes";
  public value = 5;
  public currentlyWearing = false;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["wear", this.wear],
    ["remove", this.remove],
  ]);

  public getName(): string {
    return "are some " + this.name;
  }

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You pick up the winged shoes and put the winged shoes into your duffle bag. The wings flutter to a flat position along the upper sides.";
  }

  public drop(gameEngine: GameEngine): string {
    this.currentlyWearing = false;
    return "You drop the winged shoes. They land gently on the ground, but seem discontent with the landing.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The shoes have wings sticking out of the upper sides. Literal wings. They look like that, when worn, they could make you run pretty dang quickly, especially compared to riding a Huffy one-speed.";
  }

  public use(gameEngine: GameEngine): string {
    return this.wear(gameEngine);
  }

  private wear(gameEngine: GameEngine): string {
    const shoes = gameEngine.getItem(ItemKey.WingedShoes) as WingedShoes;
    shoes.currentlyWearing = true;
    return "You put the winged shoes on your feet. You immediately feel really quick. You might even be able to dance a bit and/or jam to the beat viciously.";
  }

  private remove(gameEngine: GameEngine): string {
    const shoes = gameEngine.getItem(ItemKey.WingedShoes) as WingedShoes;
    shoes.currentlyWearing = false;
    return "You remove the winged shoes. You don't feel quite as quick as you did a moment ago.";
  }
}
