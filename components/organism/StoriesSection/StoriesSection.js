import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

import IphoneImg from "../../../public/assets/mobile-skelton2.png";
import StoriesTextContainer from "../../molecules/StoriesTextContainer/StoriesTextContainer";
import StoriesImageContainer from "../../molecules/StoriesImageContainer/StoriesImageContainer";

const Container = styled.div``;

const Wrapper = styled.div``;

const StoriesSection = () => {
  return (
    <Container>
      <Wrapper>
        <StoriesTextContainer />
        <StoriesImageContainer />
      </Wrapper>
    </Container>
  );
};

export default StoriesSection;
