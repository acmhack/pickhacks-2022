import React from "react";
import { NavHashLink } from "react-router-hash-link";
import styled, { AnyStyledComponent, StyledComponent } from "styled-components";

interface INavbarLinkProps {
  activeStyle: string;
  link: string;
  children: string;
}

const Hover = styled.div`
  color: white;
  &:hover {
    color: #148648;
  }
`;


export default ({ activeStyle, link, children }: INavbarLinkProps) => {
  return (
    <Hover>
      <NavHashLink
        smooth
        to={link}
        style={{
          fontWeight: "normal",
          fontFamily: "MerriweatherSans-Bold",
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
