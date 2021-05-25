import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Balusters extends BaseItem {
  public id = ItemKey.Balusters;
  public name = "balusters";
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You put the balusters into your duffle bag. They'll make great additions to your own staircase.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the balusters. Come to think of it, you probably don't want to put loose balusters into your own staircase.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The balusters are made of thin but solid-feeling wood. They look identical, like they could be attached end-to-end if you had something with which to attach them...";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.inventoryContains(ItemKey.DuctTape)) {
      const utilityStick = gameEngine.getItem(ItemKey.UtilityStick);
      gameEngine.score += utilityStick.value;
      gameEngine.addToInventory(ItemKey.UtilityStick);
      if (gameEngine.inventoryContains(ItemKey.Balusters)) {
        gameEngine.removeFromInventory(ItemKey.Balusters);
      } else if (gameEngine.currentLocation.hasItem(ItemKey.Balusters)) {
        gameEngine.currentLocation.removeItem(ItemKey.Balusters);
      }
      return "The balusters are easily and firmly attached to each other through your clever use of the duct tape. It looks like they've formed a long stick of some utility.";
    } else {
      return "You touch the tips of the balusters together, hoping they will spontaneously do something, but to no avail.";
    }
  }
}
