import { Item } from "../app/Item";

interface InventoryViewProps {
  items: Item[];
}

const inventoryString = (items: Item[]): string => {
  if (items.length === 0) {
    return "Your inventory is empty.  ";
  }
  let s = "Your inventory contains: ";
  items.map((item) => (s += item.name + ", "));
  s = s.slice(0, -2);
  return s;
};

export const InventoryView = (props: InventoryViewProps) => {
  const { items } = props;

  return <div className="inventory">{inventoryString(items)}</div>;
};
