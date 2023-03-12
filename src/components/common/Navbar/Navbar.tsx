import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import NavLink from "./NavbarLink";
import { pickhack23logo } from "../../../images/Images";
const Constraint: AnyStyledComponent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  max-width: 1500px;
  margin: auto;
  padding-top: 0px;
`;

const Background: AnyStyledComponent = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;
  height: 225px;
  z-index: 999;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

const FlexLeft: AnyStyledComponent = styled.div`
  justify-content: left;
  display: flex;
  width: 100%;
  padding: 0px 16px;
  gap: 32px;
`;

const Logo: AnyStyledComponent = styled.img`
  height: 100;
  width: 100px;
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
  line-height: 100px;
  text-align: center;
  font-size: 2.7vw;
`;

const Quicklink: AnyStyledComponent = styled.p`
  font-size: 1.5vw;
  color: white;
  font-family: "Alike-Regular";
`;

export default () => {
  return (
    <Background>
      <FlexCenter>
        <Quicklink>
          click here to sign up for the spring 2023 pickhacks hackathon 
        </Quicklink>
      </FlexCenter>
      <Constraint>
        <NavList>
          <NavImage>
            <a href="https://pickhacks.io/">
              {" "}
              <Logo src={pickhack23logo} />
            </a>
          </NavImage>
          <FlexLeft>
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
          </FlexLeft>
        </NavList>
      </Constraint>
    </Background>
  );
};
