import React from "react";
import styled from "styled-components";
import { useCounter } from "../hooks/useCounter";

const Increment = () => {
  const { number } = useCounter('+');

  return (
    <IncrementBlock>
      <h1>{number}</h1>
    </IncrementBlock>
  );
};

export default Increment;

const IncrementBlock = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
