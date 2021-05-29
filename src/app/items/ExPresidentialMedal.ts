import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LivingRoom, LocationKey } from "../locations";

export class ExPresidentialMedal extends BaseItem {
  public id = ItemKey.ExPresidentialMedal;
  public name = "presidential medal";
  public value = 10;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You place the presidential medal into your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the presidential medal. It almost shimmers on the ground here...";
  }

  public examine(gameEngine: GameEngine): string {
    return "The presidential medal is a shiny golden plastic piece in the shape of George Bush's head on a cheap red, white, and blue ribbon.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.LivingRoom) {
      const livingRoom = gameEngine.currentLocation as LivingRoom;
      return livingRoom.addTrophy(gameEngine, this.id);
    }
    return "You slip the presidential medal over your head. You feel like a winner for a few moments, but otherwise there's no change. Maybe you can find another use for it somewhere else.";
  }
}
