import { GameEvent } from "./events";
import { Item } from "./item";
import { Location } from "./location";

export class GameEngine {
  public currentLocation?: Location;
  public score: number;
  public actionCount: number;

  private inventory: Map<string, Item>;
  private events: GameEvent[];

  constructor() {
    this.score = 0;
    this.actionCount = 0;
    this.inventory = new Map<string, Item>();
    this.events = [];
  }

  public getEvents(): GameEvent[] {
    return this.events;
  }

  public send(input: string) {
    console.log("sent:", input);
  }
}
