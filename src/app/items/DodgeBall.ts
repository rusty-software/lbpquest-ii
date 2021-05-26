import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";
import { LivingRoom, LocationKey } from "../locations";

export class DodgeBall extends BaseItem {
  public id = ItemKey.DodgeBall;
  public name = "dodgeball";
  public value = 10;

  public canTake(gameEngine: GameEngine): boolean {
    return true;
  }

  public take(gameEngine: GameEngine): string {
    return "You put the dodgeball into your duffle bag. It manages to hit absolutely everything in there.";
  }

  public drop(gameEngine: GameEngine): string {
    return 'You drop the dodgeball. It immediately hits the ground, tagging it as "out" forever.';
  }

  public examine(gameEngine: GameEngine): string {
    return "The dodgeball is a bright blue rubbery type. We'll tell Phil it's red.";
  }

  public use(gameEngine: GameEngine): string {
    if (gameEngine.currentLocation.id === LocationKey.LivingRoom) {
      const livingRoom = gameEngine.currentLocation as LivingRoom;
      return livingRoom.addTrophy(gameEngine, this.id);
    }
    return "You consider chunking the dodgeball at random things, but realize that you don't want to lose the deposit. Maybe you can find another use for it somewhere else?";
  }
}
