import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  :root{
    --purple:#713FFF;
    --purple-dark:#3C184E;
    --white:#FFFF;
  }
  body{
    background-color: var(--white);
  }
  `