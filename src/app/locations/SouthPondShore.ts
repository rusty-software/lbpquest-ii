import { BaseLocation } from "./BaseLocation";
import { GameEngine } from "../GameEngine";
import { LocationKey } from "./LocationKey";

export class SouthPondShore extends BaseLocation {
  public id = LocationKey.SouthPondShore;
  public title = "South Pond Shore";

  public sail(gameEngine: GameEngine): string {
    return "sail to north short";
  }
}
