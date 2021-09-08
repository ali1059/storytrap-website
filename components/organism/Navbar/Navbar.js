import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

import Logo from "../../atoms/Logo/Logo";
import NavbarLinks from "../../molecules/NavbarLinks/NavbarLinks";
import ContactButton from "../../atoms/ContactButton/ContactButton";
import logoImage from "../../../public/assets/logo.png";
import appleLogo from "../../../public/assets/apple-logo.png";
import googleplayLogo from "../../../public/assets/googleplay-logo.png";

const NavbarContainer = styled.div`
  z-index: 10;
  width: 100%;
  background: transparent linear-gradient(180deg, #000000 0%, #12121200 100%) 0%
    0% no-repeat padding-box;
  position: ${(props) => (props.mobile ? "absolute" : "fixed")};
  top: 0;
  left: 0;
`;

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
  max-width: 75rem;
  margin: auto;
  z-index: 10;

  @media (max-width: 1300px) {
    padding: 3rem 3rem;
  }
  @media (max-width: 1200px) {
    padding: 3rem 3rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Bars = styled.div`
  position: absolute;
  left: 2rem;
  display: none;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
const MobileNav = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
    flex-flow: row no-wrap;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem;
    background-color: transparent;
    margin-bottom: 0rem;
  }
`;

const Navbar = ({ showBars, toggle }) => {
  return (
    <>
      <NavbarContainer mobile={true}>
        <MobileNav className="Mobile-nav">
          <Bars onClick={toggle}>
            <FaBars color="#fff" size="2rem" />
          </Bars>
          <Logo
            showText={true}
            src={logoImage}
            alt="StoryTrap"
            path="/"
            width={30}
            height={36}
          />
        </MobileNav>
      </NavbarContainer>

      <NavbarContainer>
        <Nav showBars={showBars}>
          {/* <Logo /> */}
          <Logo
            showText={true}
            src={logoImage}
            alt="StoryTrap"
            path="/"
            width={44}
            height={54}
          />

          <NavbarItemsWrapper>
            <NavbarLinks />
            <ContactButton text="contact us" smallSize="true" />
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
          </NavbarItemsWrapper>
        </Nav>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
