import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  #__next {
    height: auto;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    -webkit-overflow-scrolling: touch;
  }

  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    max-width: 100%;
  }

  button,
  select,
  input,
  textarea,
  label,
  img {
    vertical-align: middle;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  dl,
  li,
  menu,
  ol,
  ul {
    list-style: none;
  }

  a,
  a:active,
  a:hover {
    color: inherit;
    text-decoration: none;
  }

  i {
    font-style: normal;
  }

  iframe {
    overflow: hidden;
    margin: 0;
    border: 0;
    padding: 0;
  }

  :focus:not(:focus-visible),
  :focus[data-focus-method='mouse']:not(input):not(textarea):not(select),
  :focus[data-focus-method='touch']:not(input):not(textarea):not(select) {
    outline: 0;
  }

  :focus-visible {
    outline: 2px solid rgba(0, 125, 250, 0.6);
    outline-offset: 1px;
  }

  .hidden {
    position: absolute !important;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    color: rgba(255, 255, 255, 0);
  }

  .hide {
    display: none;
  }
`;

export default GlobalStyle;
