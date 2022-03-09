import React, { useState, useEffect } from "react";

import styled, { AnyStyledComponent } from "styled-components";

interface IDropDownProps {
  question: string;
  children: string;
}

const Question: AnyStyledComponent = styled.div`
  font-size: 1.7vw;
  color: #90c640;
  font-weight: bold;
  transition: all 0.1s linear;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 1200px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 1000px) {
    font-size: 2.7vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
`;

const Answer: AnyStyledComponent = styled.div`
  font-size: 1vw;
  color: white;
  font-family: "Poppins", sans-serif;
  padding-bottom: 20px;
  padding-top: 20px;
  @media screen and (max-width: 1200px) {
    font-size: 1.5vw;
  }
  @media screen and (max-width: 1000px) {
    font-size: 2.3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.7vw;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 40px;
  }
`;
const TriangleDown: AnyStyledComponent = styled.div`
  width: 0;
  height: 0;
  border-left: 0.5vw solid transparent;
  display: flex;
  border-right: 0.5vw solid transparent;

  border-top: 1vw solid #f47525;
`;
const TriangleUp: AnyStyledComponent = styled.div`
  width: 0;
  display: flex;
  height: 0;
  border-left: 0.5vw solid transparent;
  border-right: 0.5vw solid transparent;

  border-bottom: 1vw solid #f47525;
`;
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;

  flex-direction: column;
`;
const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  transition: all 0.1s linear;
  width: 100%;
`;
const FlexRow: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
`;
const TriangleDiv: AnyStyledComponent = styled.div`
  margin-top: 10px;
  cursor: pointer;
  padding-left: 5px;
  @media screen and (max-width: 650px) {
    margin-top: 3px;
  }
`;
const Constraint: AnyStyledComponent = styled.div`
  max-width: 600px;
`;
export default ({ question, children }: IDropDownProps) => {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <div>
      <FlexColumn>
        <FlexRow>
          <FlexCenter>
            <Question onClick={toggleDropdown}>{question}</Question>

            <TriangleDiv onClick={toggleDropdown}>
              {" "}
              {isOpen ? <TriangleUp /> : <TriangleDown />}
            </TriangleDiv>
          </FlexCenter>
        </FlexRow>
        <FlexCenter>
          <Constraint>
            {" "}
            <div>{isOpen ? <Answer>{children}</Answer> : <p></p>}</div>
          </Constraint>
        </FlexCenter>
      </FlexColumn>
    </div>
  );
};
