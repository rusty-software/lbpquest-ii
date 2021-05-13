import { TextView } from "./TextView";

interface CommandViewProps {
  originalCommand: string;
}
export const CommandView = (props: CommandViewProps) => {
  const { originalCommand } = props;

  return (
    <div className="command" role="textbox" aria-label={`${originalCommand}`}>
      <TextView text={`> ${originalCommand}`} />
    </div>
  );
};
