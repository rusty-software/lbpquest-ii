import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class BlueRibbon extends BaseItem {
  public id = ItemKey.BlueRibbon;
  public name = "blue ribbon";
  public value = 10;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(gameEngine: GameEngine): string {
    return 'The blue ribbon is silky smooth and says "First Place" in gold lettering. It reminds you of all of those ribbons you never quite won on field day (unless you are Phil, in which case, it reminds you of all the ribbons you collected on field day).';
  }

  public use(gameEngine: GameEngine): string {
    return (
      super.useInLivingRoom(gameEngine) ||
      "You slip the blue ribbon over your wrist using the small gold string attached to its top. It makes you feel good, but doesn't seem useful otherwise. Maybe in another spot?"
    );
  }
}
