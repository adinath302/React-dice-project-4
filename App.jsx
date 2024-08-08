import { useState } from "react";
import "./App.css";

import StartGame from "./component/StartGame";
import GamePlay from "./component/GamePlay";

function App() {
  const [isGameStart, setIsGameStart] = useState(false); // to check if the game is started or not

  const toggleGamePlay = () => {
    setIsGameStart((prev) => !prev);
  };
  return (
    <>{isGameStart ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</> // to check if the game is started or not
  );
}

export default App;
