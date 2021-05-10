import { Component, KeyboardEvent } from "react";

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
  events: [];
  lastInputPointer: number;
}

export class PlayView extends Component<any, GameState> {
  private commandInput!: HTMLInputElement;

  constructor(props: any) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      events: [],
      lastInputPointer: 0,
    };
  }

  public onBlur() {
    setTimeout(() => this.commandInput.focus(), 0);
  }

  public componentDidMount() {
    document.addEventListener("mousedown", this.onBlur);
  }

  public handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && this.commandInput.value.length !== 0) {
      console.log("Trying to:", this.commandInput.value);
      this.commandInput.value = "";
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      console.log("Arrowing up");
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      console.log("Arrowing down");
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
