import React from "react";
import styled from "styled-components";
import LocationBlock from "./LocationBlock";
import { locationStatic, locationList } from "../data/locationSelect";

const LocationSelectContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightGrey};
  position: absolute;
  top: 5rem;
  right: 0;
  width: 30rem;
  height: 28rem;
  padding: 0 3rem;
  overflow-y: scroll;
  transition: transform 200ms ease;

  h3 {
    text-transform: uppercase;
    font-size: 1.1rem;
    font-family: urw, sans-serif;
    font-weight: 700;
    letter-spacing: 0.1rem;
    color: #000;
    height: 4rem;
  }

  img,
  span {
    display: inline;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    top: 3rem;
  }
`;

const LocationSelect = () => {
  return (
    <LocationSelectContainer>
      <h3>We Ship to</h3>
      <LocationBlock
        flag={locationStatic.unitedStates.flag}
        locationName={locationStatic.unitedStates.name}
        detailsText={locationStatic.unitedStates.details}
      />
      <LocationBlock
        flag={locationStatic.canada.flag}
        locationName={locationStatic.canada.name}
        detailsText={locationStatic.canada.details}
      />
      <h3 className="margin-top-1">Navigate in</h3>
      {locationList.map((location, i) => (
        <LocationBlock flag={location.flag} locationName={location.name} detailsText={location.details} key={i} />
      ))}
    </LocationSelectContainer>
  );
};

export default LocationSelect;
