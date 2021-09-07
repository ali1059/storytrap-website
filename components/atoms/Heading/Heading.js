import React from "react";
import styled from "@emotion/styled";

const Text = styled.p`
  text-align: ${(props) => (props.centerAlign ? "center" : "left")};
  font-family: "metropolis-semibold";
  font-size: ${(props) =>
    props.size == "large"
      ? "clamp(2rem, -0.3378rem + 5.9459vw, 3.75rem)"
      : props.size == "medium"
      ? "  clamp(1.5rem, 0.8919rem + 2.7027vw, 2.75rem)"
      : "clamp(1.125rem, 0.6385rem + 2.1622vw, 2.125rem)"};
  font-weight: bold;
  color: ${(props) => (props.colored ? "#FEA027" : "#f8f8f8")};
  margin: 1rem 0;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Heading = ({ children, size, centerAlign, colored }) => {
  return (
    <Text centerAlign={centerAlign} size={size} colored={colored}>
      {children}
    </Text>
  );
};

export default Heading;
