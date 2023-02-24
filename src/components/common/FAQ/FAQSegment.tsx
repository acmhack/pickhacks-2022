import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import Answer from "./Answer";

interface ISegmentProps {
  title: string;
  image: string;
  children: string | React.ReactElement;
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
  width: 40vw;
  border-radius: 10px;
  background-color: #FFD51C;
  @media screen and (max-width: 600px) {
    padding: 10px;
  }
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
  width: 300px;
  margin-right: 2%;
  @media screen and (max-width: 1000px) {
    width: 200px;
  }
  @media screen and (max-width: 600px) {
    width: 125px;
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
