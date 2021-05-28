import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";
import { CueBall, ItemKey } from "../items";

export class BilliardsRoom extends BaseLocation {
  public id = LocationKey.BilliardsRoom;
  public title = "Billiards Room";
  private rugVisible = false;
  public rugTaken = false;
  public mapTaken = false;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["shoot", this.shootPool],
    ["shoot pool", this.shootPool],
    ["play", this.shootPool],
    ["play pool", this.shootPool],
  ]);

  public description(): string {
    this.rugVisible = !this.rugVisible;
    let s =
      "You are in the billiards room. A suitable pool table with a red velvet top dominates the center of the room.";
    if (this.rugVisible && !this.rugTaken) {
      s += " A cowskin rug is clearly visible beneath the pool table.";
    }
    s +=
      " The pool table is set to be broken, with the cue ball on one end and the racked balls at the other, but there is a distinct lack of any and all pool cues.";
    if (!this.mapTaken) {
      s +=
        " There is also a map hanging on the wall. The map appears to have several dots on it.";
    }
    if (!this.rugVisible && !this.rugTaken) {
      s +=
        "\n\nA moment ago, you could have sworn there was a cowskin rug under the pool table.";
    }

    s +=
      "\n\nA door to the north leads to the kitchen, and the entryway is to the east.";
    s += super.appendItems();
    return s;
  }

  public shootPool(gameEngine: GameEngine): string {
    if (gameEngine.getItem(ItemKey.CueBall).taken) {
      return "You've already played a game of pool solo AND picked up the cue ball. You should probably find something better to do.";
    }
    if (!gameEngine.inventoryContains(ItemKey.UtilityStick)) {
      return "You attempt to shoot some pool, but quickly realize that you're not going to be able to break the rack without a stick of some kind.";
    }
    const cueBall = gameEngine.getItem(ItemKey.CueBall) as CueBall;
    cueBall.billiardsWon = true;
    cueBall.taken = true;
    gameEngine.addToInventory(ItemKey.CueBall);
    gameEngine.score += cueBall.value;
    if (gameEngine.currentLocation.hasItem(ItemKey.CueBall)) {
      gameEngine.currentLocation.removeItem(ItemKey.CueBall);
    }
    return "Using the utility stick, you line up a perfect break. The cue ball strikes the lead ball in the rack with such force that each ball immediately flies into one of the various pockets, clearing the table. The cue ball itself flies into your duffle bag. After shaking your head a bit to make sure you weren't imagining things, you confirm your mastery of billiards.";
  }
}
