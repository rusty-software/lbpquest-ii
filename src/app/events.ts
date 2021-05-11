import { GameError } from "./game-error";

export enum GameEventType {
  LOCATION_CHANGE,
  NEW_INPUT,
  ITEM,
  INVENTORY,
  HELP,
  ERROR,
}

export class LocationChangeEvent {
  public readonly type = GameEventType.LOCATION_CHANGE;
  public constructor(public title: string, public description: string) {}
}

export class HelpEvent {
  public readonly type = GameEventType.HELP;
  public constructor(public avaibleCommands: string[]) {}
}

export class NewInputEvent {
  public readonly type = GameEventType.NEW_INPUT;
  public constructor(public input: string) {}
}

export class ItemEvent {
  public readonly type = GameEventType.ITEM;
  public constructor(public customText: string) {}
}

export class InventoryEvent {
  public readonly type = GameEventType.INVENTORY;
  public constructor(public items: string[]) {}
}

export class GameErrorEvent {
  public readonly type = GameEventType.ERROR;
  public constructor(public errorType: GameError) {}
}

export type GameEvent =
  | LocationChangeEvent
  | HelpEvent
  | NewInputEvent
  | ItemEvent
  | InventoryEvent
  | GameErrorEvent;

export {}