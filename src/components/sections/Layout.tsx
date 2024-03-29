import React from "react";
import Header from "./Header";
import FAQ from "./FAQ";
import Schedule from "./BetterSchedule";
import Footer from "./Footer";
import Sponsor from "./Sponsor";
import Partner from "./Partner";
import Team from "./Team";
import Navbar from "../common/Navbar/Navbar";
import styled, { AnyStyledComponent } from "styled-components";
import Background from "../../images/background_test.png";
// import Socials from "./Socials";

const FlexContainer: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  background-color: black;
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

const HeaderSectionDiv: AnyStyledComponent = styled.section`
  padding-bottom: 14%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 14%;
  @media (max-width: 1150px) {
    padding-top: 0%;
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
            <HeaderSectionDiv id="header">
              <Header />
            </HeaderSectionDiv>

            {/* <SectionDiv id="socials">
              <Socials />
            </SectionDiv> */}

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

            {/* <SectionDiv id="footer"> */}
              
            {/* </SectionDiv> */}
          </FlexContainer>
        </Constraint>
      </FlexCenter>
      <Footer />
    </div>
  );
};
