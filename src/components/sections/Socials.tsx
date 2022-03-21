import React from "react";
import { cloud } from "../../images/Images";
import styled, { AnyStyledComponent } from "styled-components";

import ApplyButton from "../common/Button";

const Title: AnyStyledComponent = styled.div`
  font-size: 4.5vw;
  color: #f47525;
  padding-bottom: 20px;
  text-align: center;
  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Grid: AnyStyledComponent = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 250px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridItem: AnyStyledComponent = styled.a`
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    &:hover {
      transform: scale(1.1);
      transition: transform 200ms ease-in-out;
    }
  }
`;
const GridImage: AnyStyledComponent = styled.img`
  height: 100px;
  width: 100px;
  margin: auto;
`;

const Name: AnyStyledComponent = styled.div`
  position: absolute;
  right: 50%;
  left: 50%;
  top: 50%
  font-family: "Poppins", sans-serif;
  color: black;
`;

export default () => {
  return (
    <div>
      <Grid>
        {/*
        <GridItem href="discord" target="_blank">
          <GridImage src={cloud}></GridImage>
          <Name>DISCORD</Name>
        </GridItem>
        <GridItem href="discord" target="_blank">
          <GridImage src={cloud}></GridImage>
          <Name>DISCORD</Name>
        </GridItem>
        */}
        <ApplyButton link="TBA">DISCORD</ApplyButton>
        <span></span>
        <ApplyButton link="TBA">APPLY</ApplyButton>
      </Grid>
      <br></br>
      <br></br>
      <Grid>
        {/*
        <GridItem href="try" target="_blank">
          <Title>EMAIL</Title>
        </GridItem>
        <GridItem href="social" target="_blank">
          <Title>SOCIAL <br></br>MEDIA</Title>
        </GridItem>
        */}
        <span></span>
        <ApplyButton link="mailto:msthackathon@umsystem.edu">EMAIL</ApplyButton>
        <span></span>
        <ApplyButton link="https://www.facebook.com/sandtpickhacks/">
          SOCIAL_MEDIA
        </ApplyButton>
      </Grid>
    </div>
  );
};
