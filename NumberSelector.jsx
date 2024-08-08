import React, { useState } from "react";
import styled from "styled-components";

function NumberSelector({
  seterror,
  selectedNumber,
  setSelectedNumber,
  error,
}) {
  const arrayNo = [1, 2, 3, 4, 5, 6];

  const numberSeletorHandler = (value) => {
    setSelectedNumber(value);
    seterror("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNo.map((value, i) => (
          <Box
            key={i}
            isSelected={value === selectedNumber} // This prop won't be passed to the DOM element
            onClick={() => numberSeletorHandler(value)} // This prop will be passed to the DOM element when it is clicked 
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    gap: 24px;
    display: flex;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
