import React from "react";
import styled, { css } from "styled-components";

const BodyContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: block;
  border: 1px solid black;
  font-family: BrandonRegular, sans-serif;
  transform: translateX(0);
  transition: transform 200ms ease;
  ${(props) =>
    props.mobileNavOpen &&
    css`
      transform: translateX(29rem);
    `};

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 3rem;
  }
`;

const Body = (props) => {
  return <BodyContainer mobileNavOpen={props.mobileNavOpen}>BODY</BodyContainer>;
};

export default Body;
