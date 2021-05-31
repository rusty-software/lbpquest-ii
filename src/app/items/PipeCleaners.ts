import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { ArtsAndCraftsSupply } from "./ArtsAndCraftsSupply";

export class PipeCleaners extends ArtsAndCraftsSupply {
  public id = ItemKey.PipeCleaners;
  public name = "pipe cleaners";
  public value = 5;

  public getName(): string {
    return "are some " + this.name;
  }

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the pipe cleaners and put them into your duffle bag. They crinkle a little, but are easily straightened out.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the pipe cleaners on the ground. Where they were once crinkled, they... remain crinkled.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The pipe cleaners are fuzzy, bendy little things. You realize after a moment that you've never actually seen them used to clean a pipe, but you've made countless stick figures and evil eyebrows with their ilk.";
  }
}
