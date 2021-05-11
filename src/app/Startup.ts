import { Item } from "./Item";
import { ItemKey } from "./items/ItemKey";
import { Screwdriver } from "./items";
import { Location } from "./Location";
import { LocationKey, Driveway, Entryway } from "./locations";
import { Direction } from "./Direction";

export class Startup {
  private static items: Map<ItemKey, Item> = new Map();
  private static locations: Map<LocationKey, Location> = new Map();

  public static setupItems(): Map<ItemKey, Item> {
    Startup.items.set(ItemKey.Screwdriver, new Screwdriver());

    return Startup.items;
  }

  private static getItem(itemKey: ItemKey): Item {
    return Startup.items.get(itemKey)!;
  }

  private static getLocation(locationKey: LocationKey): Location {
    return Startup.locations.get(locationKey)!;
  }

  public static setupLocations(): Map<LocationKey, Location> {
    const driveWay = new Driveway(new Map(), [
      Startup.getItem(ItemKey.Screwdriver),
    ]);
    const entryWay = new Entryway(
      new Map<Direction, Location>([[Direction.S, driveWay]]),
      []
    );
    driveWay.neighbors = new Map([[Direction.N, entryWay]]);

    Startup.locations.set(LocationKey.Driveway, driveWay);
    Startup.locations.set(LocationKey.Entryway, entryWay);

    return Startup.locations;
  }
}
