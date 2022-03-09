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
          fontWeight: "bold",
          textDecoration: "none",
          display: "block",
          padding: "14px 16px",
        }}
        activeStyle={{ color: "#dc683c" }}
      >
        {children}
      </NavHashLink>
    </div>
  );
};
