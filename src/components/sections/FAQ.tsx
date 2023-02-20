import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import FAQSegment from "../common/FAQ/FAQSegment";

import {
  trees,
  ocean,
  mountains,
  pond,
  desert,
  flowers,
} from "../../images/Images";

const Title: AnyStyledComponent = styled.div`
  font-size: 5.5vw;
  color: white;
  font-family: "Alike-Regular";
  padding-left: 27px;
  border-left: 10px #148648 solid;
  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
`;
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 5px;
`;

export default (props: any) => {
  return (
      <FlexColumn>
        <Title>FAQ</Title>
          <FAQSegment title="WHO can participate?" image={flowers}>
            PickHacks is open to any and all college or high school
            students. Just grab a team of up to 3 other hackers and start
            building!
          </FAQSegment>
          <FAQSegment title="WHAT is a hackathon?" image={desert}>
            A hackathon is a weekend long event for anyone interested in
            tech to build, learn, and grow! It features many opportunities
            to explore your technical skills and interact with others who
            are just as passionate and curious about how tech impacts the
            world around us.
          </FAQSegment>
          <FAQSegment title="WHERE is PickHacks located?" image={pond}>
            With the world still in limbo over COVID, PickHacks 2022 will
            be held from the best coding environment in the world, your
            room! This year’s iteration will be virtual, with activities
            and events planned accordingly.
          </FAQSegment>
          <FAQSegment title="WHEN is PickHacks?" image={mountains}>
            PickHacks 2023 will be from 4:00 pm, April 8th to 3:00 pm,
            April 10th.
          </FAQSegment>
          <FAQSegment title="WHY should I participate?" image={ocean}>
            No worries! Try to think of some problem that exists in the
            realm of our theme. If that leads nowhere, try consulting some
            of our resources or experts for inspo.
          </FAQSegment>

          <FAQSegment title="HOW do I apply?" image={trees}>
            Due to shipping delays from COVID, you can expect to receive 
            your swag sometime around late April. However, we don't want 
            to keep you in suspense! You can expect to recieve a sweatshirt, 
            stickers, and more awesome goodies! We will not be shipping swag 
            to hackers outside of the US and Canada.
          </FAQSegment>
      </FlexColumn>
  );
};
