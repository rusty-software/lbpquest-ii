import { BaseItem } from "./BaseItem";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "./ItemKey";
import { ArtsAndCrafts } from "./ArtsAndCrafts";

export class ArtsAndCraftsSupply extends BaseItem {
  public static assembled = false;
  public use(gameEngine: GameEngine): string {
    if (ArtsAndCraftsSupply.assembled) {
      return "You've already constructed the best arts and crafts you could possibly make. You decide to save your supplies for next year.";
    }

    const supplies = gameEngine.inventoryArtsAndCraftsSupplies();
    if (supplies.length < 5) {
      return "Hmm, it looks like you could make a really cool arts and crafts project if you just had a few more supplies...";
    } else if (ArtsAndCraftsSupply.assembled) {
      return "You have already constructed what is certainly the most important piece of arts and crafts in the form. Probably better to rest on your laurels here.";
    } else {
      ArtsAndCraftsSupply.assembled = true;
      const artsAndCrafts = gameEngine.getItem(
        ItemKey.ArtsAndCrafts
      ) as ArtsAndCrafts;
      gameEngine.addToInventory(ItemKey.ArtsAndCrafts);
      gameEngine.score += artsAndCrafts.value;

      const names = supplies.map((supply) => supply.name);
      names[names.length - 1] = "and " + names[names.length - 1];
      return `Using the ${names.join(
        ", "
      )}, you construct what is probably the best piece of arts and crafts ever constructed, worthy of being hung in a place of honor in a museum or something. You carefully put it and all of the supplies into your duffle bag.`;
    }
  }
}
