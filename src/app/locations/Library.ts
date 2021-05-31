import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { GameEngine } from "../GameEngine";
import { ItemKey } from "../items";

export class Library extends BaseLocation {
  public id = LocationKey.Library;
  public title = "George Bush Library";
  public artsGiven = false;
  private artsTasked = false;

  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["exit", this.exit],
    ["exit library", this.exit],
    ["leave", this.exit],
    ["leave library", this.exit],
  ]);

  public description(): string {
    let s =
      'Inexplicably, you find yourself in the George Bush Library. You might expect a crowd of people meandering about, but you are surprised to find only yourself and on other person in the gallery. And yes, instead of books, the walls are covered with various pieces of art. Most of them look as if they were painted by a rank amateur. A closer look at the artist\'s signature reveals the name "George Bush".\n\nThe one other person in the gallery is, in fact, George Bush.';
    if (this.artsGiven) {
      s +=
        " He's admiring the arts and crafts you donated. He seems completely consumed in the contemplation of it, and pays no attention to you.";
    } else if (this.artsTasked) {
      if (this.items.find((item) => item.id === ItemKey.ArtsAndCrafts)) {
        s +=
          " He looks at the arts and crafts, then at you, then back at the arts and crafts before saying \"It's a damn shame you didn't give that to me. I don't feel right hanging it up until you give it to me.\"";
      } else {
        s +=
          ' "Have you got anything for me to hang up?" he asks. He pats the wall in teh space where he intends to place it.';
      }
    } else {
      this.artsTasked = true;
      s +=
        ' He gives you as shrewd a look as he can, then states: "You look like the type of person that could produce some great arts and crafts. Tell you what -- if you can bring me some, I\'ll award you one of these Ex-Presidential Medals of Artistry. How does that sound?"';
    }

    s += '\n\n(You can leave the library by typing "exit".)';
    s += super.appendItems();
    return s;
  }

  private exit(gameEngine: GameEngine): string {
    const freezer = gameEngine.getLocation(LocationKey.Freezer);
    freezer.enter();
    gameEngine.changeLocation(freezer);
    return "";
  }
}
