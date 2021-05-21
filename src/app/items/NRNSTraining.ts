import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class NRNSTraining extends BaseItem {
  public id = ItemKey.NRNSTraining;
  public name = "NRNS training";
  public value = 5;

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
    return "";
  }

  public use(gameEngine: GameEngine): string {
    return "";
  }
}