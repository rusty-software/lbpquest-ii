import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Bar extends BaseLocation {
  public id = LocationKey.Bar;
  public title = "Bar";
  public descriptionText =
    "The bar is really just a glorified kitchen counter with some barstools pushed up against it. Still it should be serviceable enough for getting your drink on with three of your good buddies, provided your buddies can manage to sit on stools with spinning tops and no backs.\n\nTo the northwest is the kitchen, and to the northeast it the living room.";
}
