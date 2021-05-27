import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items";

export class UpstairsLanding extends BaseLocation {
  public id = LocationKey.UpstairsLanding;
  public title = "Upstairs Landing";

  public description(): string {
    let s =
      "You are on the upstairs landing of the manor. The landing itself is narrow, but feels larger as it is open to below. The railing here overlooks the living room with its multitude of taxidermy.";

    const balusters = this.items.find((i) => i.id === ItemKey.Balusters);
    if (balusters && !balusters.isShown) {
      balusters.isShown = true;
      s +=
        " Speaking of railing, it feels slightly unstable. Maybe some of the balusters are loose?";
    } else {
      s += " The railing seems to be missing a couple of balusters.";
    }

    s +=
      "\n\nTo the west, you can see a neatly staged bedroom. To the east is a bedroom with some religious iconography clearly visible on the walls. South leads into a bedroom with bunkbeds. You can also go back down the stairs.";
    s += super.appendItems();
    return s;
  }
}
