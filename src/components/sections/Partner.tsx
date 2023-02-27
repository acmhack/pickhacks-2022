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

const Box: AnyStyledComponent = styled.div`
  background-color: white;
  width: 38vw;
  height: 12vw;
  margin-right: 5px;
  position: relative;
  margin-left: auto;
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
  bottom: 15%;
  right: 5%;
  background-color: #755A39;
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
        <Title>PARTNERS</Title>
      </Box>

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
