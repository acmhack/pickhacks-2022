import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-family: "MerriweatherSans-Regular";
  font-size: 2vw;
  color: black;
  @media (max-width: 600px) {
    font-size: 3.5vw;
  }
`;

export default (props: any) => {
  return <Title>{props.children}</Title>;
};
