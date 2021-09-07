import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const NavItem = styled.a`
  color: ${(props) => (props.active ? "#FEA027" : "#cfcfcf")};
  letter-spacing: 0.8px;
  opacity: 0.75;
  text-align: left;
  margin: 0 1.5rem;
  text-transform: uppercase;
  text-align: center;

  :hover {
    cursor: pointer;
    color: #fea027;
  }

  @media (max-width: 770px) {
    margin: 1.5rem;
  }
`;

const Navlink = ({ text, path, openSidebar, setOpenSidebar, active }) => {
  return (
    <Link href={path} passHref>
      <NavItem
        active={active}
        onClick={() => openSidebar !== undefined && setOpenSidebar(false)}
      >
        {text}
      </NavItem>
    </Link>
  );
};

export default Navlink;
