import React from "react";
import { NavHashLink } from "react-router-hash-link";
import styled, { AnyStyledComponent } from "styled-components";

interface INavbarLinkProps {
  activeStyle: string;
  link: string;
  children: string;
  learnMore?: boolean;
}

export default ({ activeStyle, link, children, learnMore }: INavbarLinkProps) => {
  return (
    <div>
      <NavHashLink
        smooth
        to={link}
        style={{
          color: "white",
          fontWeight: "normal",
          fontFamily: learnMore ? "MerriweatherSans-Regular" : "MerriweatherSans-Bold",
          textDecoration: "none",
          display: "block",
        }}
      >
        {children}
      </NavHashLink>
    </div>
  );
};
