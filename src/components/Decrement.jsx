import React from "react";
import styled from "styled-components";
import { useCounter } from "../hooks/useCounter";

const Decrement = () => {
    const { number } = useCounter('-');

  return <DecrementBlock><h1>{number}</h1></DecrementBlock>;
};

export default Decrement;

const DecrementBlock = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
