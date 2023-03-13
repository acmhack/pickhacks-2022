import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
interface IDayCheckProps {
  checked: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  day: string;
  dayColor?: string;
}

const DayText: AnyStyledComponent = styled.div`
  font-size: 1.5em;
  display: flex;
  user-select: none;
  padding-left: 50px;
  font-family: "MerriweatherSans-Bold";
`;
const DayColor: AnyStyledComponent = styled.div`
  display: flex;
  margin-top: 5px;
  border-radius: 50%;
  height: 17px;
  width: 17px;
  border: solid ${(props: IDayCheckProps) => props.dayColor} 4px;
  background-color: ${(props: IDayCheckProps) => props.checked ? props.dayColor : ""};
`;
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
const DayGroup: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4%;
  &:hover {
    cursor: pointer;
    background-color: #FFD51C;
  }
`;
const DateText: AnyStyledComponent = styled.div`
  font-size: 1.5em;
  display: flex;
  user-select: none;
  padding-left: 50px;
  font-family: "MerriweatherSans-Bold";
`;
export default ({ day, checked, onClick }: IDayCheckProps) => {
  // const { checked, onClick } = props;

  function dayPicker(): string[] {
    switch (day) {
      case "Wednesday":
        return ["#00B655", "April 12"];
      case "Thursday":
        return ["#14354D", "April 13"];
      case "Friday":
        return ["#148648", "April 14"];
      case "Saturday":
        return ["#20BFB1", "April 15"];
      case "Sunday":
        return ["#755A39", "April 16"];
      default:
        return ["gray", "nerd"];
    }
  }

  return (
    <div>
      <DayGroup onClick={onClick}>
        <DayColor dayColor={dayPicker()[0]} checked={checked}/>
        <FlexColumn>
          <DayText
          >
            {day}
          </DayText>
          <DateText
          >
            {dayPicker()[1]}
          </DateText>
        </FlexColumn>
      </DayGroup>
    </div>
  );
};
