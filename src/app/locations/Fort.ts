import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Fort extends BaseLocation {
  public id = LocationKey.Fort;
  public title = "Kid's Fort";
  public descriptionText =
    "You are near the kid's fort. It has a small slide on one end and a narrow crawl way connecting two towers. It looks like fun, except for the fact that there is absolutely no way you would fit in any of the play areas.\n\nTo the east is some kind of covered sitting area, and to the south you can see a line of trees that lead to a full-on woods. North leads back to the splash pad.";
}
