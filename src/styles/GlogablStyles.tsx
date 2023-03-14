import { createGlobalStyle } from "styled-components";
import "@fontsource/belleza";

const GlobalStyles = createGlobalStyle`

*, ::after, ::before {
  box-sizing: border-box;
}

#root {
  height:100%;
}

body {
  margin: 0;
  font-family: 'Belleza', sans serif;
  display: flex;
  background-color: white;
  width: 100%;
}

h1,
h2,
h3,
h4,
h5, 
h6 {
  margin: 0;
}
  
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

input {
  font-family: inherit;
    all: unset;
}

a,
a:focus,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
