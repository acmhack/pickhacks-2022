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

const Box: AnyStyledComponent = styled.div`
  background-color: white;
  width: 38vw;
  height: 12vw;
  margin-left: 5px;
  position: relative;
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

export default () => {
  return (
    <div>
      <Box>
        <Title>SPONSORS</Title>
      </Box>
      <div className="sponsor-info">
        <div className="diamond">
        </div>
        <div className="gold">
          <div className="row">
          <a
              target="_blank"
              href=""
              style={{ opacity: "0", cursor: "default" }}
            >
              <img src={balto} />
            </a>
            <a
              target="_blank"
              href="https://www.panerabread.com/en-us/home.html"
              style={{ marginRight: "5%" }}
            >
              <img src={require("../../images/paneranew.png")} />
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
              href="https://www.honeywell.com/us/en"
            >
              <img src={nsc} />
            </a>
          </div>
          <div className="row">
          <a
              target="_blank"
              href="https://www.sandia.gov/"
            >
              <img src={sandia} />
            </a>
            <a
              target="_blank"
              href="https://www.hunter.com/"
            >
              <img src={require("../../images/huntereng.png")} />
            </a>
          </div>
        </div>


        
        <div className="bronze">
          <div className="row">
            <a target="_blank" href="https://www.cigna.com/">
                <img src={cigna} />
            </a>
            <a target="_blank" href="https://www.assemblyai.com/">
                <img src={require("../../images/assemblyai.png")} />
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
