import { createGlobalStyle } from 'styled-components';
import variables from "../../../data/variables";
import './fonts.css';

export const GlobalStyle = createGlobalStyle`
  // normalize
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    body {
      font-size: 14px;
      font-family: 'GT-Walsheim-Pro-Regular';
      margin: 0;
    }
    main {
      display: block;
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    hr {
      box-sizing: content-box; /* 1 */
      height: 0; /* 1 */
      overflow: visible; /* 2 */
    }
    a {
      background-color: transparent;
      text-decoration: none;
    }
    b,
    strong {
      font-weight: bolder;
      font-family: 'GT-Walsheim-Pro-Bold';
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    .center {
      text-align: center;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }
    button,
    input { /* 1 */
      overflow: visible;
    }
    button,
    select { /* 1 */
      text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    [hidden] {
      display: none;
    }
    
    .text-dark {
      color: ${variables.black};
    }
    .text-primary {
      color: ${variables.primary};
    }
    .align-middle {
      vertical-align: middle;
    }

    p {
      font-size: 1.125rem;
      font-weight: 200;
      line-height: 1.8;
    }
  }

  
.lined-link {
  display: inline-block;
  position: relative;
  padding-top: .5em;
  padding-bottom: .25em;
  transition: all .2s ease-out;
  will-change: transform, color;
  &:after {
    z-index: 1;
    position: absolute;
    bottom: -1px;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background-color: ${variables.primary};
    transform: scale(0, 1);
    transform-origin: 100% 50%;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), 
    -webkit-transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover:after,
  &.active:after {
    background-color: ${variables.primary};
    transform: scale(1);
    transform-origin: 0 50%;
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1), background-color 0.2s ease-out, 
    -webkit-transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  }
}

.error__emoji {
  width: 30vw;
}
`