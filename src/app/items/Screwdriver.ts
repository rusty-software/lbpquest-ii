import { GameEngine } from "../GameEngine";
import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { LocationKey } from "../locations";
import { VHSTape } from "./VHSTape";

export class Screwdriver extends BaseItem {
  public id = ItemKey.Screwdriver;
  public name = "screwdriver";
  public value = 5;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You have successfully put the screwdriver into your duffle bag!";
  }

  public drop(gameEngine: GameEngine): string {
    return "You have successfully dropped the screwdriver.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The screwdriver looks like it can be used to screw or poke things.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.BunkbedBedroom) {
      const vhsTape = gameEngine.getItem(ItemKey.VHSTape) as VHSTape;
      const s = "You jam the screwdriver into the Eject button hole.";
      if (vhsTape.isInVCR) {
        vhsTape.isInVCR = false;
        vhsTape.isShown = true;
        return s + " It does the trick as the VHS tape comes free.";
      } else {
        return (
          s +
          " The gears whir a bit, but nothing comes out. Turns out there's no tape in the VCR."
        );
      }
    } else {
      return "You wave the screwdriver around, magic wand style. Unfortunately, nothing more exciting happens.";
    }
  }
}
