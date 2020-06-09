import React from "react";
import styled, { css } from "styled-components";

const BodyContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: block;
  border: 1px solid black;
  transform: translateX(0);
  transition: transform 200ms ease;
  ${(props) =>
    props.mobileNavOpen &&
    css`
      transform: translateX(29rem);
    `};
`;

const Body = (props) => {
  return (
    <BodyContainer mobileNavOpen={props.mobileNavOpen}>
      <p>BODY</p>
    </BodyContainer>
  );
};

export default Body;
