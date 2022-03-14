import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-family: titling-gothic-fb-wide, sans-serif;
  font-weight: bold;

  font-size: 250%;
  padding: 1%;
  font-style: normal;
  font-weight: 900;
  line-height: 1em;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 9vw;
  }
`;

export default (props: any) => {
  return <Title>{props.children}</Title>;
};
