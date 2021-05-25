import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items";
import { GameEngine } from "../GameEngine";

export class StagedBedroom extends BaseLocation {
  public id = LocationKey.StagedBedroom;
  public title = "Staged Bedroom";

  public description(): string {
    let s =
      "You have entered what is surely the most well thought out bedroom in the manor. A fine wiry headboard frames a queen-sized bed against a red accent wall on which hang three architectural printings. Suspended in the center of the wall is a stylized candle sconce.";
    if (this.hasItem(ItemKey.RedCandle)) {
      s += " The sconce currently holds a thick red candle.";
    }
    s += " There's even a neat, simple side table next to the bed.";
    if (this.hasItem(ItemKey.Matches)) {
      s += " A box of matches is on the table.";
    }
    s +=
      " The dormer seat is the only oddly decorated thing, as it sports no seat cushion.";

    return s;
  }

  public examine(gameEngine: GameEngine): string {
    return "examining the staged bedroom dormer seat";
  }
}
