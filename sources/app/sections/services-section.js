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

        li {
          display: flex;
        }

        ul > li:nth-child(even) > div {
          order: -1;
        }

        li > div {
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        li > div figure {
          width: 8rem;
          height: 8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background-color: var(--color-primary);
          box-shadow: var(--shadow-3dp);
        }

        li > div svg {
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

        article hr {
          width: 50%;
          height: 0.2rem;
          margin: 0.8rem 0;
          background-color: var(--color-primary);
        }

        @media (max-width: 668px) {
          ul {
            grid-gap: 2rem;
          }

          li > div {
            display: none;
          }

          article svg {
            display: flex;
            margin: 0 0.6rem 1rem 0;
            width: 1.5rem;
            height: 1.5rem;
            fill: var(--color-primary);
          }

          hr {
            align-self: center;
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
                    Le web est la technologie la plus accessible au monde. Tout le monde peut y
                    accéder, peu importe le type d’appareil ou de navigateur utilisé. Les récentes
                    innovations technologiques des navigateurs, telles que les
                    <em class="italic">Web Components</em> et les
                    <em class="italic">Service Workers</em>, permettent aux applications
                    d'aujourd'hui d'être encore plus modulaires et performantes qu'autrefois,
                    faisant du web un incontournable au coeur de toute stratégie technologique
                    d’entreprise.
                  `
                : html`
                    The web is the most accessible technology in the world. Everyone can access it,
                    no matter what kind of device or browser they use. Recent browser innovations,
                    like
                    <em class="italic">Web Components</em> and
                    <em class="italic">Service Workers</em>, now allow web apps to be even more
                    modular and performant than before, making the web an essential part of any
                    enterprise technological strategy.
                  `}
            </p>
            <hr />
            <p>
              ${this.language === 'fr'
                ? html`
                    Je développe de telles applications depuis plusieurs années déjà et je peux vous
                    aider à réaliser la vôtre, personnalisée selon vos besoins.
                  `
                : html`
                    I’ve been developing such applications for a number of years now and can help
                    you build your own, tailored to your own requirements.
                  `}
            </p>
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
                    Comme toute entreprise moderne, vos données sont ce que vous avez de plus
                    précieux. Qu’elles proviennent de capteurs physiques, d'interactions
                    d'utilisateurs ou encore de vos opérations internes, elles peuvent vous aider à
                    prendre d'importantes décisions stratégiques. Le meilleur moyen de tirer profit
                    de vos données est de bâtir un système automatisé qui les récolte, les agrège et
                    vous les rend disponibles pour visualisation et interprétation.
                  `
                : html`
                    Your most valuable asset as a modern company is your data. Wether it comes from
                    physical sensors, user interactions or your internal operations, it can help you
                    make important business decisions. The best way to leverage your data, is to
                    build an automated system that harvests, aggregates and present it to you in a
                    meaningful way.
                  `}
            </p>
            <hr />
            <p>
              ${this.language === 'fr'
                ? html`
                    J'ai travaillé sur des systèmes qui récoltaient des données de partout à travers
                    le monde. Je peux vous aider à bâtir le vôtre, fait sur mesure pour votre
                    entreprise.
                  `
                : html`
                    I've worked on systems that harvested data from all around the world. I can help
                    you build your own, tailored to your organization.
                  `}
            </p>
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
                    Toute minute passée par un humain sur une activité automatisable est une minute
                    gaspillée. Ce type de travail de bas niveau, souvent répétitif et monotone, peut
                    être exécuté par des ordinateurs extrêmement rapidement. Les humains, en
                    revanche, sont bien meilleurs à prendre des décisions de haut niveau et à
                    s'adapter au contexte dynamique du travail de tous les jours. Libérez vos
                    employés du travail de bas niveau en déléguant ces tâches à des ordinateurs et
                    vous verrez vos coûts opérationnels diminuer, la bonne humeur de vos employés
                    augmenter et votre pénurie de main d'oeuvre se dissiper.
                  `
                : html`
                    Every minute spent by a human on an automatable activity is a minute lost.
                    Computers excel at low-level, repetitive and monotonous work. Humans, on the
                    other hand, are way better at high-level decision-making and adapting to the
                    day-to-day dynamic context of the workplace. Free your employees from low-level
                    tasks by delegating them to computers and you’ll see your operational costs
                    decrease, your employees' happiness rise and your labor shortage fade away.
                  `}
            </p>
            <hr />
            <p>
              ${this.language === 'fr'
                ? html`
                    J'ai développé des systèmes automatisés qui ont aidés des entreprises à éliminer
                    de longs et coûteux processus de bas niveau. Je peux vous aider vous aussi à
                    augmenter la productivité de votre entreprise.
                  `
                : html`
                    I've developed automated services that helped companies eliminate time-consuming
                    and low-value processes. I can help you too increase your company's
                    productivity.
                  `}
            </p>
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
                    Dans un monde où les technologies évoluent à vitesse fulgurante, l'innovation
                    est la clé de la pérennité pour toute entreprise. Pour repousser les limites
                    d'un marché ou en découvrir un nouveau, l'expérimentation et l'apprentissage
                    continu doivent faire partie du quotidien.
                  `
                : html`
                    In a world where technologies evolve at a staggering pace, innovation is the key
                    to an enterprise's longevity. To redefine a market or to discover a new one,
                    experimentation and continuous learning must be part of the daily operations.
                  `}
            </p>
            <hr />
            <p>
              ${this.language === 'fr'
                ? html`
                    Vous avez un projet spécial? N'hésitez pas à m'en parler! Si je peux vous aider,
                    je le ferai, ne serait-ce qu’en vous aidant à trouver quelqu’un qui aurait une
                    expertise plus adaptée à vos besoins.
                  `
                : html`
                    Have a special project? Don't hesitate to speak to me about it! If I can help
                    you, I will, even if it's just by helping you find someone whose expertise
                    better suits your needs.
                  `}
            </p>
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
