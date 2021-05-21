import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Entryway extends BaseLocation {
  id = LocationKey.Entryway;
  title = "Entryway";

  descriptionText = "You are in the entryway.";
}
