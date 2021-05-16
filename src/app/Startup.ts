import { Item } from "./Item";
import { ItemKey } from "./items/ItemKey";
import { Location } from "./Location";
import {
  Bar,
  BBQTrailer,
  BilliardsRoom,
  Bridge,
  BunkbedBedroom,
  CrossesBedroom,
  DiningRoom,
  DirtPath,
  Driveway,
  EastWoods,
  Entryway,
  FirePit,
  Fort,
  FreezerPort,
  GolfCourse,
  Grotto,
  Kitchen,
  Library,
  LivingRoom,
  LocationKey,
  MasterBedroom,
  MismatchedBedroom,
  NorthPondShore,
  Pool,
  RacingField,
  RevivalHut,
  Shed,
  SouthPondShore,
  SouthWoods,
  Splashpad,
  StagedBedroom,
  UpstairsLanding,
  Winery,
} from "./locations";
import { NeighborMap } from "./NeighborMap";
import { Screwdriver } from "./items";
import { Direction } from "./Direction";
import { AllTerrainGolfCart } from "./items/AllTerrainGolfCart";
import { GolfBall } from "./items/GolfBall";
import { NorthWoods } from "./locations/NorthWoods";

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
    Startup.locations.set(LocationKey.BBQTrailer, new BBQTrailer());
    Startup.locations.set(LocationKey.Bar, new Bar());
    Startup.locations.set(LocationKey.BilliardsRoom, new BilliardsRoom());
    Startup.locations.set(LocationKey.Bridge, new Bridge());
    Startup.locations.set(LocationKey.BunkbedBedroom, new BunkbedBedroom());
    Startup.locations.set(LocationKey.CrossesBedroom, new CrossesBedroom());
    Startup.locations.set(LocationKey.DiningRoom, new DiningRoom());
    Startup.locations.set(LocationKey.DirtPath, new DirtPath());
    Startup.locations.set(LocationKey.Driveway, new Driveway());
    Startup.locations.set(LocationKey.EastWoods, new EastWoods());
    Startup.locations.set(LocationKey.Entryway, new Entryway());
    Startup.locations.set(LocationKey.FirePit, new FirePit());
    Startup.locations.set(LocationKey.Fort, new Fort());
    Startup.locations.set(LocationKey.FreezerPort, new FreezerPort());
    Startup.locations.set(LocationKey.GolfCourse, new GolfCourse());
    Startup.locations.set(LocationKey.Grotto, new Grotto());
    Startup.locations.set(LocationKey.Kitchen, new Kitchen());
    Startup.locations.set(LocationKey.Library, new Library());
    Startup.locations.set(LocationKey.LivingRoom, new LivingRoom());
    Startup.locations.set(LocationKey.MasterBedroom, new MasterBedroom());
    Startup.locations.set(
      LocationKey.MismatchedBedroom,
      new MismatchedBedroom()
    );
    Startup.locations.set(LocationKey.NorthPondShore, new NorthPondShore());
    Startup.locations.set(LocationKey.NorthWoods, new NorthWoods());
    Startup.locations.set(LocationKey.Pool, new Pool());
    Startup.locations.set(LocationKey.RacingField, new RacingField());
    Startup.locations.set(LocationKey.RevivalHut, new RevivalHut());
    Startup.locations.set(LocationKey.Shed, new Shed());
    Startup.locations.set(LocationKey.SouthPondShore, new SouthPondShore());
    Startup.locations.set(LocationKey.SouthWoods, new SouthWoods());
    Startup.locations.set(LocationKey.Splashpad, new Splashpad());
    Startup.locations.set(LocationKey.StagedBedroom, new StagedBedroom());
    Startup.locations.set(LocationKey.UpstairsLanding, new UpstairsLanding());
    Startup.locations.set(LocationKey.Winery, new Winery());
  }

  private static instantiateItems() {
    Startup.items.set(ItemKey.AllTerrainGolfCart, new AllTerrainGolfCart());
    Startup.items.set(ItemKey.GolfBall, new GolfBall());
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
    driveway.items = [
      Startup.getItem(ItemKey.AllTerrainGolfCart),
      Startup.getItem(ItemKey.GolfBall),
    ];
  }

  private static arrangeEntryway() {
    const entryway = Startup.getLocation(LocationKey.Entryway);
    entryway.neighbors = new NeighborMap([
      ["s" as Direction, Startup.getLocation(LocationKey.Driveway)],
    ]);
  }
}
