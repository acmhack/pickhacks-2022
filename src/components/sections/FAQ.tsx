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
            Anyone currently enrolled in an educational institution (high school and above) or 12 months out of graduation is able to attend. You don't even have to know how to code to join! Just come in with an open mind and fun ideas to expand on, and you'll be set!
          </FAQSegment>
          <FAQSegment title="WHAT is a hackathon?" image={desert}>
            PickHacks is Missouri S&T's annual hackathon — an innovation competition where students come together to bring a project to life over the course of a weekend. You come up with the idea, and we provide mentors, resources, and anything else you need. Programming experience isn't necessary; the only requirement is a willingness to learn and have fun! Plus, it's FREE!
          </FAQSegment>
          <FAQSegment title="WHERE is PickHacks located?" image={pond}>
            The event will be happening in the Gale-Bullman Recreation Center here on the Missouri S&T campus!
          </FAQSegment>
          <FAQSegment title="WHEN is PickHacks?" image={mountains}>
            PickHacks is taking place the weekend of April 14th through 16th!
          </FAQSegment>
          <FAQSegment title="WHY should I participate?" image={ocean}>
            Hackathons are a fun way to learn new skills that you can add to your resume and connect with sponsors and other students while competing for prizes. We will have free swag at the event for anyone who comes! Additionally, there will be ample food provided for FREE throughout the weekend!
          </FAQSegment>

          <FAQSegment title="HOW do I apply?" image={trees}>
            <>
              To apply, click <a href="https://dashboard.pickhacks.io">here</a> or scroll to the top and click the apply button by April 10th! 
            </>
          </FAQSegment>
      </FlexColumn>
  );
};
