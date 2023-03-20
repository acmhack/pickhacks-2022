import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-family: "MerriweatherSans-Regular";
  font-size: 1.5vw;
  color: white;
  @media (max-width: 850px) {
    font-size: 3vw;
  }
`;

export default (props: any) => {
  return <Title>{props.children}</Title>;
};
