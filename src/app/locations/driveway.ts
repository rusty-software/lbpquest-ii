import { Item } from "../item";
import { Screwdriver } from "../items/screwdriver";
import { Location } from "../location";

export class Driveway implements Location {
  public readonly title = "Driveway";
  items: Item[];

  constructor() {
    const screwdriver = new Screwdriver();
    this.items = [screwdriver];
  }

  description(): string {
    let s =
      "You are in the driveway. The heat boils off of the pavement in shimmering waves as the sun beats down on you from an unmerciful summer sky.";
    this.items.map((item) => {
      s += `\n\nThere is a ${item.name} here.`;
    })
    return s;
  }
}
