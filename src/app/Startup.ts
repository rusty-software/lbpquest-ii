import { Item } from "./Item";
import { ItemKey } from "./items/ItemKey";
import { Location } from "./Location";
import { LocationKey, Driveway, Entryway } from "./locations";
import { NeighborMap } from "./NeighborMap";
import { Screwdriver } from "./items";

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
    Startup.items.set(ItemKey.Screwdriver, new Screwdriver());
  }

  private static arrange() {
    Startup.arrangeDriveway();
    Startup.arrangeEntryway();
  }

  private static arrangeDriveway() {}

  private static arrangeEntryway() {}
}
