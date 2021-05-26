import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LivingRoom, LocationKey } from "../locations";

export class TrophyCase extends BaseItem {
  public id = ItemKey.TrophyCase;
  public name = "trophy case";
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
    const livingRoom = gameEngine.getLocation(
      LocationKey.LivingRoom
    ) as LivingRoom;
    const trophiesPlaced = livingRoom.trophiesPlaced();
    if (trophiesPlaced.length === 0) {
      return "The trophy case is currently empty.";
    }
    let s = "The trophy case currently contains:";
    trophiesPlaced.map(
      (itemKey) => (s += `\n${gameEngine.getItem(itemKey).name}`)
    );
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You WISH you could use that trophy case!";
  }
}
