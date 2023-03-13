import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

interface CardProps {
  title?: string;
  description?: string;
  dayColor?: string;
  day?: string;
}

const Box: AnyStyledComponent = styled.div`
  border-left: 10px solid ${(props: CardProps) => props.dayColor};
  height: auto;
  margin-left: 13px;
  display: flex;
  background-color: inherit;
  flex-direction: column;
  position: relative;
  padding: 5px 0px 5px 20px;
  color: black;
`;
const Background: AnyStyledComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 0%;
  left: 0px;
  top: 0px;
  padding-right: 20px;
`;
const DescText: AnyStyledComponent = styled.div`
  position: relative;
  font-size: 1em;
  font-family: "MerriweatherSans-Bold";
`;
const TitleText: AnyStyledComponent = styled.div`
  display: flex;
  font-weight: 400;

  padding-right: 10px;
  font-size: 1.5em;

  padding-bottom: 2%;

  @media (max-width: 600px) {
    font-size: 1em;
  }
  @media (max-width: 323px) {
    font-size: 1.08em;
  }
`;
const Border: AnyStyledComponent = styled.div`
  display: flex;
  border-left: 10px solid ${(props: CardProps) => props.dayColor};
  border-radius: 10px;
`;
const BoxGroup: AnyStyledComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 4%;
  &:hover ${Background} {
    background-color: ${(props: CardProps) => props.dayColor};
    width: 100%;
    transition: width 300ms ease-in-out;
    -webkit-transition: width 300ms ease-in-out;
    -moz-transition: width 300ms ease-in-out;
  }
  &:hover ${DescText} {
    color: white;
  }
  &:hover ${TitleText} {
    color: white;

  }
`;
const TitleGroup: AnyStyledComponent = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;
const DayLabel: AnyStyledComponent = styled.div`
  display: flex;
  background-color: ${(props: CardProps) => props.dayColor};
  border-radius: 50px;
  padding: 4px;
  font-size: 14px;

  color: white;
  align-items: center;
  height: 16px;
  @media (min-width: 600px) {
    display: none;
    font-size: 8px;
  }
  @media (max-width: 400px) {
  }
`;

const DayLabelGroup: AnyStyledComponent = styled.div`
  display: flex;
  top: 0px;

  position: absolute;
  right: 0px;
`;
const Test: AnyStyledComponent = styled.div`
  display: flex;
  width: 50px;
  @media (min-width: 600px) {
    display: none;
  }
`;


export default ({ title, description, day }: CardProps) => {
  function dayPicker(): string[] {
    switch (day) {
      case "Wednesday":
        return ["#00B655", "April 12"];
      case "Thursday":
        return ["#755A39", "April 13"];
      case "Friday":
        return ["#148648", "April 14"];
      case "Saturday":
        return ["#20BFB1", "April 15"];
      case "Sunday":
        return ["#14354D", "April 16"];
      default:
        return ["gray", "nerd"];
    }
  }

  return (
    <div>
      <BoxGroup dayColor={dayPicker()[0]}>

        {/* <Border dayColor={dayPicker()[0]}></Border> */}
        <Box dayColor={dayPicker()[0]}>
        <Background/>
          <TitleGroup>
            <TitleText>{title}</TitleText>

            <DayLabelGroup>
              <DayLabel dayColor={dayPicker()[0]}>{dayPicker()[1]}</DayLabel>
            </DayLabelGroup>
          </TitleGroup>

          <DescText>{description}</DescText>
        </Box>

      </BoxGroup>
    </div>
  );
};
