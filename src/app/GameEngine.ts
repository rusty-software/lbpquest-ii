import { GameEvent } from "./events";
import { Item } from "./Item";
import { Location } from "./Location";
import { Driveway } from "./locations/Driveway";

export class GameEngine {
  public currentLocation?: Location;
  public score: number;
  public actionCount: number;
  public display: string;

  private inventory: Map<string, Item>;
  private events: GameEvent[];

  constructor() {
    this.score = 0;
    this.actionCount = 0;
    this.currentLocation = new Driveway();
    this.display = this.currentLocation.description();
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
