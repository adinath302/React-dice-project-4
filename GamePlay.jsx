import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [Score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, SetCurrentDice] = useState(1);
  const [error, seterror] = useState();
  const [showrules, setshowrules] = useState(false);

  const GenerateRandomNumber = (min, max) => {
    // generate a random number from 1 to 6
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      seterror("You have not Selected any number");
      return; // if no number is selected, return
    }

    const randomNumber = GenerateRandomNumber(1, 7); // generate a random number from 1 to 6
    SetCurrentDice((prev) => randomNumber); // set the current dice to the random number , prev is used to get the previous value of the state because we are updating the state in the same function

    if (selectedNumber === randomNumber) {
      // if the selected number is equal to the random number
      setScore((prev) => prev + randomNumber); // add the random number to the score
    } else {
      // if the selected number is not equal to the random number
      setScore((prev) => prev - 2); // subtract 2 from the score
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="Top_section">
        <TotalScore score={Score} />
        <NumberSelector
          error={error}
          seterror={seterror}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice CurrentDice={CurrentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setshowrules((prev) => !prev)}>
          {showrules ? "Hide " : "Show "}Rules
        </Button>
      </div>
      {showrules && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .Top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    gap: 10px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
