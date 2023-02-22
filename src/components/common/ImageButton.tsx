import React from "react";

import styled, { AnyStyledComponent } from "styled-components";

interface IButtonProps {
  link: string;
  image: string;
  children: string;
}

const ImageDiv: AnyStyledComponent = styled.img`
  padding: 10px;
  @media (max-width: 603px) {
    height: auto;
    width: 150px;
  }
`;
const ImageContainer: AnyStyledComponent = styled.div`
  height: 235px; //height of max image 215
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
  font-family: "ZenKurenaido-Regular", cursive;
  font-size: 48px;
  color: #ffffff;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 603px) {
    font-size: 31px;
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