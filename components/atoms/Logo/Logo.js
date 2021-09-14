import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.showInCloumn ? "column" : "row")};
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin: ${(props) => props.margin && "0 1.5rem"};
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

const LogoImageWrapper = styled.div`
  align-self: ${(props) => props.showInCloumn && "flex-start"};
  margin-left: ${(props) => props.marginLeft && "1rem"};
  margin-right: ${(props) => props.marginRight && "1rem"};
`;

const LogoText = styled.p`
  font-size: 44px;
  color: #f8f8f8;
  margin: ${(props) => (props.noMargin ? "0" : "0 1rem")};
  font-family: "Franklin Gothic Medium";
  align-self: ${(props) => props.showInCloumn && "flex-start"};

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

const ColorText = styled.span`
  color: #fea027;
`;

const Logo = ({
  src,
  path,
  width,
  height,
  alt,
  showText,
  margin,
  showInCloumn,
  noMargin,
  marginLeft,
  marginRight,
}) => {
  return path !== null ? (
    <Link href={path}>
      <Wrapper showInCloumn={showInCloumn} margin={margin}>
        <LogoImageWrapper showInCloumn={showInCloumn}>
          <Image src={src} alt={alt} width={width} height={height} />
        </LogoImageWrapper>
        {showText && (
          <LogoText noMargin={noMargin} showInCloumn={showInCloumn}>
            Story<ColorText>Trap</ColorText>
          </LogoText>
        )}
      </Wrapper>
    </Link>
  ) : (
    <Wrapper showInCloumn={showInCloumn} margin={margin}>
      <LogoImageWrapper
        marginRight={marginRight}
        marginLeft={marginLeft}
        showInCloumn={showInCloumn}
      >
        <Image src={src} alt={alt} width={width} height={height} />
      </LogoImageWrapper>
      {showText && (
        <LogoText noMargin={noMargin} showInCloumn={showInCloumn}>
          Story<ColorText>Trap</ColorText>
        </LogoText>
      )}
    </Wrapper>
  );
};

export default Logo;
