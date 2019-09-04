import { BaseElement, css, html } from '../../components/base-element.js'

export class TechnologiesSection extends BaseElement {
  static get properties() {
    return {
      language: { type: String }
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          padding: var(--base-spacing);
          padding-top: calc(var(--base-spacing) + 4rem);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        ul {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 1fr;
          grid-gap: 1rem;
        }

        li {
          padding: var(--base-spacing);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: var(--overlay-primary-medium);
          border-radius: var(--radius-for-large);
          text-align: center;
          box-shadow: var(--shadow-3dp);
        }

        li img {
          width: 5rem;
          height: 5rem;
          margin: 0.5rem;
        }

        h5 {
          font-weight: 600;
        }

        @media (max-width: 768px) {
          ul {
            grid-template-columns: repeat(3, 1fr);
          }

          li img {
            width: 3rem;
            height: 3rem;
          }
        }

        @media (max-width: 634px) {
          ul {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 434px) {
          li img {
            width: 2rem;
            height: 2rem;
          }
        }
      `
    ]
  }

  render() {
    return html`
      <h2>
        ${this.language === 'fr' ? `Les technologies que j'utilise` : 'Technologies I work with'}
      </h2>
      <ul>
        <li>
          <img src="/images/logos/html-css.svg" alt="HTML logo" />
          <h5>HTML & CSS</h5>
        </li>
        <li>
          <img src="/images/logos/javascript.svg" alt="JavaScript logo" />
          <h5>JavaScript</h5>
        </li>
        <li>
          <img src="/images/logos/polymer.svg" alt="Polymer logo" />
          <h5>LitElement, lit-html & Polymer</h5>
        </li>
        <li>
          <img src="/images/logos/node.svg" alt="Node logo" />
          <h5>Node.js</h5>
        </li>
        <li>
          <img src="/images/logos/c-sharp.svg" alt="C# logo" />
          <h5>C#</h5>
        </li>
        <li>
          <img src="/images/logos/aws.svg" alt="AWS logo" />
          <h5>Amazon Web Services</h5>
        </li>
      </ul>
    `
  }
}

customElements.define('technologies-section', TechnologiesSection)
