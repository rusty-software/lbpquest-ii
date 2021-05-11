import { BaseLocation } from "./BaseLocation";

export class Entryway extends BaseLocation {
  public readonly title: string = "Entryway";

  description(): string {
    return "You are in the Entryway.";
  }
}
