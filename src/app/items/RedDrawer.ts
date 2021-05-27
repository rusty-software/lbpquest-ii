import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { Mothers } from "./Mothers";
import { NutterButters } from "./NutterButters";

export class RedDrawer extends BaseItem {
  public id = ItemKey.RedDrawer;
  public name = "red drawer";
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
      "You open the red drawer. It smells vaguely of peanut butter potpourri.";
    const nutterButters = gameEngine.getItem(
      ItemKey.NutterButters
    ) as NutterButters;
    if (!nutterButters.taken) {
      nutterButters.isShown = true;
      s +=
        " The most likely reason is that there is a package of Nutter Butters inside.";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You try to find a use for the drawer, but don't want to accidentally leave something in it.";
  }
}
