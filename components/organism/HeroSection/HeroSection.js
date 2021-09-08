import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Animate } from "react-simple-animate";
import { AnimateKeyframes } from "react-simple-animate";

import HeroImage from "../../../public/assets/heroImage.png";
import Navbar from "../Navbar/Navbar";
import {
  ButtonsContainer,
  ButtonsWrapper,
} from "../../molecules/HeroTextContainer/HeroTextContainer";
import TextParagraph from "../../atoms/TextParagraph/TextParagraph";
import Logo from "../../atoms/Logo/Logo";
import HeroTextContainer from "../../molecules/HeroTextContainer/HeroTextContainer";
import JetaimeImage from "../../../public/assets/Jetaime.png";
import JetaimeSS from "../../../public/assets/Jetaimess.png";
import TheTatooImage from "../../../public/assets/TheTattoo.png";
import TheTatooSS from "../../../public/assets/TheTattooss.png";
import HauntedTaxiImage from "../../../public/assets/HauntedTaxi.png";
import HauntedTaxiSS from "../../../public/assets/HauntedTaxiss.png";
import CreepyRoommateImage from "../../../public/assets/Creepyroommate.png";
import CreepyRoommateSS from "../../../public/assets/CreepyRoommatess.png";
import CreepyRoommateBG from "../../../public/assets/CreepyRoommateBG.png";
import TheTattooBG from "../../../public/assets/TheTattooBG.png";
import HauntedTaxiBG from "../../../public/assets/HauntedTaxiBG.png";
import JetaimeBG from "../../../public/assets/JetaimeBG.png";
import CreepyRoommateBGM from "../../../public/assets/CreepyRoommateBGM.png";
import TheTattooBGM from "../../../public/assets/TheTattooBGM.png";
import HauntedTaxiBGM from "../../../public/assets/HauntedTaxiBGM.png";
import JetaimeBGM from "../../../public/assets/JetaimeBGM.png";
import AppStoreBtn from "../../../public/assets/applestore-btn.png";
import GooglePlayBtn from "../../../public/assets/googleplay-btn.png";

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow: none;
  z-index: -1;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const MoblieImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const MobileImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-height: 700px;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    padding-right: 10%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding-right: 20%;
    padding-top: 2rem;
  }

  @media (max-width: 480px) {
    justify-content: center;
    padding-right: 20%;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  max-width: 1200px;
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 10rem;

  @media (max-width: 1200px) {
    padding: 0 3rem;
    grid-column-gap: 5rem;
  }

  @media (max-width: 1024px) {
    padding-top: 0 70%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 8rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 7rem 2rem;
  }
`;

const SmallMobileWrapper = styled.div`
  position: absolute;
  right: -65%;
  bottom: 0;
  z-index: -1;
`;

const LargeMobileWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const slidesArray = [
  {
    id: 0,
    BGImage: JetaimeBG,
    MobileImage: JetaimeImage,
    MobileImageSS: JetaimeSS,
    MobileImageBG: JetaimeBGM,
  },
  {
    id: 1,
    BGImage: TheTattooBG,
    MobileImage: TheTatooImage,
    MobileImageSS: TheTatooSS,
    MobileImageBG: TheTattooBGM,
  },
  {
    id: 2,
    BGImage: HauntedTaxiBG,
    MobileImage: HauntedTaxiImage,
    MobileImageSS: HauntedTaxiSS,
    MobileImageBG: HauntedTaxiBGM,
  },
  {
    id: 3,
    BGImage: CreepyRoommateBG,
    MobileImage: CreepyRoommateImage,
    MobileImageSS: CreepyRoommateSS,
    MobileImageBG: CreepyRoommateBGM,
  },
];

const HeroSection = ({ isMobile }) => {
  const [slide, setSlide] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setSlide((slide + 1 + 4) % 4), 5000);

    return () => clearTimeout(timeout);
  }, [slide]);

  return (
    <Container className="hero-section">
      <AnimateKeyframes
        play={true}
        delay={0}
        duration={6}
        iterationCount={"infinite"}
        direction="alternate"
        keyframes={["transform: scale(1)", "transform: scale(1.1)"]}
      >
        <ImageWrapper>
          <Image
            src={
              isMobile
                ? slidesArray[slide].MobileImageBG
                : slidesArray[slide].BGImage
            }
            alt="StoryTrap"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </ImageWrapper>
      </AnimateKeyframes>

      <ContentWrapper>
        <TextContainer>
          <HeroTextContainer isMobile={isMobile} />
        </TextContainer>

        <MoblieImageContainer>
          <MobileImagesWrapper className="wrapperrrrrrrrrr">
            <Animate
              play={play} // set play true to start the animation
              duration={0.75} // how long is the animation duration
              delay={0} // how many delay seconds will apply before the animation start
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
              easeType="linear"
              onComplete={() => setPlay(true)} // call back function when animation is completed
            >
              <LargeMobileWrapper className="Large">
                <Image
                  alt="StoryTrap"
                  src={slidesArray[slide].MobileImage}
                  width={isMobile ? 154 : 250}
                  height={isMobile ? 307 : 499}
                  layout="intrinsic"
                  placeholder="blur"
                />

                <SmallMobileWrapper className="---ssmmaallll---">
                  <Image
                    alt="StoryTrap"
                    src={slidesArray[slide].MobileImageSS}
                    width={isMobile ? 112 : 200}
                    height={isMobile ? 224 : 399}
                    layout="intrinsic"
                    placeholder="blur"
                  />
                </SmallMobileWrapper>
              </LargeMobileWrapper>
            </Animate>
          </MobileImagesWrapper>
        </MoblieImageContainer>
        {isMobile && (
          <ButtonsContainer>
            <TextParagraph align="center" bold={true}>
              Download the app now
            </TextParagraph>
            <ButtonsWrapper>
              <Logo
                margin={false}
                showText={false}
                src={AppStoreBtn}
                alt="StoryTrap AppStore"
                path="/"
                width={138}
                height={40}
              />
              <Logo
                margin={false}
                showText={false}
                src={GooglePlayBtn}
                alt="StoryTrap Googleplay"
                path="/"
                width={138}
                height={40}
              />
            </ButtonsWrapper>
          </ButtonsContainer>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default HeroSection;
