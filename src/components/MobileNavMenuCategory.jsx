import React from "react";
import styled from "styled-components";

const CategoryName = styled.span`
  font-family: BrandonMedium, sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  text-transform: uppercase;
`;

const MobileNavMenuCategory = (props) => {
  const { category } = props;
  return (
    <div>
      <CategoryName>{category.categoryName}</CategoryName>
    </div>
  );
};

export default MobileNavMenuCategory;
