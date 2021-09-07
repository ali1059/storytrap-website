import React from "react";
import Layout from "../components/templates/Layout/Layout";

import styled from "@emotion/styled";

const TextContainer = styled.div`
  max-width: 75rem;
  margin: 5rem auto;

  @media (max-width: 1300px) {
    padding: 0 4rem;
  }
`;

const TextWrapper = styled.div`
  padding: 2rem 0;
`;
const MainHeading = styled.h1`
  font-family: "roboto", sans-serif;
  padding: 0.5rem 0;
  color: #fea027;
`;

const Heading = styled.h2`
  margin-top: 0.5rem;
  font-family: "roboto", sans-serif;
  padding: 0.3rem 0;
  color: #fea027; ;
`;
const Paragraph = styled.p`
  font-size: 16px;
  color: #ffffff;
  line-height: 26px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
`;

const ListItem = styled.li`
  padding: 0.2rem 0;
  color: #ffffff;
`;

const PrivacyPolicy = () => {
  return (
    <Layout>
      <TextContainer>
        <TextWrapper>
          <MainHeading>Privacy Policy for StoryTrap</MainHeading>
          <Paragraph>
            At storytrap.com, accessible from
            <a href="https://storytrap.com"> https://storytrap.com, </a> one of
            our main priorities is the privacy of our visitors. This Privacy
            Policy document contains types of information that is collected and
            recorded by storytrap.com and how we use it.
          </Paragraph>
          <Paragraph>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </Paragraph>
          <Paragraph>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in storytrap.com. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </Paragraph>
          <Heading>Consent</Heading>
          <Paragraph>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </Paragraph>
          <Heading>Information we collect</Heading>
          <Paragraph>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </Paragraph>
          <Paragraph>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </Paragraph>
          <Paragraph>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </Paragraph>
          <Heading>How we use your information</Heading>
          <Paragraph>
            We use the information we collect in various ways, including to:
          </Paragraph>
          <ul>
            <ListItem>Provide, operate, and maintain our website</ListItem>
            <ListItem>Improve, personalize, and expand our website</ListItem>
            <ListItem>Understand and analyze how you use our website</ListItem>
            <ListItem>
              Develop new products, services, features, and functionality
            </ListItem>
            <ListItem>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </ListItem>
            <ListItem>Send you emails</ListItem>
            <ListItem>Find and prevent fraud</ListItem>
          </ul>
          <Heading>Log Files</Heading>
          <Paragraph>
            storytrap.com follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </Paragraph>
          <Heading>Cookies and Web Beacons</Heading>
          <Paragraph>
            Like any other website, storytrap.com uses 'cookies'. These cookies
            are used to store information including visitors' preferences, and
            the pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </Paragraph>
          <Paragraph>
            For more general information on cookies, please read{" "}
            <a href="https://www.cookieconsent.com/what-are-cookies/">
              "What Are Cookies" from Cookie Consent
            </a>
            .
          </Paragraph>
          <Heading>Google DoubleClick DART Cookie</Heading>
          <Paragraph>
            Google is one of a third-party vendor on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to www.website.com and other sites on the
            internet. However, visitors may choose to decline the use of DART
            cookies by visiting the Google ad and content network Privacy Policy
            at the following URL –{" "}
            <a href="https://policies.google.com/technologies/ads">
              https://policies.google.com/technologies/ads
            </a>
          </Paragraph>
          <Heading>Our Advertising Partners</Heading>
          <Paragraph>
            Some of advertisers on our site may use cookies and web beacons. Our
            advertising partners are listed below. Each of our advertising
            partners has their own Privacy Policy for their policies on user
            data. For easier access, we hyperlinked to their Privacy Policies
            below.
          </Paragraph>
          <ul>
            <ListItem>
              <Paragraph>Google</Paragraph>
              <Paragraph>
                <a href="https://policies.google.com/technologies/ads">
                  https://policies.google.com/technologies/ads
                </a>
              </Paragraph>
            </ListItem>
          </ul>
          <Heading>Advertising Partners Privacy Policies</Heading>
          <Paragraph>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of storytrap.com.
          </Paragraph>
          <Paragraph>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on storytrap.com,
            which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </Paragraph>
          <Paragraph>
            Note that storytrap.com has no access to or control over these
            cookies that are used by third-party advertisers.
          </Paragraph>
          <Heading>Third Party Privacy Policies</Heading>
          <Paragraph>
            storytrap.com's Privacy Policy does not apply to other advertisers
            or websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.{" "}
          </Paragraph>
          <Paragraph>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </Paragraph>
          <Heading>
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </Heading>
          <Paragraph>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </Paragraph>
          <Paragraph>
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </Paragraph>
          <Paragraph>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </Paragraph>
          <Paragraph>
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </Paragraph>
          <Paragraph>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Paragraph>
          <Heading>GDPR Data Protection Rights</Heading>
          <Paragraph>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </Paragraph>
          <Paragraph>
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </Paragraph>
          <Paragraph>
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </Paragraph>
          <Paragraph>
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </Paragraph>
          <Paragraph>
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </Paragraph>
          <Paragraph>
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </Paragraph>
          <Paragraph>
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </Paragraph>
          <Paragraph>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Paragraph>
          <Heading>Children's Information</Heading>
          <Paragraph>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </Paragraph>
          <Paragraph>
            storytrap.com does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </Paragraph>
        </TextWrapper>
      </TextContainer>
    </Layout>
  );
};

export default PrivacyPolicy;
