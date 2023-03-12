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
import "./test.css";

const Box: AnyStyledComponent = styled.div`
  background-color: white;
  width: 38vw;
  height: 12vw;
  position: relative;
  margin-bottom: 75px;
  @media screen and (max-width: 1000px) {
    width: 57.5vw;
    height: 20vw;
  }
`

const Title: AnyStyledComponent = styled.div`
  font-size: 5vw;
  color: black;
  text-align: center;
  line-height: 12vw;
  width: 38vw;
  height: 12vw;
  font-family: "Alike";
  position: absolute;
  top: 15%;
  left: 5%;
  background-color: #20BFB1;
  @media screen and (max-width: 1000px) {
    line-height: 20vw;
    width: 57.5vw;
    height: 20vw;
    font-size: 8vw;
  }
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

/*
const FlexCenter2: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  gap: 2.5%;
  margin-bottom: 5.5rem;
`;

const SilverSponsor: AnyStyledComponent = styled.a`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
*/

const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 5px;
`;

export default () => {
  return (
    <FlexColumn>
      <Box>
        <Title>SPONSORS</Title>
      </Box>
      <div className="sponsor-info">
        <div className="diamond">
        </div>
        <div className="gold">
          <div className="row">
          </div>
        </div>
        {/* TODO: change to flexbox with property flex-wrap: wrap for mobile users*/}
        <div className="silver">
          <div className="row">
            <a
              target="_blank"
              href="https://www.deere.com/en/technology-products/precision-ag-technology/"
            >
              <img src={johndeere} />
            </a>
            <a
              target="_blank"
              href="https://www.panerabread.com/en-us/home.html"
            >
              <img src={paneranew} />
            </a>
            <a
              target="_blank"
              href="https://www.hunter.com/"
            >
              <img src={huntereng} />
            </a>
            
          </div>
          <div className="row">
            <a
              target="_blank"
              href="https://www.honeywell.com/us/en"
            >
              <img src={nsc} />
            </a>
            <a
              target="_blank"
              href="https://www.cigna.com/"
            >
              <img src={cigna} />
            </a>
            <a
              target="_blank"
              href="https://www.shelterinsurance.com/"
            >
              <img src={shelter} style={{width: "200px"}}/>
            </a>
          </div>
        </div>
        
        <div className="bronze">
          <div className="row">
            <a target="_blank" href="https://www.jbhunt.com/">
                <img src={jbhunt} />
            </a>
            <a target="_blank" href="https://www.sandia.gov/">
                <img src={sandia} />
            </a>
            <a target="_blank" href="https://www.tradebot.com/">
                <img src={tradebot} />
            </a>
            <a target="_blank" href="https://www.brewerscience.com/">
                <img src={brewer} />
            </a>
          </div>
        </div>
      </div>

      {/* 
      <GridBox>
        <Grid>
          <DiamondGridItem>
            <CompanyImage src={mastercard} />
          </DiamondGridItem>
          <DiamondGridItem style={{ gridArea: "z" }}>
            <CompanyImage src={nestle} />
          </DiamondGridItem>
          <GoldGridItem>
            <CompanyImage src={mastercard} />
          </GoldGridItem>
        </Grid>
      </GridBox> */}
    </FlexColumn>
  );
};
