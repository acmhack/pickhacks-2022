import React from "react";
import {
  Filler,
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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Title: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TitleText: AnyStyledComponent = styled.div`
  font-size: 4.5vw;
  color: #ffffff;
  font-family: "MerriweatherSans-Regular";
  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
  margin-bottom: .5em;
  border-bottom: solid 0.2em;
  border-bottom-color: #14354D;
  width: 21vw;
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
  width: 20%;
  @media (min-width: 1000px) {
    &:hover {
      transform: scale(1.1);
      transition: transform 200ms ease-in-out;
    }
  }
`;
const ProfilePic: AnyStyledComponent = styled.img`
  width: 20%;
  border-radius: 50%;
`;

const Name: AnyStyledComponent = styled.div`
  display: flex;
  font-family: "MerriweatherSans-Regular";
  margin: auto;
  color: white;
`;

const Group: AnyStyledComponent = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 10px 25px;
`

export default () => {
  return (
    <div>
      <FlexCenter>
        <Title><TitleText>TEAM</TitleText></Title>
      </FlexCenter>
      
      <Carousel width={"70vw"} showThumbs={false} showIndicators={false} infiniteLoop={true} showStatus={false}>
        <Group>
          <Person
            href="https://www.linkedin.com/in/margaret-boecker/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Maggie Boecker</Name>
          </Person>
          <Person
            href="https://linkedin.com/in/maggie-fu1809"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Maggie Fu</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/reid-haegele/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Reid Haegele</Name>
          </Person>
          <Person
            href=""
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Tung Nguyen</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/higgins7loh/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Lauren Higgins</Name>
          </Person>
        </Group>

        <Group>
          <Person
            href="https://www.linkedin.com/in/keith-miller-22387424b/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Keith Miller</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/ewbyf/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Eric Wong</Name>
          </Person>
          <Person
            href=""
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Jason Xu</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/shrija-maganti/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Shrija Maganti</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/pranavkondapaneni/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Pranav Kondapaneni</Name>
          </Person>
        </Group>

        <Group>
          <Person
            href="https://www.linkedin.com/in/lindsey-chan/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Lindsey Chan</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/marcella-tebeau"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Marcella Tebeau</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/riley-fuller-ab021a1b7/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Riley Fuller</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/sabrina-m-baaa49162/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Sabrina McRoberts</Name>
          </Person>
        </Group>

        <Group>
          <Person
            href="https://www.linkedin.com/in/ryan-duffendack-866058194/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Ryan Duffendack</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/bradley-moore-2021"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Bradley Moore</Name>
          </Person>
          <Person href="https://www.linkedin.com/in/jacobakelly/" target="_blank">
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Jacob Kelly</Name>
          </Person>
          <Person href="https://www.linkedin.com/in/jonahy" target="_blank">
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Jonah Yates</Name>
          </Person>
        </Group>

        <Group>
          <Person href="https://www.linkedin.com/in/kevin-gu-mst/" target="_blank">
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Kevin Gu</Name>
          </Person>
          <Person href="https://www.linkedin.com/in/mjminatra/" target="_blank">
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Matt Minatra</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/coltonjacobson/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Colton Jacobson</Name>
          </Person>

          <Person
            href="https://www.linkedin.com/in/carterwagner/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Carter Wagner</Name>
          </Person>
        </Group>

        <Group>
          <Person href="" target="_blank">
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Vishaanth Muddu</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/carterwagner/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Eric Duong</Name>
          </Person>
          <Person
            href="https://www.linkedin.com/in/dominic-alberico/"
            target="_blank"
          >
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Dominic Alberico</Name>
          </Person>
          <Person href="" target="_blank">
            <ProfilePic src={Filler}></ProfilePic>
            <Name>Rahul Gopalan</Name>
          </Person>
        </Group>
      </Carousel>
    </div>
  );
};
