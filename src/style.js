import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  
  body,
  #root{
    /* height: 100%; */
    background: #15092D;
  }
`