import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items";
import { GameEngine } from "../GameEngine";

export class NorthPondShore extends BaseLocation {
  public id = LocationKey.NorthPondShore;
  public title = "North Pond Shore";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["sail", this.sail],
    ["swim", this.swim],
  ]);

  public description(): string {
    let s =
      "You are on the north shore of the pond. There is a thicket of reeds here, just past the water line.";

    const oar = this.items.find((i) => i.id === ItemKey.Oar);
    if (oar && !oar.isShown) {
      s += " There appears to be something hidden in the reeds.";
    }

    s +=
      "\n\nTo the north is a one-hole golf course. To the southeast, beyond the branch sticking up out of the pond's center, you can see the south shore. You'll need some sort of boat to get there, though.";

    s += super.appendItems();
    return s;
  }

  public sail(gameEngine: GameEngine): string {
    const shore = gameEngine.currentLocation as NorthPondShore;
    const canoeHere =
      shore.items.find((i) => i.id === ItemKey.Canoe) !== undefined;
    const hasOar = gameEngine.inventoryContains(ItemKey.Oar);
    if (canoeHere && hasOar) {
      let s =
        "You strike out from the north shore at a breakneck pace, aiming towards the south shore.";

      if (!gameEngine.getItem(ItemKey.CaptainsHat).taken) {
        gameEngine.addToInventory(ItemKey.CaptainsHat);
        const hat = gameEngine.getItem(ItemKey.CaptainsHat);
        gameEngine.score += hat.value;
        hat.taken = true;
        s +=
          " On your way to the other shore, you slow as you pass the branch sticking up in the middle of the pond. There's a captains hat hanging from it, which you promptly snatch and put into your duffle bag before continuing your journey.";
      }
      return s;
    } else if (!canoeHere && hasOar) {
      return "You wave the oar around a bit, but it doesn't seem as useful on its own. Maybe if you had a watercraft...?";
    } else if (canoeHere && !hasOar) {
      return "You begin to climb into the canoe, but realize you have nothing with which to propel it on hand...";
    } else {
      return "You have neither water craft nor something with which to propel said craft. Sailing is not an option currently.";
    }
  }

  private swim(gameEngine: GameEngine): string {
    return "You consider swimming across the pond, but... it's a large pond, and you're not sure what creatures might lie in its depths...";
  }
}
