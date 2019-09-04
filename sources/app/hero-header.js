import { BaseElement, css, html } from '../components/base-element.js'

export class HeroHeader extends BaseElement {
  static get properties() {
    return {
      language: {
        type: String
      }
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        @keyframes hover-button {
          from {
            background-color: var(--color-secondary);
          }

          to {
            background-color: var(--color-secondary-lighter);
          }
        }

        :host {
          position: relative;
          height: calc(100vh - 4rem);
        }

        #hero {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left center;
          z-index: -1;
        }

        header {
          width: 100%;
          height: 100%;
          padding: var(--base-spacing);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          background-image: linear-gradient(-60deg, rgba(0, 0, 0, 0.54), transparent);
          color: var(--color-text-on-background-high);
        }

        [social-links] {
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }

        [social-links] a {
          margin-left: 1.2rem;
        }

        [social-links] img {
          width: 1.3rem;
          height: 1.3rem;
        }

        [presentation] {
          position: -webkit-sticky;
          position: sticky;
          bottom: var(--ios-safari-navigation-bar-height);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }

        h1 {
          white-space: nowrap;
        }

        button {
          margin: 0.3rem;
          padding: 0.5rem;
          background-color: var(--color-secondary);
          color: var(--color-text-on-secondary-high);
          font-family: var(--font-family-primary);
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0;
          text-transform: uppercase;
          text-align: center;
          user-select: none;
          border: none;
          border-radius: var(--radius-for-medium);
          outline: none;
          box-shadow: var(--shadow-3dp);
          cursor: pointer;
        }

        @media (any-hover: hover) {
          button:hover {
            background-color: var(--color-secondary-lighter);
            box-shadow: var(--shadow-6dp);
            transition: var(--transition);
          }
        }

        @media (max-width: 668px) {
          h1 {
            font-size: 1.5rem;
            margin-bottom: 0.6rem;
          }

          h3 {
            font-size: 1rem;
            margin-bottom: 0.3rem;
          }
        }

        @media (max-width: 567px) {
          [presentation] {
            max-width: 100%;
          }
        }

        @media (min-width: 568px) and (max-width: 768px) {
          [presentation] {
            max-width: 60%;
          }
        }

        @media (min-width: 769px) and (max-width: 1200px) {
          [presentation] {
            max-width: 50%;
          }
        }

        @media (min-width: 1201px) {
          [presentation] {
            max-width: 40%;
          }
        }

        @media (max-width: 768px) {
          [social-links] {
            margin: 1rem;
          }
        }
      `
    ]
  }

  render() {
    return html`
      <img
        id="hero"
        src="/images/photos/hero/hero-1366.jpg"
        srcset="
          /images/photos/hero/hero-320.jpg   320w,
          /images/photos/hero/hero-375.jpg   375w,
          /images/photos/hero/hero-414.jpg   414w,
          /images/photos/hero/hero-568.jpg   568w,
          /images/photos/hero/hero-667.jpg   667w,
          /images/photos/hero/hero-768.jpg   768w,
          /images/photos/hero/hero-834.jpg   834w,
          /images/photos/hero/hero-1024.jpg 1024w,
          /images/photos/hero/hero-1112.jpg 1112w,
          /images/photos/hero/hero-1366.jpg 1366w
        "
        alt="${this.language === 'fr' ? 'Arrière-plan héros' : 'Hero background'}"
      />
      <header>
        <span social-links>
          <a rel="noreferrer noopener" href="https://github.com/pdesjardins90">
            <img src="/images/logos/github.svg" alt="GitHub logo" />
          </a>
          <a rel="noreferrer noopener" href="https://twitter.com/pdesjardins90">
            <img src="/images/logos/twitter.svg" alt="Twitter logo" />
          </a>
          <a rel="noreferrer noopener" href="https://linkedin.com/in/pdesjardins90/">
            <img src="/images/logos/linkedin.svg" alt="LinkedIn logo" />
          </a>
        </span>
        <div presentation>
          <h1>Philippe Desjardins</h1>
          <h3>
            ${this.language === 'fr'
              ? 'Je suis un ingénieur logiciel indépendant, spécialisé en développement web'
              : `I'm a freelance software engineer, specialized in web development`}
          </h3>
          <a rel="noreferrer noopener" href="mailto:pdesjardins90@fastmail.com">
            <button>${this.language === 'fr' ? 'Engagez-moi' : 'Hire me'}</button>
          </a>
        </div>
      </header>
    `
  }
}

customElements.define('hero-header', HeroHeader)
