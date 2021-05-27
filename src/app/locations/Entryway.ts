import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class Entryway extends BaseLocation {
  public id = LocationKey.Entryway;
  public title = "Entryway";
  public descriptionText =
    "You are in the entryway to the manor. The lighting is dim here, and the tile floor echoes your footsteps quietly. A narrow staircase along the right hand wall leads up to the second floor and has a roll-top desk pressed up against its supporting wall. To the west is a room with a pool table in it, and just to the north is what appears to be the main living area.";
}
