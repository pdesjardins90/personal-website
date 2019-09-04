import { BaseElement, css, html } from '../components/base-element.js'

export class NavBar extends BaseElement {
  static get properties() {
    return {
      activeRoute: { type: String },
      isAtTop: {
        type: Boolean,
        reflect: true,
        attribute: 'is-at-top'
      },
      isNavigationMenuOpened: {
        type: Boolean,
        reflect: true,
        attribute: 'is-navigation-menu-opened'
      },
      language: {
        type: String
      }
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        @keyframes stretch-out {
          from {
            width: 0;
          }

          to {
            width: 100%;
          }
        }

        @keyframes fade-background-in-from-inactive {
          from {
            background-color: transparent;
            color: var(--color-text-on-surface-high);
          }

          to {
            background-color: var(--color-secondary);
            color: var(--color-text-on-secondary-high);
          }
        }

        @keyframes fade-background-in-from-active {
          from {
            background-color: var(--color-primary);
          }

          to {
            background-color: var(--color-secondary);
          }
        }

        :host {
          height: 4rem;
          padding: 0.8rem var(--base-spacing);
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--color-surface-darker);
          box-shadow: var(--shadow-3dp);
          border-radius: var(--radius-for-large);
        }

        [minimal-bar] {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        [banner] {
          height: 2.4rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        [banner] img,
        menu {
          height: 100%;
        }

        a {
          user-select: none;
        }

        menu a {
          padding: 0.3rem;
          box-sizing: border-box;
          font-size: 0.9rem;
          font-family: var(--font-family-primary);
          color: var(--color-text-on-surface-high);
          white-space: nowrap;
          user-select: none;
        }

        [section-links] a [underline] {
          width: 100%;
          height: 0.2rem;
          border-radius: var(--radius-for-small);
        }

        svg {
          fill: var(--color-text-on-surface-high);
        }

        [language-links] a {
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        [language-links] a:last-of-type {
          margin-left: 0.2rem;
        }

        [section-links] a[active] [underline] {
          background-color: var(--color-primary);
          animation: stretch-out 0.2s;
        }

        [language-links] a[active] {
          background-color: var(--color-primary);
        }

        [section-links] a:active [underline],
        [language-links] a:active,
        i:active {
          background-color: var(--color-secondary);
        }

        [language-links] a:active,
        i:active {
          color: var(--color-text-on-secondary-high);
          box-shadow: var(--shadow-secondary);
        }

        @media (any-hover: hover) {
          [section-links] a:hover [underline],
          [language-links] a:hover,
          i:hover {
            background-color: var(--color-secondary);
          }

          [section-links] a:hover [underline] {
            animation: stretch-out 0.2s;
          }

          [language-links] a:hover,
          i:hover {
            color: var(--color-text-on-secondary-high);
            box-shadow: var(--shadow-secondary);
            transition: var(--transition);
          }
        }

        @media (min-width: 635px) {
          svg {
            display: none;
          }

          menu {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }

          menu span {
            display: flex;
            align-items: center;
          }

          [section-links] a {
            margin-left: 0.6rem;
          }

          [language-links] {
            margin-left: var(--base-spacing);
          }
        }

        @media (max-width: 634px) {
          [minimal-bar] {
            width: 100%;
            position: -webkit-sticky;
            position: sticky;
            bottom: 0;
          }

          svg {
            padding: 0.2rem;
            height: 1.2rem;
            width: 1.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 1.3rem;
            border-radius: 50%;
            cursor: pointer;
          }

          :host(:not([is-navigation-menu-opened])) menu {
            display: none;
          }

          :host([is-navigation-menu-opened]) {
            height: 100vh;
            width: 100vw;
            padding: 0;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            z-index: 5;
          }

          :host([is-navigation-menu-opened]) [minimal-bar] {
            padding: 0.8rem var(--base-spacing);
            box-sizing: border-box;
          }

          :host([is-navigation-menu-opened]) menu {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }

          :host(:not([is-at-top])) menu {
            order: -1;
          }

          [section-links] {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          [section-links] a {
            margin-bottom: 1.2rem;
          }

          [language-links] {
            display: flex;
            align-items: center;
          }
        }
      `
    ]
  }

  render() {
    return html`
      <span minimal-bar>
        <a
          banner
          href="${this.language === 'fr' ? '#accueil' : '#home'}"
          @click="${this.closeNavigationMenu}"
        >
          <img src="/images/logos/pdesjardins90-banner.svg" alt="Philippe Desjardins banner" />
        </a>
        <figure @click="${this.toggleNavigationMenuOpened}">
          ${this.isNavigationMenuOpened
            ? html`
                <svg
                  class="close-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              `
            : html`
                <svg
                  class="menu-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              `}
        </figure>
      </span>
      <menu>
        <span section-links>
          <a
            href="#services"
            ?active="${this.activeRoute === '#services'}"
            @click="${this.closeNavigationMenu}"
          >
            Services
            <div underline></div>
          </a>
          <a
            href="#technologies"
            ?active="${this.activeRoute === '#technologies'}"
            @click="${this.closeNavigationMenu}"
          >
            Technologies
            <div underline></div>
          </a>
          <a
            href="${this.language === 'fr' ? '#a-propos' : '#about'}"
            ?active="${(this.language === 'fr' && this.activeRoute === '#a-propos') ||
              (this.language === 'en' && this.activeRoute === '#about')}"
            @click="${this.closeNavigationMenu}"
          >
            ${this.language === 'fr' ? 'À propos' : 'About'}
            <div underline></div>
          </a>
        </span>
        <span language-links>
          <a href="/fr" ?active="${this.language === 'fr'}">FR</a>
          <a href="/en" ?active="${this.language === 'en'}">EN</a>
        </span>
      </menu>
    `
  }

  closeNavigationMenu() {
    this.isNavigationMenuOpened = false
  }

  toggleNavigationMenuOpened() {
    this.isNavigationMenuOpened = !this.isNavigationMenuOpened
  }
}

customElements.define('nav-bar', NavBar)
