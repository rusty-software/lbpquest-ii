import { BaseLocation } from "./BaseLocation";

export class Winery extends BaseLocation {
  public readonly title = "Messina Hof Winery";
  private givenBook = false;
  private bookTasked = false;
  description() {
    let s =
      "You find yourself in the tasting room of the Messina Hof Winery. The room is strangely empty except for a spectral figure standing in the corner.";
    if (this.givenBook) {
    } else if (this.bookTasked) {
    } else {
      s +=
        "\n\nThe ghost, for what else could it be, drifts towards you, a sad look on its face.";
    }

    return s;
  }
}
