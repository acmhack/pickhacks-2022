import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Description: AnyStyledComponent = styled.div`
  font-family: "Gotham-Medium", sans-serif;
  font-size: 120%;
  max-width: 500px;

  text-align: center;
  font-style: normal;

  line-height: 1.5em;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 3vw;
    max-width: 90%;
    margin: auto;
  }
`;

export default (props: any) => {
  return <Description>{props.children}</Description>;
};
