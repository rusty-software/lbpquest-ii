import { ArtsAndCraftsSupply } from "./ArtsAndCraftsSupply";
import { ItemKey } from "./ItemKey";

export class Glue extends ArtsAndCraftsSupply {
  public id = ItemKey.Glue;
  public name = "glue";
  public value = 5;
}
