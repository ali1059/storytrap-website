import React, { useEffect } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  opacity: 0.9;
  transition: ease-in-out;
  width: 100%;
  border-radius: 10px;
  background: ${(props) =>
    props.alertStatus == "success" ? "#8ac34a" : "red"};
  color: #fff;
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const FeedbackMessage = ({ alertStatus, setFeedback }) => {
  useEffect(() => {
    setTimeout(() => {
      setFeedback({ status: false, variant: "success" });
    }, 3000);
  }, []);

  return (
    <Container alertStatus={alertStatus}>
      <Wrapper>
        {alertStatus == "success" ? (
          <p>
            Your message has been successfully sent. We will contact you soon
          </p>
        ) : (
          <p>There was some error in submitting form. Kindly try again</p>
        )}
      </Wrapper>
    </Container>
  );
};

export default FeedbackMessage;
