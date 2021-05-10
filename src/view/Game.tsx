import { useEffect, useState } from 'react';
import { SplashView } from './SplashView';
import { GameView } from './GameView';

// export const Game = () => {
//   const [gameStarted, setGameStarted] = useState(false);

//   // const startGame = () => {
//   //   console.log("starting game");
//   //   setGameStarted(true);
//   //   console.log("after starting game, gameStarted:", gameStarted);
//   // }

//   useEffect(() => {
//     const handleKeyUp = (event: KeyboardEvent) => {
//       if (!gameStarted && event.key === 'Enter') {
//         console.log("gameStarted:", gameStarted);
//         setGameStarted(true);
//       }
//     }

//     const handleTouch = (event: TouchEvent) => {
//       if (!gameStarted) {
//         setGameStarted(true);
//       }
//     }

//     document.addEventListener("keyup", handleKeyUp);
//     document.addEventListener("touchstart", handleTouch);
//   }, [])

//   return (
//     <>
//       {gameStarted ? <GameView /> : <SplashView />}
//     </>
//   );
// }

