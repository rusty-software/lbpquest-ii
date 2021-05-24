import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey, SlipperyShorts } from "../items";
import { GameEngine } from "../GameEngine";

export class Pool extends BaseLocation {
  public id = LocationKey.Pool;
  public title = "Pool";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["enter", this.enterGrotto],
    ["enter grotto", this.enterGrotto],
  ]);

  public description(): string {
    let s =
      "You have arrived at the pool. Music and sounds of frivolity emanate from the grotto here.";

    const shorts = this.items.find(
      (i) => i.id === ItemKey.SlipperyShorts
    ) as SlipperyShorts;
    if (shorts && !shorts.isShown) {
      s += " You hear a sucking, slurping sound coming from the pool skimmer.";
    }

    s +=
      "\n\nTo the west is an entrance into the house. To the north is an open field, with the pond beyond that.";
    s += super.appendItems();
    return s;
  }

  public enterGrotto(gameEngine: GameEngine): string {
    return "TODO: You can't hand the grotto";
  }
}
