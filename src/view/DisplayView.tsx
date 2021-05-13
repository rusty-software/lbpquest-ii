import { CommandView } from "./CommandView";
import { ErrorView } from "./ErrorView";
import { GameError } from "../app/GameError";
import { GameEvent, GameEventType } from "../app/events";
import { InventoryView } from "./InventoryView";
import { ItemView } from "./ItemView";
import { LocationView } from "./LocationView";
import { HelpView } from "./HelpView";

interface DisplayViewProps {
  events: GameEvent[];
}

export const DisplayView = (props: DisplayViewProps) => {
  const { events } = props;

  return (
    <div className="display-container">
      <div
        className="display"
        aria-live="polite"
        aria-relevant="additions"
        aria-atomic="false"
      >
        {events.map((event, index) => {
          switch (event.type) {
            case GameEventType.NewInput: {
              return <CommandView key={index} originalCommand={event.input} />;
            }
            case GameEventType.LocationChange: {
              return (
                <LocationView
                  key={index}
                  id={event.title}
                  description={event.description}
                />
              );
            }
            case GameEventType.Item: {
              return <ItemView key={index} text={event.customText} />;
            }
            case GameEventType.Inventory: {
              return <InventoryView key={index} items={event.items} />;
            }
            case GameEventType.Help: {
              return (
                <HelpView
                  key={index}
                  visibleCommands={event.availableCommands}
                />
              );
            }
            case GameEventType.Error: {
              return <ErrorView key={index} error={event.errorType} />;
            }
            default: {
              return <ErrorView key={index} error={GameError.UnknownCommand} />;
            }
          }
        })}
      </div>
    </div>
  );
};
