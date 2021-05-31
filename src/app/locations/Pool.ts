import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey, SlipperyShorts } from "../items";
import { GameEngine } from "../GameEngine";

export class Pool extends BaseLocation {
  public id = LocationKey.Pool;
  public title = "Pool";
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["enter", this.enterGrotto],
    ["enter grotto", this.enterGrotto],
  ]);

  public description(): string {
    let s =
      "You have arrived at the pool. The water looks pleasant enough, although it's highly likely that someone has already peed in it. It is, however, surprisingly empty. You wonder at this a moment until you realize that music and sounds of frivolity are emanating from the grotto on the far side of the pool. The grotto's entrance is dark, obscuring what might be generating such fun sounds, although it certainly seems likely that your friends are all in there waiting for you.";

    const shorts = this.items.find(
      (i) => i.id === ItemKey.SlipperyShorts
    ) as SlipperyShorts;
    if (shorts && !shorts.isShown) {
      s +=
        " You hear a sucking, slurping sound coming from the pool skimmer, as if it were clogged.";
    }

    s +=
      "\n\nTo the west is an entrance into the house. To the north is an open field, with the pond beyond that.";
    s += super.appendItems();
    return s;
  }

  public snacksResponse(gameEngine: GameEngine): string {
    const snacks = [
      ItemKey.Cheetos,
      ItemKey.CookieDough,
      ItemKey.IceCream,
      ItemKey.Mothers,
      ItemKey.NutterButters,
      ItemKey.PSDs,
    ];
    const foundSnacksCount = snacks.filter((snack) =>
      gameEngine.inventoryContains(snack)
    ).length;

    if (foundSnacksCount === 0) {
      return "The group whines at you for not bringing any snacks with you.";
    }
    if (foundSnacksCount < 3) {
      return "You receive a couple of pats on the back from your pals for bringing a couple of snacks with you.";
    }
    if (foundSnacksCount < 6) {
      return "Everyone thanks you for your thoughtfulness in bringing a good collection of snacks with you.";
    }
    if (foundSnacksCount === 6) {
      return "A rousing round of cheering is raised by your friends as you bring the entire missing collection of snacks with you.";
    }
    return "The universe breaks slightly as you manage to bring more snacks with you than exist.";
  }

  public drinksResponse(gameEngine: GameEngine): string {
    const drinks = [
      ItemKey.Cider,
      ItemKey.Fireball,
      ItemKey.LiteBeer,
      ItemKey.Marg,
      ItemKey.PeachFourLoko,
    ];
    const foundDrinksCount = drinks.filter((drink) =>
      gameEngine.inventoryContains(drink)
    ).length;

    if (foundDrinksCount === 0) {
      return "The group moans their bad luck on you not bringing any drinks with you.";
    }
    if (foundDrinksCount < 3) {
      return "The couple of drinks you brought with you are immediately snatched out of your hands. Your friends thank you.";
    }
    if (foundDrinksCount < 5) {
      return "Since you've brought plenty of drinks for everyone, you gladly share. It looks like they were running low, so you receive many accolades.";
    }
    if (foundDrinksCount === 5) {
      return 'Realizing you\'ve found every missing drink, your friends immediately crown you "Grotto Lifebringer" and hoist you up on their shoulders, bashing your head on the grotto roof. You take a drink and immediately recover.';
    }
    return "There must be something wrong with this game, because you brought more drinks than possible with you.";
  }

  public enterGrotto(gameEngine: GameEngine): string {
    const pool = gameEngine.getLocation(LocationKey.Pool) as Pool;
    if (!gameEngine.trophiesPlaced()) {
      return 'A grotto troll blocks your entry to the grotto. "You must EARN your right to party, my friend. Seek ye the trophies and place them in the case, then return to claim your true reward." They look at you not unkindly, but definitely will not be letting you into the grotto.';
    } else {
      let s =
        "The grotto troll stands aside and gestures for you to enter. You do, and join your friends there. They are already solidly into their napkins and cups.";
      s += "\n\n" + pool.snacksResponse(gameEngine);
      s += "\n\n" + pool.drinksResponse(gameEngine);
      return (
        s +
        `\n\nYou have successfully completed LBPQuest II! Here's how you did...\n\nScore: ${
          gameEngine.score
        } of a possible ${gameEngine.maxScore()}\n\nMoves: ${
          gameEngine.actionCount
        }`
      );
    }
  }
}
