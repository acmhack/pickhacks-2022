import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import "../../App.css";
import NavLink from "../common/Navbar/NavbarLink";
import ImageButton from "../common/ImageButton";
import {
  devpostbutton,
  discordbutton,
  emailbutton,
  hopinbutton,
  socialsbutton
} from "../../images/Images";
import { pickhack23logo } from "../../images/Images";

const TitleDiv: AnyStyledComponent = styled.div`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title: AnyStyledComponent = styled.div`
  font-size: 5.5vw;
  color: white;
  font-family: "Alike-Regular";
  @media (max-width: 1196px) {
    font-size: 8vw;
  }
  @media (max-width: 700px) {
    font-size: 11vw;
  }
`;

const Date: AnyStyledComponent = styled.div`
  color: white;
  font-family: "MerriweatherSans-Regular";
  font-size: 2vw;
  text-align: center;
  @media (max-width: 1196px) {
    font-size: 3vw;
  }
  @media (max-width: 700px) {
    font-size: 3.5vw;
  }
`;

const SubTitle: AnyStyledComponent = styled.div`
  text-align: center;
  font-family: "Alike-Regular";
  color: white;
  font-size: 3.5vw;
  @media (max-width: 1196px) {
    font-size: 4.5vw;
  }
  @media (max-width: 907px) {
    display: none;
  }
`;

const SubTitle2: AnyStyledComponent = styled.div`
  text-align: center;
  font-family: "Alike-Regular";
  color: white;
  font-size: 4.75vw;
  @media (min-width: 908px) {
    display: none;
  }
`;

const SmallerTitle: AnyStyledComponent = styled.div`
  color: white;
  font-family: "MerriweatherSans-Regular";
  display: flex;
  font-size: 2vw;
  padding-bottom: 10px;
  text-align: center;
  margin-top: 8px;
  @media (max-width: 1196px) {
    font-size: 4vw;
  }
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
  align-items: center;
`;
const MainTitle: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
`;

const ApplyButton: AnyStyledComponent = styled.a`
  margin-top: 35px;
  padding: 3px 10px;
  font-size: 25px;
  max-width: 700px;
  color: white;
  text-decoration: none;
  border: 3px solid #148648;
  font-family: "MerriweatherSans-Regular";
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }

  &:hover {
    background-color: #148648;
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;
    cursor: pointer;
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

const Buttons: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LogoPopup: AnyStyledComponent = styled.img`
  display: none;
  justify-content: center;
  align-items: center;
  width: 175px;
  margin: 50px;
  @media screen and (max-width: 1150px) {
    display: flex;
  }
  @media screen and (max-width: 800px) {
    width: 125px;
    margin: 25px;
  }
`;


export default () => {
  return (
    <div>
      <FlexColumn>
        <LogoPopup src={pickhack23logo}/>
        <TitleDiv>
            <Title>PICKHACKS</Title>
            <Date>April 14th-16th</Date>
            <SubTitle>Missouri S&T's Environmental Hackathon</SubTitle>
            <SubTitle2>Missouri S&T's<br></br>Environmental Hackathon</SubTitle2>
        </TitleDiv>

        <FlexCenter>
          <ApplyButton  href="https://dashboard.pickhacks.io/" target = "_blank">
              Apply for Pickhacks 2023
          </ApplyButton>
        </FlexCenter>
              
        <Buttons>
          <ImageButton image={discordbutton} link="https://discord.gg/K6uwZUcaff">
            discord
          </ImageButton>
          {/* <ImageButton image={hopinbutton} link="https://hopin.com/events/prehacks-2022?code=35TilvrOl2pC5VE4WubBM50yK">
            prehacks hopin
          </ImageButton> */}
          <ImageButton image={emailbutton} link="mailto:msthackathon@umsystem.edu">
            email
          </ImageButton>
          <ImageButton image={socialsbutton} link="https://linktr.ee/pickhacks">
            socials
          </ImageButton>
          <ImageButton image={devpostbutton} link="https://pickhacks-2023.devpost.com/">
            devpost
          </ImageButton>
        </Buttons>
      </FlexColumn>
    </div>
  );
};
