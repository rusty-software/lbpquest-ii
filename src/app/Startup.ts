import { Item } from "./Item";
import {
  AlligatorRug,
  AllTerrainGolfCart,
  Antelope,
  ArtsAndCrafts,
  Balusters,
  BlackBelt,
  BlueBook,
  BlueRibbon,
  Bow,
  BullSkull,
  BunkbedBedroomDormerSeat,
  Canoe,
  CaptainsHat,
  ChastityBelt,
  Cheetos,
  Cider,
  ConstructionPaper,
  CookieDough,
  CowskinRug,
  Crayons,
  CrossesBedroomDormerSeat,
  CrossesBedroomNightstand,
  CueBall,
  DarkSweetWine,
  Desk,
  DodgeBall,
  DuctTape,
  Eagle,
  ExPresidentialMedal,
  Fireball,
  Fridge,
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
  MasterBedroomChest,
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
  RedDrawer,
  Reeds,
  ReligiousIcons,
  RightSmoker,
  Scissors,
  Scorecard,
  ScotchTape,
  Screwdriver,
  ShrinkingPotion,
  Skimmer,
  SlipperyShorts,
  StagedBedroomDormerSeat,
  StripedDrawer,
  TrophyCase,
  UtilityStick,
  VCR,
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
    Startup.items.set(ItemKey.Antelope, new Antelope());
    Startup.items.set(ItemKey.ArtsAndCrafts, new ArtsAndCrafts());
    Startup.items.set(ItemKey.Balusters, new Balusters());
    Startup.items.set(ItemKey.BlackBelt, new BlackBelt());
    Startup.items.set(ItemKey.BlueBook, new BlueBook());
    Startup.items.set(ItemKey.BlueRibbon, new BlueRibbon());
    Startup.items.set(ItemKey.Bow, new Bow());
    Startup.items.set(ItemKey.BullSkull, new BullSkull());
    Startup.items.set(
      ItemKey.BunkbedBedroomDormerSeat,
      new BunkbedBedroomDormerSeat()
    );
    Startup.items.set(ItemKey.Canoe, new Canoe());
    Startup.items.set(ItemKey.CaptainsHat, new CaptainsHat());
    Startup.items.set(ItemKey.ChastityBelt, new ChastityBelt());
    Startup.items.set(ItemKey.Cheetos, new Cheetos());
    Startup.items.set(ItemKey.Cider, new Cider());
    Startup.items.set(ItemKey.ConstructionPaper, new ConstructionPaper());
    Startup.items.set(ItemKey.CookieDough, new CookieDough());
    Startup.items.set(ItemKey.CowskinRug, new CowskinRug());
    Startup.items.set(ItemKey.Crayons, new Crayons());
    Startup.items.set(
      ItemKey.CrossesBedroomDormerSeat,
      new CrossesBedroomDormerSeat()
    );
    Startup.items.set(
      ItemKey.CrossesBedroomNightstand,
      new CrossesBedroomNightstand()
    );
    Startup.items.set(ItemKey.CueBall, new CueBall());
    Startup.items.set(ItemKey.DarkSweetWine, new DarkSweetWine());
    Startup.items.set(ItemKey.Desk, new Desk());
    Startup.items.set(ItemKey.DodgeBall, new DodgeBall());
    Startup.items.set(ItemKey.DuctTape, new DuctTape());
    Startup.items.set(ItemKey.Eagle, new Eagle());
    Startup.items.set(ItemKey.ExPresidentialMedal, new ExPresidentialMedal());
    Startup.items.set(ItemKey.Fireball, new Fireball());
    Startup.items.set(ItemKey.Fridge, new Fridge());
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
    Startup.items.set(ItemKey.MasterBedroomChest, new MasterBedroomChest());
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
    Startup.items.set(ItemKey.RedDrawer, new RedDrawer());
    Startup.items.set(ItemKey.Reeds, new Reeds());
    Startup.items.set(ItemKey.ReligiousIcons, new ReligiousIcons());
    Startup.items.set(ItemKey.RightSmoker, new RightSmoker());
    Startup.items.set(ItemKey.Scissors, new Scissors());
    Startup.items.set(ItemKey.Scorecard, new Scorecard());
    Startup.items.set(ItemKey.ScotchTape, new ScotchTape());
    Startup.items.set(ItemKey.Screwdriver, new Screwdriver());
    Startup.items.set(ItemKey.ShrinkingPotion, new ShrinkingPotion());
    Startup.items.set(ItemKey.Skimmer, new Skimmer());
    Startup.items.set(ItemKey.SlipperyShorts, new SlipperyShorts());
    Startup.items.set(ItemKey.StripedDrawer, new StripedDrawer());
    Startup.items.set(
      ItemKey.StagedBedroomDormerSeat,
      new StagedBedroomDormerSeat()
    );
    Startup.items.set(ItemKey.TrophyCase, new TrophyCase());
    Startup.items.set(ItemKey.UtilityStick, new UtilityStick());
    Startup.items.set(ItemKey.VCR, new VCR());
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
    Startup.arrangeShed();
    Startup.arrangeEastWoods();
    Startup.arrangeRacingField();
    Startup.arrangeBridge();
    Startup.arrangeGolfCourse();
    Startup.arrangeNorthWoods();
    Startup.arrangeNorthPondShort();
    Startup.arrangeSouthPondShort();
    Startup.arrangePool();
    Startup.arrangeLanding();
    Startup.arrangeStagedBedroom();
    Startup.arrangeBunkbedBedroom();
    Startup.arrangeCrossesBedroom();
    Startup.arrangeLivingRoom();
    Startup.arrangeBilliardsRoom();
    Startup.arrangeKitchen();
    Startup.arrangeBar();
    Startup.arrangeDiningRoom();
    Startup.arrangeMismatchedBedroom();
    Startup.arrangeMasterBedroom();
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
      ["n" as Direction, Startup.getLocation(LocationKey.LivingRoom)],
      ["w" as Direction, Startup.getLocation(LocationKey.BilliardsRoom)],
      ["s" as Direction, Startup.getLocation(LocationKey.Driveway)],
      ["up" as Direction, Startup.getLocation(LocationKey.UpstairsLanding)],
    ]);
    entryway.items = [
      Startup.getItem(ItemKey.Desk),
      Startup.getItem(ItemKey.Magazine),
      Startup.getItem(ItemKey.Pencils),
    ];
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
      ["w" as Direction, Startup.getLocation(LocationKey.DirtPath)],
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

  private static arrangeShed() {
    const shed = Startup.getLocation(LocationKey.Shed);
    shed.neighbors = new NeighborMap([
      ["w", Startup.getLocation(LocationKey.FirePit)],
      ["sw", Startup.getLocation(LocationKey.BBQTrailer)],
    ]);
    shed.items = [
      Startup.getItem(ItemKey.Bow),
      Startup.getItem(ItemKey.Screwdriver),
      Startup.getItem(ItemKey.Scissors),
    ];
  }

  private static arrangeEastWoods() {
    const woods = Startup.getLocation(LocationKey.EastWoods);
    woods.neighbors = new NeighborMap([
      ["nw", Startup.getLocation(LocationKey.Bridge)],
      ["w", Startup.getLocation(LocationKey.RacingField)],
      ["s", Startup.getLocation(LocationKey.DirtPath)],
    ]);
  }

  private static arrangeRacingField() {
    const field = Startup.getLocation(LocationKey.RacingField);
    field.neighbors = new NeighborMap([
      ["nw", Startup.getLocation(LocationKey.SouthPondShore)],
      ["n", Startup.getLocation(LocationKey.Bridge)],
      ["e", Startup.getLocation(LocationKey.EastWoods)],
      ["s", Startup.getLocation(LocationKey.Pool)],
    ]);
  }

  private static arrangeBridge() {
    const field = Startup.getLocation(LocationKey.Bridge);
    field.neighbors = new NeighborMap([
      ["nw", Startup.getLocation(LocationKey.GolfCourse)],
      ["se", Startup.getLocation(LocationKey.EastWoods)],
      ["s", Startup.getLocation(LocationKey.RacingField)],
    ]);
    field.items = [Startup.getItem(ItemKey.DuctTape)];
  }

  private static arrangeGolfCourse() {
    const course = Startup.getLocation(LocationKey.GolfCourse);
    course.neighbors = new NeighborMap([
      ["n", Startup.getLocation(LocationKey.NorthWoods)],
      ["s", Startup.getLocation(LocationKey.NorthPondShore)],
      ["se", Startup.getLocation(LocationKey.Bridge)],
    ]);
  }

  private static arrangeNorthWoods() {
    const woods = Startup.getLocation(LocationKey.NorthWoods);
    woods.neighbors = new NeighborMap([
      ["s", Startup.getLocation(LocationKey.GolfCourse)],
    ]);
  }

  private static arrangeNorthPondShort() {
    const shore = Startup.getLocation(LocationKey.NorthPondShore);
    shore.neighbors = new NeighborMap([
      ["n", Startup.getLocation(LocationKey.GolfCourse)],
    ]);
    shore.items = [
      Startup.getItem(ItemKey.Reeds),
      Startup.getItem(ItemKey.Oar),
    ];
  }

  private static arrangeSouthPondShort() {
    const shore = Startup.getLocation(LocationKey.SouthPondShore);
    shore.neighbors = new NeighborMap([
      ["se", Startup.getLocation(LocationKey.RacingField)],
    ]);
    shore.items = [Startup.getItem(ItemKey.Canoe)];
  }

  private static arrangePool() {
    const pool = Startup.getLocation(LocationKey.Pool);
    pool.neighbors = new NeighborMap([
      ["w", Startup.getLocation(LocationKey.DiningRoom)],
      ["n", Startup.getLocation(LocationKey.RacingField)],
    ]);
    pool.items = [
      Startup.getItem(ItemKey.Skimmer),
      Startup.getItem(ItemKey.SlipperyShorts),
    ];
  }

  private static arrangeLanding() {
    const landing = Startup.getLocation(LocationKey.UpstairsLanding);
    landing.neighbors = new NeighborMap([
      ["w", Startup.getLocation(LocationKey.StagedBedroom)],
      ["e", Startup.getLocation(LocationKey.CrossesBedroom)],
      ["s", Startup.getLocation(LocationKey.BunkbedBedroom)],
      ["down", Startup.getLocation(LocationKey.Entryway)],
    ]);
    landing.items = [Startup.getItem(ItemKey.Balusters)];
  }

  private static arrangeStagedBedroom() {
    const bedroom = Startup.getLocation(LocationKey.StagedBedroom);
    bedroom.neighbors = new NeighborMap([
      ["e", Startup.getLocation(LocationKey.UpstairsLanding)],
    ]);
    bedroom.items = [
      Startup.getItem(ItemKey.StagedBedroomDormerSeat),
      Startup.getItem(ItemKey.PSDs),
      Startup.getItem(ItemKey.RedCandle),
      Startup.getItem(ItemKey.Matches),
    ];
  }

  private static arrangeBunkbedBedroom() {
    const bedroom = Startup.getLocation(LocationKey.BunkbedBedroom);
    bedroom.neighbors = new NeighborMap([
      ["n", Startup.getLocation(LocationKey.UpstairsLanding)],
    ]);
    bedroom.items = [
      Startup.getItem(ItemKey.BunkbedBedroomDormerSeat),
      Startup.getItem(ItemKey.BlueBook),
      Startup.getItem(ItemKey.VCR),
      Startup.getItem(ItemKey.VHSTape),
      Startup.getItem(ItemKey.Cheetos),
    ];
  }

  private static arrangeCrossesBedroom() {
    const bedroom = Startup.getLocation(LocationKey.CrossesBedroom);
    bedroom.neighbors = new NeighborMap([
      ["w", Startup.getLocation(LocationKey.UpstairsLanding)],
    ]);
    bedroom.items = [
      Startup.getItem(ItemKey.CrossesBedroomDormerSeat),
      Startup.getItem(ItemKey.CrossesBedroomNightstand),
      Startup.getItem(ItemKey.ReligiousIcons),
      Startup.getItem(ItemKey.ChastityBelt),
      Startup.getItem(ItemKey.Yarn),
    ];
  }

  private static arrangeLivingRoom() {
    const livingRoom = Startup.getLocation(LocationKey.LivingRoom);
    livingRoom.neighbors = new NeighborMap([
      ["sw", Startup.getLocation(LocationKey.Bar)],
      ["w", Startup.getLocation(LocationKey.Kitchen)],
      ["e", Startup.getLocation(LocationKey.MasterBedroom)],
      ["s", Startup.getLocation(LocationKey.Entryway)],
    ]);
    livingRoom.items = [Startup.getItem(ItemKey.TrophyCase)];
  }

  private static arrangeBilliardsRoom() {
    const billiardsRoom = Startup.getLocation(LocationKey.BilliardsRoom);
    billiardsRoom.neighbors = new NeighborMap([
      ["n", Startup.getLocation(LocationKey.Kitchen)],
      ["e", Startup.getLocation(LocationKey.Entryway)],
    ]);
    billiardsRoom.items = [
      Startup.getItem(ItemKey.CueBall),
      Startup.getItem(ItemKey.CowskinRug),
      Startup.getItem(ItemKey.GoogleMap),
    ];
  }

  private static arrangeKitchen() {
    const kitchen = Startup.getLocation(LocationKey.Kitchen);
    kitchen.neighbors = new NeighborMap([
      ["n", Startup.getLocation(LocationKey.DiningRoom)],
      ["e", Startup.getLocation(LocationKey.LivingRoom)],
      ["se", Startup.getLocation(LocationKey.Bar)],
      ["s", Startup.getLocation(LocationKey.BilliardsRoom)],
    ]);
    kitchen.items = [
      Startup.getItem(ItemKey.BullSkull),
      Startup.getItem(ItemKey.Fridge),
      Startup.getItem(ItemKey.CookieDough),
    ];
  }

  private static arrangeBar() {
    const bar = Startup.getLocation(LocationKey.Bar);
    bar.neighbors = new NeighborMap([
      ["nw", Startup.getLocation(LocationKey.Kitchen)],
      ["ne", Startup.getLocation(LocationKey.LivingRoom)],
    ]);
    bar.items = [Startup.getItem(ItemKey.PeachCandle)];
  }

  private static arrangeDiningRoom() {
    const diningRoom = Startup.getLocation(LocationKey.DiningRoom);
    diningRoom.neighbors = new NeighborMap([
      ["s", Startup.getLocation(LocationKey.Kitchen)],
      ["w", Startup.getLocation(LocationKey.MismatchedBedroom)],
      ["e", Startup.getLocation(LocationKey.Pool)],
    ]);
    diningRoom.items = [
      Startup.getItem(ItemKey.Eagle),
      Startup.getItem(ItemKey.Glue),
      Startup.getItem(ItemKey.GooglyEyes),
    ];
  }

  private static arrangeMismatchedBedroom() {
    const bedroom = Startup.getLocation(LocationKey.MismatchedBedroom);
    bedroom.neighbors = new NeighborMap([
      ["e", Startup.getLocation(LocationKey.DiningRoom)],
    ]);
    bedroom.items = [
      Startup.getItem(ItemKey.RedDrawer),
      Startup.getItem(ItemKey.StripedDrawer),
      Startup.getItem(ItemKey.Mothers),
      Startup.getItem(ItemKey.NutterButters),
    ];
  }

  private static arrangeMasterBedroom() {
    const bedroom = Startup.getLocation(LocationKey.MasterBedroom);
    bedroom.neighbors = new NeighborMap([
      ["w", Startup.getLocation(LocationKey.LivingRoom)],
    ]);
    bedroom.items = [
      Startup.getItem(ItemKey.Antelope),
      Startup.getItem(ItemKey.AlligatorRug),
      Startup.getItem(ItemKey.MasterBedroomChest),
      Startup.getItem(ItemKey.WingedShoes),
    ];
  }
}
