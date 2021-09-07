import React from "react";
import styled from "@emotion/styled";

const Text = styled.span`
  color: #fea027;
`;

const ColorHeading = ({ children }) => {
  return <Text>{children}</Text>;
};

export default ColorHeading;
