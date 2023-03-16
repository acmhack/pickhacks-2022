import React from "react";

import styled, { AnyStyledComponent } from "styled-components";

import {
  fifteen,
  zesttea,
  brewer,
  highalpha,
  stickermule,
  smashmallow,
  girlswhocode,
  monsterenergy,
  goodsnacks,
  doa,
  voiceflow,
  mlh,
  sketch,
  stlpublicradio,
  umsystem,
  acm,
  acmw,
} from "../../images/Images";

import PartnerIcon from "../common/Partners/PartnerIcon";

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
  background-color: #755A39;
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
  align-items: center;
  width: 100%;
  margin-right: 5px;
`;

const PartnerColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const PartnerRow: AnyStyledComponent = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;


export default () => {
  return (
    <FlexColumn>
      <Box>
        <Title>PARTNERS</Title>
      </Box>
      <PartnerColumn>
        <PartnerRow>
          <PartnerIcon src={umsystem} href="https://www.umsystem.edu/" height={250}/>
        </PartnerRow>
        <PartnerRow>
          <PartnerIcon src={mlh} href="https://mlh.io/"/>
          <PartnerIcon src={acm} href="https://mstacm.org/"/>
        </PartnerRow>
      </PartnerColumn>
    </FlexColumn>
  );
};
