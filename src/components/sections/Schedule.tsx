import React from "react";

import styled, { AnyStyledComponent } from "styled-components";

const Example: AnyStyledComponent = styled.div``;

const Title: AnyStyledComponent = styled.div`
  font-size: 4.5vw;
  color: #f47525;

  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
`;
const Constraint: AnyStyledComponent = styled.div`
  max-width: 800px;
  @media screen and (max-width: 600px) {
    max-width: 2000px;
  }
`;
const ScheduleDiv: AnyStyledComponent = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: row;
  font-size: 1.1vw;
  padding-top: 1%;
  @media screen and (max-width: 1500px) {
    font-size: 1.9vw;
  }
  @media screen and (max-width: 1000px) {
    font-size: 2vw;
  }
  @media screen and (max-width: 800px) {
    font-size: 3vw;
    padding-top: 1%;
  }
  @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 400px) {
    font-size: 2.7vw;
  }
  @media screen and (max-width: 350px) {
    font-size: 2.4vw;
  }
`;
const DateDiv: AnyStyledComponent = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
`;
const LocationDiv: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  flex-direction: column;
`;
const Text: AnyStyledComponent = styled.div`
  font-size: 25px:
  font-weight: bold;
  color: white;

`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;
export default () => {
  return (
    <div>
      <FlexCenter>
        <Title>Schedule</Title>
      </FlexCenter>
      <Constraint>
        <ScheduleDiv>
          <DateDiv>
            <Text style={{ color: "#90c640" }}>NAME</Text>
            <Text>Check-in</Text>
            <Text>Opening Ceremony</Text>
            <Text>Dinner</Text>
            <Text>Networking</Text>
            <Text>Hacking begins</Text>
            <Text>Poker Night</Text>
            <Text>Scary Movie</Text>
            <Text>Lunch</Text>
            <Text>Virtual Game</Text>
            <Text>Hacking Ends</Text>
            <Text>Judging</Text>
            <Text>Closing Ceremony</Text>
          </DateDiv>
          <LocationDiv>
            <Text style={{ color: "#90c640" }}>DATE</Text>

            <Text>10/29 | 04:00 pm - 11:00 pm</Text>
            <Text>10/29 | 05:00 pm - 05:45 pm</Text>
            <Text>10/29 | 07:00 pm</Text>
            <Text>10/29 | 08:00 pm</Text>
            <Text>10/29 | 08:00 pm</Text>
            <Text>10/30 | 01:00 am - 03:00am</Text>
            <Text>10/30 | 06:00 am - 08:00am</Text>
            <Text>10/30 | 12:00 pm</Text>
            <Text>10/30 | 12:00 pm</Text>
            <Text>10/30 | 06:00 pm</Text>
            <Text>10/30 | 07:00 pm - 08:15 pm</Text>
            <Text>10/30 | 08:30 pm - 09:30 pm</Text>
          </LocationDiv>
        </ScheduleDiv>
      </Constraint>
    </div>
  );
};
