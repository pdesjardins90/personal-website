import { BaseElement, css, html } from '../../components/base-element.js'

export class AboutSection extends BaseElement {
  static get properties() {
    return {
      language: { type: String }
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        @keyframes fade-hover-color-in {
          from {
            color: var(--color-primary);
          }

          to {
            color: var(--color-secondary);
          }
        }

        :host {
          padding: var(--base-spacing);
          padding-top: calc(var(--base-spacing) + 4rem);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        section {
          display: flex;
        }

        figure {
          flex: 1;
          margin-right: var(--base-spacing);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        figure img {
          width: 100%;
          min-width: 224px;
          max-width: 384px;
          object-fit: contain;
          box-shadow: var(--shadow-3dp);
          border-radius: var(--radius-for-large);
        }

        article {
          flex: 2;
          padding: var(--base-spacing);
          border-radius: var(--radius-for-large);
          background-color: var(--overlay-primary-medium);
          box-shadow: var(--shadow-3dp);
        }

        a {
          color: var(--color-primary);
        }

        p {
          text-align: justify;
        }

        @media (any-hover: hover) {
          a:hover {
            color: var(--color-secondary);
            transition: var(--transition);
          }
        }

        @media (max-width: 568px) {
          section {
            flex-direction: column;
          }

          figure {
            margin: 0 0 2rem 0;
          }
        }
      `
    ]
  }

  render() {
    return html`
      <h2>${this.language === 'fr' ? 'À propos de moi' : 'About me'}</h2>
      <section>
        <figure>
          <img
            src="/images/photos/profile/profile-568.jpg"
            srcset="
              /images/photos/profile/profile-320.jpg 320w,
              /images/photos/profile/profile-375.jpg 375w,
              /images/photos/profile/profile-414.jpg 414w,
              /images/photos/profile/profile-568.jpg 568w
            "
            sizes="(min-width: 569px) 50vw, 100vw"
            alt="${this.language === 'fr' ? 'Photo de profil' : 'Profile picture'}"
          />
        </figure>
        <article>
          <p>
            ${this.language === 'fr'
              ? html`
                  J'habite dans la belle ville de
                  <a rel="noreferrer noopener" href="https://fr.wikipedia.org/wiki/Québec_(ville)"
                    >Québec</a
                  >! J'ai décidé de m'y installer après avoir fait mes études à l'<a
                    rel="noreferrer noopener"
                    href="https://www.ulaval.ca"
                    >Université Laval</a
                  >. J'y ai obtenu un baccalauréat en génie logiciel, dont je suis très fier. Avant
                  de me lancer à mon compte, j'ai travaillé près de 4 ans pour une super
                  <em class="italic">startup</em> qui s’appelle
                  <a rel="noreferrer noopener" href="https://xpertsea.com">XpertSea</a>, où j'ai
                  beaucoup appris sur les entreprises en pleine croissance et leurs défis. En dehors
                  du travail, j'aime jouer de la musique (guitare et batterie), jardiner, faire de
                  la planche à neige, aller en canot-camping et pêcher avec mon père.
                `
              : html`
                  I live in beautiful
                  <a rel="noreferrer noopener" href="https://en.wikipedia.org/wiki/Quebec_City"
                    >Quebec City</a
                  >! I decided to settle there after attending
                  <a rel="noreferrer noopener" href="https://www.ulaval.ca/en/">Université Laval</a
                  >. There I obtained a bachelor degree in software engineering, of which I'm very
                  proud. Before going freelance, I worked almost 4 years for an amazing startup
                  called <a rel="noreferrer noopener" href="https://xpertsea.com/">XpertSea</a>,
                  where I learned a lot about growing companies and their challenges. Outside of
                  work, I like playing music (guitar & drums), gardening, snowboarding,
                  canoe-camping and fishing with my dad.
                `}
          </p>
        </article>
      </section>
    `
  }
}

customElements.define('about-section', AboutSection)
