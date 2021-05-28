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
    return "You pick up the trophy case and put it into your duffle bag. Wait, no you don't. The trophy case stays obstinately where it is.";
  }

  public drop(gameEngine: GameEngine): string {
    return "";
  }

  public examine(gameEngine: GameEngine): string {
    const livingRoom = gameEngine.getLocation(
      LocationKey.LivingRoom
    ) as LivingRoom;
    const trophiesPlaced = livingRoom.trophiesPlaced();
    let s =
      "The trophy case is about six feet tall, is built into the wall, and has two large shelves on which to put trophies.\n\n";
    if (trophiesPlaced.length === 0) {
      return s + "It is currently empty.";
    }
    s += "It currently contains:";
    trophiesPlaced.map(
      (itemKey) => (s += `\n${gameEngine.getItem(itemKey).name}`)
    );
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You WISH you could use that trophy case!";
  }
}
