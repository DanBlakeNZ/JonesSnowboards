import React from "react";
import styled from "styled-components";
import LocationBlock from "./LocationBlock";
import location from "../data/locationSelect";

const LocationSelectContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightGrey};
  position: absolute;
  top: 3rem;
  right: 0;
  width: 30rem;
  height: 28rem;
  padding: 3rem;
  overflow: scroll;
  transition: transform 200ms ease;

  h3 {
    text-transform: uppercase;
    font-size: 1.1rem;
    font-family: "urw", sans-serif;
    font-weight: 700;
    letter-spacing: 0.1rem;
    color: #000;
  }

  img,
  span {
    display: inline;
  }
`;

const LocationSelect = () => {
  return (
    <LocationSelectContainer>
      <h3>We Ship to</h3>
      <LocationBlock
        flag={location.unitedStates.flag}
        text={location.unitedStates.name}
        subText={"Free Shipping Over $75"}
      />
    </LocationSelectContainer>
  );
};

export default LocationSelect;
