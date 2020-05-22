import React from "react";
import styled from "styled-components";
import LocationSelect from "./LocationSelect";

const flagAU = "https://res.cloudinary.com/dblakenzcloud/image/upload/v1589327190/Jones%20Snowboards/flag_AU.png";

const QuickMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
`;

const CartItemSection = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  a {
    height: 3rem;
    line-height: 3rem;
    color: #000;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    padding: 0 1.15rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-family: "brandon-med", sans-serif;
    font-weight: 500;

    :hover {
      background: ${({ theme }) => theme.colors.lightGrey};
      color: ${({ theme }) => theme.colors.aqua};

      @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
        background: #fff;
      }
    }

    img {
      display: flex;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      color: #fff;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
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

let showLocation = false;

const QuickCart = () => {
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
        <CartItem onMouseOver={() => (showLocation = true)}>
          <a href="">
            <img src={flagAU} />
          </a>
          {showLocation && <LocationSelect />}
        </CartItem>
        <CartItem>
          <a href="">EN</a>
        </CartItem>
      </CartItemSection>
    </QuickMenu>
  );
};

export default QuickCart;
