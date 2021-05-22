import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { EastWoods, LocationKey } from "../locations";

export class Bow extends BaseItem {
  public id = ItemKey.Bow;
  public name = "bow";
  public value = 5;
  public isShown = true;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["fire", this.fire],
    ["shoot", this.fire],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You pick up the bow and begin to put it into your duffle bag before realizing it would fit just fine over your shoulder.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You remove the bow from where it's slung over your shoulder and place it reverently on the ground.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The bow is made of a pale yellow wood, with ornate carvings on each tip and along the grip. It feels perfectly balanced.";
  }

  public use(gameEngine: GameEngine): string {
    return this.fire(gameEngine);
  }

  private fire(gameEngine: GameEngine): string {
    if (gameEngine.hasBow()) {
      const woods = gameEngine.currentLocation as EastWoods;
      if (woods.id === LocationKey.EastWoods) {
        if (!woods.challengeWon) {
          woods.challengeWon = true;
          const log = gameEngine.getItem(ItemKey.Log);
          gameEngine.score += !log.taken ? log.value : 0;
          log.taken = true;
          gameEngine.addToInventory(ItemKey.Log);
          return 'Unslinging the bow from your shoulder, you take careful aim at the largest of the logs in the stack. Drawing the string as you inhale deeply, you release. The arrow flies to a spot you absolutely did not expect: the center of the smallest bullseye on the smallest log. The hillbillies raise a righteous ruckus as the one with the longest beard runs down to retrieve the log. He hands it to you ceremoniously, stating "That was a sure shot! Here\'s your target practice prize!" Not knowing what else to do with it, you put the log into your duffle bag. The hillbillies all take a drink of moonshine from their jugs in your honor, and then return to their own target practice.';
        } else {
          return "You've already won the target practice log. There's no point in taking another one.";
        }
      } else {
        return "There's really nothing to shoot at here, despite any appearance to the contrary.";
      }
    } else {
      return "You aren't actually carrying a bow. Perhaps you might find one...?";
    }
  }
}
