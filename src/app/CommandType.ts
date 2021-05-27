import { Direction } from "./Direction";

export class CommandType {
  public static values: CommandType[] = [];

  public static readonly n = new CommandType("n" as Direction, true);
  public static readonly s = new CommandType("s" as Direction, true);
  public static readonly e = new CommandType("e" as Direction, true);
  public static readonly w = new CommandType("w" as Direction, true);
  public static readonly ne = new CommandType("ne" as Direction, true);
  public static readonly nw = new CommandType("nw" as Direction, true);
  public static readonly se = new CommandType("se" as Direction, true);
  public static readonly sw = new CommandType("sw" as Direction, true);
  public static readonly up = new CommandType("up" as Direction, true);
  public static readonly down = new CommandType("down" as Direction, true);

  public static readonly take = new CommandType("take", true);
  public static readonly drop = new CommandType("drop", true);
  public static readonly inv = new CommandType("inv", false);
  public static readonly inventory = new CommandType("inventory", true);
  public static readonly use = new CommandType("use", true);
  public static readonly l = new CommandType("l", false);
  public static readonly look = new CommandType("look", true);
  public static readonly ex = new CommandType("ex", false);
  public static readonly examine = new CommandType("examine", true);
  public static readonly help = new CommandType("help", true);

  public static readonly google = new CommandType("ok google locate", false);

  private constructor(
    public readonly name: string,
    public readonly visible: boolean
  ) {
    CommandType.values.push(this);
  }
}
