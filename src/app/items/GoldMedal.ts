import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LivingRoom, LocationKey } from "../locations";

export class GoldMedal extends BaseItem {
  public id = ItemKey.GoldMedal;
  public name = "gold medal";
  public value = 15;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You place the gold medal into your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the gold medal. It's probably not REAL gold anyway.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The gold medal looks untarnished despite the fact that it's been in the possession of a wild child for who knows how long.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.LivingRoom) {
      const livingRoom = gameEngine.currentLocation as LivingRoom;
      return livingRoom.addTrophy(gameEngine, this.id);
    }
    return "You hold the gold medal aloft. It reflects the sunlight dimly, but otherwise doesn't seem useful here.";
  }
}
