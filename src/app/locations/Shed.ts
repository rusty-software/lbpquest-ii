import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";
import { ItemKey } from "../items";
import { GameEngine } from "../GameEngine";

export class Shed extends BaseLocation {
  public id = LocationKey.Shed;
  public title = "Storage Shed";
  public drawerOpened = false;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["open drawer", this.openDrawer],
    ["close drawer", this.closeDrawer],
  ]);

  public description(): string {
    let s =
      "The inside of the shed is mostly dark, but enough light leaks in through the grimy windows to reveal a collection of mostly useless junk. A central table is covered in dust, but has a large narrow drawer that might be open-able.";

    const locationBow = this.items.find((item) => item.id === ItemKey.Bow);
    if (locationBow && !locationBow.taken) {
      s += " On the wall, you see hanging a dust covered yet ornate bow.";
    }

    s +=
      "\n\nThe fire pit is to the west of here, and the trailer to the southwest.";

    s += super.appendItems();
    return s;
  }

  private openDrawer(gameEngine: GameEngine): string {
    const shed = gameEngine.currentLocation as Shed;
    if (!shed.drawerOpened) {
      shed.drawerOpened = true;
      const scissors = gameEngine.getItem(ItemKey.Scissors);
      const screwdriver = gameEngine.getItem(ItemKey.Screwdriver);
      scissors.isShown = true;
      screwdriver.isShown = true;
      return "You pull the drawer open. The contents looks mostly as useless as the rest of the junk in the shed, except for the scissors and screwdriver.";
    } else {
      return "Opening the drawer again does not reveal anything else.";
    }
  }

  private closeDrawer(gameEngine: GameEngine): string {
    const shed = gameEngine.currentLocation as Shed;
    if (!shed.drawerOpened) {
      return "Maybe you should try opening it first...?";
    }
    return "You close the drawer, but it only gets about halfway in before squeaking to a halt.";
  }
}
