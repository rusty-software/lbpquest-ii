import React from "react";
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

export class DisplayView extends React.Component<DisplayViewProps, any> {
  private eventEnd!: HTMLDivElement;
  private events: GameEvent[];

  constructor(props: DisplayViewProps) {
    super(props);
    this.events = props.events;

    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  public scrollToBottom() {
    this.eventEnd.scrollIntoView();
  }

  public componentDidMount() {
    this.scrollToBottom();
    window.addEventListener("resize", this.scrollToBottom, false);
  }

  public componentDidUpdate() {
    this.scrollToBottom();
  }

  public componentWillUnmount() {
    this.scrollToBottom();
    window.removeEventListener("resize", this.scrollToBottom, false);
  }

  public render() {
    return (
      <div className="display-container">
        <div
          className="display"
          aria-live="polite"
          aria-relevant="additions"
          aria-atomic="false"
        >
          {this.events.map((event, index) => {
            switch (event.type) {
              case GameEventType.NewInput: {
                return (
                  <CommandView key={index} originalCommand={event.input} />
                );
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
                return (
                  <ErrorView key={index} error={GameError.UnknownCommand} />
                );
              }
            }
          })}
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el: HTMLDivElement) => {
              this.eventEnd = el;
            }}
          />
        </div>
      </div>
    );
  }
}
