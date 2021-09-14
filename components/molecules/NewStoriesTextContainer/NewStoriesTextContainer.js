import React from "react";
import styled from "@emotion/styled";
import ColorHeading from "../../atoms/ColorHeading/ColorHeading";
import Heading from "../../atoms/Heading/Heading";

const Wrapper = styled.div`
  padding: 10rem 0 5rem 0;
`;

const NewStoriesTextContainer = () => {
  return (
    <Wrapper>
      <Heading centerAlign={true} size="small">
        Stay up to date
      </Heading>
      <Heading centerAlign={true} size="medium">
        We keep <ColorHeading>adding New Stories</ColorHeading>
      </Heading>
    </Wrapper>
  );
};

export default NewStoriesTextContainer;
