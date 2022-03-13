import React from "react";
import Header from "./Header";
import FAQ from "./FAQ";
import Schedule from "./Schedule";
import Sponsor from "./Sponsor";
import Partner from "./Partner";
import Team from "./Team";
import Navbar from "../common/Navbar/Navbar";
import styled, { AnyStyledComponent } from "styled-components";
import Background from "../../images/pickhacks22-background.jpg";
import Socials from "./Socials";

const FlexContainer: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;

  background-image: url(${Background});
  background-size: cover;
`;

const Constraint: AnyStyledComponent = styled.div`
  display: flex;
`;
const SectionDiv: AnyStyledComponent = styled.section`
  padding-bottom: 14%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 3%;

  @media (max-width: 1000px) {
    padding-bottom: 7%;
  }
`;
export default () => {
  return (
    <div>
      <Navbar />

      <FlexCenter>
        <div style={{ height: "45px" }}> </div>
        <Constraint>
          <FlexContainer>
            <SectionDiv style={{ paddingTop: "20%" }} id="header">
              <Header />
            </SectionDiv>

            <SectionDiv id="socials">
              <Socials />
            </SectionDiv>

            <SectionDiv id="schedule">
              <Schedule />
            </SectionDiv>

            <SectionDiv id="faq">
              <FAQ />
            </SectionDiv>

            <SectionDiv id="sponsor">
              <Sponsor />
            </SectionDiv>

            <SectionDiv id="partner">
              <Partner />
            </SectionDiv>

            <SectionDiv id="team">
              <Team />
            </SectionDiv>
          </FlexContainer>
        </Constraint>
      </FlexCenter>
    </div>
  );
};
