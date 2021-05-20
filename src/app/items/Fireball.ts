import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Fireball extends BaseItem {
  id = ItemKey.Fireball;
  name = "fireball";
  value = 5;
  customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["drink", this.drink],
  ]);

  canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  take(gameEngine: GameEngine): string {
    return "You take the fireball and put it lovingly into your duffle bag.";
  }

  drop(gameEngine: GameEngine): string {
    return "You drop the fireball. You're not sure why you did that, but there it is.";
  }

  examine(gameEngine: GameEngine): string {
    return "The bottle of fireball is about half full of delicious smelling liquid cinnamon.";
  }

  use(gameEngine: GameEngine): string {
    return this.drink(gameEngine);
  }

  private drink(gameEngine: GameEngine): string {
    return "You take a swig of the fireball. It goes down smooth like warm liquid magma. Luckily, you've built up a tolerance for liquid magma.";
  }
}
