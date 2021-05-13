import { TextView } from "./TextView";

interface LocationViewProps {
  id: string;
  description: string;
}

export const LocationView = (props: LocationViewProps) => {
  const { id, description } = props;

  return (
    <div className="location">
      {/*<h1 className="title"*/}
      {/*    aria-label={`title: ${id}`}*/}
      {/*>--- {id} ---</h1>*/}
      <div className="description">
        <TextView text={description} />
      </div>
    </div>
  );
};
