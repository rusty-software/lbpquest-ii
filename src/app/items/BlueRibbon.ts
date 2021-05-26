import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LivingRoom, LocationKey } from "../locations";

export class BlueRibbon extends BaseItem {
  public id = ItemKey.BlueRibbon;
  public name = "blue ribbon";
  public value = 10;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public examine(gameEngine: GameEngine): string {
    return 'The blue ribbon is silky smooth and says "First Place" in gold lettering.';
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.LivingRoom) {
      const livingRoom = gameEngine.currentLocation as LivingRoom;
      return livingRoom.addTrophy(gameEngine, this.id);
    }
    return "You slip the blue ribbon over your wrist using the small gold string attached to its top. It makes you feel good, but doesn't seem useful otherwise. Maybe in another spot?";
  }
}
