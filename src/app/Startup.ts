import { Item } from "./Item";
import { ItemKey } from "./items/ItemKey";
import { Screwdriver } from "./items/Screwdriver";
import { Location } from "./Location";
import { Driveway } from "./locations/Driveway";
import { LocationKey } from "./locations/LocationKey";

export class Startup {
  private static items: Map<ItemKey, Item> = new Map();

  public static setupItems(): Map<ItemKey, Item> {
    Startup.items.set(ItemKey.Screwdriver, new Screwdriver());

    return Startup.items;
  }

  private static getItem(itemKey: ItemKey): Item {
      return Startup.items.get(itemKey)!;
  }

  public static setupLocations(): Map<LocationKey, Location> {
    const locations = new Map<LocationKey, Location>();
    locations.set(
      LocationKey.Driveway,
      new Driveway([], [Startup.getItem(ItemKey.Screwdriver)])
    );
    throw new Error("Method not implemented.");
  }
}
