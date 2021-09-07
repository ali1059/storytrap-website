import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

import StoriesCover from "../../../public/assets/storiesCovers.png";

const Container = styled.div``;

const ImageWrapper = styled.div`
  position: relative;
  min-height: 878px;
  width: 100%;
`;

const StoriesImageContainer = () => {
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
    </Container>
  );
};

export default StoriesImageContainer;
