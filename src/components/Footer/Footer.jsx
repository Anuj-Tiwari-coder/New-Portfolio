import {
  SiGeeksforgeeks,
  SiGithub,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";
import { Bio } from "../../constants";
import {
  Copyright,
  FooterContainer,
  Logo,
  SocialMediaIcon,
  SocialMediaIcons,
} from "./FooterStyleComponents";
import React from "react";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <Logo>Anuj Tiwari</Logo>

      <SocialMediaIcons>
        <SocialMediaIcon href={Bio.leetcode} target="display">
          <SiLeetcode />
        </SocialMediaIcon>
        <SocialMediaIcon
          href={Bio.geeksforgeeks}
          target="display"
          style={{ fontSize: "22px" }}
        >
          <SiGeeksforgeeks />
        </SocialMediaIcon>
        <SocialMediaIcon href={Bio.linkedin} target="display">
          <SiLinkedin />
        </SocialMediaIcon>
        <SocialMediaIcon href={Bio.instagram} target="display">
          <SiInstagram />
        </SocialMediaIcon>

        <SocialMediaIcon href={Bio.github} target="display">
          <SiGithub />
        </SocialMediaIcon>
        <SocialMediaIcon href={Bio.instagram} target="display">
          <SiTwitter />
        </SocialMediaIcon>
        <SocialMediaIcon href={Bio.whatsapp} target="display">
          <SiWhatsapp />
        </SocialMediaIcon>
      </SocialMediaIcons>

      <Copyright>
        Copyright &copy; {currentYear} Anuj Tiwari | All Rights Reserved
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
