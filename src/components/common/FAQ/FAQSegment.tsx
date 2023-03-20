import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { useState } from "react";

import Answer from "./Answer";
import { keyframes } from 'styled-components'

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

const fadeIn = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

const Popup: AnyStyledComponent = styled.div`
  display: flex;
  animation: ${fadeIn} 1s;
  position: relative;
  padding: 20px;
  margin-top: 5px;
  max-width: 45vw;
  background-color: rgba(20, 134, 72, 0.5);
  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;



const Title: AnyStyledComponent = styled.a`
  font-family: "MerriweatherSans-Regular";
  font-size: 2.5vw;
  color: white;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    font-size: 4vw;
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
  const [popup, setPopup] = useState<boolean>(false);
  
  return (
    <FlexRow>
      <Image src={image}/>
      <div>
        <Title onClick={() => setPopup(!popup)}>
          {title}
        </Title>
        {popup && 
        <Popup>
          <Answer>{children}</Answer>
        </Popup>}
      </div>
    </FlexRow>
  );
};
