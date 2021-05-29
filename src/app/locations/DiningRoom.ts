import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items";

export class DiningRoom extends BaseLocation {
  public id = LocationKey.DiningRoom;
  public title = "Dining Room";
  public description(): string {
    let s =
      "The dining room is comfortably accommodating... for four people. You immediately realize that there's no way you'll be able to squeeze everyone around the table for poker, or even mafia. The corner of the room has a large, taxidermied eagle on a narrow bird stand. The bird's feet appear to be glued to the stand for extra stability.";
    if (this.hasItem(ItemKey.Glue)) {
      s +=
        " In fact, the bottle of Elmer's Glue that was used for the task is on the floor at the base of the stand.";
    }
    if (this.hasItem(ItemKey.GooglyEyes)) {
      s +=
        " It looks like the eagle has a pair of googly eyes pasted over the real (well, taxidermied) eyes as well.";
    }

    s +=
      "\n\nTo the west is a bedroom with two mismatched beds in it. The east wall has a doorway which leads to the pool. South leads back to the kitchen.";
    s += super.appendItems();
    return s;
  }
}
