import { TextView } from "./TextView";

interface LocationViewProps {
  id: string;
  description: string;
}

export const LocationView = (props: LocationViewProps) => {
  const { description } = props;

  return (
    <div className="location">
      <div className="description">
        <TextView text={description} />
      </div>
    </div>
  );
};
