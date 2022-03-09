import React from "react";
import {
  nineteen,
  balto,
  panera,
  centene,
  mastercard,
  nestle,
  nsc,
  veterans,
  tradebot,
  sandia,
  johndeere,
  sdp,
  nisc,
  jbhunt,
  leonardo,
  wwt,
  linode,
  cigna,
  crowdstrike,
  numerify,
  charter,
  cboe,
  platter,
} from "../../images/Images";
import styled, { AnyStyledComponent } from "styled-components";
import "./test.css";

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

export default () => {
  return (
    <div>
      <FlexCenter>
        <Title>SPONSORS</Title>
      </FlexCenter>
      <div className="sponsor-info">
        <div className="diamond">
          <div className="row">
            <a
              target="_blank"
              href="https://www.panerabread.com/en-us/home.html"
            >
              <img src={panera} />
            </a>
          </div>
        </div>
        <div className="gold">
          <div className="row">
            <a
              target="_blank"
              href="https://www.centene.com/"
              style={{ marginRight: "5%" }}
            >
              <img src={centene} />
            </a>
            <a target="_blank" href="https://www.mastercard.us/en-us.html">
              <img src={mastercard} />
            </a>
          </div>
        </div>
        <div className="silver">
          <div className="row">
            <a target="_blank" href="https://nestletech.com/2Ug7HGi">
              <img src={nestle} />
            </a>
            <a target="_blank" href="https://kcnsc.doe.gov/">
              <img src={nsc} />
            </a>
            <a target="_blank" href="https://www.veteransunited.com/">
              <img src={veterans} />
            </a>
          </div>
          <div className="row">
            <a target="_blank" href="http://tradebot.com/">
              <img src={tradebot} />
            </a>

            <a
              target="_blank"
              href="https://www.deere.com/en/technology-products/precision-ag-technology/"
            >
              <img src={johndeere} />
            </a>
          </div>
          <div className="row">
            <a
              target="_blank"
              href=""
              style={{ opacity: "0", cursor: "default" }}
            >
              <img src={balto} />
            </a>
            <a target="_blank" href="https://baltosoftware.com/">
              <img src={balto} />
            </a>
            <a
              target="_blank"
              href=""
              style={{ opacity: "0", cursor: "default" }}
            >
              <img src={balto} />
            </a>
          </div>
        </div>
        <div className="bronze">
          <div className="row">
            <a target="_blank" href="https://www.nisc.coop/">
              <img src={nisc} />
            </a>
            <a target="_blank" href="https://www.jbhunt.com/">
              <img src={jbhunt} />
            </a>
            <a target="_blank" href="https://www.wwt.com/">
              <img src={wwt} />
            </a>
            <a target="_blank" href="https://www.leonardodrs.com/">
              <img src={leonardo} />
            </a>
          </div>
          <div className="row">
            <a target="_blank" href="https://www.linode.com/">
              <img src={linode} />
            </a>
            <a target="_blank" href="https://1904labs.com/">
              <img src={nineteen} />
            </a>
            <a target="_blank" href="https://www.cigna.com/">
              <img src={cigna} />
            </a>
            <a target="_blank" href="https://www.crowdstrike.com/">
              <img src={crowdstrike} />
            </a>
          </div>
          <div className="row">
            <a target="_blank" href="https://www.softwaredesignpartners.com/">
              <img src={sdp} />
            </a>
            <a target="_blank" href="https://www.spectrum.com/">
              <img src={charter} />
            </a>
            <a target="_blank" href="https://www.cboe.com/">
              <img src={cboe} />
            </a>
          </div>
          <div className="row">
            <a
              target="_blank"
              href="https://platter.dev/"
              style={{ margin: "auto" }}
            >
              <img src={platter} />
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
