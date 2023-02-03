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

import "./test.css";
const Title: AnyStyledComponent = styled.div`
  font-size: 4.5vw;
  color: #f0803c;
  text-shadow: 2px 2px 4px gray;
  padding-bottom: 20px;
  text-align: center;
  font-family: "ZenDots-Regular", cursive;
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
            <a target="_blank" href="https://mlh.io/">
              <img src={mlh} />
            </a>
            <a target="_blank" href="https://mstacm.org/">
              <img src={acm} />
            </a>

          </div>
          <div className="row">
          <a
              target="_blank"
              href=""
              style={{ opacity: "0", cursor: "default" }}
            >
              <img src={stickermule} />
            </a>
            <a
                target="_blank"
                href="http://hackp.ac/mlh-stickermule-hackathons"
              >
                <img src={stickermule} />
            </a>
            <a
              target="_blank"
              href=""
              style={{ opacity: "0", cursor: "default" }}
            >
              <img src={stickermule} />
            </a>
            </div>
       </div>
      </div>
    </div>
  );
};
