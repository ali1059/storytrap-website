import React from "react";
import styled from "@emotion/styled";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarLinks from "../../molecules/NavbarLinks/NavbarLinks";
import ContactButton from "../../atoms/ContactButton/ContactButton";

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 100;
  background-color: #121212;
  width: 100%;
  height: 100%;
  display: ${(props) => (!props.openSidebar ? "none" : "grid")};
  text-align: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
`;

const Icon = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 2rem;
`;

const SidebarWrapper = styled.div`
  margin-top: 40%;
`;

const Sidebar = ({ toggle, openSidebar, setOpenSidebar }) => {
  return (
    <SidebarContainer openSidebar={openSidebar}>
      <Icon onClick={toggle}>
        <FaTimes color="#fff" />
      </Icon>

      <SidebarWrapper>
        <NavbarLinks
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <ContactButton text="Contact Us" smallSize={true} />
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
