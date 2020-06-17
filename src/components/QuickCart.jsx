import React, { useState } from "react";
import styled from "styled-components";
import LocationSelect from "./LocationSelect";

const flagAU = "https://res.cloudinary.com/dblakenzcloud/image/upload/v1589327190/Jones%20Snowboards/flag_AU.png";

const QuickMenu = styled.div`
  display: flex;
  flex-direction: row;
  height: 5rem;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 3rem;
  }
`;

const CartItemSection = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;

  img {
    display: flex;
  }

  a {
    height: 5rem;
    line-height: 5rem;
    color: #000;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    padding: 0 1.15rem;
    letter-spacing: 0.1rem;
    font-family: BrandonMedium, sans-serif;
    font-weight: 500;

    :hover {
      background: ${({ theme }) => theme.colors.lightGrey};
      color: ${({ theme }) => theme.colors.aqua};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    a {
      color: #fff;
      height: 3rem;
      line-height: 3rem;
      :hover {
        background: #fff;
        height: 3rem;
      }
    }

    :after {
      content: "";
      right: 0;
      height: 1rem;
      line-height: 3rem;
      width: 0.1rem;
      background-color: #666;
      vertical-align: middle;
    }

    :last-child:after {
      display: none;
    }
  }
`;

const QuickCart = () => {
  const [isLocationMenuOpen, setIsLocationOpen] = useState(false);

  return (
    <QuickMenu className="center">
      <CartItemSection className="col-33 mobile-hide">
        <CartItem>
          <a href="">GEAR 101</a>
        </CartItem>
        <CartItem>
          <a href="">HELP CENTER</a>
        </CartItem>
        <CartItem>
          <a href="">FIND A STORE</a>
        </CartItem>
      </CartItemSection>
      <CartItemSection className="col-33 mobile-hide">TWO</CartItemSection>
      <CartItemSection className="col-33 flex-end">
        <CartItem onMouseOver={() => setIsLocationOpen(true)} onMouseLeave={() => setIsLocationOpen(false)}>
          <a>
            <img src={flagAU} />
            {isLocationMenuOpen && <LocationSelect />}
          </a>
        </CartItem>
        <CartItem>
          <a href="">EN</a>
        </CartItem>
      </CartItemSection>
    </QuickMenu>
  );
};

export default QuickCart;
