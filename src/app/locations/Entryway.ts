import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Entryway extends BaseLocation {
  public id = LocationKey.Entryway;
  public title = "Entryway";
  public descriptionText = "TODO: You are in the entryway.";
}
