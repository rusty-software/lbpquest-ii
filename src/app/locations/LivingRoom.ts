import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items";
import { GameEngine } from "../GameEngine";

export class LivingRoom extends BaseLocation {
  public id = LocationKey.LivingRoom;
  public title = "Living Room";
  public trophiesRequired = 5;
  private trophyCaseContents: ItemKey[] = [];

  public trophyPlacementSatisfied(): boolean {
    return this.trophyCaseContents.length >= this.trophiesRequired;
  }

  private trophiesRemaining(): number {
    return this.trophiesRequired - this.trophyCaseContents.length;
  }

  public description(): string {
    let s =
      "You are in the living room. It is a room of wonder, open to the second floor above, and practically littered with taxidermy. Two things immediately stand out to you: the magnificent deer head mounted above the fireplace, and the large set of nearly empty shelves to the right of it. The deer head seems to be looking in the direction of the shelves.";

    if (this.trophyPlacementSatisfied()) {
      s +=
        '\n\nThe deer head swivels in your direction and dips very slightly. "I, Lord of the Mounted Stags, salute your efforts. The trophy case is filled. Go ye to the Grotto with our blessing."';
    } else {
      s += `\n\nThe deer head swivels in your direction and glares at you. "Come ye to the living room to add an item to the trophy case? There is still space left for ${this.trophiesRemaining()} of them. Return and place them in order to receive your just reward."`;
      if (this.trophiesRemaining() === this.trophiesRequired) {
        s +=
          '\n\n"To begin, seek ye out the gold medal. I, Lord of the Mounted Stags, have spoken."';
      }
    }

    s +=
      "\n\nTo the southwest is a bar area. Directly west is the kitchen. What looks like the master bedroom is to the east, and the manor's entryway is to the south.";
    s += super.appendItems();
    return s;
  }

  public trophiesPlaced(): ItemKey[] {
    return this.trophyCaseContents;
  }

  public addTrophy(gameEngine: GameEngine, itemKey: ItemKey): string {
    if (this.trophyPlacementSatisfied()) {
      return "The trophy case is already full.";
    } else {
      if (this.isTrophy(itemKey)) {
        this.trophyCaseContents.push(itemKey);
        if (gameEngine.inventoryContains(itemKey)) {
          gameEngine.removeFromInventory(itemKey);
        }
        if (gameEngine.currentLocation.hasItem(itemKey)) {
          gameEngine.currentLocation.removeItem(itemKey);
        }

        const item = gameEngine.getItem(itemKey);
        if (this.trophiesRemaining() === 0) {
          return `You place the ${item.name} into the trophy case. The stag notices.\n\n"You have filled the trophy case with worthy contributions, thereby earning your just reward. Seek ye out your friends in the grotto!"`;
        }
        return `You place the ${
          item.name
        } into the trophy case. The stag notices.\n\n"You still require ${this.trophiesRemaining()} more trophies ere earning your just reward. Venture onward!"`;
      } else {
        return 'The deer head glares at you with consternation. "That meager offering? INADEQUATE! Seek ye out the TRUE trophies of the ranch! Should ye need advice, solicit from the other Mounted Lords."';
      }
    }
  }

  private isTrophy(itemKey: ItemKey): boolean {
    const trophies = [
      ItemKey.BlackBelt, //bull
      ItemKey.BlueRibbon, //bull
      ItemKey.CaptainsHat, //bird
      ItemKey.CueBall, //antelope
      ItemKey.DarkSweetWine, //bird
      ItemKey.DodgeBall, //bull
      ItemKey.ExPresidentialMedal, //bird
      ItemKey.GoldMedal, //deer
      ItemKey.Log, //antelope
      ItemKey.Scorecard, //antelope
    ];
    return trophies.indexOf(itemKey) > -1;
  }
}
