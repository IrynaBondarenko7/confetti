import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import InterMedium from "../fonts/Inter-Medium.ttf";
import AnzeigenGrotesk from "../fonts/anzeigengrot.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  src: url(${InterMedium}) format('truetype');
  font-style: normal;
  font-weight: 500;
  font-display: fallback;
}
@font-face {
  font-family: 'Anzeigen Grotesk T';
  src: url(${AnzeigenGrotesk}) format('truetype');
  font-style: normal;
  font-weight: 500;
  font-display: fallback;
}
:root {
    --main-color: #222222;
    --extra-text-color:#565148;
    --accent-color:#ED4B5E;
    --extra-accent-color: #FFEFF0;
}
body {
  margin: 0;
  font-family: 'Anzeigen Grotesk T',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

ul,li,h1,h2,h3,h4,p {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
