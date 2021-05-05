import React from 'react';
import AsciiImage from "./AsciiImage";
import Logo from "./Title";

function GameSplashView() {
    return <div className="game-intro">
        <AsciiImage className={"intro"} imageSrc={Logo} alt={"LBPQuest II Logo"}/>
        <h1 className="sr-only">LBPQuest II</h1>
        <h2 className="game-intro-subtitle">Another Quest for LBP XXI</h2>
        <h3 className="game-intro-enter"
            role="button"
            aria-label="Press Enter to start the game ">
            Press Enter to start the game
        </h3>
        <h3 className="game-intro-credits">Dev'd by: rusty-software </h3>
    </div>;
}

interface GameSplashState {
    gameStarted: boolean
}

class GameSplash extends React.Component<any, GameSplashState> {
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
        if (event.key === 'Enter') {
            this.setState({gameStarted: true})
        }
    }

    public handleTouch(event: TouchEvent) {
        this.setState({gameStarted: true})
    }

    public render() {
        return (
            <div id="game">
                {
                    this.state.gameStarted ? <GameSplashView/> : <GameSplashView/>
                }
            </div>
        );
    }
}

export default GameSplash;