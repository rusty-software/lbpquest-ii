import { Direction } from "./Direction";

export class CommandType {
  public static values: CommandType[] = [];

  public static readonly n = new CommandType("n" as Direction);
  public static readonly s = new CommandType("s" as Direction);
  public static readonly e = new CommandType("e" as Direction);
  public static readonly w = new CommandType("w" as Direction);
  public static readonly ne = new CommandType("ne" as Direction);
  public static readonly nw = new CommandType("nw" as Direction);
  public static readonly se = new CommandType("se" as Direction);
  public static readonly sw = new CommandType("sw" as Direction);

  public static readonly go = new CommandType("go");
  public static readonly take = new CommandType("take");
  public static readonly drop = new CommandType("drop");
  public static readonly inventory = new CommandType("inventory");
  public static readonly use = new CommandType("use");
  public static readonly look = new CommandType("look");
  public static readonly examine = new CommandType("examine");
  public static readonly help = new CommandType("help");

  private constructor(public readonly name: string) {
    CommandType.values.push(this);
  }
}
