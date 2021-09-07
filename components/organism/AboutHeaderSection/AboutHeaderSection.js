import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
`;

const ImageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 10rem;

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 5rem 3rem;
  }
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  order: ${(props) => (props.leftText ? "1" : "2")};
`;

const HeaderText = styled.p`
  text-align: left;
  font: normal normal bold 24px/40px Metropolis;
  letter-spacing: 0.72px;
  color: #ffffff;
  text-transform: uppercase;
  max-width: 550px;

  @media (max-width: 900px) {
    font-size: 20px;
    max-width: 400px;
  }

  @media (max-width: 600px) {
    max-width: 350px;
    font-size: 18px;
  }
`;

const AboutHeaderSection = ({
  sectionClass,
  BGImage,
  posterImage,
  text,
  leftText,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width:600px)" });

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={BGImage}
          alt="StoryTrap"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </ImageWrapper>

      <ContentWrapper>
        <GridWrapper leftText={leftText}>
          <HeaderText>{text}</HeaderText>
        </GridWrapper>
        <GridWrapper leftText={!leftText}>
          <div>
            <Image
              src={posterImage}
              width={isMobile ? 250 : 377}
              height={isMobile ? 332 : 500}
            />
          </div>
        </GridWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default AboutHeaderSection;
