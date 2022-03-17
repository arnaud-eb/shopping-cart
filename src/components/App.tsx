import React from "react";
import styled from "styled-components";

import NavbarContainer from "../containers/NavbarContainer";
import CartContainer from "../containers/CartContainer";

interface AppPropsType {
  loading: boolean;
  fetch: () => void;
}

const Loading = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const App = ({ loading, fetch }: AppPropsType) => {
  React.useEffect(() => {
    const time = setTimeout(() => fetch(), 100);
    return () => clearTimeout(time);
  }, []);

  return (
    <main>
      {loading ? (
        <Loading>loading...</Loading>
      ) : (
        <React.Fragment>
          <NavbarContainer />
          <CartContainer />
        </React.Fragment>
      )}
    </main>
  );
};

export default App;
