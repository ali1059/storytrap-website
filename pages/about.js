import React, { useEffect } from "react";

import useDeviceDetect from "../components/hooks/useDeviceDetect";
import AboutHeaderSection from "../components/organism/AboutHeaderSection/AboutHeaderSection";
import Layout from "../components/templates/Layout/Layout";
import BGImg1 from "../public/assets/AboutBackgrounds/BG1.png";
import poster1 from "../public/assets/AboutPosters/lovedBefore1.png";
import BGImg2 from "../public/assets/AboutBackgrounds/BG2.png";
import poster2 from "../public/assets/AboutPosters/murderonbeach1.png";
import BGImg3 from "../public/assets/AboutBackgrounds/BG3.png";
import poster3 from "../public/assets/AboutPosters/victims1.png";
import BGImg4 from "../public/assets/AboutBackgrounds/BG4.png";
import poster4 from "../public/assets/AboutPosters/iknowwhatyoudid1.png";

const Content = [
  {
    BGImage: BGImg1,
    posterImage: poster1,
    text: "Get ready to escape into a world full of thrill and excitement with our most addictive chat stories.",
    leftText: true,
  },
  {
    BGImage: BGImg2,
    posterImage: poster2,
    text: "‘Story Trap’ will trap you in the world of suspense and fantasy with its captivating fiction stories. You won’t be able to resist the urge to keep tapping on your screen and reading all the stories till the very end.",
    leftText: false,
  },
  {
    BGImage: BGImg3,
    posterImage: poster3,
    text: "All stories are told in snappy text message conversations along with videos and images to make you feel like you’re reading someone else’s chat history in real life, except that these are the most fun and exciting chats ever!",
    leftText: true,
  },
  {
    BGImage: BGImg4,
    posterImage: poster4,
    text: "Want to read a mystery, horror, romance, thriller, comedy, sci-fi, or any other popular genre story? Well, you’ve come to the right place. We cover it all!",
    leftText: false,
  },
];

const About = () => {
  const isMobile = useDeviceDetect();

  return (
    <Layout isMobile={isMobile}>
      {Content.map((item, index) => (
        <AboutHeaderSection
          key={index}
          sectionClass={`AboutHeaderSection-${index}`}
          BGImage={item.BGImage}
          posterImage={item.posterImage}
          text={item.text}
          leftText={item.leftText}
        />
      ))}
    </Layout>
  );
};

export default About;
