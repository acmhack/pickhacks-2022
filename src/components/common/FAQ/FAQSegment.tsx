import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import Answer from "./Answer";

interface ISegmentProps {
  title: string;
  children: string;
  titleColor?: string;
}
const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  padding: 0;
`;
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;

  flex-direction: column;
`;
const Group: AnyStyledComponent = styled.div`
  padding: 10px;
  padding-top: 0px;
  background-color: white;
  border-radius: 15px;
  margin-bottom: 10px;
  margin: 5px;
`;

const Title: AnyStyledComponent = styled.div`
  font-family: "Amiko-Bold", cursive;
  font-size: 150%;
  padding: 3%;
  color: ${(props: ISegmentProps) => props.titleColor};
  padding-top: 5%;
  font-style: normal;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 5vw;
  }
`;
export default ({ title, children, titleColor }: ISegmentProps) => {
  function titlePicker() {
    switch (title) {
      default:
        return "#000000";
    }
  }

  return (
    <div>
      <Group>
        <FlexColumn>
          <FlexCenter>
            <Title titleColor={titlePicker()}>
              <span style={{ color: "#f78702" }}>{titleColor}</span> {title}
            </Title>
          </FlexCenter>
          <FlexCenter>
            <Answer>{children}</Answer>
          </FlexCenter>
        </FlexColumn>
      </Group>
    </div>
  );
};
