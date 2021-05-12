import { Direction } from "./Direction";

export class CommandType {
  public static values: CommandType[] = [];

  public static readonly N = new CommandType("N" as Direction);
  public static readonly S = new CommandType("S" as Direction);
  public static readonly E = new CommandType("E" as Direction);
  public static readonly W = new CommandType("W" as Direction);
  public static readonly NE = new CommandType("NE" as Direction);
  public static readonly NW = new CommandType("NW" as Direction);
  public static readonly SE = new CommandType("SE" as Direction);
  public static readonly SW = new CommandType("SW" as Direction);

  public static readonly GO = new CommandType("GO");
  public static readonly TAKE = new CommandType("TAKE");
  public static readonly DROP = new CommandType("DROP");
  public static readonly INVENTORY = new CommandType("INVENTORY");
  public static readonly USE = new CommandType("USE");
  public static readonly LOOK = new CommandType("LOOK");
  public static readonly EXAMINE = new CommandType("EXAMINE");
  public static readonly HELP = new CommandType("HELP");

  private constructor(public readonly name: string) {
    CommandType.values.push(this);
  }
}
