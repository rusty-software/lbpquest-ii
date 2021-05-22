import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class DuctTape extends BaseItem {
  public id = ItemKey.DuctTape;
  public name = "duct tape";
  public value = 5;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You put the duct tape into your duffle bag. It's sticky, but manages to not adhere to anything else.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the duct tape. It usefully lays on the ground.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The duct tape is silvery gray and about half gone, but looks like there's still plenty with which to stick things together.";
  }

  public use(gameEngine: GameEngine): string {
    return "TODO: how to intelligently handle duct tape usage";
  }
}
