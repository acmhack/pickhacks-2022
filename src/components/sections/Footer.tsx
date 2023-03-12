import React from "react";

import styled, { AnyStyledComponent } from "styled-components";

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #148648;
`;

const MLHCoC: AnyStyledComponent = styled.a`
  display: flex;
  justify-content: center;
  color: black;
  text-decoration: none;
  font-size: 1.0vw;

  margin-bottom: 8px;
  @media (max-width: 1196px) {
    font-size: 2vw;
  }
`;
const PickHacksTitle: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  font-family: "MerriweatherSans-Regular";
  display: flex;
  font-size: 2.0vw;

  margin-top: 8px;
  @media (max-width: 1196px) {
    font-size: 3vw;
  }
`;
export default () => {
  return (
    <div>
      <FlexCenter>
        <PickHacksTitle>PICKHACKS 2023</PickHacksTitle>
        <MLHCoC
          target="_blank"
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        >
          MLH CODE OF CONDUCT
        </MLHCoC>
      </FlexCenter>
    </div>
  );
};
