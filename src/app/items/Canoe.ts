import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { NorthPondShore, SouthPondShore } from "../locations";

export class Canoe extends BaseItem {
  public id = ItemKey.Canoe;
  public name = "canoe";
  public alligatorMoved = false;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "";
  }

  public drop(gameEngine: GameEngine): string {
    return "";
  }

  public examine(gameEngine: GameEngine): string {
    let s =
      "The canoe looks hand-made by some natives of the area. It's mostly a hollowed out log, but certainly seems pond-worthy.";
    if (!this.alligatorMoved) {
      s +=
        "There is currently a large alligator laying across it in a melancholy manner.";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    if (!this.alligatorMoved) {
      return "Your attempts to use the canoe are blocked by the large alligator that is laying in it. If only it could be convinced to move...";
    }

    // TODO: parent Shore class?
    const northShore = gameEngine.currentLocation as NorthPondShore;
    const southShore = gameEngine.currentLocation as SouthPondShore;
    if (northShore) {
      return northShore.sail(gameEngine);
    } else if (southShore) {
      return southShore.sail(gameEngine);
    } else {
      return "I'm not sure how you managed to get the canoe here, but you absolutely cannot use it.";
    }
  }
}
