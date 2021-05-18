import { BaseLocation } from "./BaseLocation";

export class Winery extends BaseLocation {
  public readonly title = "Messina Hof Winery";
  private givenBook = false;
  description() {
    let s = "You find yourself in the tasting room of the Messina Hof Winery.";
    s += `entered: ${this.entered}`;

    return s;
  }

  enter(): void {
    throw new Error("Method not implemented.");
  }
}
