import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { WingedShoes } from "./WingedShoes";

export class MasterBedroomChest extends BaseItem {
  public id = ItemKey.MasterBedroomChest;
  public name = "chest";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["open", this.examine],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "Given the smell emanating from the chest, as well as the style-less thing draped over it, you wisely decide against taking the chest.";
  }

  public drop(gameEngine: GameEngine): string {
    return "";
  }

  public examine(gameEngine: GameEngine): string {
    let s =
      "You open the chest. The air that escapes is quite dank, danker than it should be.";
    const shoes = gameEngine.getItem(ItemKey.WingedShoes) as WingedShoes;
    if (!shoes.taken) {
      shoes.isShown = true;
      s +=
        " The most likely reason is that there are a pair of shoes in there. Looks (smells) like they've been in there a while.";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "You attempt to use the chest, but its willpower is too strong for your charisma.";
  }
}
