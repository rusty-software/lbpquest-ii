import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class LeftSmoker extends BaseItem {
  public id = ItemKey.LeftSmoker;
  public name = "left smoker";

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
      "The smoker is somewhere between a state of disrepair and total decay. It smells of rust and muddy ash, and looks like it's been recently occupied by local fauna.";
    const pipeCleaners = gameEngine.getItem(ItemKey.PipeCleaners);
    if (!pipeCleaners.isShown) {
      gameEngine.currentLocation.showItem(ItemKey.PipeCleaners);
      s +=
        " You notice that someone at some point tried to do something on the order of cleaning this thing by using pipe cleaners. They didn't get very far, as the pipe cleaners have been incorporated into a rodent's nest of some sort.";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return "The inside of the smoker looks as if it hasn't been occupied by anything other than spiders, squirrels, rats, and a good tempered opossum. You decide it's better not to disturb their home more than you have to.";
  }
}
