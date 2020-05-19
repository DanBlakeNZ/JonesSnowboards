import React from "react";
import styled from "styled-components";

const LocationBlockContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const FlagLocationBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  color: #000;
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.aqua};
  }
  img {
    width: 2.8rem;
    height: 1.9rem;
  }
  p {
    padding-left: 1rem;
    font-size: 1.4rem;
    font-family: "urw", sans-serif;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }
`;

const LocationDetails = styled.p`
  height: 1.5rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const LocationBlock = (props) => {
  const { flag, locationName, detailsText } = props;
  return (
    <LocationBlockContainer className="border-bottom border-light">
      <FlagLocationBlock>
        <img src={flag} />
        <p>{locationName}</p>
      </FlagLocationBlock>
      {detailsText && <LocationDetails>{detailsText}</LocationDetails>}
    </LocationBlockContainer>
  );
};

export default LocationBlock;
