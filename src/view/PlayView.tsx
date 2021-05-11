import { Component, KeyboardEvent } from "react";
import { GameEvent, GameEventType, NewInputEvent } from "../app/events";
import { GameEngine } from "../app/game-engine";

interface HeaderProps {
  location: string;
  score: number;
  moves: number;
}

const HeaderView = (props: HeaderProps) => {
  const { location, score, moves } = props;

  return (
    <div className="header">
      <span>{location}</span>
      <div className="alignRight">
        <span> Score: {score} </span>
        <span> Moves: {moves} </span>
      </div>
    </div>
  );
};

interface DisplayProps {
  description: string;
}

const DisplayView = (props: DisplayProps) => {
  const { description } = props;

  return <div className="display-container">{description}</div>;
};

interface GameState {
  events: GameEvent[];
  lastInputPointer: number;
}

export class PlayView extends Component<any, GameState> {
  private commandInput!: HTMLInputElement;
  private readonly gameEngine: GameEngine;

  constructor(props: any) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.gameEngine = new GameEngine();
    this.state = {
      events: this.gameEngine.getEvents(),
      lastInputPointer: 0,
    };
  }

  public onBlur() {
    setTimeout(() => this.commandInput.focus(), 0);
  }

  public componentDidMount() {
    document.addEventListener("mousedown", this.onBlur);
  }

  private getHistoryInput(pointer: number): string {
    // if pointer points forward do nothing
    if (pointer >= 0) {
      this.setState({
        lastInputPointer: 0,
      });
      return "";
    }

    // get all inputs
    const newInputEvents = this.state.events.filter(
      (gameEvent): gameEvent is NewInputEvent =>
        gameEvent.type === GameEventType.NEW_INPUT
    );

    // if the pointer points to the beginning do not allow it to travel further
    if (Math.abs(pointer) <= newInputEvents.length) {
      this.setState({
        lastInputPointer: pointer,
      });
    }

    // return the input pointed at
    return (
      newInputEvents
        .map((gameEvent) => gameEvent.input)
        .slice(pointer)
        .shift() || ""
    );
  }

  public handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && this.commandInput.value.length !== 0) {
      this.gameEngine.send(this.commandInput.value);
      this.setState({
        events: this.gameEngine.getEvents(),
        lastInputPointer: 0,
      });
      this.commandInput.value = "";
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      this.commandInput.value = this.getHistoryInput(
        this.state.lastInputPointer - 1
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      this.commandInput.value = this.getHistoryInput(
        this.state.lastInputPointer + 1
      );
    }
  }

  public render() {
    return (
      <div id="game-content">
        <HeaderView location="First Loc" score={40} moves={700} />
        <DisplayView description="Some descripton" />
        <span id="input">
          <div id="input-tag">{"> "}</div>
          <input
            id="input-element"
            aria-label="Input your game commands here"
            ref={(input: HTMLInputElement) => {
              this.commandInput = input;
            }}
            autoFocus={true}
            onBlur={this.onBlur}
            onKeyDown={this.handleKeyDown}
          />
        </span>
      </div>
    );
  }
}
