import React from "react";
import styled, { css } from "styled-components";
import QuickCart from "./QuickCart";
import { logos, icons } from "../data/imageLinks.js";

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  background-color: #fff;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    background-color: #000;
  }
`;

const NavOpen = styled.div`
  top: 0;
  left: 0;
  width: auto;
  height: 5rem;
  position: absolute;
  display: none;
  pointer-events: auto;
  display: block;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

const NavMenuToggle = styled.div`
  width: 5rem;
  height: 5rem;
  background-image: url(${icons.mobileOpenClose});
  background-position: 0 center;
  background-repeat: no-repeat;
  background-size: 10rem 5rem;
  float: left;
  transition: background-position 200ms ease;
  ${({ navOpen }) =>
    navOpen &&
    css`
      background-position: -5rem center;
    `}
`;

const LogoLink = styled.a`
  float: left;
  height: 5rem;
  line-height: 5rem;
  display: block;
  cursor: pointer;
  pointer-events: auto;
`;

const Logo = styled.img`
  height: 1.5rem;
  width: 7.5rem;
  margin-top: 0.2rem;
  max-width: 100%;
  vertical-align: middle;
`;

export const Header = (props) => {
  return (
    <StyledHeader>
      <NavOpen>
        <NavMenuToggle navOpen={props.mobileNavOpen} onClick={props.toggleMobileNav} />
        <LogoLink href={"/"}>
          <Logo src={logos.jones150x30} />
        </LogoLink>
      </NavOpen>
      <QuickCart />
    </StyledHeader>
  );
};

export default Header;
