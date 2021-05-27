import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class MismatchedBedroom extends BaseLocation {
  public id = LocationKey.MismatchedBedroom;
  public title = "Mismatched Bedroom";
  public descriptionText =
    "You are in the most mismatched bedroom you can imagine. Two queen sized beds are here. The one on the right has a wiry headboard; the one on the left is sans headboard. The one on the right is taller than the one on the left. The bedding on the right is camouflage style, and the left is traditional checkered in pastel blue and brown. Between the two beds is a nightstand with a striped drawer and a plain red drawer.\n\nIt's a screaming mess, and your latent/manifest OCD tendencies are screaming at you to burn it and/or run away.\n\nThe only exit is to the east, back to the dining room.";
}
