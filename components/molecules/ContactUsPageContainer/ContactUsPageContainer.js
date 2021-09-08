import React, { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../../atoms/Logo/Logo";

import Heading from "../../atoms/Heading/Heading";
import TextParagraph from "../../atoms/TextParagraph/TextParagraph";
import FeedbackMessage from "./FeedbackMessage";
// import { ImageWrapper } from "../../organisms/Header";
import backgroundImg from "../../../public/assets/contact6.jpg";
import logoImage from "../../../public/assets/logo.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Wrapper = styled.div`
  order: 1;
  position: relative;
  text-align: left;
  max-height: 100vh;
  width: 70%;
  max-width: 1000px;
  z-index: 2;

  margin: auto;
  padding: 4rem;

  @media (max-width: 900px) {
    position: absolute;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  @media (max-width: 900px) {
    position: static;
  }
`;

const FormWrapper = styled.div`
  color: #1c1c1c !important;
  text-align: left;
  max-width: 468px;
  margin: 3rem auto;
`;

const FormFieldLabel = styled.p`
  font-size: 16px;
  color: #9b9b9b;
  opacity: 100%;
  text-align: left;
  letter-spacing: 1.6px;
`;

const FormFieldInput = styled.input`
  border: none;
  color: #fff;
  background: transparent;
  border-bottom: 1px solid #707070;
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 2rem;
  :focus {
    outline: none;
  }
`;

const FormFieldTextarea = styled.textarea`
  border: none;
  background: transparent;
  border: 1px solid #707070;
  color: #fff;

  border-radius: 10px;
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 2rem;
  :focus {
    outline: none;
  }
`;

export const BackgroundImage = styled(Image)`
  object-position: 25rem;
  height: 100%;
  @media (max-width: 768px) {
    object-position: 8rem;
  }
`;

const TextWrapper = styled.div`
  max-width: 700px;
  text-align: center;
  margin: 2.5rem auto;
`;

const SubmitButton = styled.input`
  width: 124px;
  background: transparent linear-gradient(180deg, #feb32a 0%, #fd8f25 100%) 0%
    0% no-repeat padding-box;
  color: #ffffff;
  border: none;
  text-align: center;
  text-transform: uppercase;
  border-radius: 10px;
  height: 44px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const HeadingWrapper = styled.div`
  padding: 1rem 0;
`;

const ContactUsPageContainer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    form: "storytrapForm",
    subject: "StoryTrap Contact Form",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [feedback, setFeedback] = useState({
    status: false,
    variant: "success",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      "https://6k2c7xz40e.execute-api.ap-south-1.amazonaws.com/contact/mailFwdForServicesWebsite",
      formData
    );
    console.log("response =>>>>>>>>>", response);
    if (response.status == 200) {
      resetData();

      setFeedback({ status: true, variant: "success" });
    } else setFeedback({ status: true, variant: "failed" });
  };

  const resetData = () => {
    setFormData({
      form: "storytrapForm",
      subject: "StoryTrap Contact Form",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setTimeout(() => {
      router.push("/");
    }, 5000);
  };

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <>
      <Container className="Sssss">
        <ImageWrapper>
          <Image
            src={backgroundImg}
            alt="StoryTrap"
            layout="fill"
            quality={100}
          />
        </ImageWrapper>
        <Wrapper>
          <Logo
            noMargin={false}
            showText={true}
            showInCloumn={false}
            src={logoImage}
            alt="StoryTrap"
            path="/"
            width={44}
            height={54}
          />
          <FormWrapper>
            <HeadingWrapper>
              <Heading colored={true}>CONTACT US</Heading>
            </HeadingWrapper>

            <form onSubmit={handleSubmit}>
              <FormFieldLabel>Name</FormFieldLabel>
              <FormFieldInput
                onChange={(e) => handleChange("name", e.target.value)}
                value={formData.name}
                required
                type="text"
                name="full-name"
              />
              <FormFieldLabel>Email</FormFieldLabel>
              <FormFieldInput
                onChange={(e) => handleChange("email", e.target.value)}
                required
                value={formData.email}
                type="email"
                name="email"
              />
              <FormFieldLabel>Phone</FormFieldLabel>
              <FormFieldInput
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                value={formData.phone}
                type="text"
                name="company-name"
              />
              <FormFieldLabel>Message</FormFieldLabel>
              <FormFieldTextarea
                onChange={(e) => handleChange("message", e.target.value)}
                required
                value={formData.message}
                id=""
                name=""
                rows="5"
              />
              <SubmitButton type="submit" value="submit" />
            </form>
          </FormWrapper>
          {feedback.status && (
            <FeedbackMessage
              alertStatus={feedback.variant}
              setFeedback={setFeedback}
            />
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactUsPageContainer;
