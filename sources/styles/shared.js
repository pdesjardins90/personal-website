import { css } from 'lit-element'

export const shared = css`
  :host {
    display: block;
  }

  :host([hidden]),
  [hidden] {
    display: none;
  }

  h1 {
    margin-bottom: 2.5rem;
    font-size: 2.5rem;
  }

  h2 {
    margin-bottom: 2.5rem;
    font-size: 2rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  h4 {
    margin-bottom: 0.6rem;
    font-size: 1rem;
  }

  h5 {
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
  }

  p {
    margin-bottom: 0.6rem;
    font-size: 0.9rem;
    font-family: var(--font-family-secondary);
    text-align: justify;
    line-height: 1.8;
    letter-spacing: 0;
    color: var(--color-text-on-background-medium);
  }

  .bold {
    font-weight: 600;
  }

  .italic {
    font-style: italic;
  }
`
