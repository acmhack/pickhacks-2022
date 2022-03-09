import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import NavLink from "./NavbarLink";

const Constraint: AnyStyledComponent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  max-width: 1500px;
  margin: auto;
`;

const Background: AnyStyledComponent = styled.div`
  background-color: #813896;
  position: fixed;
  top: 0;
  width: 100%;
  height: 45px;
  z-index: 999;
  @media screen and (max-width: 900px) {
    display: none;
  }
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
