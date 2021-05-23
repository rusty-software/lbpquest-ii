import { BaseLocation } from "./BaseLocation";
import { GameEngine } from "../GameEngine";
import { LocationKey } from "./LocationKey";
import { Canoe, ItemKey } from "../items";

export class SouthPondShore extends BaseLocation {
  public id = LocationKey.SouthPondShore;
  public title = "South Pond Shore";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["sail", this.sail],
    ["swim", this.swim],
  ]);

  public description(): string {
    let s = "You are on the south shore of the pond.";

    const canoe = this.items.find((i) => i.id === ItemKey.Canoe) as Canoe;
    if (canoe && !canoe.alligatorMoved) {
      s +=
        "You notice on the edge of the pond a canoe with a forlorn-looking alligator laying across it. A moment after registering this, the alligator exhales the saddest sigh you've heard in a while. \"I'm so lonely! If only I had some companionship...\" They sigh again, still laying across the canoe.";
    }

    s +=
      "\n\nTo the southeast is an open field. To the northwest, beyond the branch sticking up out of the pond's center, you can see the north shore. You'll need some sort of boat to get there, though.";

    s += super.appendItems();
    return s;
  }

  public sail(gameEngine: GameEngine): string {
    return "sail to north shore";
  }

  private swim(gameEngine: GameEngine): string {
    return "You consider swimming across the pond, but... it's a large pond, and you're not sure what creatures might lie in its depths...";
  }
}
