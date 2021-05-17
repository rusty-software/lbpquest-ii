import { BaseLocation } from "./BaseLocation";

export class FreezerPort extends BaseLocation {
  public readonly title = "Freezer Port";
  descriptionText =
    "You are in what appears to be a small car port with a walk-in freezer in the back. The freezer door looks unlocked.";

  enter(): void {
    this.entered = true;
  }
}
