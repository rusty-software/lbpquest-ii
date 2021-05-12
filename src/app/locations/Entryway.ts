import { BaseLocation } from "./BaseLocation";

export class Entryway extends BaseLocation {
  public readonly title: string = "Entryway";

  enter(): void {
    this.entered = true;
  }

  description(): string {
    return "You are in the Entryway.";
  }
}
