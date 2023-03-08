import { createGlobalStyle } from 'styled-components'

// import Background from '../assets/backgroundImagens/backgroundPatternHome.jpg'

export const GlobalStyle = createGlobalStyle`

*{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Roboto', sans-serif;
}
 body{
     width: 100%;
     height: 100%;
     -webkit-font-smoothing: antialiased;
     background-color: ${(props) => props.theme['gray-400']};

 }

`
