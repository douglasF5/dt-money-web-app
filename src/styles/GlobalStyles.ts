import { createGlobalStyle } from "styled-components";

export const GlobalCustomProperties = createGlobalStyle`
  :root {
    /* ACCENT */
    /* PURPLE */
    --accent-purple: #4124B2;
    --accent-container-purple-primary: #5933D6;
    --accent-container-purple-secondary: #6933FF;
    --accent-surface-purple: rgba(84, 41, 204, 0.12);;
    /* GREEN */
    --accent-green: #098659;
    --on-accent-green-container: #064C37;
    --accent-container-green-primary: #2EE8A5;
    --accent-container-green-secondary: #33CC95;
    --accent-surface-green: rgba(18, 164, 84, 0.12);
    /* RED */
    --accent-red: #CB1835;
    --on-accent-container-red: #680822;
    --accent-container-red-primary: #FF8A91;
    --accent-container-red-secondary: #E62E4D;
    --accent-surface-red: rgba(230, 46, 77, 0.12);
    /* SURFACE */
    --surface-primary: #FFFFFF;
    --surface-secondary: #F0F2F5;
    /* ON SURFACE */
    --on-surface-inverted: #FFFFFF;
    --on-surface-primary: #20263C;
    --on-surface-secondary: #363F5F;
    --on-surface-tertiary: rgba(54, 63, 95, 0.75);
    --on-surface-quaternary: rgba(54, 63, 95, 0.6);
    /* OUTLINE */
    --outline-primary: rgba(54, 63, 95, 0.32);
  }
`;

export const Global = createGlobalStyle`
  /* GLOBAL RESET */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: 'Manrope', sans-serif;
    background-color: var(--surface-secondary);
    -webkit-font-smoothing: antialiased;

  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* EXTRAS */
  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }

.react-modal-overlay{
  position: fixed;
  z-index: 3;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(54, 63, 95, 0.75);
}

.react-modal-content{
  position: relative;
  width: 100%;
  max-width: 467px;
  padding: 2rem 2.5rem 2.5rem;
  border-radius: 0.375rem;
  background-color: var(--surface-primary);
}
`;
