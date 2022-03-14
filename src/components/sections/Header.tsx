import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const HeadDiv: AnyStyledComponent = styled.div`
  text-align: left;
  float: left;
  color: #006a75;
  font-family: "Zen Tokyo Zoo", cursive;
  font-size: 50px;
`;
const Head2Div: AnyStyledComponent = styled.div`
  text-align: right;
  color: #009ac7;
  font-family: "Zen Dots", cursive;
  font-size: 45px;
  margin-top: 8px;
`;
const SubDiv: AnyStyledComponent = styled.div`
  text-align: right;
  color: #006a75;
  font-family: "Zen Tokyo Zoo", cursive;
  font-size: 30px;
`;

const Title: AnyStyledComponent = styled.div`
  font-size: 5vw;
  color: #009ac7;
  text-align: left;
  @media screen and () {
    font-size: 8vw;
  }
`;

const SubTitle: AnyStyledComponent = styled.div`
  font-size: 1.5vw;
  text-align: right;
  font-family: "Zen Tokyo Zoo", cursive;
  color: #006a75;
  font-size: 37px;
`;

const TitleDiv: AnyStyledComponent = styled.div`
  color: white;
  float: left;
  text-align: left;
  margin-right: 800px;
  margin-left: 30px;
  margin-top: -250px;
  width: 900px;
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

export default () => {
  return (
    <div>
      <FlexColumn>
        <FlexCenter>
          <TitleDiv>
            <HeadDiv>
              {" "}
              <text>Pickhacks Presents</text>{" "}
            </HeadDiv>

            <Head2Div>
              <text>April 9th-10th</text>
            </Head2Div>
            <FlexCenter>
              <Title>PICKHACKS 2022</Title>
            </FlexCenter>

            <SubTitle>Missouri S&T's WellBeing Hackathon</SubTitle>
            <SubDiv>
              <text>Spring 2022</text>
            </SubDiv>
          </TitleDiv>
        </FlexCenter>
        <FlexCenter>
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
        <FlexCenter></FlexCenter>
      </FlexColumn>
    </div>
  );
};
