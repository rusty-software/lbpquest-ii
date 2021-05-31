import AsciiImage from "./AsciiImage";
import { Title } from "./Title";

export const SplashView = () => {
  return (
    <div className="game-intro">
      <AsciiImage
        className={"intro"}
        imageSrc={Title}
        alt={"LBPQuest II Logo"}
      />
      <h1 className="sr-only">LBPQuest II</h1>
      <h2 className="game-intro-subtitle">Another Quest for LBP XXI</h2>
      <h3
        className="game-intro-enter"
        role="button"
        aria-label="Press Enter to start the game "
      >
        Press Enter to start the game
      </h3>
      <h3 className="game-intro-credits">Dev'd by: rusty-software </h3>
    </div>
  );
};
