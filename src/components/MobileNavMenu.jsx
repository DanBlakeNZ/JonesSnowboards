import React from "react";
import styled, { css } from "styled-components";

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
  border: 1px solid hotpink;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.borderGreyLight};
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.borderGreyLight};
  transition: transform 200ms ease;
  transform: translateX(-29rem);
  ${(props) =>
    props.mobileNavOpen &&
    css`
      transform: translateX(0);
    `};
`;

const MobileNavMenu = (props) => {
  return (
    <MobileNavWrapper mobileNavOpen={props.mobileNavOpen}>
      <p>Mobile Nav</p>
    </MobileNavWrapper>
  );
};

export default MobileNavMenu;
