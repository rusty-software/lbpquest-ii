import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class BilliardsRoom extends BaseLocation {
  public id = LocationKey.BilliardsRoom;
  public title = "Billiards Room";
  private rugVisible = false;
  public rugTaken = false;
  public mapTaken = false;

  public description(): string {
    this.rugVisible = !this.rugVisible;
    let s =
      "You are in the billiards room. A suitable pool table with a red velvet top dominates the center of the room.";
    if (this.rugVisible && !this.rugTaken) {
      s += " A cowskin rug is clearly visible beneath the pool table.";
    }
    s +=
      " The pool table is set to be broken, with the cue ball on one end and the racked balls at the other, but there is a distinct lack of any and all pool cues.";
    if (!this.mapTaken) {
      s +=
        " There is also a map hanging on the wall. The map appears to have several dots on it.";
    }
    if (!this.rugVisible && !this.rugTaken) {
      s +=
        "\n\nA moment ago, you could have sworn there was a cowskin rug under the pool table.";
    }

    s +=
      "\n\nA door to the north leads to the kitchen, and the entryway is to the east.";
    s += super.appendItems();
    return s;
  }
}
