import { Location } from "../location";

export class Driveway implements Location {
  public readonly title = "Driveway";
  description(): string {
    const s =
      "You are in the driveway. The heat boils off of the pavement in shimmering waves as the sun beats down on you from an unmerciful summer sky.";
    return s;
  }
}
