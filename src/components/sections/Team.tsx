import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from 'usehooks-ts'
import { TeamMembers, MobileTeamMembers } from "../../data/TeamMembers";

const Title: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TitleText: AnyStyledComponent = styled.div`
  font-size: 4vw;
  color: #ffffff;
  font-family: "MerriweatherSans-Regular";
  @media screen and (max-width: 1000px) {
    font-size: 6vw;
  }
  margin-bottom: 0.5em;
  border-bottom: solid 0.2em;
  border-bottom-color: #14354d;
  width: 21vw;
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Person: AnyStyledComponent = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 20%;
  &:hover {
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;
`;

const ProfilePic: AnyStyledComponent = styled.img`
  width: 20%;
`;

const Name: AnyStyledComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "MerriweatherSans-Bold";
  font-size: 17px;
  color: white;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 665px) {
    font-size: 10px;
  }
`;

const Group: AnyStyledComponent = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 10px 25px;
`;

export default () => {
  const mobile = useMediaQuery('(max-width: 525px)')

  return (
    <div>
      <FlexCenter>
        <Title>
          <TitleText>TEAM</TitleText>
        </Title>
      </FlexCenter>

      <Carousel
        width={mobile ? "85vw" : "70vw"}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        showStatus={false}
        transitionTime={1500}
      >
        {(mobile ? MobileTeamMembers : TeamMembers).map((groups) => (
          <Group>
            {groups.group.map((member) => (
              <Person
                href={member.link}
                target="_blank"
              >
                <ProfilePic src={member.avatar}></ProfilePic>
                <Name>{member.name}</Name>
              </Person>
            ))}
          </Group>
        ))}
      </Carousel>
    </div>
  );
};
