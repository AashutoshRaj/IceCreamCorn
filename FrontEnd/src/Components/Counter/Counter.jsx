import React, { useState } from "react";


import styled from "styled-components";

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 50px;
  width: 120px;
  padding: 10px 16px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  background: transparent;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0 6px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Count = styled.span`
  width: 30px;
  text-align: center;
`;

export const Divider = styled.span`
  width: 1px;
  height: 20px;
  background-color: white;
  margin: 0 4px;
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <CounterWrapper>
      <Button onClick={handleDecrease}>-</Button>
      <Divider />
      <Count>{count.toString().padStart(2, "0")}</Count>
      <Divider />
      <Button onClick={handleIncrease}>+</Button>
    </CounterWrapper>
  );
};

export default Counter;
