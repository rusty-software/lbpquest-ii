import { TextView } from "./TextView";

interface ItemViewProps {
  text: string;
}

export const ItemView = (props: ItemViewProps) => {
  const { text } = props;

  return (
    <div className="item">
      <TextView text={text} />
    </div>
  );
};
