import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Driveway extends BaseLocation {
  public id = LocationKey.Driveway;
  public title = "Driveway";
  public descriptionText =
    "You are in the driveway. The heat boils off of the pavement in shimmering waves as the sun beats down on you from an unmerciful summer sky. You can hear party music (Danzig?) and splashing coming from somewhere beyond the house to your north. There's also an apparent all-terrain golf cart parked just off of the circle.\n\nTo the north is the manor house. To the northwest is what appears to be some sort of small car port with a walk-in freezer. A dirt path leads off to the northeast, and to the southeast is a kids play area with a splashpad.";
}
