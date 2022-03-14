import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import FAQSegment from "../common/FAQ/FAQSegment";

const Title: AnyStyledComponent = styled.div`
  font-size: 4.5vw;
  color: #009ac7;
  font-family: "ZenDots-Regular", cursive;
  text-shadow: 2px 2px 4px gray;
  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
`;
const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;

  padding: 0;
`;
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Constraint: AnyStyledComponent = styled.div`
  display: flex;

  max-width: 600px;
`;
export default (props: any) => {
  return (
    <div>
      <FlexColumn>
        <FlexCenter>
          <Title>FAQ</Title>
        </FlexCenter>
        <FlexCenter>
          <Constraint>
            <FlexCenter>
              <FlexColumn>
                <FAQSegment titleColor="WHAT " title="is a hackathon?">
                  A hackathon is a weekend long event for anyone interested in
                  tech to build, learn, and grow! It features many opportunities
                  to explore your technical skills and interact with others who
                  are just as passionate and curious about how tech impacts the
                  world around us.
                </FAQSegment>
                <FAQSegment
                  titleColor="WHERE"
                  title="is PickHacks 2022 going to be?"
                >
                  With the world still in limbo over COVID, PickHacks 2022 will
                  be held from the best coding environment in the world, your
                  room! This year’s iteration will be virtual, with activities
                  and events planned accordingly.
                </FAQSegment>
                <FAQSegment titleColor="WHEN" title="is PickHacks going on?">
                  PickHacks 2022 will be from 4:00 pm, April 8th to 3:00 pm,
                  April 10th.
                </FAQSegment>
                <FAQSegment titleColor="WHO" title="can participate?">
                  PickHacks is open to any and all college or high school
                  students. Just grab a team of up to 3 other hackers and start
                  building!
                </FAQSegment>
                <FAQSegment
                  titleColor="WHAT"
                  title="if I can’t think of a hack?"
                >
                  No worries! Try to think of some problem that exists in the
                  realm of our theme. If that leads nowhere, try consulting some
                  of our resources or experts for inspo.
                </FAQSegment>
                <FAQSegment titleColor="MORE" title="questions?">
                  Contact any of our team members on our Discord, email us at
                  msthackathon@umsystem.edu, or DM us on instagram
                  @sandtpickhacks.
                </FAQSegment>
              </FlexColumn>
            </FlexCenter>
          </Constraint>
        </FlexCenter>
      </FlexColumn>
    </div>
  );
};
