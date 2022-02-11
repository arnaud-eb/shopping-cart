import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

import { useCartContext } from "./context";

const Loading = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const App = () => {
  const { loading } = useCartContext();
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
