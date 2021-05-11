export class Verb {
  public static values: Verb[] = [];

  public static readonly N = new Verb("N");
  public static readonly S = new Verb("S");
  public static readonly E = new Verb("E");
  public static readonly W = new Verb("W");
  public static readonly NE = new Verb("NE");
  public static readonly NW = new Verb("NW");
  public static readonly SE = new Verb("SE");
  public static readonly SW = new Verb("SW");

  public static readonly GO = new Verb("GO");
  public static readonly TAKE = new Verb("TAKE");
  public static readonly DROP = new Verb("DROP");
  public static readonly INV = new Verb("INV");
  public static readonly INVENTORY = new Verb("INVENTORY");
  public static readonly USE = new Verb("USE");
  public static readonly LOOK = new Verb("LOOK");
  public static readonly EXAMINE = new Verb("EXAMINE");
  public static readonly HELP = new Verb("HELP");

  private constructor(public readonly name: string) {
    Verb.values.push(this);
  }
}
