import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

import data from "./store/data";
import useCart from "./store/use-cart";

const Loading = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const App = () => {
  const { loading, fetch } = useCart();

  React.useEffect(() => {
    fetch(data);
    const time = setTimeout(() => fetch(data), 100);
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
