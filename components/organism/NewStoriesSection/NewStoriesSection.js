import React from "react";
import styled from "@emotion/styled";

import Section from "../../atoms/Section/Section";
import NewStoriesTextContainer from "../../molecules/NewStoriesTextContainer/NewStoriesTextContainer";
import NewStoriesSlider from "../../molecules/NewStoriesSlider/NewStoriesSlider";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 1rem 0 8rem 0;
`;

const NewStoriesSection = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <NewStoriesTextContainer />
          <NewStoriesSlider />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default NewStoriesSection;
