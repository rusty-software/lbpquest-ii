import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { Library, LocationKey } from "../locations";

export class ArtsAndCrafts extends BaseItem {
  public id = ItemKey.ArtsAndCrafts;
  public name = "arts and crafts";
  public value = 5;
  public isShown = true;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["give", this.give],
  ]);

  public getName(): string {
    return "are some " + this.name;
  }

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You place the arts and crafts into your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the arts and crafts. You immediately regret the decision, as it's a VERY fine piece of work.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The arts and crafts are everything you dreamed they would be AND MORE. Indeed, they are probably the best thing you've ever produced.";
  }

  public use(gameEngine: GameEngine): string {
    return (
      super.useInLivingRoom(gameEngine) ||
      "Using the arts and crafts would only reduce its sublimity. You cannot bring yourself to do so..."
    );
  }

  private give(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.Library) {
      const library = gameEngine.currentLocation as Library;
      const medal = gameEngine.getItem(ItemKey.ExPresidentialMedal);
      gameEngine.removeFromInventory(ItemKey.ArtsAndCrafts);
      gameEngine.addToInventory(ItemKey.ExPresidentialMedal);
      gameEngine.score += !medal.taken ? medal.value : 0;
      medal.taken = true;
      library.artsGiven = true;
      return 'He takes a look at the arts and crafts you\'ve constructed, turning it upside down and flipping it over. "Wow, I\'ve never seen something so... expressive! This is going right here," he says, hanging your arts and crafts in a place of prestige on the library wall. "You\'ve earned yourself an Ex-Presidential Medal!" He withdraws from his pocket a medal that reminds you of something from one of the Olympics. You bend down slightly as he places the medal over your head. "Wear it with pride wherever you go!" With that, he turns to admire the arts and crafts again, seeming to forget that you\'re even there.';
    } else {
      return "There is no one here interested in receiving the arts and crafts.";
    }
  }
}
