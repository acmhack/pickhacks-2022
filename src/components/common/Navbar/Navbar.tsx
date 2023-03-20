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
  padding: 20px 0px;
`;

const Background: AnyStyledComponent = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  margin: 0px 40px;
  gap: 36px;
  flex: 1;
`;

const Logo: AnyStyledComponent = styled.img`
  height: 100;
  width: 100px;
`;

const NavImage: AnyStyledComponent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
const NavList: AnyStyledComponent = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  color: white;
`;
const NavListItem: AnyStyledComponent = styled.li`
  display: inline;
  float: left;
  line-height: 100px;
  text-align: center;
  font-size: 2vw;
`;

const Quicklink: AnyStyledComponent = styled.p`
  font-size: 1.5vw;
  color: white;
  font-family: "MerriweatherSans-Regular";
`;

export default () => {
  return (
    <Background>
      <Constraint>
        <NavList>
          <NavImage>
            <a href="https://pickhacks.io/">
              {" "}
              <Logo src={pickhack23logo} />
            </a>
          </NavImage>
          <FlexCenter>
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
          </FlexCenter>
          <div style={{flex: 1}}>
          </div>
        </NavList>
      </Constraint>
    </Background>
  );
};
