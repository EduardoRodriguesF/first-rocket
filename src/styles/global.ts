import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, html {
    overflow-x: hidden;
  }

  body, input, button {
    font-size: 16px;
  }

  body, button {
    font-family: 'Poppins', sans-serif;
  }

  input { 
    font-family: 'Montserrat', sans-serif;
  }

  button { 
    cursor: pointer;
  }
`;
