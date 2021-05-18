import { BaseLocation } from "./BaseLocation";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "../items";
import { LocationKey } from "./LocationKey";

export class Winery extends BaseLocation {
  public readonly title = "Messina Hof Winery";
  private bookGiven = false;
  private bookTasked = false;

  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["give book", this.give],
    ["give book to ghost", this.give],
    ["exit", this.exit],
    ["exit winery", this.exit],
    ["leave", this.exit],
    ["leave winery", this.exit],
  ]);

  description() {
    let s =
      "You find yourself in the tasting room of the Messina Hof Winery. The room is strangely empty except for a spectral figure standing in the corner.";
    if (this.bookGiven) {
      s +=
        " The figure appears to be reading a book. There is a slight and wistful smile on her ghostly face. She pays you no mind.";
    } else if (this.bookTasked) {
      if (this.items.find((item) => item.id === ItemKey.BlueBook)) {
        s +=
          '\n\nShe looks at the book sadly, and says "The book must be given to me. I cannot take it..."';
      } else {
        s +=
          '\n\n"Have you found my book?" she asks, the glow of hope illuminating her pale visage.';
      }
    } else {
      this.bookTasked = true;
      s +=
        '\n\nThe ghost, for what else could it be, drifts towards you, a sad look on its face.\n\n"My book..." she says, her voice a mournful wail. "I can\'t find my book... Can you help me find my book?"';
    }

    return s;
  }

  public give(gameEngine: GameEngine): string {
    gameEngine.removeFromInventory(ItemKey.BlueBook);
    gameEngine.addToInventory(ItemKey.DarkSweetWine);
    this.bookGiven = true;
    return 'She accepts the book lovingly, stroking a semi-skeletal hand over the cover. "Thank you. You have done me a great service. In return, please take this..." She hands you a bottle of Dark Sweet Wine, which you gently put into your duffle bag.';
  }

  private exit(gameEngine: GameEngine) {
    const freezer = gameEngine.getLocation(LocationKey.Freezer);
    gameEngine.changeLocation(freezer);
    return "";
  }
}
