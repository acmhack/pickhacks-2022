import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

interface Props {
  src: string;
  href: string;
  height?: number|undefined;
}

const PartnerImage: AnyStyledComponent = styled.img`
  background-color: rgba(255, 255, 255, 0.75);
  height: ${props => props.height ? props.height : "125px"};
  padding: 5px;
  &:hover {
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;
  }

  @media screen and (max-width: 600px) {
    height: ${(props: Props) => props.height ? "140px" : "65px"};  // Supposed to do a calculation for the first ternary part but can't get it to work, so it's hardcoded
  }
`;

export default ({ src, href, height }: Props) => {
  return (
    <div>
        <a target="_blank" href={href}>
            <PartnerImage src={src} height={height}/>
        </a>
    </div>
  );
};
