import * as React from "react";
import styled from "styled-components";

import { useCartContext } from "../context";

const NavbarContainer = styled.nav`
  background: var(--clr-primary);
  padding: 1.25rem 2rem;
`;

const NavCenter = styled.div`
  max-width: var(--fixed-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin-bottom: 0;
    color: var(--clr-white);
  }
`;

const ShopIconContainer = styled.div`
  display: block;
  position: relative;

  svg {
    width: 2rem;
    fill: var(--clr-white);
  }
`;

const AmountContainer = styled.div`
  position: absolute;
  top: -0.85rem;
  right: -0.85rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: var(--clr-primary-light);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: var(--clr-white);
    margin-bottom: 0;
    font-size: 1.25rem;
  }
`;

const Navbar = () => {
  const { cartItems } = useCartContext();
  const nbrItems = cartItems.reduce((sum, item) => sum + item.amount, 0);
  return (
    <NavbarContainer>
      <NavCenter>
        <h3>Shopping Cart</h3>
        <ShopIconContainer>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <AmountContainer>
            <p>{nbrItems}</p>
          </AmountContainer>
        </ShopIconContainer>
      </NavCenter>
    </NavbarContainer>
  );
};

export default Navbar;
