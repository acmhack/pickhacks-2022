import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-family: "MerriweatherSans-Regular";
  font-size: 2vw;
  color: black;
  @media (max-width: 850px) {
    font-size: 3vw;
  }
`;

export default (props: any) => {
  return <Title>{props.children}</Title>;
};
