import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

import { CartStateType } from "./reducer";
import data from "./data";
import * as actions from "./actions";
import useActions from "./use-actions";

const Loading = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const App = () => {
  const loading = useSelector<CartStateType, CartStateType["loading"]>(
    (state) => state.loading
  );
  const { fetch } = useActions(actions);

  React.useEffect(() => {
    fetch(data);
    const time = setTimeout(() => fetch(data), 100);
    return () => clearTimeout(time);
  }, [fetch]);

  return (
    <main>
      {loading ? (
        <Loading>loading...</Loading>
      ) : (
        <React.Fragment>
          <Navbar />
          <Cart />
        </React.Fragment>
      )}
    </main>
  );
};

export default App;
