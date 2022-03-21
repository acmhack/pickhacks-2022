import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { cloud } from "../../images/Images";
import "../../App.css";
import CloudButton from "../common/CloudButton";

// const HeadDiv: AnyStyledComponent = styled.div`
//   color: #006a75;
//   font-family: "ZenTokyoZoo-Regular";
//   font-size: 4vw;
//   display: flex;
//   justify-content: flex-start;
// `;
const Head2Div: AnyStyledComponent = styled.div`
  color: #009ac7;
  font-family: "ZenDots-Regular", cursive;
  display: flex;
  font-size: 3.5vw;

  margin-top: 8px;
  @media (max-width: 1196px) {
    font-size: 5vw;
  }
`;
const SubDiv: AnyStyledComponent = styled.div`
  text-align: right;
  color: #006a75;
  font-family: "ZenTokyoZoo-Regular", cursive;
  font-size: 2vw;
  @media (max-width: 1196px) {
    font-size: 4vw;
  }
`;

const Title: AnyStyledComponent = styled.div`
  font-size: 5vw;
  display: flex;
  color: #009ac7;
  font-family: "ZenDots-Regular", cursive;
  @media (max-width: 1196px) {
    font-size: 6vw;
  }
`;

const SubTitle: AnyStyledComponent = styled.div`
  text-align: right;
  font-family: "ZenTokyoZoo-Regular", cursive;
  color: #006a75;
  font-size: 3vw;
  @media (max-width: 1196px) {
    font-size: 5vw;
  }
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
const FlexEnd: AnyStyledComponent = styled.div`
  justify-content: flex-end;
  display: flex;
  width: 100%;
`;
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainTitle: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
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
const Grid: AnyStyledComponent = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;


  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
{/*
const CloudDiv: AnyStyledComponent = styled.img`
  padding: 20px;
  @media (max-width: 603px) {
    height: auto;
    width: 150px;
  }
`;
const CloudContainer: AnyStyledComponent = styled.div`
  position: relative;
  text-align: center;
  @media (min-width: 1000px) {
    &:hover {
      transform: scale(1.1);
      transition: transform 200ms ease-in-out;
    }
  }
`;
const CloudText: AnyStyledComponent = styled.div`
  position: absolute;
  font-family: "ZenKurenaido-Regular", cursive;
  font-size: 48px;
  color: #f78702;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 603px) {
    font-size: 31px;
  }
`;
*/}
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
              <FlexCenter>
                {" "}
                <Head2Div>April 8th-10th</Head2Div>
              </FlexCenter>
            </MainTitle>

            <FlexCenter>
              <Title>PICKHACKS 2022</Title>
            </FlexCenter>
            {/* <Constraint> */}
            <FlexCenter>
              <SubTitle>Missouri S&T's WellBeing Hackathon</SubTitle>
            </FlexCenter>

            <FlexCenter>
              <SubDiv>Spring 2022</SubDiv>
            </FlexCenter>
            {/* </Constraint> */}
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
     
        <Grid style={{marginBottom: "0"}}>
          <CloudButton 
            link="TBA"
          >DISCORD</CloudButton>
          <span></span>
          <CloudButton 
          link="https://docs.google.com/forms/d/e/1FAIpQLSei8cSCbm2pCEEdQNXS2pfBTpWTWEY-66I-8kNjv8kuwqjkzQ/viewform"
          >APPLY</CloudButton>
          <span></span>
        </Grid>
        <Grid>
          <span></span>
          <CloudButton 
            link="mailto:msthackathon@umsystem.edu"
          >EMAIL</CloudButton>
          <span></span>
          <CloudButton 
          link="https://www.facebook.com/sandtpickhacks/"
          >SOCIAL MEDIA</CloudButton>
        </Grid>

        {/*
        <a
          style={{ textDecoration: "none" }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSei8cSCbm2pCEEdQNXS2pfBTpWTWEY-66I-8kNjv8kuwqjkzQ/viewform"
          target="_blank"
        >
          <CloudContainer>
            <CloudDiv src={cloud} />
            <CloudText>APPLY</CloudText>
          </CloudContainer>
        </a>
        */}
      </FlexColumn>
    </div>
  );
};
