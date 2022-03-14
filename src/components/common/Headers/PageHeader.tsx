import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-family: titling-gothic-fb-wide, sans-serif;
  font-size: 300%;

  font-style: normal;
  font-weight: 900;
  line-height: 1em;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 7vw;
  }
`;

export default (props: any) => {
  return <Title>{props.children}</Title>;
};
