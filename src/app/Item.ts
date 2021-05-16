import { GameEngine } from "./GameEngine";

export interface Item {
  id: number;
  name: string;
  isShown: boolean;
  value: number;
  taken: boolean;
  canTake(gameEngine: GameEngine): boolean;
  take(gameEngine: GameEngine): string;
  drop(gameEngine: GameEngine): string;
  examine(gameEngine: GameEngine): string;
  use(gameEngine: GameEngine): string;
}
