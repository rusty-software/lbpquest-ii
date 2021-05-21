import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items";

export class FirePit extends BaseLocation {
  public id = LocationKey.FirePit;
  public title = "Fire Pit";

  public description(): string {
    let s =
      "You are standing near a fire pit. It looks primed and ready to go with a stack of firewood in the center and another stack adjacent to the pit's edge. There are a couple of benches behind the pit from which the fire could probably be enjoyed.";

    if (this.items.find((item) => item.id === ItemKey.Marg)) {
      s += " You notice an all-too-familiar red Solo cup sitting on the bench.";
    }

    s +=
      "\n\nThere is a shed to the east, a trailer with a couple of barbeque smokers to the south, and a dirt path leads back to the west.";

    s += super.appendItems();
    return s;
  }
}
