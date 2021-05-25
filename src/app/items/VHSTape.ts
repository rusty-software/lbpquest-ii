import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class VHSTape extends BaseItem {
  public id = ItemKey.VHSTape;
  public name = "vhs tape";
  public value = 5;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["play", this.play],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    // TODO: check to see if the VCR has been ejected
    return true;
  }

  public take(gameEngine: GameEngine): string {
    if (this.canTake(gameEngine)) {
      return "taking";
    } else {
      return "Can't take";
    }
  }

  public drop(gameEngine: GameEngine): string {
    return "";
  }

  public examine(gameEngine: GameEngine): string {
    return "";
  }

  public use(gameEngine: GameEngine): string {
    return this.play(gameEngine);
  }

  private play(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.hasItem(ItemKey.VCR)) {
      if (!gameEngine.inventoryContains(ItemKey.NRNSTraining)) {
        gameEngine.addToInventory(ItemKey.NRNSTraining);
        gameEngine.score += gameEngine.getItem(ItemKey.NRNSTraining).value;
        return "You press the 'Play' button on the VCR. The familiar opening, panning over the LA skyline at night, with a quick jump to Chinese Theatre and the Walk of Fame... you lose yourself in the viewing. You do, however, pay more special attention to the moves RJ is laying down, and Jason's entire training regimen. By the end of the movie, you really feel like you could take on the world! Or at least, a random syndicate from the east that uses karate dojos as fronts for organized crime...";
      } else {
        return "You've already watched it once. You should probably wait for everyone else before viewing it again.";
      }
    } else {
      return "You attempt to play the VHS tape, but quickly realize that there's nothing here to play it with.";
    }
  }
}
