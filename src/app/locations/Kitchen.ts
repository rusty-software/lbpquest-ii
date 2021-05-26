import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Kitchen extends BaseLocation {
  public id = LocationKey.Kitchen;
  public title = "Kitchen";
  public descriptionText =
    "You are in the kitchen. It's small, yet functional, with a fridge and plenty of cabinets. You notice there's what looks like a bull's skull sitting on top of the cabinets, its horns almost touching the ceiling.\n\nTo the north is the dining room. East leads to the living room, and southeast will take you to the bar.";
}
