import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { Mothers } from "./Mothers";

export class StripedDrawer extends BaseItem {
  public id = ItemKey.StripedDrawer;
  public name = "striped drawer";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["open", this.examine],
  ]);

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
    let s =
      "You open the striped drawer. It smells vaguely of oatmeal potpourri.";
    const mothers = gameEngine.getItem(ItemKey.Mothers) as Mothers;
    if (!mothers.taken) {
      mothers.isShown = true;
      s +=
        " The most likely reason is that there is a package of Mothers Ice Oatmeal cookies inside.";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You try to find a use for the drawer, but don't want to accidentally leave something in it.";
  }
}
