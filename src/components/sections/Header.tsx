import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import ApplyButton from "../common/Button";

import PickleHack2 from "../../images/picklehackLogo.png";
import spider from "../../images/spider.png";
import witch from "../../images/witch.png";


const Example: AnyStyledComponent = styled.div``;

const HeadDiv: AnyStyledComponent = styled.div` 
text-align:left;
float: left;
color:#006A75;
font-family: 'Zen Tokyo Zoo', cursive;
font-size: 50px;
`;
const Head2Div: AnyStyledComponent = styled.div`
text-align:right;
color: #009AC7;
font-family: 'Zen Dots', cursive;
font-size:45px;
margin-top:8px;

`;
const SubDiv: AnyStyledComponent = styled.div` 
text-align:right;
color: #006A75;
font-family: 'Zen Tokyo Zoo', cursive;
font-size: 30px;
`;



const Title: AnyStyledComponent = styled.div`
  font-size: 5vw;
  color: #009AC7;
  text-align:left;
  @media screen and () {
    font-size: 8vw;
  }
  

`;

const TitleAlt: AnyStyledComponent = styled.span`
  color: #f47525;
`;

const SubTitle: AnyStyledComponent = styled.div`
  font-size: 1.5vw;
  text-align: right;
  font-family: 'Zen Tokyo Zoo', cursive;
  color: #006A75;
  font-size:37px;
`;

const TitleDiv: AnyStyledComponent = styled.div`
  color: white;
  float:left;
  text-align:left;
  margin-right: 800px;
  margin-left:30px;
  margin-top:-250px;
  width:900px;
  
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
            <HeadDiv> <text>Pickhacks Presents</text> </HeadDiv>

            <Head2Div><text>April 9th-10th</text></Head2Div>
            <FlexCenter>
              <Title>PICKHACKS 2022</Title>
            </FlexCenter>
            {/* <Title>
              PICKLE<TitleAlt>HACK</TitleAlt>
            </Title> */}
            <SubTitle>Missouri S&T's WellBeing Hackathon</SubTitle>
            <SubDiv><text>Spring 2022</text></SubDiv>
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
          {/*
          <ButtonDiv>
            <ApplyButton link="https://discord.gg/dpdZ6yjr7j">
              JOIN DISCORD
            </ApplyButton>
          </ButtonDiv>
          */}
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
