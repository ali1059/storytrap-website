import React from "react";
import styled from "@emotion/styled";

const SectionContainer = styled.section`
  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 600px) {
    padding: 0rem 2rem;
  }
`;

const Section = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export default Section;
