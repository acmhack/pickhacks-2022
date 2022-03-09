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
  sketch,
  stlpublicradio,
  umsystem,
  acm,
  acmw,
} from "../../images/Images";

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
        <Title>PARTNERS</Title>
      </FlexCenter>

      <div className="sponsor-info">
        <div className="gold">
          <div className="row">
            <a target="_blank" href="https://www.umsystem.edu/">
              <img src={umsystem} />
            </a>
          </div>
        </div>

        <div className="silver">
          <div className="row">
            <a target="_blank" href="https://women.mstacm.org/">
              <img src={acmw} />
            </a>
            <a target="_blank" href="https://mstacm.org/">
              <img src={acm} />
            </a>
          </div>
          <div className="row">
            <a target="_blank" href="https://www.1517fund.com/">
              <img src={fifteen} />
            </a>
            <a target="_blank" href="https://highalpha.com/">
              <img src={highalpha} />
            </a>
          </div>
          <div className="bronze">
            <div className="row">
              <a
                target="_blank"
                href="http://hackp.ac/mlh-stickermule-hackathons"
              >
                <img src={stickermule} />
              </a>
              <a target="_blank" href="https://girlswhocode.com/">
                <img src={girlswhocode} />
              </a>
              <a
                target="_blank"
                href="https://news.stlpublicradio.org/#stream/0"
              >
                <img src={stlpublicradio} />
              </a>
            </div>

            <div className="row">
              <a target="_blank" href="https://www.monsterenergy.com/">
                <img src={monsterenergy} />
              </a>
              <a target="_blank" href="https://goodsnacks.com/">
                <img src={goodsnacks} />
              </a>
              {/* <a target="_blank" href="https://thecodex.me/">
                <img src={stlpublicradio}/>
              </a> */}
            </div>
            <div className="row">
              <a target="_blank" href="https://smashmallow.com/">
                <img src={smashmallow} />
              </a>
              <a target="_blank" href="https://www.zesttea.com/">
                <img src={zesttea} />
              </a>
              <a target="_blank" href="https://www.brewerscience.com/">
                <img src={brewer} />
              </a>
            </div>
            <div className="row">
              <a target="_blank" href="https://www.digitalocean.com/">
                <img src={doa} />
              </a>
              <a target="_blank" href="https://www.voiceflow.com/">
                <img src={voiceflow} />
              </a>
              <a target="_blank" href="https://www.sketch.com/">
                <img src={sketch} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
