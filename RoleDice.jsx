import React from "react";
import styled from "styled-components";

function RoleDice({ CurrentDice, roleDice }) {
  //  Onclick on the div will generate a random Number from 1 to 6 that we get as a parameter
  
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${CurrentDice}.png`} alt="dice-1" />
        {/* render the current dice image based on the current dice state */}
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;

// ReactJs - NextJs - Angular - Tailwind - ChakraUI, Siap slicing dari Figma
