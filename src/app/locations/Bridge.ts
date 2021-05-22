import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items";

export class Bridge extends BaseLocation {
  public id = LocationKey.Bridge;
  public title = "Bridge";

  public description(): string {
    let s =
      "You are on a bridge that crosses over the feeder to the pond. It looks well put-together. However, on closer inspection, you see that practically every plank is wrapped in patches of duct tape at one or more points.";
    if (this.items.find((item) => item.id === ItemKey.DuctTape)) {
      s +=
        " In fact, what's left of a roll of duct tape can be seen at the edge of the bridge.";
    }
    s +=
      "\n\nTo the northwest, a small golf course can be seen. To the southeast, there are some large woods. Directly south of here is an open field.";

    s += super.appendItems();
    return s;
  }
}
