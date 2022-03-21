import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-family: "Amiko-Regular", cursive;
  font-size: 140%;
  padding-top: 1%;
  font-style: normal;
  font-weight: normal;
  line-height: 1em;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 3.5vw;
  }
`;

export default (props: any) => {
  return <Title>{props.children}</Title>;
};
