import { Item } from "./Item";

export interface Location {
  title: string;
  items: Item[];

  description(): string;
}