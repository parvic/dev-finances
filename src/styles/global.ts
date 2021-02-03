import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
  }

  html {
    font-size: 93.75%;
  }

  body {
    background-color: #f0f2f5;
    font-family: 'poppins', sans-serif;
  }

  h2 {
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;

    color: #363f5f;
    font-weight: normal;
  }

  button {
    border-radius: 0.25rem;
    outline: none;
    text-decoration: none;
    cursor: pointer;
  }
`;
