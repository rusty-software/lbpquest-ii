import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { NorthPondShore, SouthPondShore } from "../locations";

export class Oar extends BaseItem {
  public id = ItemKey.Oar;
  public name = "oar";
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the oar and put it into your duffle bag, once again defying the laws of physics.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the oar on the ground. Every ground needs a paddle at some point.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The oar is made of a dark brown wood and is smooth to the touch. It looks perfect for propelling some water craft through water.";
  }

  public use(gameEngine: GameEngine): string {
    // TODO: parent Shore class?
    const northShore = gameEngine.currentLocation as NorthPondShore;
    const southShore = gameEngine.currentLocation as SouthPondShore;
    if (northShore) {
      return northShore.sail(gameEngine);
    } else if (southShore) {
      return southShore.sail(gameEngine);
    } else {
      return "You really can't find a use for the oar here, despite your creative efforts.";
    }
  }
}
