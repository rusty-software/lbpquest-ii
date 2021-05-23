import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LocationKey, SouthPondShore } from "../locations";
import { Canoe } from "./Canoe";

export class AlligatorRug extends BaseItem {
  public id = ItemKey.AlligatorRug;
  public name = "alligator rug";
  public value = 5;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You place the alligator rug into your duffle bag. It really classes up the joint.";
  }

  public drop(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.SouthPondShore) {
      return this.use(gameEngine);
    } else {
      return "You drop the alligator rug. It adds a sense of panache to the ground.";
    }
  }

  public examine(gameEngine: GameEngine): string {
    return "The alligator rug is small, lifelike, and stylish. It looks almost exactly like a real alligator.";
  }

  public use(gameEngine: GameEngine): string {
    if (
      gameEngine.currentLocation.id === LocationKey.SouthPondShore &&
      gameEngine.availableItems().find((i) => i.id === this.id)
    ) {
      const shore = gameEngine.currentLocation as SouthPondShore;
      const canoe = shore.items.find((i) => i.id === ItemKey.Canoe) as Canoe;
      if (canoe && !canoe.alligatorMoved) {
        canoe.alligatorMoved = true;
        gameEngine.removeFromInventory(this.id);
        return "You toss the alligator rug into the pond. The large alligator sees it floating there, looks back to you, then seems to smile for the first time ever as they enter the water and swim up to the rug. They appear to be talking to the rug and no longer quite so forlorn.";
      } else {
        return "I don't know how you got the rug back from the alligator, but you definitely don't need to use it again.";
      }
    } else {
      return "Despite its stylish allure, you can't find any other use for the alligator rug.";
    }
  }
}
