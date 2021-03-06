import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LivingRoom, LocationKey } from "../locations";

export class CaptainsHat extends BaseItem {
  public id = ItemKey.CaptainsHat;
  public name = "captains hat";
  public value = 15;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the captains hat and put it in the duffle bag. You're not a captain, after all.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the captains hat. No captains around here in any case.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The captains hat is a modern traditional, with a short black bill beneath yellow gold roped strap. The crown is decorated a large eagle, also in stitched gold.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.LivingRoom) {
      const livingRoom = gameEngine.currentLocation as LivingRoom;
      return livingRoom.addTrophy(gameEngine, this.id);
    }
    return (
      super.useInLivingRoom(gameEngine) ||
      "You put the captains hat on your head, but it just doesn't feel right. Maybe it can be used in another place?"
    );
  }
}
