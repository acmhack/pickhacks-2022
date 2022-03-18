import React from "react";

import styled, { AnyStyledComponent } from "styled-components";

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const MLHCoC: AnyStyledComponent = styled.a`
  display: flex;
  justify-content: center;
  color: black;
  text-decoration: none;
`;
const PickHacksTitle: AnyStyledComponent = styled.div`
  color: black;
  font-family: "ZenDots-Regular", cursive;
  display: flex;
  font-size: 3.5vw;

  margin-top: 8px;
  @media (max-width: 1196px) {
    font-size: 5vw;
  }
`;
export default () => {
  return (
    <div>
      <FlexCenter>
        <PickHacksTitle>PICKHACKS 2022</PickHacksTitle>
        <MLHCoC
          target="_blank"
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        >
          MLH Code of Conduct
        </MLHCoC>
      </FlexCenter>
    </div>
  );
};
