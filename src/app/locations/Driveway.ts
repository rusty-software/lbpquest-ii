import { BaseLocation } from "./BaseLocation";

export class Driveway extends BaseLocation {
  public readonly title = "Driveway";

  descriptionText = "You are in the driveway. The heat boils off of the pavement in shimmering waves as the sun beats down on you from an unmerciful summer sky.\n\nThere appears to be some kind of all terrain golf cart here.\n\nTo the north is the manor house. To the northwest is what appears to be some sort of small car port with a walk-in freezer. A dirt path leads off to the northeast, and to the southeast is a kids play area with a splashpad.";

  enter(): void {
    this.entered = true;
  }
}
