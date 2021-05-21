import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Pulpit extends BaseItem {
  public id = ItemKey.Pulpit;
  public name = "pulpit";

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "";
  }

  public drop(gameEngine: GameEngine): string {
    return "";
  }

  public examine(gameEngine: GameEngine): string {
    gameEngine.currentLocation.showItem(ItemKey.Fireball);

    return "The pulpit is makeshift, alright. It has a rickety shelf just below the lectern on which appears to be a bottle of Fireball.";
  }

  public use(gameEngine: GameEngine): string {
    return "You step behind the pulpit and give a rousing sermon on the dangers of... giving sermons to empty congregations. It was SUPER effective!";
  }
}
