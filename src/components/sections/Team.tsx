import React from "react";
import {
  Bharat,
  Ryan,
  Sabrina,
  Riley,
  Jack,
  Himnish,
  Eddie,
  Jake,
  Dominic,
  pickhacks22,
  Carter,
  Bradley,
  Colton,
} from "../../images/Images";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-size: 4.5vw;
  color: #009ac7;
  text-shadow: 2px 2px 4px gray;
  padding-bottom: 20px;
  text-align: center;
  font-family: "ZenDots-Regular", cursive;
  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TeamGrid: AnyStyledComponent = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Person: AnyStyledComponent = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  @media (min-width: 1000px) {
    &:hover {
      transform: scale(1.1);
      transition: transform 200ms ease-in-out;
    }
  }
`;
const ProfilePic: AnyStyledComponent = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: auto;
`;

const Name: AnyStyledComponent = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  margin: auto;
  color: white;
`;
export default () => {
  return (
    <div>
      <FlexCenter>
        <Title>TEAM</Title>
      </FlexCenter>

      <TeamGrid>
        <Person href="https://www.linkedin.com/in/bhasree" target="_blank">
          <ProfilePic src={Bharat}></ProfilePic>

          <Name style={{ fontSize: "15.5px" }}>Bharat Sreekrishnavilas</Name>
        </Person>

        <Person
          href="https://www.linkedin.com/in/edward-c-keith/"
          target="_blank"
        >
          <ProfilePic src={Eddie}></ProfilePic>
          <Name>Edward Keith</Name>
        </Person>
        <Person
          href="https://www.linkedin.com/in/edward-c-keith/"
          target="_blank"
        >
          <ProfilePic src={pickhacks22}></ProfilePic>
          <Name>Maggie Boecker</Name>
        </Person>
        <Person
          href="https://www.linkedin.com/in/edward-c-keith/"
          target="_blank"
        >
          <ProfilePic src={pickhacks22}></ProfilePic>
          <Name>Marcella Tebeau</Name>
        </Person>
        <Person
          href="https://www.linkedin.com/in/riley-fuller-ab021a1b7/"
          target="_blank"
        >
          <ProfilePic src={Riley}></ProfilePic>
          <Name>Riley Fuller</Name>
        </Person>
        <Person
          href="https://www.linkedin.com/in/sabrina-m-baaa49162/"
          target="_blank"
        >
          <ProfilePic src={Sabrina}></ProfilePic>
          <Name>Sabrina McRoberts</Name>
        </Person>

        <Person href="https://www.linkedin.com/in/jackstork/" target="_blank">
          <ProfilePic src={Jack}></ProfilePic>
          <Name>Jack Stork</Name>
        </Person>

        <Person
          href="https://www.linkedin.com/in/ryan-duffendack-866058194/"
          target="_blank"
        >
          <ProfilePic src={Ryan}></ProfilePic>
          <Name>Ryan Duffendack</Name>
        </Person>
        <Person
          href="https://www.linkedin.com/in/bradley-moore-2021"
          target="_blank"
        >
          <ProfilePic src={Bradley}></ProfilePic>
          <Name>Bradley Moore</Name>
        </Person>

        <Person href="https://www.linkedin.com/in/jacobakelly/" target="_blank">
          <ProfilePic src={Jake}></ProfilePic>
          <Name>Jacob Kelly</Name>
        </Person>
        <Person href="" target="_blank">
          <ProfilePic src={pickhacks22}></ProfilePic>
          <Name>Jonah Yates</Name>
        </Person>
        <Person href="" target="_blank">
          <ProfilePic src={pickhacks22}></ProfilePic>
          <Name>Kevin Gu</Name>
        </Person>
        <Person href="" target="_blank">
          <ProfilePic src={pickhacks22}></ProfilePic>
          <Name>Matt Minatra</Name>
        </Person>
        <Person
          href="https://www.linkedin.com/in/coltonjacobson/"
          target="_blank"
        >
          <ProfilePic src={Colton}></ProfilePic>
          <Name>Colton Jacobson</Name>
        </Person>

        <Person
          href="https://www.linkedin.com/in/carterwagner/"
          target="_blank"
        >
          <ProfilePic src={Carter}></ProfilePic>
          <Name>Carter Wagner</Name>
        </Person>
        <Person
          href="https://www.linkedin.com/in/carterwagner/"
          target="_blank"
        >
          <ProfilePic src={pickhacks22}></ProfilePic>
          <Name>Emma Carmickle</Name>
        </Person>
        <Person
          href="https://www.linkedin.com/in/carterwagner/"
          target="_blank"
        >
          <ProfilePic src={pickhacks22}></ProfilePic>
          <Name>Eric Duong</Name>
        </Person>
        <Person
          href="https://www.linkedin.com/in/carterwagner/"
          target="_blank"
        >
          <ProfilePic src={pickhacks22}></ProfilePic>
          <Name>Gunnar Grispino</Name>
        </Person>
        <Person
          href="https://www.linkedin.com/in/himnish-sapkota/"
          target="_blank"
        >
          <ProfilePic src={Himnish}></ProfilePic>
          <Name>Himnish Sapkota</Name>
        </Person>
        <Person
          href="https://www.linkedin.com/in/dominic-alberico/"
          target="_blank"
        >
          <ProfilePic src={Dominic}></ProfilePic>
          <Name>Dominic Alberico</Name>
        </Person>
        <Person href="" target="_blank">
          <ProfilePic src={pickhacks22}></ProfilePic>
          <Name>Rahul Gopalan</Name>
        </Person>
        <Person href="" target="_blank">
          <ProfilePic src={pickhacks22}></ProfilePic>
          <Name>Vishaanth Muddu</Name>
        </Person>
      </TeamGrid>
    </div>
  );
};
