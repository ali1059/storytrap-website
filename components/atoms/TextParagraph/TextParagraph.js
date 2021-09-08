import React from "react";
import styled from "@emotion/styled";

const Text = styled.p`
  text-align: ${(props) => (props.align == "center" ? "center" : "left")};
  color: #f8f8f8;
  letter-spacing: 0.48px;
  max-width: ${(props) => props.width};
  font: ${(props) =>
    props.bold
      ? "normal normal bold 16px/19px metropolis"
      : "normal normal normal 16px/19px metropolis"};
  margin: ${(props) => props.nomargin && "0px"};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextParagraph = ({ align, children, bold, nomargin, width }) => {
  return (
    <Text align={align} bold={bold} nomargin={nomargin} width={width}>
      {children}
    </Text>
  );
};

export default TextParagraph;
