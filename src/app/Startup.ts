import { Item } from "./Item";
import { ItemKey } from "./items/ItemKey";
import { Screwdriver } from "./items";
import { Location } from "./Location";
import { LocationKey, Driveway } from "./locations";

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

  public static setupLocations(): Map<LocationKey, Location> {
    Startup.locations.set(
      LocationKey.Driveway,
      new Driveway([], [Startup.getItem(ItemKey.Screwdriver)])
    );

    return Startup.locations;
  }
}
