import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import Navlink from "../../atoms/NavLink/NavLink";

const NavWrapper = styled.div`
  display: flex;

  @media (max-width: 770px) {
    flex-direction: column;
    display: ${(props) => (props.showBars ? "none" : "")};
  }
`;

const NavbarLinks = ({ showBars, openSidebar, setOpenSidebar }) => {
  const router = useRouter();
  console.log("router=>>>>>>>>>>", router);

  return (
    <NavWrapper showBars={showBars}>
      <Navlink
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        showBars={showBars}
        text="home"
        active={router.route == "/" ? true : false}
        path="/"
      />
      <Navlink
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        showBars={showBars}
        text="about"
        active={router.route == "/about" ? true : false}
        path="/about"
      />
    </NavWrapper>
  );
};

export default NavbarLinks;
