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
  @media screen and (max-width: 600px) {
    height: 65px;
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
