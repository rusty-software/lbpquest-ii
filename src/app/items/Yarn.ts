import { ArtsAndCraftsSupply } from "./ArtsAndCraftsSupply";
import { ItemKey } from "./ItemKey";

export class Yarn extends ArtsAndCraftsSupply {
  public id = ItemKey.Yarn;
  public name = "yarn";
  public value = 5;
}
