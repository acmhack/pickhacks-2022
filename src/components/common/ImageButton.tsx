import React from "react";

import styled, { AnyStyledComponent } from "styled-components";

interface IButtonProps {
  link: string;
  image: string;
  children: string;
}

const ImageDiv: AnyStyledComponent = styled.img`
  height: 180px;
  @media screen and (max-width: 1200px) {
    height: 135px;
  }
  @media screen and (max-width: 900px) {
    height: 95px;
  }
  padding: 10px;
`;
const ImageContainer: AnyStyledComponent = styled.div`
  height: 235px;
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
  @media (min-width: 1000px) {
    &:hover {
      transform: scale(1.1);
      transition: transform 200ms ease-in-out;
    }
  }
`;
const ImageText: AnyStyledComponent = styled.div`
  position: absolute;
  line-height: 100%;
  font-family: "MerriweatherSans-Extra";
  font-size: 24px;
  color: #ffffff;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 900px) {
    top: 80%;
  }
`;

export default ({ link, image, children }: IButtonProps) => {
  return (
    <a 
        style={{ textDecoration: "none" }}
        href={link}
        target="_blank">
    <ImageContainer>
        <ImageDiv src={image} />
        <ImageText>{children}</ImageText>
    </ImageContainer>
    </a>
    
  );
};
