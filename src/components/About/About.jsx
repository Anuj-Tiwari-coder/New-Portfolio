import React from "react";
import Typewriter from "typewriter-effect";
import { AboutImage } from "../../assets/export";
import { Bio } from "../../constants";
import AboutBgAnimation from "./AboutBgAnimation/AboutBgAnimation";
import {
  AboutBg,
  AboutContainer,
  AboutInnerContainer,
  AboutMainContainer,
  Img,
  LeftAbout,
  ResumeButton,
  RightAbout,
  Span,
  SubTitle,
  TextLoop,
  Title,
} from "./AboutStyleComponents";

const About = () => {
  return (
    <AboutContainer id="about-container">
      <AboutMainContainer>
        <AboutBg>
          <AboutBgAnimation />
        </AboutBg>

        <AboutInnerContainer>
          <LeftAbout>
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{ strings: Bio.roles, autoStart: true, loop: true }}
                />{" "}
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume1} target="_blank">
              Check Resume
            </ResumeButton>
          </LeftAbout>

          <RightAbout>
            <Img src={AboutImage} alt="About-Image" />
          </RightAbout>
        </AboutInnerContainer>
      </AboutMainContainer>
    </AboutContainer>
  );
};

export default About;
