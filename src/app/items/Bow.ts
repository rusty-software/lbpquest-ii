import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Bow extends BaseItem {
  public id = ItemKey.Bow;
  public name = "bow";
  public value = 5;
  public isShown = true;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["fire", this.fire],
    ["shoot", this.fire],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You pick up the bow and begin to put it into your duffle bag before realizing it would fit just fine over your shoulder.";
  }

  public drop(gameEngine: GameEngine): string {
    return "You remove the bow from where it's slung over your shoulder and place it reverently on the ground.";
  }

  public examine(gameEngine: GameEngine): string {
    return "The bow is made of a pale yellow wood, with ornate carvings on each tip and along the grip. It feels perfectly balanced.";
  }

  public use(gameEngine: GameEngine): string {
    return this.fire(gameEngine);
  }

  private fire(gameEngine: GameEngine): string {
    return "TODO: can be fired at the target range";
  }
}
