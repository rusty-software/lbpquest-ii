import { GameEngine } from "./GameEngine";

export interface Item {
    id: string;
    name: string;
    description(): string;
    takeable(): boolean;
    take(gameEngine: GameEngine): void;
    examine(gameEngine: GameEngine): void;
    use(gameEngine: GameEngine): void;
}