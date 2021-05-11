import { Item } from "./item";

export interface Location {
  title: string;
  items: Item[];

  description(): string;
}