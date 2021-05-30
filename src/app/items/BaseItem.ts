import { GameEngine } from "../GameEngine";
import { Item } from "../Item";
import { ItemKey } from "./ItemKey";
import { LivingRoom, LocationKey } from "../locations";

export class BaseItem implements Item {
  public id = ItemKey._Nothing;
  public name = "";
  public isShown = false;
  public value = 0;
  public taken = false;
  public customVerbs: Map<string, (gameEngine: GameEngine) => string> =
    new Map();

  public getName(): string {
    return "is a(n) " + this.name;
  }

  public canTake(gameEngine: GameEngine): boolean {
    throw new Error("Method not implemented.");
  }

  public take(gameEngine: GameEngine): string {
    this.taken = true;
    return "Taken.";
  }

  public drop(gameEngine: GameEngine): string {
    return "Dropped.";
  }

  public examine(gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }

  protected useInLivingRoom(gameEngine: GameEngine): string | undefined {
    if (gameEngine.currentLocation.id === LocationKey.LivingRoom) {
      const livingRoom = gameEngine.currentLocation as LivingRoom;
      return livingRoom.addTrophy(gameEngine, this.id);
    }
    return undefined;
  }

  public use(gameEngine: GameEngine): string {
    throw new Error("Method not implemented.");
  }
}
