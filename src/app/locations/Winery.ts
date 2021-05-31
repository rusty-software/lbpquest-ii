import { BaseLocation } from "./BaseLocation";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "../items";
import { LocationKey } from "./LocationKey";

export class Winery extends BaseLocation {
  public id = LocationKey.Winery;
  public title = "Messina Hof Winery";
  public bookGiven = false;
  private bookTasked = false;

  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["exit", this.exit],
    ["exit winery", this.exit],
    ["leave", this.exit],
    ["leave winery", this.exit],
  ]);

  public description(): string {
    let s =
      "You are surprised to find yourself in the tasting room of what must be the Messina Hof Winery. It must be so because there's a large placard stating thusly over the tasting bar at the far end of the room. Dim light filters in from the bay windows behind you, revealing dark, wooden-slatted walls. The area around the only person at the bar seems to be lit by a paler, whiter light. In fact, no one else is in the tasting room except you and the spectral figure.\n\n";
    if (this.bookGiven) {
      s +=
        "The figure appears to be reading a book. There is a slight and wistful smile on her ghostly face. She pays you no mind.";
    } else if (this.bookTasked) {
      if (this.items.find((item) => item.id === ItemKey.BlueBook)) {
        s +=
          'She looks at the book sadly, and says "The book must be freely given to me. I cannot take it..."';
      } else {
        s +=
          '"Have you found my book?" she asks, the glow of hope illuminating her pale visage.';
      }
    } else {
      this.bookTasked = true;
      s +=
        'The ghost, for what else could it be, drifts towards you, a sad look on its face.\n\n"My book..." she says, her voice a mournful wail. "I can\'t find my book... Can you help me find my book?"';
    }

    s += '\n\n(You can leave the winery by typing "exit".)';
    s += super.appendItems();
    return s;
  }

  private exit(gameEngine: GameEngine): string {
    const freezer = gameEngine.getLocation(LocationKey.Freezer);
    gameEngine.changeLocation(freezer);
    return "";
  }
}
