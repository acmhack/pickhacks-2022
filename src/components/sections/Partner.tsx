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
  width: 686px;
  height: 217px;
  position: relative;
  margin-left: auto;
`

const Title: AnyStyledComponent = styled.div`
  font-size: 96px;
  color: black;
  padding: 44.5px 89px;
  font-family: "Alike";
  position: absolute;
  bottom: 45px;
  right: 40px;
  background-color: #755A39;
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
