import React from "react";

import styled, { AnyStyledComponent } from "styled-components";
import { cloud } from "../../images/Images"

interface IButtonProps {
  link: string;
  children: string;
}

const CloudDiv: AnyStyledComponent = styled.img`
  padding: 20px;
  @media (max-width: 603px) {
    height: auto;
    width: 150px;
  }
`;
const CloudContainer: AnyStyledComponent = styled.div`
  position: relative;
  text-align: center;
  @media (min-width: 1000px) {
    &:hover {
      transform: scale(1.1);
      transition: transform 200ms ease-in-out;
    }
  }
`;
const CloudText: AnyStyledComponent = styled.div`
  position: absolute;
  font-family: "ZenKurenaido-Regular", cursive;
  font-size: 48px;
  color: #f78702;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 603px) {
    font-size: 31px;
  }
`;

export default ({ link, children }: IButtonProps) => {
  return (
    <a 
      style={{ textDecoration: "none" }}
      href={link}
      target="_blank"
    >
      <CloudContainer>
        <CloudDiv src={cloud} />
        <CloudText>{children}</CloudText>
      </CloudContainer>
    </a>
  );
};
