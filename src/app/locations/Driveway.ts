import { Item } from "../Item";
import { Screwdriver } from "../items/Screwdriver";
import { Location } from "../Location";

export class Driveway implements Location {
  public readonly title = "Driveway";
  neighbors: Location[] = [];
  items: Item[] = [];

  constructor(neighbors: Location[], items: Item[]) {
    const screwdriver = new Screwdriver();
    this.items = items;
    this.neighbors = neighbors;
  }

  description(): string {
    let s =
      "You are in the driveway. The heat boils off of the pavement in shimmering waves as the sun beats down on you from an unmerciful summer sky.";
    this.items.map((item) => (s += `\n\nThere is a ${item.name} here.`));
    return s;
  }
}
