import React from "react";
import {
  paneranew,
  tradebot,
  johndeere,
  jbhunt,
} from "../../images/Images";
import styled, { AnyStyledComponent } from "styled-components";
import "./test.css";

const Title: AnyStyledComponent = styled.div`
  font-size: 4.5vw;
  color: #f47525;
  padding-bottom: 20px;
  font-family: "ZenDots-Regular", cursive;
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
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

//const SilverA: AnyStyledComponent = styled.a`
//`;

export default () => {
  return (
    <div>
      <FlexCenter>
        <Title>SPONSORS</Title>
      </FlexCenter>
      <div className="sponsor-info">
        <div className="diamond">
        </div>
        <div className="gold">
          <div className="row">
            <a
              target="_blank"
              href="https://www.panerabread.com/en-us/home.html"
            >
              <img src={paneranew} />
            </a>
          </div>
        </div>
        <div className="silver">
          <div className="row">
            <a
              target="_blank"
              href="https://www.deere.com/en/technology-products/precision-ag-technology/"
            >
              <img src={johndeere} />
            </a>
          </div>
        </div>
        <div className="bronze">
          <div className="row">
            <a target="_blank" href="https://www.jbhunt.com/">
                <img src={jbhunt} />
            </a>
            <a target="_blank" href="https://www.tradebot.com/">
                <img src={tradebot} />
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
    </div>
  );
};
