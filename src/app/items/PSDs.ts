import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class PSDs extends BaseItem {
  public id = ItemKey.PSDs;
  public name = "psds";
  public value = 5;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["eat", this.eat],
  ]);

  public getName(): string {
    return "are some " + this.name;
  }

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    this.isShown = true;
    return "You put the bag of PSDs into your duffle bag, saving them for later. Or now. Whenever.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the PSDs on the ground, not really understanding why you would ever do such a thing.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The PSDs are powdery, sugary, and donuty. The smell of confectionary sugar fills your nostrils, and you involuntarily begin to salivate.";
  }

  public use(gameEngine: GameEngine): string {
    return super.useInLivingRoom(gameEngine) || this.eat(gameEngine);
  }

  private eat(gameEngine: GameEngine): string {
    return "You pop one of the PSDs into your mouth. Its powdery sweetness quickly turns to gooey sludge as you chew. You regret nothing.";
  }
}
