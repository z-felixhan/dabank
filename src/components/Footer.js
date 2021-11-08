import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { animateScroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">Investor Relations</FooterLink>
              <FooterLink to="/">Media Newsroom</FooterLink>
              <FooterLink to="/">Economics</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Customer Service</FooterLinkTitle>
              <FooterLink to="/">Apply Online</FooterLink>
              <FooterLink to="/">Branch & ATM Locator</FooterLink>
              <FooterLink to="/">
                Voluntary Codes & Public Commitments
              </FooterLink>
              <FooterLink to="/">1-800-000-0000</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Daily Numbers</FooterLinkTitle>
              <FooterLink to="/">Foreign Exchange</FooterLink>
              <FooterLink to="/">Rates</FooterLink>
              <FooterLink to="/">Mortgage Rates</FooterLink>
              <FooterLink to="/">Mutual Funds</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Protecting Your Money</FooterLinkTitle>
              <FooterLink to="/">Deposit Insurance Corporation</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/" onClick={toggleHome}>
              dabank
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="//facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//youtube.com"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
          <WebsiteRights>© Felix</WebsiteRights>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #101522;
  position: relative;
  z-index: 50;
`;

const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1100px;
  padding: 48px 24px;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  width: 160px;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  font-size: 14px;
  margin-bottom: 0.5rem;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  text-align: center;
  width: 100%;
`;

const SocialMediaWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 40px auto 0 auto;
  max-width: 1100px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  justify-self: start;
  margin-bottom: 16px;
  text-decoration: none;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export default Footer;
