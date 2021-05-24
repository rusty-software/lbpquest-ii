import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Entryway extends BaseLocation {
  public id = LocationKey.Entryway;
  public title = "Entryway";
  public descriptionText =
    "You are in the entryway to the manor. The tile echoes your footsteps quietly. Stairs lead up along the right hand wall, a roll-top desk pressed up against the base. To the west is a room with a pool table in it, and just to the north is what appears to be the main living area.";
}
