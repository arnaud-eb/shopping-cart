import * as React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";
import { Button } from "../GlobalStyles";

import { useCartContext } from "../context";

const CartContainer = styled.section`
  min-height: calc(100vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 40px;
  padding: 2.5rem 0;
  max-width: var(--fixed-width);
`;

const Header = styled.div`
  h2 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const EmptyCart = styled.h4`
  text-transform: lowercase;
  color: var(--clr-grey-5);
  margin-top: 1rem;
  text-align: center;
`;

const Footer = styled.footer`
  margin-top: 4rem;
  text-align: center;

  hr {
    background: var(--clr-grey-5);
    border-color: transparent;
    border-width: 0.25px;
  }
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  h4 {
    text-transform: capitalize;
    margin-top: 1rem;
  }
`;

const ClearBtn = styled(Button)`
  background: transparent;
  padding: 0.5rem 1rem;
  color: var(--clr-red-dark);
  border: 1px solid var(--clr-red-dark);
  margin-top: 2.25rem;
  border-radius: var(--radius);

  :hover {
    background: var(--clr-red-light);
    color: var(--clr-red-dark);
    border-color: var(--clr-red-light);
  }
`;

function Cart() {
  const { cartItems, clear } = useCartContext();
  const total = cartItems.reduce(
    (sum, item) => sum + item.amount * item.price,
    0
  );
  return (
    <CartContainer>
      <Header>
        <h2>your bag</h2>
      </Header>
      {total > 0 ? (
        <React.Fragment>
          <div>
            {cartItems
              .filter((item) => item.amount > 0)
              .map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
          </div>
          <Footer>
            <hr />
            <CartTotal>
              <h4>total</h4>
              <h4>${total.toFixed(2)}</h4>
            </CartTotal>
            <ClearBtn onClick={clear}>clear cart</ClearBtn>
          </Footer>
        </React.Fragment>
      ) : (
        <EmptyCart>is currently empty</EmptyCart>
      )}
    </CartContainer>
  );
}

export default Cart;
