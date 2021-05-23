import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "../items";

export class GolfCourse extends BaseLocation {
  public id = LocationKey.GolfCourse;
  public title = "Golf Course";
  public challengeWon = false;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["play", this.playGolf],
    ["play golf", this.playGolf],
  ]);

  public descriptionText =
    "You are on a simple golf course with a tee that is about 30 yards from the hole. There is little breeze to stave off the stifling heat, and you're reminded once again why golf was dropped as a regular LBP activity.\n\nTo the north, you can see woods. To the south is the shore of the local pond. Southeast takes you to a bridge over the pond feeder.";

  public playGolf(gameEngine: GameEngine): string {
    const golfCourse = gameEngine.currentLocation as GolfCourse;

    if (golfCourse.challengeWon) {
      return "You've already won the hole-in-one scorecard, and it's too hot to do any more golfing.";
    } else {
      if (
        !gameEngine.inventoryContains(ItemKey.GolfBall) &&
        !gameEngine.inventoryContains(ItemKey.UtilityStick)
      ) {
        return "You can't play golf without a ball and club of some sort at the very least.";
      } else if (
        gameEngine.inventoryContains(ItemKey.GolfBall) &&
        !gameEngine.inventoryContains(ItemKey.UtilityStick)
      ) {
        return "You've got the golf ball, and you're on the golf course... If only you had something with which to hit the golf ball into the hole...";
      } else if (
        !gameEngine.inventoryContains(ItemKey.GolfBall) &&
        gameEngine.inventoryContains(ItemKey.UtilityStick)
      ) {
        return "You're on the golf course, and you have a stick... if only you had something to knock into the hole...";
      } else {
        golfCourse.challengeWon = true;
        gameEngine.addToInventory(ItemKey.Scorecard);
        const scorecard = gameEngine.getItem(ItemKey.Scorecard);
        gameEngine.score += !scorecard.taken ? scorecard.value : 0;
        scorecard.taken = true;
        return 'You tee up the lucky golf ball and take a swing at it using the utility stick. The strike is true, or true enough, as the ball curves around and onto the tiny green, rolling to a precarious stop on the lip of the hole before falling. You quickly reclaim the ball and see that the bottom of the hole is lined with a score card. The card has your name and a mark of "1" next to the only hole listed. Smiling, you put the scorecard into your duffle bag.';
      }
    }
  }
}
