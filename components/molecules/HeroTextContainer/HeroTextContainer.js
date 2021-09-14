import React, { useState } from "react";
import styled from "@emotion/styled";
import { Animate } from "react-simple-animate";
import Link from "next/link";

import Heading from "../../atoms/Heading/Heading";
import TextParagraph from "../../atoms/TextParagraph/TextParagraph";
import Logo from "../../atoms/Logo/Logo";
import AppStoreBtn from "../../../public/assets/applestore-btn.png";
import GooglePlayBtn from "../../../public/assets/googleplay-btn.png";
import ColorHeading from "../../atoms/ColorHeading/ColorHeading";

const Container = styled.div`
  max-width: 500px;
`;

const Wrapper = styled.div`
  /* max-width: 550px; */
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.spaceBetween ? "space-between" : "space-around"};
`;

export const ButtonsContainer = styled.div`
  margin-top: 2.5rem;
`;

const HeroTextContainer = ({ isMobile }) => {
  const [play, setPlay] = useState(true);
  return (
    <Animate
      play={play} // set play true to start the animation
      duration={0.5} // how long is the animation duration
      delay={0} // how many delay seconds will apply before the animation start
      start={{ transform: "translateX(-15vw)", opacity: 0 }}
      end={{ transform: "translateX(0px)", opacity: "100%" }}
      complete={{ display: "block" }}
      easeType="linear"
      onComplete={() => setPlay(true)} // call back function when animation is completed
    >
      <Container>
        <Wrapper>
          <Heading size="large" justify={false}>
            Escape into the World of Fiction with Story
            <ColorHeading>Trap </ColorHeading>
          </Heading>
          <TextParagraph nomargin={false} justify={true}>
            Read snappy text messages and video conversations as if you’re
            reading someone else’s chat history in real life, except that these
            are the most fun and exciting chats ever!
          </TextParagraph>
          {!isMobile && (
            <ButtonsContainer>
              <TextParagraph bold={true}>Download the app now</TextParagraph>
              <ButtonsWrapper spaceBetween={true}>
                <Link href="https://apps.apple.com/in/app/story-trap/id1559372131">
                  <a target="_blank" rel="noopener noreferrer">
                    <Logo
                      margin={false}
                      showText={false}
                      src={AppStoreBtn}
                      marginRight={true}
                      alt="StoryTrap AppStore"
                      path={null}
                      width={216}
                      height={62.44}
                    />
                  </a>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.journalpost.storytrap">
                  <a target="_blank" rel="noopener noreferrer">
                    <Logo
                      margin={false}
                      showText={false}
                      marginLeft={true}
                      src={GooglePlayBtn}
                      alt="StoryTrap Googleplay"
                      path={null}
                      layout="intrinsic"
                      width={216}
                      height={62.44}
                    />
                  </a>
                </Link>
              </ButtonsWrapper>
            </ButtonsContainer>
          )}
        </Wrapper>
      </Container>
    </Animate>
  );
};

export default HeroTextContainer;
