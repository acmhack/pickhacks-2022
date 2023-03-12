import React from "react";
import { NavHashLink } from "react-router-hash-link";
import styled, { AnyStyledComponent } from "styled-components";

interface INavbarLinkProps {
  activeStyle: string;
  link: string;
  children: string;
}

export default ({ activeStyle, link, children }: INavbarLinkProps) => {
  return (
    <div>
      <NavHashLink
        smooth
        to={link}
        style={{
          color: "white",
          fontWeight: "normal",
          fontFamily: "Alike-Regular",
          textDecoration: "none",
          display: "block",
        }}
      >
        {children}
      </NavHashLink>
    </div>
  );
};
