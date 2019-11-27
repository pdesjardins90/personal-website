import { BaseElement, css, html } from '../../components/base-element.js'

export class ServicesSection extends BaseElement {
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
          display: grid;
          grid-gap: 4rem;
          grid-template-columns: 1fr;
          grid-auto-rows: auto;
        }

        ul > li {
          display: flex;
        }

        ul > li:nth-child(even) > div {
          order: -1;
        }

        ul > li > div {
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        ul > li > div figure {
          width: 8rem;
          height: 8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background-color: var(--color-primary);
          box-shadow: var(--shadow-3dp);
        }

        ul > li > div svg {
          width: 5rem;
          height: 5rem;
          fill: var(--color-text-on-primary-high);
        }

        article {
          flex: 3;
          padding: var(--base-spacing);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border-radius: var(--radius-for-large);
          background-color: var(--overlay-primary-medium);
          box-shadow: var(--shadow-3dp);
        }

        article span {
          display: flex;
          align-items: center;
        }

        article svg {
          display: none;
        }

        article h3 {
          font-weight: 600;
        }

        article p {
          margin-bottom: 1rem;
        }

        article ol {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        article ol li {
          margin: 0 0.5rem;
          font-family: var(--font-family-primary);
          font-weight: 700;
          color: var(--color-primary);
        }

        @media (max-width: 668px) {
          ul {
            grid-gap: 2rem;
          }

          ul > li > div {
            display: none;
          }

          article svg {
            display: flex;
            margin: 0 0.6rem 1rem 0;
            width: 1.5rem;
            height: 1.5rem;
            fill: var(--color-primary);
          }

          article ol {
            justify-content: center;
          }
        }
      `
    ]
  }

  render() {
    return html`
      <h2>${this.language === 'fr' ? `Mes services` : 'My services'}</h2>
      <ul>
        <li>
          <article>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"
                />
              </svg>
              <h3>${this.language === 'fr' ? 'Applications web' : 'Web applications'}</h3>
            </span>
            <p>
              ${this.language === 'fr'
                ? html`
                    Vous voulez offrir des services ou vendre vos produits sur internet? Une
                    application web est probablement ce dont vous avez de besoin. Tout le monde peut
                    y accéder, peu importe le type d’appareil ou de navigateur utilisé. Je peux vous
                    développer une application web moderne, utilisant les technologies les plus
                    adaptées à votre contexte.
                  `
                : html`
                    You want to provide services or sell products on the internet? A web application
                    is probably what you need. Everyone can access it, no matter what kind of device
                    or browser they use. I can develop a modern web application for you, using the
                    technologies that make the most sense in your context.
                  `}
            </p>
            <ol>
              <li>#webcomponents</li>
              <li>#pwa</li>
              <li>#jamstack</li>
              <li>#ui</li>
            </ol>
          </article>
          <div>
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"
                />
              </svg>
            </figure>
          </div>
        </li>
        <li>
          <article>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                />
              </svg>
              <h3>
                ${this.language === 'fr'
                  ? 'Collecte et visualisation de données'
                  : 'Data harvesting & visualization'}
              </h3>
            </span>
            <p>
              ${this.language === 'fr'
                ? html`
                    Si vous avez besoin de récolter des données provenant d'objets connnectés,
                    d'analyser les interactions qu'ont vos utilisateurs avec vos produits ou
                    d'extraire des métriques de performance sur vos opérations internes, je peux
                    bâtir des systèmes qui s'occuperont de ça pour vous.
                  `
                : html`
                    If you need to harvest data from connected devices, analyze user interactions
                    with your products or extract performance metrics from your internal operations,
                    I can build systems that will take care of that for you.
                  `}
            </p>
            <ol>
              <li>#api</li>
              <li>#database</li>
              <li>#charts</li>
              <li>#tables</li>
            </ol>
          </article>
          <div>
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                />
              </svg>
            </figure>
          </div>
        </li>
        <li>
          <article>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"
                />
              </svg>
              <h3>${this.language === 'fr' ? 'Automatisation' : 'Automation'}</h3>
            </span>
            <p>
              ${this.language === 'fr'
                ? html`
                    Votre équipe perd trop de temps à faire des tâches répétitives et monotones?
                    Vous aimeriez les voir travailler sur des choses plus importantes à la place? Je
                    peux développer des logiciels qui automatiseront ces tâches de bas niveau et qui
                    aideront votre équipe à augmenter sa productivité.
                  `
                : html`
                    Your team spends too much time on repetitive and monotonous tasks? You'd like
                    them to spend more time on stuff that matters instead? I can develop software
                    that will automate this low-level work and help your team increase its
                    productivity.
                  `}
            </p>
            <ol>
              <li>#workers</li>
              <li>#serverless</li>
              <li>#webhooks</li>
              <li>#cloud</li>
            </ol>
          </article>
          <div>
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"
                />
              </svg>
            </figure>
          </div>
        </li>
        <li>
          <article>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
              </svg>
              <h3>
                ${this.language === 'fr' ? 'Recherche et développement' : 'Research & development'}
              </h3>
            </span>
            <p>
              ${this.language === 'fr'
                ? html`
                    Si vous avez une idée de produit géniale, mais que vous avez besoin d'un avis
                    technique, d'une preuve de concept ou encore d'un prototype fonctionnel avant
                    d'y commettre plus de ressources, n'hésitez pas à m'en parler! Si je peux vous
                    aider, je le ferai, ne serait-ce qu’en vous aidant à trouver quelqu’un qui
                    aurait une expertise plus adaptée à vos besoins.
                  `
                : html`
                    If you have a great product idea, but you need a technical advice, a proof of
                    concept or a functional prototype made before committing more resources, don't
                    hesitate to speak to me about it! If I can help you, I will, even if it's just
                    by helping you find someone whose expertise better suits your needs.
                  `}
            </p>
            <ol>
              <li>#startup</li>
              <li>#poc</li>
              <li>#prototyping</li>
            </ol>
          </article>
          <div>
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
              </svg>
            </figure>
          </div>
        </li>
      </ul>
    `
  }
}

customElements.define('services-section', ServicesSection)
