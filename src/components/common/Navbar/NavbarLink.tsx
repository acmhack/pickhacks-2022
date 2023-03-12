import React from "react";
import { NavHashLink } from "react-router-hash-link";
import styled, { AnyStyledComponent, StyledComponent } from "styled-components";
import { inherits } from "util";

interface INavbarLinkProps {
  activeStyle: string;
  link: string;
  children: string;
  learnMore?: boolean;
}

interface Props {
  learnMore: boolean|undefined,
}

const Hover = styled.div<Props>`
  color: white;
  &:hover {
    color: ${({learnMore}) => learnMore ? "white" : "#148648"};
  }
`;


export default ({ activeStyle, link, children, learnMore }: INavbarLinkProps) => {
  return (
    <Hover learnMore={learnMore}>
      <NavHashLink
        smooth
        to={link}
        style={{
          fontWeight: "normal",
          fontFamily: learnMore ? "MerriweatherSans-Regular" : "MerriweatherSans-Bold",
          textDecoration: "none",
          display: "block",
          color: "inherit",
        }}
      >
        {children}
      </NavHashLink>
    </Hover>
  );
};
