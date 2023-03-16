import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

interface Props {
  src: string;
  href: string;
  square?: boolean;
  type: "silver" | "bronze";
}

const SilverSponsorImage: AnyStyledComponent = styled.img`
  background-color: rgba(255, 255, 255, 0.75);
  height: ${(props: Props) => props.square ? "200px" : "100px"};
  padding: 5px;

  &:hover {
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;
  }
  
  @media screen and (max-width: 600px) {
    height: ${(props: Props) => props.square ? "160px" : "80px"};
  }
`;

const BronzeSponsorImage: AnyStyledComponent = styled.img`
  background-color: rgba(255, 255, 255, 0.75);
  height: ${(props: Props) => props.square ? "150px" : "75px"};
  padding: 5px;

  &:hover {
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;
  }
  
  @media screen and (max-width: 600px) {
    height: ${(props: Props) => props.square ? "110px" : "55px"};
  }
`;

export default ({ src, href, square, type }: Props) => {
  return (
    <div>
        <a target="_blank" href={href}>
            {type == "silver" && <SilverSponsorImage src={src} square={square}/>}
            {type == "bronze" && <BronzeSponsorImage src={src} square={square}/>}
        </a>
    </div>
  );
};
