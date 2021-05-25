import { BaseItem } from "./BaseItem";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "./ItemKey";
import { ArtsAndCrafts } from "./ArtsAndCrafts";

export class ArtsAndCraftsSupply extends BaseItem {
  private artsAndCraftsConstructed = false;
  public use(gameEngine: GameEngine): string {
    if (this.artsAndCraftsConstructed) {
      return "You've already constructed the best arts and crafts you could possibly make. You decide to save your supplies for next year.";
    }

    const supplies = gameEngine.inventoryArtsAndCraftsSupplies();
    if (supplies.length < 5) {
      return "Hmm, it looks like you could make a really cool arts and crafts project if you just had a few more supplies...";
    } else {
      this.artsAndCraftsConstructed = true;
      const artsAndCrafts = gameEngine.getItem(
        ItemKey.ArtsAndCrafts
      ) as ArtsAndCrafts;
      gameEngine.addToInventory(ItemKey.ArtsAndCrafts);
      gameEngine.score += artsAndCrafts.value;
      let s = "Using the ";
      supplies.map((supply) => {
        s += supply.name + ", ";
      });
      s +=
        "you construct what is probably the best piece of arts and crafts ever constructed, worthy of being hung in a place of honor in a museum or something. You carefully put it and all of the supplies into your duffle bag.";
      return s;
    }
  }
}
