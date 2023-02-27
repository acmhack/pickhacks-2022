import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import events from "../../data/events.json";

import Card from "../common/Schedule/ScheduleCard";
import DayCheck from "../common/Schedule/DayCheck";

const Title: AnyStyledComponent = styled.div`
  font-size: 4.5vw;
  color: #FFFFFF;
  border-right: 8px solid #FFD51C;
  padding-right: 20px;
  margin: 10px;
  margin-right: 0px;
  font-family: "ZenDots-Regular", cursive;
  text-shadow: 2px 2px 4px gray;
  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
`;
const ScheduleGroup: AnyStyledComponent = styled.div`
  display: flex;
  font-family: "Amiko-Regular", cursive;
  flex-direction: row;
  background: #FFD51C;
`;

const EventGroup: AnyStyledComponent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2%;
  background: #FFFFFF;
`;
const DayCheckGroup: AnyStyledComponent = styled.div`
  display: flex;
  width: 100%;
  font-family: "ZenDots-Regular", cursive;
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
    <div>
      <FlexColumn>
        <FlexRight>
          <Title>Schedule</Title>
        </FlexRight>
      </FlexColumn>

      <ScheduleGroup>
        <DayCheckGroup>
          <DayCheck
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
          />
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
    </div>
  );
};
