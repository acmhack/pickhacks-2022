import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import "../../App.css";
const HeadDiv: AnyStyledComponent = styled.div`
  color: #006a75;
  font-family: "ZenTokyoZoo-Regular";
  font-size: 4vw;
  display: flex;
  justify-content: flex-start;
`;
const Head2Div: AnyStyledComponent = styled.div`
  color: #009ac7;
  font-family: "ZenDots-Regular", cursive;
  display: flex;
  font-size: 3.5vw;
  margin-top: 8px;
  justify-content: flex-end;
`;
const SubDiv: AnyStyledComponent = styled.div`
  text-align: right;
  color: #006a75;
  font-family: "ZenTokyoZoo-Regular", cursive;
  font-size: 2vw;
`;

const Title: AnyStyledComponent = styled.div`
  font-size: 5vw;
  display: flex;
  color: #009ac7;
  font-family: "ZenDots-Regular", cursive;
  @media screen and () {
    font-size: 8vw;
  }
`;

const SubTitle: AnyStyledComponent = styled.div`
  text-align: right;
  font-family: "ZenTokyoZoo-Regular", cursive;
  color: #006a75;
  font-size: 3vw;
`;

const TitleDiv: AnyStyledComponent = styled.div`
  color: white;

  width: 100%;
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
const MainTitle: AnyStyledComponent = styled.div`
  display: flex;
`;

const SectionDescription: AnyStyledComponent = styled.div`
  padding: 10px;
  padding-top: 10%;
  font-size: 25px;
  max-width: 700px;
  color: white;
  font-family: "Amiko-SemiBold", cursive;
  @media screen and (max-width: 600px) {
    font-size: 15px;
    padding: 12px;
  }
`;

export default () => {
  return (
    <div>
      <FlexColumn>
        <FlexCenter>
          <TitleDiv>
            <MainTitle>
              {/* <HeadDiv>
                Pickhacks<span style={{ fontSize: "30px" }}> Presents</span>
              </HeadDiv> */}
              <Head2Div>April 8th-10th</Head2Div>
            </MainTitle>

            <FlexCenter>
              <Title>PICKHACKS 2022</Title>
            </FlexCenter>

            <SubTitle>Missouri S&T's WellBeing Hackathon</SubTitle>
            <SubDiv>Spring 2022</SubDiv>
          </TitleDiv>
        </FlexCenter>
        <FlexCenter>
          <FlexCenter>
            <SectionDescription>
              PickHacks is the 36-hour hackathon brought to you by Missouri
              University of Science & Technology. Join us for a weekend chock
              full of innovation, creation, and collaboration as you work in
              teams of up to four to create a project that addresses this year’s
              theme: Wellbeing. We’re excited to see what you get up to as you
              build with us, attend our tech talks, and meet other tech-minded
              people at this year's PickHacks 2022!
            </SectionDescription>
          </FlexCenter>
        </FlexCenter>
        <FlexCenter></FlexCenter>
      </FlexColumn>
    </div>
  );
};
