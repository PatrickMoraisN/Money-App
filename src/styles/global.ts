import { createGlobalStyle } from 'styled-components';

export const CreateGlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --red: #e52e4d;
  --blue: #5429cc;

  --blue-light: #6933ff;

  --text-title: #363f5f;
  --text-body: #969cb3;

  --shape: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(----background);
  -webkit-font-smoothing: antialiased; // fonte mais "limpa"
}

body, input, textarea, button {
  font-family: Poppins, sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-family: Poppins, sans-serif;
  font-weight: 600;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }

  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

button {
  cursor: pointer;
}

[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}
`