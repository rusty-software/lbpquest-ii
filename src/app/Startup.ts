import { Item } from "./Item";
import { ItemKey } from "./items/ItemKey";
import { Location } from "./Location";
import { Driveway, Entryway, LocationKey } from "./locations";
import { NeighborMap } from "./NeighborMap";
import { Screwdriver } from "./items";
import { Direction } from "./Direction";
import { AllTerrainGolfCart } from "./items/AllTerrainGolfCart";

export class Startup {
  public static readonly items: Map<ItemKey, Item> = new Map();
  public static readonly locations: Map<LocationKey, Location> = new Map();

  private static getItem(itemKey: ItemKey): Item {
    return Startup.items.get(itemKey)!;
  }

  private static getLocation(locationKey: LocationKey): Location {
    return Startup.locations.get(locationKey)!;
  }

  public static init() {
    Startup.instantiateLocations();
    Startup.instantiateItems();
    Startup.arrange();
  }
  private static instantiateLocations() {
    Startup.locations.set(
      LocationKey.Driveway,
      new Driveway(new NeighborMap(), [])
    );
    Startup.locations.set(
      LocationKey.Entryway,
      new Entryway(new NeighborMap(), [])
    );
  }

  private static instantiateItems() {
    Startup.items.set(ItemKey.AllTerrainGolfCart, new AllTerrainGolfCart());
    Startup.items.set(ItemKey.Screwdriver, new Screwdriver());
  }

  private static arrange() {
    Startup.arrangeDriveway();
    Startup.arrangeEntryway();
  }

  private static arrangeDriveway() {
    const driveway = Startup.getLocation(LocationKey.Driveway);
    driveway.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.Entryway)],
    ]);
    driveway.items = [Startup.getItem(ItemKey.AllTerrainGolfCart)];
  }

  private static arrangeEntryway() {
    const entryway = Startup.getLocation(LocationKey.Entryway);
    entryway.neighbors = new NeighborMap([
      ["s" as Direction, Startup.getLocation(LocationKey.Driveway)],
    ]);
  }
}
