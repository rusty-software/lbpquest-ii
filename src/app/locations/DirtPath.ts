import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items";

export class DirtPath extends BaseLocation {
  public id = LocationKey.DirtPath;
  public title = "Dirt Path";

  public description(): string {
    let s =
      "You are on a wide dirt path in the midst of some trees. A crude sign has been attached to a stick here, pointing the way to other locations from here. It indicates:\n\nN -> East Woods\nE -> Fire Pit\nSW -> Driveway\n\n";
    if (
      this.items.find(
        (i) => i.id === ItemKey.Crayons || i.id === ItemKey.ConstructionPaper
      )
    ) {
      s += "There appear to be some leftover supplies on the ground here.";
    }

    s += super.appendItems();

    return s;
  }
}
