import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items";

export class BunkbedBedroom extends BaseLocation {
  public id = LocationKey.BunkbedBedroom;
  public title = "Bunkbed Bedroom";

  public description(): string {
    let s =
      "This room has a set of bunkbeds in it, perfect for creating space for more activities. Some of that space is occupied by a small side table.";
    if (this.hasItem(ItemKey.BlueBook)) {
      s += " There is a thin book on the side table.";
    }
    s +=
      ' There\'s also a TV stand with an old style tube TV and an actual VHS VCR. The clock on the VCR blinks a happy "12:00", and is accurate at least twice a day.';
    if (this.hasItem(ItemKey.NRNSTraining)) {
      s += " There appears to be a tape inside the VCR.";
    }
    s +=
      " The dormer seat has a thin cushion, probably just enough to make you not entirely uncomfortable as you gaze out the window between rounds in the pillow fights. Also, it looks like a tiny storage area is beneath the seat.";

    s += super.appendItems();
    return s;
  }
}
