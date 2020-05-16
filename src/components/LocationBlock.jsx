import React from "react";
import styled from "styled-components";

const LocationBlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  img {
    width: 2.8rem;
    height: 1.9rem;
  }
  span {
    padding-left: 1rem;
    font-size: 1.4rem;
    font-family: "urw", sans-serif;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }
`;

const LocationBlock = (props) => {
  const { flag, text, subText } = props;
  return (
    <LocationBlockContainer>
      <img src={flag} />
      <span>{text}</span>
      {subText && <p>{subText}</p>}
    </LocationBlockContainer>
  );
};

export default LocationBlock;
