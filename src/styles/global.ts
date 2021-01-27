import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f2f5;
    font-family: 'poppins', sans-serif;
  }
`;
