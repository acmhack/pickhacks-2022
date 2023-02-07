import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import Answer from "./Answer";

interface ISegmentProps {
  title: string;
  image: string;
  children: string;
}

const FlexRow: AnyStyledComponent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 62px;
`;

const Title: AnyStyledComponent = styled.div`
  font-family: "MerriweatherSans-Regular";
  font-size: 64px;
  @media (max-width: 600px) {
    font-size: 5vw;
  }
  color: white;
`;

const Image: AnyStyledComponent = styled.img`
  width: 300px;
  height: 279.4px;
  margin-right: 33px;
`;

export default ({ title, image, children }: ISegmentProps) => {
  return (
    <FlexRow>
      <Image src={image}/>
      <Title>{title}</Title>
    </FlexRow>
  );
};
