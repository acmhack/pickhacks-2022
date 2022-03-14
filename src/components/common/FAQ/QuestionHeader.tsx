import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-family: Poppins;
  font-size: 150%;
  padding: 3%;

  padding-top: 5%;
  font-style: normal;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 5vw;
  }
`;

export default (props: any) => {
  return <Title>{props.children}</Title>;
};
