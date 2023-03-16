import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

interface Props {
  src: string,
  href: string,
}

const SponsorImage: AnyStyledComponent = styled.img`
  background-color: rgba(255, 255, 255, 0.75);
  height: 100px;
  padding: 5px;

  &:hover {
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;
  }
  
  @media screen and (max-width: 600px) {
    height: 60px;
  }
`;

export default ({ src, href }: Props) => {
  return (
    <div>
        <a target="_blank" href={href}>
            <SponsorImage src={src} />
        </a>
    </div>
  );
};
