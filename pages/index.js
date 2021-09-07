import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ query: "(max-width:600px)" });

  console.log("isMobile", isMobile);
  return (
    <Layout>
      <HeroSection isMobile={isMobile} />
      <StoriesSection isMobile={isMobile} />

      <ContentContainer>
        <NewStoriesSection />
        <ContactUsSection />
      </ContentContainer>
    </Layout>
  );
}
