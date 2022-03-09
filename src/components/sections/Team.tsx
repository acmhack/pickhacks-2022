import React from "react";
import {
  Bharat,
  Rachel,
  Ryan,
  Scott,
  Sabrina,
  Riley,
  Jack,
  Himnish,
  Eddie,
  Jake,
  Dominic,
  Carter,
  Bradley,
  Billie,
  Colton,
} from "../../images/Images";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-size: 4.5vw;
  color: #f47525;
  padding-bottom: 20px;
  text-align: center;
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

const Grid: AnyStyledComponent = styled.div`
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

const GridItem: AnyStyledComponent = styled.a`
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    &:hover {
      transform: scale(1.1);
      transition: transform 200ms ease-in-out;
    }
  }
`;
const GridImage: AnyStyledComponent = styled.img`
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

      <Grid>
        <GridItem href="https://www.linkedin.com/in/bhasree" target="_blank">
          <GridImage src={Bharat}></GridImage>

          <Name style={{ fontSize: "15.5px" }}>Bharat Sreekrishnavilas</Name>
        </GridItem>

        <GridItem
          href="https://www.linkedin.com/in/edward-c-keith/"
          target="_blank"
        >
          <GridImage src={Eddie}></GridImage>
          <Name>Edward Keith</Name>
        </GridItem>
        <GridItem
          href="https://www.linkedin.com/in/riley-fuller-ab021a1b7/"
          target="_blank"
        >
          <GridImage src={Riley}></GridImage>
          <Name>Riley Fuller</Name>
        </GridItem>
        <GridItem
          href="https://www.linkedin.com/in/sabrina-m-baaa49162/"
          target="_blank"
        >
          <GridImage src={Sabrina}></GridImage>
          <Name>Sabrina McRoberts</Name>
        </GridItem>
        <GridItem
          href="https://www.linkedin.com/in/rachel-liang-6a78731b5/"
          target="_blank"
        >
          <GridImage src={Rachel}></GridImage>
          <Name>Rachel Liang</Name>
        </GridItem>
        <GridItem
          href="https://www.linkedin.com/in/teresa-billie-h-356a37108/"
          target="_blank"
        >
          <GridImage src={Billie}></GridImage>
          <Name>Billie Huang</Name>
        </GridItem>
        <GridItem href="https://www.linkedin.com/in/jackstork/" target="_blank">
          <GridImage src={Jack}></GridImage>
          <Name>Jack Stork</Name>
        </GridItem>

        <GridItem
          href="https://www.linkedin.com/in/ryan-duffendack-866058194/"
          target="_blank"
        >
          <GridImage src={Ryan}></GridImage>
          <Name>Ryan Duffendack</Name>
        </GridItem>
        <GridItem
          href="https://www.linkedin.com/in/bradley-moore-2021"
          target="_blank"
        >
          <GridImage src={Bradley}></GridImage>
          <Name>Bradley Moore</Name>
        </GridItem>

        <GridItem
          href="https://www.linkedin.com/in/jacobakelly/"
          target="_blank"
        >
          <GridImage src={Jake}></GridImage>
          <Name>Jacob Kelly</Name>
        </GridItem>
        <GridItem
          href="https://www.linkedin.com/in/coltonjacobson/"
          target="_blank"
        >
          <GridImage src={Colton}></GridImage>
          <Name>Colton Jacobson</Name>
        </GridItem>
        <GridItem
          href="https://www.linkedin.com/in/scott-conner-b596181b5/"
          target="_blank"
        >
          <GridImage src={Scott}></GridImage>
          <Name>Scott Connor</Name>
        </GridItem>
        <GridItem
          href="https://www.linkedin.com/in/carterwagner/"
          target="_blank"
        >
          <GridImage src={Carter}></GridImage>
          <Name>Carter Wagner</Name>
        </GridItem>
        <GridItem
          href="https://www.linkedin.com/in/himnish-sapkota/"
          target="_blank"
        >
          <GridImage src={Himnish}></GridImage>
          <Name>Himnish Sapkota</Name>
        </GridItem>
        <GridItem
          href="https://www.linkedin.com/in/dominic-alberico/"
          target="_blank"
        >
          <GridImage src={Dominic}></GridImage>
          <Name>Dominic Alberico</Name>
        </GridItem>
      </Grid>
    </div>
  );
};
