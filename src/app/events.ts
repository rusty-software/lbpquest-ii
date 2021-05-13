import { GameError } from "./GameError";
import { Item } from "./Item";

export enum GameEventType {
  LocationChange,
  NewInput,
  Item,
  Inventory,
  Help,
  Error,
}

export class LocationChangeEvent {
  public readonly type = GameEventType.LocationChange;
  public constructor(public title: string, public description: string) {}
}

export class HelpEvent {
  public readonly type = GameEventType.Help;
  public constructor(public availableCommands: string[]) {}
}

export class NewInputEvent {
  public readonly type = GameEventType.NewInput;
  public constructor(public input: string) {}
}

export class ItemEvent {
  public readonly type = GameEventType.Item;
  public constructor(public customText: string) {}
}

export class InventoryEvent {
  public readonly type = GameEventType.Inventory;
  public constructor(public items: Item[]) {}
}

export class GameErrorEvent {
  public readonly type = GameEventType.Error;
  public constructor(public errorType: GameError) {}
}

export type GameEvent =
  | LocationChangeEvent
  | HelpEvent
  | NewInputEvent
  | ItemEvent
  | InventoryEvent
  | GameErrorEvent;

export {};
