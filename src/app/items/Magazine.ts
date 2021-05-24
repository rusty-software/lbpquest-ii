import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Magazine extends BaseItem {
  public id = ItemKey.Magazine;
  public name = "magazine";
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the magazine and put it into your duffle bag. Plenty of time to read that later...";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the magazine. Chances are you've already perused this issue.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The magazine is pretty typical of LBP fare -- the content is zebra-centric and entirely questionable.";
  }

  public use(gameEngine: GameEngine): string {
    return "TODO: can be used for arts and crafts";
  }
}
