import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Eagle extends BaseItem {
  public id = ItemKey.Eagle;
  public name = "eagle";
  public isShown = true;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["talk to", this.chat],
    ["speak to", this.chat],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "";
  }

  public drop(gameEngine: GameEngine): string {
    return "";
  }

  public examine(gameEngine: GameEngine): string {
    let s = "The eagle stands at attention atop its stand in the corner.";
    if (!gameEngine.getItem(ItemKey.GooglyEyes).taken) {
      s +=
        " The googly eyes make it look a bit more ridiculous than it has to.";
    } else {
      s +=
        " Its piercing gaze feels as if it's gazing into your soul.\n\nA moment later, the beak parts, and in a less screechy voice than you might've expected, asks \"Would ye speak with the Lord of the Mounted Birds?\n";
    }
    return s;
  }

  public use(gameEngine: GameEngine): string {
    return this.chat(gameEngine);
  }

  public chat(gameEngine: GameEngine): string {
    return 'The eagle attempts to shift in place but finds its feet securely glued. Shrugging, it states "My keen sight has revealed the following to me: three of the most prized trophies are the Captains Hat, the Dark Sweet Wine, and the Presidental Medal. Since my confinement here, at least two of those items have moved beyond the bounds of the ranch. I wish you good hunting in your quest to retrieve them."\n\nThe eagle settles its shoulders back after failing to ruffle its feathers, and it takes its silent vigil up once more.';
  }
}
