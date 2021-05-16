import { GameEngine } from "./GameEngine";

export interface Item {
  id: string;
  name: string;
  displayable: boolean;
  takeable(gameEngine: GameEngine): boolean;
  take(gameEngine: GameEngine): string;
  drop(gameEngine: GameEngine): string;
  examine(gameEngine: GameEngine): string;
  use(gameEngine: GameEngine): string;
}
