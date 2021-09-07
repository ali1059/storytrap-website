import React from "react";
import styled from "@emotion/styled";

import ContactButton from "../../atoms/ContactButton/ContactButton";
import Heading from "../../atoms/Heading/Heading";

const Container = styled.div`
  background: transparent linear-gradient(180deg, #feb32a 0%, #fd8f25 100%) 0%
    0% no-repeat padding-box;
  height: 452px;
  width: 100%;

  @media (max-width: 600px) {
    height: 200px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 6rem 0;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 600px) {
    padding: 2rem 0;
  }
`;

const ContactUsContainer = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Have Any Questions?</Heading>
        <ContactButton smallSize={false} text="Contact Us" />
      </Wrapper>
    </Container>
  );
};

export default ContactUsContainer;
