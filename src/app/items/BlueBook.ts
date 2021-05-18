import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LocationKey, Winery } from "../locations";

export class BlueBook extends BaseItem {
  id = ItemKey.BlueBook;
  name = "book";
  value = 5;
  isShown = true;
  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["read", this.examine],
    ["give", this.give],
  ]);

  canTake(gameEngine: GameEngine): boolean {
    return true;
  }
  take(gameEngine: GameEngine): string {
    return "You place the blue book into your duffle bag.";
  }
  drop(gameEngine: GameEngine): string {
    return "You drop the blue book. It looks no worse for the wear. Then again, it already looked pretty worn.";
  }
  examine(gameEngine: GameEngine): string {
    return 'The book, titled "A Tinkle in Wine", is of the thin, children\'s hardback variety. A quick scan through the well-worn pages exhibit lots of text muddied by wine splotches.';
  }
  use(gameEngine: GameEngine): string {
    return "You try to make use of the book, but aside from reading it, it's pretty useless.";
  }

  private give(gameEngine: GameEngine): string {
    let s = "";
    if (gameEngine.currentLocation.id === LocationKey.Winery) {
      console.log("giving book");
      const winery = gameEngine.currentLocation as Winery;
      const wine = gameEngine.getItem(ItemKey.DarkSweetWine);
      gameEngine.removeFromInventory(ItemKey.BlueBook);
      gameEngine.addToInventory(ItemKey.DarkSweetWine);
      gameEngine.score += !wine.taken ? wine.value : 0;
      wine.taken = true;
      winery.bookGiven = true;
      s =
        'She accepts the book lovingly, stroking a semi-skeletal hand over the cover. "Thank you. You have done me a great service. In return, please take this..." She hands you a bottle of Dark Sweet Wine, which you gently put into your duffle bag.';
    } else {
      s = "There is no one here interested in receiving the book.";
    }
    return s;
  }
}
