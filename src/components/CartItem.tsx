import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import data from "../store/data";
import { increase, decrease, remove } from "../store/cartItemsSlice";
import { IState } from "../store/selectors";

type CartItemType = typeof data[number];
type CartItemProps = { itemId: number };

const CartItemContainer = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;

  h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;
  }
`;

const CartItemImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

const ItemPrice = styled.h4`
  color: var(--clr-grey-5);
`;

const RemoveBtn = styled.button`
  color: var(--clr-primary);
  letter-spacing: var(--spacing);
  cursor: pointer;
  font-size: 0.85rem;
  background: transparent;
  border: none;
  margin-top: 0.375rem;
  transition: var(--transition);

  :hover {
    color: var(--clr-primary-light);
  }
`;

const AmountContainer = styled.p`
  text-align: center;
  margin-bottom: 0;
  font-size: 1.25rem;
  line-height: 1;
`;

const AmountBtn = styled.button`
  width: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    fill: var(--clr-primary);
  }

  :hover svg {
    fill: var(--clr-primary-light);
  }
`;

function CartItem({ itemId }: CartItemProps) {
  const cartItem = useSelector<IState, CartItemType | undefined>((state) => {
    return state.cartItems.find((item) => item.id === itemId);
  });
  const { id, title, price, img, amount } = cartItem!;
  const dispatch = useDispatch();
  return (
    <CartItemContainer>
      <CartItemImg src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <ItemPrice>${price}</ItemPrice>
        <RemoveBtn
          onClick={() => {
            dispatch(remove(id));
          }}
        >
          remove
        </RemoveBtn>
      </div>
      <div>
        <AmountBtn
          onClick={() => {
            dispatch(increase(id));
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </AmountBtn>
        <AmountContainer>{amount}</AmountContainer>
        <AmountBtn
          onClick={() => {
            dispatch(decrease(id));
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </AmountBtn>
      </div>
    </CartItemContainer>
  );
}

export default CartItem;
