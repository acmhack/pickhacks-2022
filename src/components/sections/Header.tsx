import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { cloud } from "../../images/Images";
import "../../App.css";
import CloudButton from "../common/CloudButton";
import ImageButton from "../common/ImageButton";
import {
  devpostbutton,
  discordbutton,
  emailbutton,
  hopinbutton,
  socialsbutton
} from "../../images/Images";


// const HeadDiv: AnyStyledComponent = styled.div`
//   color: #006a75;
//   font-family: "ZenTokyoZoo-Regular";
//   font-size: 4vw;
//   display: flex;
//   justify-content: flex-start;
// `;
const Head2Div: AnyStyledComponent = styled.div`
  color: white;
  font-family: "Alike-Regular";
  display: flex;
  font-size: 2.5vw;
  padding-bottom: 10px;

  margin-top: 8px;
  @media (max-width: 1196px) {
    font-size: 5vw;
  }
`;
const SubDiv: AnyStyledComponent = styled.div`
  text-align: right;
  color: white;
  font-family: "Alike-Regular";
  font-size: 2vw;
  @media (max-width: 1196px) {
    font-size: 4vw;
  }
`;

const Title: AnyStyledComponent = styled.div`
  font-size: 7vw;
  display: flex;
  color: white;
  font-family: "Alike-Regular";
  @media (max-width: 1196px) {
    font-size: 7vw;
  }
`;

const SubTitle: AnyStyledComponent = styled.div`
  text-align: right;
  font-family: "Alike-Regular";
  color: white;
  font-size: 4vw;
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
  align-items: center;
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
  margin: 10px;
  margin-top: 10%;
  padding: 3px;
  font-size: 25px;
  max-width: 700px;
  color: white;
  border: 3px solid #148648;
  font-family: "MerriweatherSans-Regular";
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

export default () => {
  return (
    <div>
      <FlexColumn>
        <FlexCenter>
          <TitleDiv>

            <FlexCenter>
              <Title>PICKHACKS</Title>
            </FlexCenter>

            {/* <MainTitle> */}
              {/* <HeadDiv>
                Pickhacks<span style={{ fontSize: "30px" }}> Presents</span>
              </HeadDiv> */}
              <FlexCenter>
                {/* {" "} */}
                <Head2Div>April 14th-16th</Head2Div>
              </FlexCenter>
            {/* </MainTitle> */}

            
            {/* <Constraint> */}
            <FlexCenter>
              <SubTitle>Missouri S&T's Environmental Hackathon</SubTitle>
            </FlexCenter>

            {/* <FlexCenter>
              <SubDiv>Spring 2022</SubDiv>
            </FlexCenter> */}
            {/* </Constraint> */}
          </TitleDiv>
        </FlexCenter>
        <FlexCenter>
          <FlexCenter>
            <SectionDescription>
              {/* PickHacks is the 36-hour hackathon brought to you by Missouri
              University of Science & Technology. Join us for a weekend chock
              full of innovation, creation, and collaboration as you work in
              teams of up to four to create a project that addresses this year’s
              theme: Wellbeing. We’re excited to see what you get up to as you
              build with us, attend our tech talks, and meet other tech-minded
              people at this year's PickHacks 2022! */}
              learn more
            </SectionDescription>
          </FlexCenter>
        </FlexCenter>
              
        <FlexCenter>
          <ImageButton image={discordbutton} link="https://discord.gg/xnDtKNvm">
            discord
          </ImageButton>
          <ImageButton image={hopinbutton} link="https://hopin.com/events/prehacks-2022?code=35TilvrOl2pC5VE4WubBM50yK">
            prehacks hopin
          </ImageButton>
          <ImageButton image={emailbutton} link="mailto:msthackathon@umsystem.edu">
            email
          </ImageButton>
          <ImageButton image={socialsbutton} link="https://www.facebook.com/sandtpickhacks/">
            socials
          </ImageButton>
          <ImageButton image={devpostbutton} link="https://pickhacks-2022.devpost.com/">
            devpost
          </ImageButton>
        </FlexCenter>
      </FlexColumn>
    </div>
  );
};
