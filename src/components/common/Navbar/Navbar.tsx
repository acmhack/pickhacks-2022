import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import NavLink from "./NavbarLink";
import { pickhack22logo } from "../../../images/Images";
const Constraint: AnyStyledComponent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  max-width: 1500px;
  margin: auto;
`;

const Background: AnyStyledComponent = styled.div`
  background-color: #86c6d5;
  position: fixed;
  top: 0;
  width: 100%;
  height: 45px;
  z-index: 999;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Logo: AnyStyledComponent = styled.img`
  height: 40;
  width: 40px;
`;

const NavImage: AnyStyledComponent = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 20px;
`;
const NavList: AnyStyledComponent = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  padding: 0;
`;
const NavListItem: AnyStyledComponent = styled.li`
  display: inline;
  float: left;
`;
export default () => {
  return (
    <Background>
      <Constraint>
        <NavList>
          <NavImage>
            <a href="https://pickhacks.io/">
              {" "}
              <Logo src={pickhack22logo} />
            </a>
          </NavImage>
          <NavListItem>
            <NavLink link="/#header" activeStyle="test">
              HOME
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink link="/#schedule" activeStyle="test">
              SCHEDULE
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink link="/#faq" activeStyle="test">
              FAQ
            </NavLink>
          </NavListItem>

          <NavListItem>
            <NavLink link="/#sponsor" activeStyle="test">
              SPONSOR
            </NavLink>
          </NavListItem>

          <NavListItem>
            <NavLink link="/#partner" activeStyle="test">
              PARTNERS
            </NavLink>
          </NavListItem>

          <NavListItem>
            <NavLink link="/#team" activeStyle="test">
              TEAM
            </NavLink>
          </NavListItem>
        </NavList>
      </Constraint>
    </Background>
  );
};
