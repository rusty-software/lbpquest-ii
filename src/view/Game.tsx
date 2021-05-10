import { useState } from 'react';
import { SplashView } from './SplashView';
import { GameView } from './GameView';

export const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    console.log("starting game");
    setGameStarted(true);
  }

  return (
    <>
      {gameStarted ? <GameView /> : <SplashView onStartGame={startGame} />}
    </>
  );
}