import { BaseLocation } from "./BaseLocation";

export class Driveway extends BaseLocation {
  public readonly title = "Driveway";

  description(): string {
    let s =
      "You are in the driveway. The heat boils off of the pavement in shimmering waves as the sun beats down on you from an unmerciful summer sky.";
    this.items.map((item) => (s += `\n\nThere is a ${item.name} here.`));
    return s;
  }
}
