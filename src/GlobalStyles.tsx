import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /*
=============== 
Variables
===============
*/

:root {
  --clr-primary: #2680c0;
  --clr-primary-dark: hsl(205, 100%, 21%);
  --clr-primary-light: hsl(205, 84%, 74%);
  --clr-grey-1: #102a42;
  --clr-grey-5: #617d98;
  --clr-grey-10: #f1f5f8;
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --transition: all 0.3s linear;
  --spacing: 0.25rem;
  --radius: 0.25rem;
  --large-screen-width: 1170px;
  --small-screen-width: 90vw;
  --fixed-width: 50rem;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  display: block;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
`;

const Button = styled.button`
  text-transform: uppercase;
  background: var(--clr-primary);
  color: var(--clr-white);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  transition: var(--transition);
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  :hover {
    color: var(--clr-primary);
    background: var(--clr-primary-light);
  }
`;

export default GlobalStyles;

export { Button };
