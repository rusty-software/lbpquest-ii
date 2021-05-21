import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class NRNSTraining extends BaseItem {
  id = ItemKey.NRNSTraining;
  name = "NRNS training";
  value = 5;

  canTake(gameEngine: GameEngine): boolean {
    return false;
  }
  take(gameEngine: GameEngine): string {
    return "";
  }
  drop(gameEngine: GameEngine): string {
    return "";
  }
  examine(gameEngine: GameEngine): string {
    return "";
  }
  use(gameEngine: GameEngine): string {
    return "";
  }
}
