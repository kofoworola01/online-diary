import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #ffff;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  p {
    font-size: 16px;
  }

  .a{
    background-color: red;
  }
`

export default GlobalStyle

