import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class BullSkull extends BaseItem {
  public id = ItemKey.BullSkull;
  public name = "skull";
  public isShown = true;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["talk to", this.chat],
    ["speak to", this.chat],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "You reach up, attempting to take the skull from its vantage point. It sees you coming a mile away, and points its very large, very menacing horn at you. You think better of trying to stuff it into your duffle bag.";
  }

  public drop(gameEngine: GameEngine): string {
    return "";
  }

  public examine(gameEngine: GameEngine): string {
    return 'The skull sits atop the cabinetry, its empty sockets seeming to gaze down over the area, as if was a lord and the kitchen its domain.\n\nA moment later, the skull\'s jawbone creaks open and asks "Would ye speak with the Undead Lord of the Mounted Bulls?"';
  }

  public use(gameEngine: GameEngine): string {
    return this.chat(gameEngine);
  }

  public chat(gameEngine: GameEngine): string {
    return 'The bull skull vibrates a little as its deep, sepulchral voice resonated around the kitchen. "Not much is given for me to know, save this: three of the most prized trophies on the ranch are the Black Belt, the Blue Ribbon, and the Dodgeball. I know not where these trophies might be, but I do know they must be earned. I wish you good fortune, as I forsee you will need it."\n\nThe skull settles back into its original position and speaks no more.';
  }
}
