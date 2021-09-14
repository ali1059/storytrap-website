import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

import useDeviceDetect from "../../hooks/useDeviceDetect";
import IphoneImg from "../../../public/assets/mobile-skelton2.png";
import StoriesCover from "../../../public/assets/storiesCovers.png";

const Container = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  min-height: 878px;
  width: 100%;
`;

const MobileContainer = styled.div`
  position: absolute;
  bottom: -5rem;
  right: 20%;

  @media (max-width: 768px) {
    bottom: 0;
    right: 20%;
  }
`;

const MobileWrapper = styled.div``;

const Video = styled.video`
  left: 0rem;
  position: absolute;
  top: 1.7rem;
  border-radius: 50px;

  @media (max-width: 768px) {
    top: 1.2rem;
    border-radius: 0;
  }
`;

const MobileImageWrapper = styled.div`
  position: relative;
  z-index: 3;
`;

const StoriesImageContainer = () => {
  const isMobile = useDeviceDetect();

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={StoriesCover}
          alt="StoryTrap"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </ImageWrapper>
      <MobileContainer className="MobileContainer">
        <MobileImageWrapper className="ImageWrapper">
          <Image
            src={IphoneImg}
            width={isMobile ? 250 : 344}
            height={isMobile ? 520 : 700}
          />
        </MobileImageWrapper>
        <Video
          width={isMobile ? "250" : "347"}
          height={isMobile ? "483" : "655"}
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src="/assets/MobileVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </MobileContainer>
    </Container>
  );
};

export default StoriesImageContainer;
