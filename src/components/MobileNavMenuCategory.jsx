import React from "react";
import styled from "styled-components";

const Category = styled.div`
  padding: 1rem 0 0rem 2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.borderGreyLight};
`;

const CategoryName = styled.div`
  font-family: BrandonMedium, sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const SubcategoryContainer = styled.div`
  margin-left: 1rem;
`;

const SubcategoryName = styled.div`
  color: ${({ theme }) => theme.colors.mediumGrey};
  display: block;
  font-family: BrandonRegular, sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  text-transform: uppercase;
`;

const ItemList = styled.ul`
  margin-bottom: 2rem;
`;

const ItemName = styled.li`
  color: ${({ theme }) => theme.colors.mediumGrey};
  font-family: urw, sans-serif;
  font-weight: 300;
  font-size: 1.6rem;
  margin: 1rem 0 0 1rem;
  list-style: none;
  cursor: pointer;
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.aqua};
  }
`;

const MobileNavMenuCategory = (props) => {
  const { category } = props;
  return (
    <Category>
      <CategoryName>{category.categoryName}</CategoryName>
      <SubcategoryContainer>
        {category.subcategories &&
          category.subcategories.map((subcategory, i) => (
            <div key={i}>
              <SubcategoryName>{subcategory.subcategoryName}</SubcategoryName>
              <ItemList>
                {subcategory.subcategoryItems.map((item, j) => (
                  <ItemName key={j}>{item.itemName}</ItemName>
                ))}
              </ItemList>
            </div>
          ))}
      </SubcategoryContainer>
    </Category>
  );
};

export default MobileNavMenuCategory;
