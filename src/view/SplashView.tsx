import AsciiImage from "./AsciiImage";
import { Title } from "./Title";

interface SplashViewProps {
  onStartGame(): void
}

export const SplashView = (props: SplashViewProps) => {

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onStartGame();
    }
  }

  const handleTouch = (event: TouchEvent) => {
    props.onStartGame();
  }

  document.addEventListener("keydown", handleKeyDown, false);
  document.addEventListener("touchstart", handleTouch, false);

  return (
    <div className="game-intro">
      <AsciiImage className={"intro"} imageSrc={Title} alt={"LBPQuest II Logo"} />
      <h1 className="sr-only">LBPQuest II</h1>
      <h2 className="game-intro-subtitle">Another Quest for LBP XXI</h2>
      <h3 className="game-intro-enter"
        role="button"
        aria-label="Press Enter to start the game ">
        Press Enter to start the game
        </h3>
      <h3 className="game-intro-credits">Dev'd by: rusty-software </h3>
    </div>
  );
}