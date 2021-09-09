import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import useDeviceDetect from "../components/hooks/useDeviceDetect";

import HeroSection from "../components/organism/HeroSection/HeroSection";
import Layout from "../components/templates/Layout/Layout";
import StoriesSection from "../components/organism/StoriesSection/StoriesSection";
import ContactUsSection from "../components/organism/ContactUsSection/ContactUsSection";
import NewStoriesSection from "../components/organism/NewStoriesSection/NewStoriesSection";

const ContentContainer = styled.div`
  max-width: 75rem;
  margin: auto;
`;

export default function Home() {
  const isMobile = useDeviceDetect();

  return (
    <Layout isMobile={isMobile}>
      <HeroSection isMobile={isMobile} />
      <StoriesSection isMobile={isMobile} />

      <ContentContainer>
        <NewStoriesSection />
        <ContactUsSection />
      </ContentContainer>
    </Layout>
  );
}
