import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Fort extends BaseLocation {
  id = LocationKey.Fort;
  title = "Kid's Fort";
  descriptionText =
    "You are near the Kid's Fort. It has a small slide on one end and a narrow crawl way connecting two towers. It looks like fun, except for the fact that there is absolutely no way you would fit in any of the play areas.\n\nTo the east is some kind of covered sitting area, and to the south you can see a line of trees that lead to a full-on woods.";
}
