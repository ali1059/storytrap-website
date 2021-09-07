import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Button = styled.button`
  width: ${(props) => (props.smallSize ? "124px" : "322px")};
  height: ${(props) => (props.smallSize ? "44px" : "68px")};
  background: ${(props) =>
    props.smallSize
      ? "transparent linear-gradient(180deg, #FEB32A 0%, #FD8F25 100%) 0% 0% no-repeat padding-box"
      : "#FFFFFF 0% 0% no-repeat padding-box"};
  border-radius: ${(props) => (props.smallSize ? "10px" : "20px")};
  box-shadow: ${(props) => !props.smallSize && "0px 3px 6px #00000029"};
  border: none;
  margin: 0 1.5rem;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: ${(props) => (props.smallSize ? "124px" : "150px")};
    height: ${(props) => (props.smallSize ? "44px" : "35px")};
  }
`;

const ButtonText = styled.p`
  font-size: ${(props) => (props.smallSize ? "16px" : "24px")};
  color: ${(props) => (props.smallSize ? "#F8F8F8" : "#121212")};
  text-transform: capitalize;
  padding: 0;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ContactButton = ({ text, smallSize }) => {
  return (
    <Link href="/contact-us">
      <Button smallSize={smallSize}>
        <ButtonText smallSize={smallSize}>{text}</ButtonText>
      </Button>
    </Link>
  );
};

export default ContactButton;
