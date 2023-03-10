import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }
  body, input, textarea, button {
    font-family: "Poppins" sans-serif;

    -webkit-font-smoothing: antialiased;
   
  }
  button {
    cursor: pointer;
  }
`;
