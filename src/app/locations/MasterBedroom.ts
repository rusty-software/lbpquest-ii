import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items";

export class MasterBedroom extends BaseLocation {
  public id = LocationKey.MasterBedroom;
  public title = "Master Bedroom";
  public description(): string {
    let s =
      "You are in the master bedroom. The taxidermy tsunami from the living room seems to have ended up in here. The most magnificent of these is a large mounted antelope on the wall above the bed.";
    if (this.hasItem(ItemKey.AlligatorRug)) {
      s +=
        " Second only to the antelope is an alligator skin rug at the foot of the bed.";
    }
    s +=
      " There is also a small chest of some sort pushed up against the wall and covered by another random animal skin.\n\nThe mounted antelope's eyes seem to follow you around the room.";

    s +=
      "\n\nThe only exit from this bedroom is to the west, back to the living room.";
    s += super.appendItems();
    return s;
  }
}
