import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body {
  margin: 0; // 1
  font-family: ${({ theme }) => theme.fontFamily};
  @extend %bodyPropertyDefault;
  color:${({ theme }) => theme.color_bs};
  -webkit-text-size-adjust: 100%; // 3
}
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }

  legend {
    font-size: 0;
    text-indent: -999999999px;
}

// custom
.rowList {
  border-top: solid 2px #252525;}


  input, input[type=file] + label, select, optgroup, textarea {
    border: 1px solid ${({ theme }) => theme.input_border};
    padding:${({ theme }) => theme.input_padding};
    font-size: inherit;
    font-family: inherit;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;
    outline: 0;
}
`;

export default GlobalStyle;
