import React from "react";
import styled, { css } from "styled-components";
import MobileNavMenuCategory from "./MobileNavMenuCategory";
import menuItems from "../data/menuItems";

const MobileNavWrapper = styled.nav`
  position: fixed;
  height: auto;
  width: 29rem;
  left: 0;
  bottom: 0;
  top: 5rem;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.borderGreyLight};
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.borderGreyLight};
  transition: transform 200ms ease;
  transform: translateX(-29rem);
  z-index: 100;
  ${(props) =>
    props.mobileNavOpen &&
    css`
      transform: translateX(0);
    `};
`;

const MobileNavBlackout = styled.div`
  position: fixed;
  height: auto;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  top: 5rem;
  transition: transform 200ms ease, background-color 200ms ease;
  ${(props) =>
    props.mobileNavOpen &&
    css`
      background-color: rgba(0, 0, 0, 0.8);
    `};
`;

const MobileNavMenu = (props) => {
  return (
    <>
      <MobileNavWrapper mobileNavOpen={props.mobileNavOpen}>
        {menuItems.map((category, i) => (
          <MobileNavMenuCategory category={category} key={i} />
        ))}
      </MobileNavWrapper>
      <MobileNavBlackout mobileNavOpen={props.mobileNavOpen} />
    </>
  );
};

export default MobileNavMenu;
