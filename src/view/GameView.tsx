import React from "react";
import { PlayView } from "./PlayView";
import { SplashView } from "./SplashView";

interface StartState {
  gameStarted: boolean;
}

export class GameView extends React.Component<any, StartState> {
  constructor(props: any) {
    super(props);
    this.state = {
      gameStarted: false,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
  }

  public componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
    document.addEventListener("touchstart", this.handleTouch, false);
  }

  public handleKeyDown(event: KeyboardEvent) {
    if (!this.state.gameStarted && event.key === "Enter") {
      this.setState({ gameStarted: true });
    }
  }

  public handleTouch(event: TouchEvent) {
    if (!this.state.gameStarted) {
      this.setState({ gameStarted: true });
    }
  }

  public render() {
    return (
      <div id="game">
        {this.state.gameStarted ? <PlayView /> : <SplashView />}
      </div>
    );
  }
}
