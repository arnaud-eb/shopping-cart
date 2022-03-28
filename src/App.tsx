import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

import data from "./store/data";
import { selectLoading } from "./store/selectors";
import { fetch } from "./store/cartItemsSlice";

const Loading = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const App = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const time = setTimeout(() => dispatch(fetch(data)), 100);
    return () => clearTimeout(time);
  }, []);

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
