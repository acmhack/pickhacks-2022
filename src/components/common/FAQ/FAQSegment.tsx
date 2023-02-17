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
  align-items: flex-start;
  width: 100%;
  margin-top: 62px;
  margin-bottom: 70px;
`;

const Popup: AnyStyledComponent = styled.div`
  display: none;
  position: absolute;
  padding: 20px;
  margin-top: 5px;
  width: 600px;
  border-radius: 10px;
  background-color: #FFD51C;
`;

const Title: AnyStyledComponent = styled.div`
  font-family: "MerriweatherSans-Regular";
  font-size: 64px;
  @media (max-width: 600px) {
    font-size: 5vw;
  }
  color: white;
  &:hover ${Popup} {
    display: flex;
  }
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
      <Title>
        {title}
        <Popup>
          <Answer>{children}</Answer>
        </Popup>
      </Title>
    </FlexRow>
  );
};
