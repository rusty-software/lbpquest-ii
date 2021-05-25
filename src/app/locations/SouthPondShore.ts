import { BaseLocation } from "./BaseLocation";
import { GameEngine } from "../GameEngine";
import { LocationKey } from "./LocationKey";
import { Canoe, ItemKey } from "../items";

export class SouthPondShore extends BaseLocation {
  public id = LocationKey.SouthPondShore;
  public title = "South Pond Shore";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["sail", this.sail],
    ["swim", this.swim],
  ]);

  public description(): string {
    let s = "You are on the south shore of the pond.";

    const canoe = this.items.find((i) => i.id === ItemKey.Canoe) as Canoe;
    if (canoe && !canoe.alligatorMoved) {
      s +=
        "You notice on the edge of the pond a canoe with a forlorn-looking alligator laying across it. A moment after registering this, the alligator exhales the saddest sigh you've heard in a while. \"I'm so lonely! If only I had some companionship...\" They sigh again, still laying across the canoe.";
    }

    s +=
      "\n\nTo the southeast is an open field. To the northwest, beyond the branch sticking up out of the pond's center, you can see the north shore. You'll need some sort of boat to get there, though.";

    s += super.appendItems();
    return s;
  }

  public sail(gameEngine: GameEngine): string {
    const shore = gameEngine.currentLocation as SouthPondShore;
    const maybeCanoe = shore.items.find((i) => i.id === ItemKey.Canoe);
    const canoe = maybeCanoe as Canoe;
    const canoeHere = maybeCanoe !== undefined;
    if (canoeHere && !canoe.alligatorMoved) {
      return "Your attempts to use the canoe are blocked by the large alligator that is laying in it. If only it could be convinced to move...";
    }

    const hasOar = gameEngine.inventoryContains(ItemKey.Oar);
    if (canoeHere && hasOar) {
      const southShore = gameEngine.getLocation(LocationKey.SouthPondShore);
      const northShore = gameEngine.getLocation(LocationKey.NorthPondShore);
      gameEngine.changeLocation(northShore);
      southShore.removeItem(ItemKey.Canoe);
      northShore.addItem(ItemKey.Canoe);

      let s =
        "You strike out from the south shore at a breakneck pace, aiming towards the north shore, and arriving mere moments later.";

      if (!gameEngine.getItem(ItemKey.CaptainsHat).taken) {
        gameEngine.addToInventory(ItemKey.CaptainsHat);
        const hat = gameEngine.getItem(ItemKey.CaptainsHat);
        gameEngine.score += hat.value;
        hat.taken = true;
        s +=
          " On your way to the north shore, you slow as you pass the branch sticking up in the middle of the pond. There's a captains hat hanging from it, which you promptly snatch and put into your duffle bag before continuing your journey.";
      }
      return s;
    } else if (!canoeHere && hasOar) {
      return "You wave the oar around a bit, but it doesn't seem as useful on its own. Maybe if you had a watercraft...?";
    } else if (canoeHere && !hasOar) {
      return "You move to climb into the canoe, but realize you have nothing with which to propel it on hand...";
    } else {
      return "You have neither water craft nor something with which to propel said craft. Sailing is not an option currently.";
    }
  }

  private swim(gameEngine: GameEngine): string {
    return "You consider swimming across the pond, but... it's a large pond, and you're not sure what creatures might lie in its depths...";
  }
}
