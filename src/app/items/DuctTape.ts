import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { ArtsAndCraftsSupply } from "./ArtsAndCraftsSupply";

export class DuctTape extends ArtsAndCraftsSupply {
  public id = ItemKey.DuctTape;
  public name = "duct tape";
  public value = 5;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You put the duct tape into your duffle bag. It's sticky, but manages to not adhere to anything else.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the duct tape. It usefully lays on the ground.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The duct tape is silvery gray and about half gone, but looks like there's still plenty with which to stick things together.";
  }

  public use(gameEngine: GameEngine): string {
    const artsAndCraftsUsage = super.use(gameEngine);

    if (
      gameEngine.inventoryContains(ItemKey.Balusters) ||
      gameEngine.currentLocation.hasItem(ItemKey.Balusters)
    ) {
      const utilityStick = gameEngine.getItem(ItemKey.UtilityStick);
      gameEngine.score += utilityStick.value;
      gameEngine.addToInventory(ItemKey.UtilityStick);
      if (gameEngine.inventoryContains(ItemKey.Balusters)) {
        gameEngine.removeFromInventory(ItemKey.Balusters);
      } else if (gameEngine.currentLocation.hasItem(ItemKey.Balusters)) {
        gameEngine.currentLocation.removeItem(ItemKey.Balusters);
      }
      const stick =
        "You suddenly realize that you can use the duct tape to attach the balusters together, which you do. It looks like you've created a long stick of some utility.";

      return artsAndCraftsUsage + "\n\n" + stick;
    } else {
      return artsAndCraftsUsage;
    }
  }
}
