import { Item } from "../Item";
import { Location } from "../Location";

export class Entryway implements Location {
  title: string = "Entryway";
  items: Item[] = [];

  description(): string {
    return "You are in the Entryway.";
  }
}
