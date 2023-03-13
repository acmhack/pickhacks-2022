import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import events from "../../data/events.json";

import Card from "../common/Schedule/ScheduleCard";
import DayCheck from "../common/Schedule/DayCheck";

const Title: AnyStyledComponent = styled.div`
  font-size: 5.5vw;
  color: #FFFFFF;
  border-right: 10px solid #FFD51C;
  padding-right: 27px;
  font-family: "Alike-Regular";
  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
  @media screen and (max-width: 650px) {
    border-width: 6px;
  }
`;
const ScheduleGroup: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  background: #FFD51C;
  margin-top: 4%;
  font-family: "MerriweatherSans-ExtraBold";
`;

const EventGroup: AnyStyledComponent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #FFFFFF;
  padding: 2%;
  padding-bottom: 0;
`;
const DayCheckGroup: AnyStyledComponent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: 600px) {
    display: none;
  }
`;
const FlexRight: AnyStyledComponent = styled.div`
  justify-content: right;
  display: flex;
  width: 100%;
`;
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container: AnyStyledComponent = styled.div`
  width: 100%;
  margin: 0px 5px;
`;

const FILTER_TYPES: string[] = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default () => {
  const [filters, setFilters]: [boolean[], (x: boolean[]) => void] = useState<
    boolean[]
  >(new Array(FILTER_TYPES.length).fill(false));

  const toggleDayCheck: (x: number) => void = (index: number): void => {
    const newFilters: boolean[] = [...filters];
    newFilters[index] = !newFilters[index];
    setFilters(newFilters);
  };

  const showEvent: (x: string) => boolean = (day: string): boolean => {
    if (
      filters.every((filter: boolean) => {
        return filter === false;
      }) ||
      filters[FILTER_TYPES.indexOf(day)]
    ) {
      return true;
    }
    return false;
  };

  return (
    <Container>
      <FlexColumn>
        <FlexRight>
          <Title>SCHEDULE</Title>
        </FlexRight>
      </FlexColumn>

      <ScheduleGroup>
        <DayCheckGroup>
          {/* <DayCheck
            checked={filters[0]}
            onClick={() => {
              toggleDayCheck(0);
            }}
            day="Wednesday"
          />
          <DayCheck
            checked={filters[1]}
            onClick={() => {
              toggleDayCheck(1);
            }}
            day="Thursday"
          /> */}
          <DayCheck
            checked={filters[2]}
            onClick={() => {
              toggleDayCheck(2);
            }}
            day="Friday"
          />
          <DayCheck
            checked={filters[3]}
            onClick={() => {
              toggleDayCheck(3);
            }}
            day="Saturday"
          />
          <DayCheck
            checked={filters[4]}
            onClick={() => {
              toggleDayCheck(4);
            }}
            day="Sunday"
          />
        </DayCheckGroup>

        <EventGroup>
          {events
            .filter((event: any) => {
              return showEvent(event.day);
            })
            .map((event: any, i: number) => {
              return <Card {...event} key={i} />;
            })}
        </EventGroup>
      </ScheduleGroup>
    </Container>
  );
};
