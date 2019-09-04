import './nav-bar.js'
import './sections/about-section.js'
import './hero-header.js'
import './sections/services-section.js'
import './sections/technologies-section.js'
import { installRouter } from 'pwa-helpers/router.js'
import { Version } from '../../version.js'
import { BaseElement, css, html } from '../components/base-element.js'

export class PersonalWebsite extends BaseElement {
  static get properties() {
    return {
      currentlyIntersectingSection: { type: Object },
      isMainIntersecting: { type: Boolean },
      language: {
        type: String,
        reflect: true,
        attribute: 'lang'
      }
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          z-index: 0;
        }

        #background-overlay {
          z-index: 1;
          background-color: var(--overlay-primary-low);
          box-shadow: var(--shadow-3dp);
        }

        nav-bar {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          bottom: 0;
          z-index: 2;
        }

        main {
          display: flex;
          flex-direction: column;
        }

        footer {
          padding: 1rem;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          background-color: var(--color-surface-darker);
          color: var(--color-text-on-surface-high);
          border-radius: var(--radius-for-large);
        }

        @media (min-width: 835px) {
          :host {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: var(--base-spacing) minmax(0, 75rem) var(--base-spacing);
            justify-content: center;
          }

          #background-overlay {
            grid-area: 1 / 2 / 2 / 3;
          }
        }

        @media (max-width: 834px) {
          :host,
          #background-overlay {
            width: 100%;
            height: auto;
          }
        }

        @media (max-width: 634px) {
          footer {
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
        }
      `
    ]
  }

  constructor() {
    super()
    this.language = navigator.language.startsWith('fr') ? 'fr' : 'en'
  }

  async connectedCallback() {
    super.connectedCallback()
    await this.updateComplete
    this.removeAttribute('unresolved')
    this._observeIsMainIntersecting()
    this._observeCurrentlyIntersectingSection()
    this._observeLocation()
  }

  render() {
    return html`
      <div id="background-overlay">
        <hero-header
          route="${this.language === 'fr' ? '#accueil' : '#home'}"
          .language="${this.language}"
        ></hero-header>
        <nav-bar
          .activeRoute="${this.currentlyIntersectingSection
            ? this.currentlyIntersectingSection.getAttribute('route')
            : null}"
          .isAtTop="${this.isMainIntersecting}"
          .language="${this.language}"
        ></nav-bar>
        <main>
          <services-section route="#services" .language="${this.language}"></services-section>
          <technologies-section
            route="#technologies"
            .language="${this.language}"
          ></technologies-section>
          <about-section
            route="${this.language === 'fr' ? '#a-propos' : '#about'}"
            .language="${this.language}"
          ></about-section>
        </main>
        <footer>
          <div>${Version}</div>
          <div>
            ${this.language === 'fr'
              ? 'Logiciels Philippe Desjardins'
              : 'Philippe Desjardins Software'}
            © ${new Date().getFullYear()}
          </div>
        </footer>
      </div>
    `
  }

  _observeIsMainIntersecting() {
    const mainObserver = new IntersectionObserver(
      intersectionObserverEntries =>
        this._updateIsMainIntersecting({ intersectionObserverEntries }),
      { rootMargin: '0px 0px -10px 0px' }
    )

    const main = this.shadowRoot.querySelector('main')
    mainObserver.observe(main)
  }

  _observeCurrentlyIntersectingSection() {
    const sectionObserver = new IntersectionObserver(
      intersectionObserverEntries =>
        this._updateCurrentlyIntersectingSection({ intersectionObserverEntries }),
      { rootMargin: '-49.5% 0px -49.5% 0px' }
    )

    const sections = Array.from(this.shadowRoot.querySelectorAll('[route]'))
    sections.forEach(section => sectionObserver.observe(section))
  }

  _observeLocation() {
    const sections = Array.from(this.shadowRoot.querySelectorAll('[route]'))
    installRouter(location => this._routeLocation({ location, sections }))
  }

  _updateIsMainIntersecting({ intersectionObserverEntries }) {
    const [mainIntersectionObserverEntry] = intersectionObserverEntries
    this.isMainIntersecting = mainIntersectionObserverEntry.isIntersecting
  }

  _updateCurrentlyIntersectingSection({ intersectionObserverEntries }) {
    const currentlyIntersectingObserverEntry = intersectionObserverEntries.find(
      entry => entry.isIntersecting
    )

    if (currentlyIntersectingObserverEntry) {
      this.currentlyIntersectingSection = currentlyIntersectingObserverEntry.target
    }
  }

  _routeLocation({ location, sections }) {
    const { hash, pathname } = location
    if (pathname === '/') {
      window.history.replaceState({}, null, `/${this.language}`)
      this._routeLocation({ location: window.location })
      return
    }

    ;[, this.language] = pathname.split('/')
    if (hash) {
      this._scrollRequestedSectionIntoView({ hash, sections })
    }
  }

  _scrollRequestedSectionIntoView({ hash, sections }) {
    const requestedSection = sections.find(section => section.getAttribute('route') === hash)
    if (requestedSection) {
      requestedSection.scrollIntoView()
    }
  }
}

customElements.define('personal-website', PersonalWebsite)
