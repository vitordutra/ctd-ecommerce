import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto';
    background-color: #e9e9e9;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  ul {
    list-style: none;
  }
`;
