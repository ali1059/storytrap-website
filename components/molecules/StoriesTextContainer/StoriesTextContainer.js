import React from "react";
import styled from "@emotion/styled";

import ColorHeading from "../../atoms/ColorHeading/ColorHeading";
import Heading from "../../atoms/Heading/Heading";
import TextParagraph from "../../atoms/TextParagraph/TextParagraph";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 6rem 3rem;

  @media (max-width: 600px) {
    padding: 3rem 2rem;
  }
`;

const Wrapper = styled.div``;

const StoriesTextContainer = () => {
  return (
    <Container>
      <Wrapper>
        <Heading centerAlign={true} size="small">
          Tap through the
        </Heading>
        <Heading centerAlign={true} size="medium">
          <ColorHeading>Most Addictive</ColorHeading> Chat Stories
        </Heading>
        <TextParagraph width="535px" align="center">
          ‘Story Trap’ will Trap you in the world of suspense and fantasy. You
          will be compelled by a desire to keep tapping on your screen and
          reading all the stories till the very end.
        </TextParagraph>
      </Wrapper>
    </Container>
  );
};

export default StoriesTextContainer;
