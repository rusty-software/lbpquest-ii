import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class GoogleMap extends BaseItem {
  public id = ItemKey.GoogleMap;
  public name = "map";
  public value = 5;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You take the cowskin rug, roll it up, and put it into your duffle bag. You notice that it's hard to see in there.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the cowskin rug on the ground. You take your eyes off of it for a moment and it's gone, then there again.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The map has some stickers on it that as it turns out are completely meaningless. A small map key is in the corner and reads:\n\n--Google Maps ALPHA--\nProject Status:\n* Item Locator: COMPLETE\n* Routing: ABORTED";
  }

  public use(gameEngine: GameEngine): string {
    return 'In order to use the Google Maps ALPHA, you must begin your query with "ok google locate"';
  }
}
