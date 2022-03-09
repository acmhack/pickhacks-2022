import React from "react";

import styled, { AnyStyledComponent } from "styled-components";

interface IButtonProps {
  link: string;
  children: string;
}

const Button: AnyStyledComponent = styled.a`
  background-color: #90c640;
  text-decoration: none;
  border-radius: 10%;
  padding: 10px;
  font-size: 1.5vw;

  color: white;
  cursor: pointer;
  transition: fill 0.25s;

  @media screen and (max-width: 1200px) {
    font-size: 3.2vw;
  }
  @media screen and (max-width: 800px) {
    font-size: 4vw;
  }
`;

export default ({ link, children }: IButtonProps) => {
  return (
    <div>
      <Button target="_blank" href={link}>
        {children}
      </Button>
    </div>
  );
};
