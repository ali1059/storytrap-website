import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import TextParagraph from "../../atoms/TextParagraph/TextParagraph";
import Logo from "../../atoms/Logo/Logo";
import logoImage from "../../../public/assets/logo.png";
import appleLogo from "../../../public/assets/apple-logo.png";
import googleplayLogo from "../../../public/assets/googleplay-logo.png";
import NavbarLinks from "../../molecules/NavbarLinks/NavbarLinks";
import Section from "../../atoms/Section/Section";

const FooterContainer = styled.footer`
  padding: 5rem 0;

  @media (max-width: 1300px) {
    padding: 0 3rem;
  }
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  padding: 2rem 0;
  flex-basis: 80%;
`;

const InfoWrapper = styled.div`
  padding-right: ${(props) => (props.isMobile ? "0" : "5rem")};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: start;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const VerticalLine = styled.div`
  height: ${(props) => (props.isMobile ? "0" : "261px")};
  border: 1px solid #fd9225;
`;

const NavPagesList = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  flex-basis: 50%;
`;

const PagesList = styled.div`
  background-color: goldenrod;
`;

const PageListItem = styled.a`
  flex: 0 1 10px;
  align-self: center;
  font-size: 20px;
  color: #fff;
  margin: 1rem 0;

  :hover {
    color: #fea027;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Footer = ({ isMobile }) => {
  console.log("isMobile Footer = ", isMobile);
  return (
    <Section>
      <FooterContainer>
        <FooterWrapper>
          <InfoContainer>
            <InfoWrapper isMobile={isMobile}>
              <Logo
                noMargin={true}
                showText={true}
                showInCloumn={isMobile ? false : true}
                src={logoImage}
                alt="StoryTrap"
                path="/"
                width={44}
                height={54}
              />
              <TextParagraph align="left">
                Escape into the World of Fiction with StoryTrap
              </TextParagraph>
              <ButtonWrapper>
                <Link href="https://apps.apple.com/in/app/story-trap/id1559372131">
                  <a target="_blank" rel="noopener noreferrer">
                    <Logo
                      margin={true}
                      showText={false}
                      src={appleLogo}
                      alt="StoryTrap App store"
                      path={null}
                      width={24}
                      height={24}
                    />
                  </a>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.journalpost.storytrap">
                  <a target="_blank" rel="noopener noreferrer">
                    <Logo
                      margin={true}
                      showText={false}
                      src={googleplayLogo}
                      alt="StoryTrap Googleplay"
                      path={null}
                      width={24}
                      height={24}
                    />
                  </a>
                </Link>
              </ButtonWrapper>
            </InfoWrapper>
          </InfoContainer>
          <VerticalLine isMobile={isMobile} />

          <NavPagesList>
            <Link href="/" passHref>
              <PageListItem>Home</PageListItem>
            </Link>
            <Link href="/about" passHref>
              <PageListItem>About</PageListItem>
            </Link>
            <Link href="/contact-us" passHref>
              <PageListItem>Contact Us</PageListItem>
            </Link>
          </NavPagesList>
          <NavPagesList>
            <Link href="/privacy-policy" passHref>
              <PageListItem>Privacy Policy</PageListItem>
            </Link>
            {/* <PageListItem>Terms of services</PageListItem> */}
          </NavPagesList>
        </FooterWrapper>
      </FooterContainer>
    </Section>
  );
};

export default Footer;
