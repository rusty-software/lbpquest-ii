import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { BilliardsRoom, LocationKey } from "../locations";

export class GoogleMap extends BaseItem {
  public id = ItemKey.GoogleMap;
  public name = "map";
  public value = 5;
  public isShown = true;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.BilliardsRoom) {
      const billiardsRoom = gameEngine.currentLocation as BilliardsRoom;
      if (!billiardsRoom.mapTaken) {
        billiardsRoom.mapTaken = true;
      }
    }
    return "You take the Google Maps ALPHA and put it into your duffle bag. It mutters under its electronic breath about how it preferred being on the wall.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You drop the Google Maps ALPHA to the ground. It gives and exasperated sigh, then seems to shrug its shoulders. At least, that's the impression you get, since technically maps don't have shoulders.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The map has some stickers on it that, as it turns out, are completely meaningless. A small map key is in the corner and reads:\n\n--Google Maps ALPHA--\nProject Status:\n* Item Locator: COMPLETE\n* Routing: ABORTED\n\nNote: project abandoned in favor of map that can do routing; market research indicates directions to locations are more important than just the locations. Since this map refused to learn to take or give directions, a new project was started from the ground up.";
  }

  public use(gameEngine: GameEngine): string {
    return 'In order to use the Google Maps ALPHA, you must begin your query with "ok google locate"';
  }
}
