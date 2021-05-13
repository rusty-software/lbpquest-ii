const helpMapper: { [s: string]: string } = {
  go: " <somewhere> : e.g. `go through door` to move somewhere other than cardinal or ordinal directions",
  help: " : shows this help text",
  inventory: " : lists the items in your haversack",
  examine:
    " <object> : e.g. `examine sword` to take a closer look at the sword",
  look: " : describes the area in which you are, currently",
  take: " <object> : e.g. `take sword` to add an item to your haversack",
  use: " <object> : e.g. `use sword` to activate an item",
  drop: " <object> : e.g. `drop sword` to remove an item from your haversack",
};

interface HelpViewProps {
  visibleCommands: string[];
}
export const HelpView = (props: HelpViewProps) => {
  const { visibleCommands } = props;

  const helpBlock = visibleCommands.map((command) => (
    <div key={command} className="command-block">
      <div className="command-block-key">{command}</div>
      <div className="command-block-tip">{helpMapper[command]}</div>
    </div>
  ));

  return (
    <div className="help">
      <div className="help-description">
        These are the default commands and will be most used:
      </div>
      <br />
      {helpBlock}
      <br />
      <div className="help-description">
        But there may be more hidden commands available. Use "logic" to figure
        it out!
      </div>
    </div>
  );
};
