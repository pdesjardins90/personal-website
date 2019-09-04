import { BaseElement, html } from '../components/base-element.js'

export class PersonalWebsite extends BaseElement {
  render() {
    return html`
      <h1>Hello, world!</h1>
    `
  }

  async connectedCallback() {
    super.connectedCallback()
    await this.updateComplete
    this.removeAttribute('unresolved')
  }
}

customElements.define('personal-website', PersonalWebsite)
