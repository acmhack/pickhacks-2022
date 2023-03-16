import React from "react";
import {
  jbhunt,
  johndeere,
  paneranew,
  sandia,
  tradebot,
  nsc,
  cigna,
  huntereng,
  assemblyai,
  shelter,
  brewer,
  equifax
} from "../../images/Images";
import styled, { AnyStyledComponent } from "styled-components";
import SponsorIcon from "../common/Sponsors/SponsorIcon";

const Box: AnyStyledComponent = styled.div`
  background-color: white;
  width: 35vw;
  height: 11vw;
  position: relative;
  margin-bottom: 12%;
  @media screen and (max-width: 1000px) {
    width: 55vw;
    height: 18vw;
  }
`

const Title: AnyStyledComponent = styled.div`
  font-size: 4vw;
  color: black;
  text-align: center;
  line-height: 11vw;
  width: 35vw;
  height: 11vw;
  font-family: "Alike";
  position: absolute;
  top: 15%;
  left: 5%;
  background-color: #20BFB1;
  @media screen and (max-width: 1000px) {
    line-height: 18vw;
    width: 55vw;
    height: 18vw;
    font-size: 6vw;
  }
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 5px;
`;

const SponsorColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media screen and (max-width: 600px) {
    gap: 20px;
  }
`;

const SponsorRow: AnyStyledComponent = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    gap: 20px;
  }
`;


export default () => {
  return (
    <FlexColumn>
      <Box>
        <Title>SPONSORS</Title>
      </Box>

      <SponsorColumn>
        <SponsorRow>
          <SponsorIcon src={johndeere} href="https://www.deere.com/en/technology-products/precision-ag-technology/" type="silver"/>
          <SponsorIcon src={huntereng} href="https://www.hunter.com/" type="silver"/>
        </SponsorRow>
        <SponsorRow>
          <SponsorIcon src={nsc} href="https://kcnsc.doe.gov/" square type="silver"/>
          <SponsorIcon src={paneranew} href="https://careers.panerabread.com/global/en" square type="silver"/>
        </SponsorRow>
        <SponsorRow>
          <SponsorIcon src={jbhunt} href="https://www.jbhunt.com/" type="bronze"/>
          <SponsorIcon src={shelter} href="https://www.shelterinsurance.com/" square type="bronze"/>
          <SponsorIcon src={sandia} href="https://www.sandia.gov/" type="bronze"/>
        </SponsorRow>
        <SponsorRow>
          <SponsorIcon src={brewer} href="https://www.brewerscience.com/" type="bronze"/>
          <SponsorIcon src={tradebot} href="https://www.tradebot.com/" type="bronze"/>
        </SponsorRow>
      </SponsorColumn>
    </FlexColumn>
  );
};
