import React from "react";
import Question from "../common/DropdownFAQ/Dropdown";
import styled, { AnyStyledComponent } from "styled-components";
const Title: AnyStyledComponent = styled.div`
  font-size: 4.5vw;
  color: #f47525;
  padding-bottom: 20px;

  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <div>
      <FlexCenter>
        <Title>FAQ</Title>
      </FlexCenter>

      <FlexCenter>
        <FlexColumn>
          <Question question="What's PickleHack?">
            Imagine a project you've always wanted to build — maybe an app,
            website, or robot. Now imagine having mentors, resources, and
            anything else you need at your side to help build it, all while
            learning and creating with friends. That's what Picklehack is all
            about! Plus, the free food.
          </Question>
          <Question question="Do I need to know how to code?">
            Nope! While it certainly doesn't hurt to have a programming
            background, you can get just as much out of PickleHack regardless of
            skill level. In fact, one of the event's biggest goals is to make
            sure everyone learns something new, so you'll fit in no matter what!
            Also, on the Wednesday before PickleHack (October 27th), there will
            be an hour of workshops tailored specifically to new coders.
          </Question>
          <Question question="Who can participate?">
            If you're a current S&T student, then you qualify!
          </Question>

          <Question question="Is PickleHack virtual?">
            We're excited to say that PickleHack will be hosted in person, in
            Butler-Carlton Hall! However, the entirety of the event can be
            accessed virtually, so it's up to you.
          </Question>

          <Question question="What's the theme?">
            We're looking for your silliest, goofiest, and most useless hacks
            for a light-hearted break from our current environment. (Almost)
            anything's fair game!
          </Question>

          <Question question="Do I need to have a team?">
            No! You have the freedom to work by yourself if you choose. However,
            if you're still looking for a team, you'll be able to express this
            on the registration form and we'll match you with other compatible
            hackers. In addition, on the Thursday directly before PickleHack
            (October 28th), we'll have a night dedicated to meeting other
            hackers, playing games, and finding teammates.
          </Question>
        </FlexColumn>
      </FlexCenter>
    </div>
  );
};
