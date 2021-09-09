import React, { useState } from "react";
import { NextSeo } from "next-seo";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

import Navbar from "../../organism/Navbar/Navbar";
import Sidebar from "../../organism/Sidebar/Sidebar";
import Footer from "../../organism/Footer/Footer";

const Layout = ({
  children,
  title,
  description,
  image,
  url,
  isBlogPost,
  isMobile,
}) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const router = useRouter();

  const toggle = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <NextSeo
        title={title || "StoryTrap"}
        description={description || "StoryTrap"}
        image={image}
        url={`https://storytrap.co${url}` || "https://storytrap.co"}
        isBlogPost={isBlogPost}
        openGraph={{
          type: "website",
          url: `https://storytrap.co${url}`,
          title: title,
          description: description,
          images: [
            { url: image, width: 800, height: 600, alt: "Og Image Alt" },
          ],
          site_name: "Koala",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      {router.route !== "/contact-us" && (
        <Navbar
          openSidebar={openSidebar}
          toggle={toggle}
          setOpenSidebar={setOpenSidebar}
        />
      )}
      <Sidebar
        openSidebar={openSidebar}
        toggle={toggle}
        setOpenSidebar={setOpenSidebar}
      />
      {/* paddingTop: "5.375rem", */}
      <main>{children}</main>
      {/* <CookieConsent
        location="bottom"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}

      {router.route !== "/contact-us" && <Footer isMobile={isMobile} />}
    </>
  );
};

export default Layout;
