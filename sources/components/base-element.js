import { LitElement } from 'lit-element'
import { reset } from '../styles/reset.js'
import { shared } from '../styles/shared.js'

export { html, css } from 'lit-element'

export class BaseElement extends LitElement {
  static get styles() {
    return [reset, shared]
  }
}
