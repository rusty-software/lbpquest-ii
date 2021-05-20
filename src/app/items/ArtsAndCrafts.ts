import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { Library, LocationKey } from "../locations";

export class ArtsAndCrafts extends BaseItem {
  id = ItemKey.ArtsAndCrafts;
  name = "arts and crafts";
  value = 5;
  isShown = true;
  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["give", this.give],
  ]);

  canTake(gameEngine: GameEngine): boolean {
    return true;
  }
  take(gameEngine: GameEngine): string {
    return "You place the arts and crafts into your duffle bag.";
  }
  drop(gameEngine: GameEngine): string {
    return "You drop the arts and crafts. You immediately regret the decision, as it's a VERY fine piece of work.";
  }
  examine(gameEngine: GameEngine): string {
    return "The arts and crafts are everything you dreamed they would be AND MORE. Indeed, they are probably the best thing you've ever produced.";
  }
  use(gameEngine: GameEngine): string {
    return "There's no using this... It's sublimity is such that using it would be considered a crime.";
  }

  private give(gameEngine: GameEngine): string {
    let s = "";
    if (gameEngine.currentLocation.id === LocationKey.Library) {
      const library = gameEngine.currentLocation as Library;
      const medal = gameEngine.getItem(ItemKey.ExPresidentialMedal);
      gameEngine.removeFromInventory(ItemKey.ArtsAndCrafts);
      gameEngine.addToInventory(ItemKey.ExPresidentialMedal);
      gameEngine.score += !medal.taken ? medal.value : 0;
      medal.taken = true;
      library.artsGiven = true;
      s =
        'She accepts the book lovingly, stroking a semi-skeletal hand over the cover. "Thank you. You have done me a great service. In return, please take this..." She hands you a bottle of Dark Sweet Wine, which you gently put into your duffle bag.';
    } else {
      s = "There is no one here interested in receiving the arts and crafts.";
    }
    return s;
  }
}
