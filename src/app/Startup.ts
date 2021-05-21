import { Item } from "./Item";
import {
  AlligatorRug,
  AllTerrainGolfCart,
  ArtsAndCrafts,
  Balusters,
  BlackBelt,
  BlueBook,
  BlueRibbon,
  Bow,
  Canoe,
  CaptainsHat,
  ChastityBelt,
  Cheetos,
  Cider,
  ConstructionPaper,
  CookieDough,
  CowskinRug,
  Crayons,
  CueBall,
  DarkSweetWine,
  DodgeBall,
  DuctTape,
  ExPresidentialMedal,
  Fireball,
  Glitter,
  Glue,
  GoldMedal,
  GolfBall,
  GoogleMap,
  GooglyEyes,
  IceCream,
  ItemKey,
  KeyboardBench,
  LeftSmoker,
  LiteBeer,
  Log,
  Magazine,
  Marg,
  Matches,
  Mothers,
  NRNSTraining,
  NutterButters,
  Oar,
  PeachCandle,
  PeachFourLoko,
  Pencils,
  PipeCleaners,
  PSDs,
  Pulpit,
  RedCandle,
  ReligiousIcons,
  RightSmoker,
  Scissors,
  Scorecard,
  ScotchTape,
  Screwdriver,
  ShrinkingPotion,
  SlipperyShorts,
  TrophyCase,
  UtilityStick,
  VHSTape,
  WingedShoes,
  Yarn,
} from "./items";
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
  Freezer,
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
  NorthWoods,
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
import { Direction } from "./Direction";

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
    Startup.locations.set(LocationKey.Freezer, new Freezer());
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
    Startup.items.set(ItemKey.AlligatorRug, new AlligatorRug());
    Startup.items.set(ItemKey.ArtsAndCrafts, new ArtsAndCrafts());
    Startup.items.set(ItemKey.Balusters, new Balusters());
    Startup.items.set(ItemKey.BlackBelt, new BlackBelt());
    Startup.items.set(ItemKey.BlueBook, new BlueBook());
    Startup.items.set(ItemKey.BlueRibbon, new BlueRibbon());
    Startup.items.set(ItemKey.Bow, new Bow());
    Startup.items.set(ItemKey.Canoe, new Canoe());
    Startup.items.set(ItemKey.CaptainsHat, new CaptainsHat());
    Startup.items.set(ItemKey.ChastityBelt, new ChastityBelt());
    Startup.items.set(ItemKey.Cheetos, new Cheetos());
    Startup.items.set(ItemKey.Cider, new Cider());
    Startup.items.set(ItemKey.ConstructionPaper, new ConstructionPaper());
    Startup.items.set(ItemKey.CookieDough, new CookieDough());
    Startup.items.set(ItemKey.CowskinRug, new CowskinRug());
    Startup.items.set(ItemKey.Crayons, new Crayons());
    Startup.items.set(ItemKey.CueBall, new CueBall());
    Startup.items.set(ItemKey.DarkSweetWine, new DarkSweetWine());
    Startup.items.set(ItemKey.DodgeBall, new DodgeBall());
    Startup.items.set(ItemKey.DuctTape, new DuctTape());
    Startup.items.set(ItemKey.ExPresidentialMedal, new ExPresidentialMedal());
    Startup.items.set(ItemKey.Fireball, new Fireball());
    Startup.items.set(ItemKey.Glitter, new Glitter());
    Startup.items.set(ItemKey.Glue, new Glue());
    Startup.items.set(ItemKey.GoldMedal, new GoldMedal());
    Startup.items.set(ItemKey.GolfBall, new GolfBall());
    Startup.items.set(ItemKey.GoogleMap, new GoogleMap());
    Startup.items.set(ItemKey.GooglyEyes, new GooglyEyes());
    Startup.items.set(ItemKey.IceCream, new IceCream());
    Startup.items.set(ItemKey.KeyboardBench, new KeyboardBench());
    Startup.items.set(ItemKey.LeftSmoker, new LeftSmoker());
    Startup.items.set(ItemKey.LiteBeer, new LiteBeer());
    Startup.items.set(ItemKey.Log, new Log());
    Startup.items.set(ItemKey.Magazine, new Magazine());
    Startup.items.set(ItemKey.Marg, new Marg());
    Startup.items.set(ItemKey.Matches, new Matches());
    Startup.items.set(ItemKey.Mothers, new Mothers());
    Startup.items.set(ItemKey.NRNSTraining, new NRNSTraining());
    Startup.items.set(ItemKey.NutterButters, new NutterButters());
    Startup.items.set(ItemKey.Oar, new Oar());
    Startup.items.set(ItemKey.PSDs, new PSDs());
    Startup.items.set(ItemKey.PeachCandle, new PeachCandle());
    Startup.items.set(ItemKey.PeachFourLoko, new PeachFourLoko());
    Startup.items.set(ItemKey.Pencils, new Pencils());
    Startup.items.set(ItemKey.PipeCleaners, new PipeCleaners());
    Startup.items.set(ItemKey.Pulpit, new Pulpit());
    Startup.items.set(ItemKey.RedCandle, new RedCandle());
    Startup.items.set(ItemKey.ReligiousIcons, new ReligiousIcons());
    Startup.items.set(ItemKey.RightSmoker, new RightSmoker());
    Startup.items.set(ItemKey.Scissors, new Scissors());
    Startup.items.set(ItemKey.Scorecard, new Scorecard());
    Startup.items.set(ItemKey.ScotchTape, new ScotchTape());
    Startup.items.set(ItemKey.Screwdriver, new Screwdriver());
    Startup.items.set(ItemKey.ShrinkingPotion, new ShrinkingPotion());
    Startup.items.set(ItemKey.SlipperyShorts, new SlipperyShorts());
    Startup.items.set(ItemKey.TrophyCase, new TrophyCase());
    Startup.items.set(ItemKey.UtilityStick, new UtilityStick());
    Startup.items.set(ItemKey.VHSTape, new VHSTape());
    Startup.items.set(ItemKey.WingedShoes, new WingedShoes());
    Startup.items.set(ItemKey.Yarn, new Yarn());
  }

  private static arrange() {
    Startup.arrangeDriveway();
    Startup.arrangeEntryway();
    Startup.arrangeFreezerPort();
    Startup.arrangeFreezer();
    Startup.arrangeSplashpad();
    Startup.arrangeRevivalHut();
    Startup.arrangeFort();
    Startup.arrangeSouthWoods();
    Startup.arrangeDirtPath();
    Startup.arrangeFirePit();
    Startup.arrangeBBQTrailer();
  }

  private static arrangeFreezerPort() {
    const freezerPort = Startup.getLocation(LocationKey.FreezerPort);
    freezerPort.neighbors = new NeighborMap([
      ["se" as Direction, Startup.getLocation(LocationKey.Driveway)],
    ]);
  }

  private static arrangeDriveway() {
    const driveway = Startup.getLocation(LocationKey.Driveway);
    driveway.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.Entryway)],
      ["ne" as Direction, Startup.getLocation(LocationKey.DirtPath)],
      ["se" as Direction, Startup.getLocation(LocationKey.Splashpad)],
      ["nw" as Direction, Startup.getLocation(LocationKey.FreezerPort)],
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

  private static arrangeFreezer() {
    const freezer = Startup.getLocation(LocationKey.Freezer);
    freezer.items = [Startup.getItem(ItemKey.IceCream)];
  }

  private static arrangeSplashpad() {
    const splashpad = Startup.getLocation(LocationKey.Splashpad);
    splashpad.neighbors = new NeighborMap([
      ["nw" as Direction, Startup.getLocation(LocationKey.Driveway)],
      ["s" as Direction, Startup.getLocation(LocationKey.Fort)],
      ["se" as Direction, Startup.getLocation(LocationKey.RevivalHut)],
    ]);
  }

  private static arrangeRevivalHut() {
    const hut = Startup.getLocation(LocationKey.RevivalHut);
    hut.neighbors = new NeighborMap([
      ["nw" as Direction, Startup.getLocation(LocationKey.Splashpad)],
      ["w" as Direction, Startup.getLocation(LocationKey.Fort)],
    ]);
    hut.items = [
      Startup.getItem(ItemKey.Pulpit),
      Startup.getItem(ItemKey.Fireball),
      Startup.getItem(ItemKey.KeyboardBench),
      Startup.getItem(ItemKey.Cider),
    ];
  }

  private static arrangeFort() {
    const fort = Startup.getLocation(LocationKey.Fort);
    fort.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.Splashpad)],
      ["e" as Direction, Startup.getLocation(LocationKey.RevivalHut)],
      ["s" as Direction, Startup.getLocation(LocationKey.SouthWoods)],
    ]);
    fort.items = [Startup.getItem(ItemKey.Glitter)];
  }

  private static arrangeSouthWoods() {
    const woods = Startup.getLocation(LocationKey.SouthWoods);
    woods.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.Fort)],
    ]);
  }

  private static arrangeDirtPath() {
    const dirtPath = Startup.getLocation(LocationKey.DirtPath);
    dirtPath.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.EastWoods)],
      ["e" as Direction, Startup.getLocation(LocationKey.FirePit)],
      ["sw" as Direction, Startup.getLocation(LocationKey.Driveway)],
      ["w" as Direction, Startup.getLocation(LocationKey.Entryway)],
    ]);
    dirtPath.items = [
      Startup.getItem(ItemKey.ConstructionPaper),
      Startup.getItem(ItemKey.Crayons),
    ];
  }

  private static arrangeFirePit() {
    const firePit = Startup.getLocation(LocationKey.FirePit);
    firePit.neighbors = new NeighborMap([
      ["e" as Direction, Startup.getLocation(LocationKey.Shed)],
      ["s" as Direction, Startup.getLocation(LocationKey.BBQTrailer)],
      ["w" as Direction, Startup.getLocation(LocationKey.Entryway)],
    ]);
    firePit.items = [
      Startup.getItem(ItemKey.Marg),
      Startup.getItem(ItemKey.ScotchTape),
    ];
  }

  private static arrangeBBQTrailer() {
    const trailer = Startup.getLocation(LocationKey.BBQTrailer);
    trailer.neighbors = new NeighborMap([
      ["n" as Direction, Startup.getLocation(LocationKey.FirePit)],
      ["ne" as Direction, Startup.getLocation(LocationKey.Shed)],
    ]);
    trailer.items = [
      Startup.getItem(ItemKey.LeftSmoker),
      Startup.getItem(ItemKey.RightSmoker),
      Startup.getItem(ItemKey.PipeCleaners),
      Startup.getItem(ItemKey.LiteBeer),
    ];
  }
}
