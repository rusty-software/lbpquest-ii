import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Mothers extends BaseItem {
  public id = ItemKey.Mothers;
  public name = "mothers";
  public value = 5;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["eat", this.eat],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You put the Mothers into your duffle bag. They immediately improve the resale value of the bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the Mothers to the ground. It immediately improves the resale value of the ranch.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The Mothers are perfectly circular and covered in a thin layer of white icing in a smaller concentric circle. They smell of oatmeal and molasses. You have a hard time remembering why these are only in your grasp at LBP.";
  }

  public use(gameEngine: GameEngine): string {
    return this.eat(gameEngine);
  }

  private eat(gameEngine: GameEngine): string {
    return "You take a bite of one of the Mothers, and are suddenly transported back to all of the happiest times in your life. It seems that Mothers were always involved. You should probably talk to your therapist about that.";
  }
}
