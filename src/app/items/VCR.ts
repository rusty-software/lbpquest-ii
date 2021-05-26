import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { VHSTape } from "./VHSTape";

export class VCR extends BaseItem {
  public id = ItemKey.VCR;
  public name = "vcr";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["play", this.play],
  ]);

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
      "The VCR is of the VHS variety. The Eject button looks broken off, leaving a hole where the button should be.";
    const tape = gameEngine.getItem(ItemKey.VHSTape);
    if (!tape.isShown) {
      gameEngine.currentLocation.showItem(ItemKey.VHSTape);
      s +=
        ' You notice that there\'s a tape in the VCR, with a barely discernible, hand-written label that reads "NRNS".';
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return this.play(gameEngine);
  }

  private play(gameEngine: GameEngine): string {
    if (gameEngine.isItemAvailable(ItemKey.VHSTape)) {
      const tape = gameEngine.getItem(ItemKey.VHSTape) as VHSTape;
      return tape.use(gameEngine);
    } else {
      return 'You press "Play" on the VCR, but quickly realize there\'s no tape available to watch.';
    }
  }
}
