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
  margin-top: 4%;
`;

const Popup: AnyStyledComponent = styled.div`
  display: none;
  position: relative;
  padding: 20px;
  margin-top: 5px;
  width: 50vw;
  border-radius: 10px;
  background-color: #FFD51C;
`;

const Title: AnyStyledComponent = styled.div`
  font-family: "MerriweatherSans-Regular";
  font-size: 3.5vw;
  @media screen and (max-width: 1000px) {
    font-size: 5vw;
  }
  color: white;
  &:hover ${Popup} {
    display: flex;
  }
`;


const Image: AnyStyledComponent = styled.img`
  width: 17.5vw;
  // margin-right: 33px;
  margin-right: 2%;
  @media screen and (max-width: 1000px) {
    width: 27.5vw;
  }
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
