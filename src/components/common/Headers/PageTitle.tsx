import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-family: titling-gothic-fb, sans-serif;
  font-weight: 200;
  font-size: 150%;

  margin-top: 4%;
  margin-bottom -2%;
  padding-bottom: 2%;


  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

export default (props: any) => {
  return <Title>{props.children}</Title>;
};
