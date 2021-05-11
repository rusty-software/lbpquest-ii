import { GameEvent } from "./events";
import { Item } from "./Item";
import { ItemKey } from "./items/ItemKey";
import { Location } from "./Location";
import { Driveway } from "./locations/Driveway";
import { LocationKey } from "./locations/LocationKey";
import { Startup } from "./Startup";

export class GameEngine {
  public currentLocation: Location;
  public score: number;
  public actionCount: number;
  public display: string;

  private inventory: Map<string, Item>;
  private items: Map<ItemKey, Item> = new Map();
  private locations: Map<LocationKey, Location> = new Map();
  private events: GameEvent[];

  setup() {
    this.items = Startup.setupItems();
    this.locations = Startup.setupLocations();
  }

  constructor() {
    this.setup();

    this.score = 0;
    this.actionCount = 0;

    this.currentLocation = this.locations.get(LocationKey.Driveway)!;
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
