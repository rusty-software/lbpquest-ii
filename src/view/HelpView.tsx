const helpMapper: { [s: string]: string } = {
  help: " : shows this help text",
  inventory: " (inv) : lists the items in your duffle bag",
  examine:
    " (ex) <object> : e.g. `examine sword` to take a closer look at the sword",
  look: " (l) : describes the area in which you are currently located",
  take: " <object> : e.g. `take sword` to add an item to your duffle bag",
  use: " <object> : e.g. `use sword` to activate an item",
  drop: " <object> : e.g. `drop sword` to remove an item from your duffle bag",
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
