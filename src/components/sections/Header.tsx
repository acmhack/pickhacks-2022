import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import ApplyButton from "../common/Button";

import PickleHack2 from "../../images/picklehackLogo.png";
import spider from "../../images/spider.png";
import witch from "../../images/witch.png";
const Example: AnyStyledComponent = styled.div``;

const Title: AnyStyledComponent = styled.div`
  font-size: 5vw;
  color: #90c640;

  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
`;

const TitleAlt: AnyStyledComponent = styled.span`
  color: #f47525;
`;

const SubTitle: AnyStyledComponent = styled.div`
  font-size: 1.5vw;
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: white;
  @media screen and (max-width: 800px) {
    font-size: 3vw;
  }
`;

const TitleDiv: AnyStyledComponent = styled.div`
  color: white;
`;
const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  padding: 0;
`;
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionDescription: AnyStyledComponent = styled.div`
  padding: 10px;
  padding-top: 10%;
  font-size: 20px;
  max-width: 700px;
  color: white;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 600px) {
    font-size: 15px;
    padding: 12px;
  }
`;

const ButtonDiv: AnyStyledComponent = styled.div`
  padding-top: 10%;
  justify-content: center;
  display: flex;
`;

// const SpiderImg: AnyStyledComponent = styled.div`
//   display: flex;

//   justify-content: flex-start;
// `;

// const WitchImg: AnyStyledComponent = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

const Logo: AnyStyledComponent = styled.img`
  height: 7vw;
  width: auto;
  @media screen and (max-width: 800px) {
    height: 12vw;
  }
`;
export default () => {
  return (
    <div>
      <FlexColumn>
        <FlexCenter>
          <TitleDiv>
            <FlexCenter>
              <Logo src={PickleHack2} />
            </FlexCenter>
            {/* <Title>
              PICKLE<TitleAlt>HACK</TitleAlt>
            </Title> */}
            <SubTitle>October 29 - 30, MISSOURI S&T</SubTitle>
          </TitleDiv>
        </FlexCenter>
        <FlexCenter>
          {/* <SpiderImg>
              <img
                alt="spider"
                style={{
                  height: "100px",
                  width: "auto",
                  marginBottom: "-2000px",
                }}
                src={spider}
              />
            </SpiderImg> */}
          <FlexCenter>
            <SectionDescription>
              PickHacks presents PickleHack, our 24-hour virtual/in-person
              hybrid hackathon held exclusively for Missouri S&T Miners! This is
              a great opportunity for both first-time freshmen and seasoned
              programmers to bring creative ideas to life with your friends,
              through software development and team collaboration.
            </SectionDescription>
          </FlexCenter>
        </FlexCenter>
        <FlexCenter>
          <ButtonDiv>
            <ApplyButton link="https://discord.gg/dpdZ6yjr7j">
              JOIN DISCORD
            </ApplyButton>
          </ButtonDiv>

          {/* <WitchImg>
              <img
                alt="witch"
                style={{ height: "300px", width: "auto" }}
                src={witch}
              />
            </WitchImg> */}
        </FlexCenter>
      </FlexColumn>
    </div>
  );
};
