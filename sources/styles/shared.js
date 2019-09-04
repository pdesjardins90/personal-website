import { css } from 'lit-element'

export const shared = css`
  :host {
    display: block;
  }

  :host([hidden]),
  [hidden] {
    display: none;
  }
`
