import { BaseElement, css, html } from '../../components/base-element.js'

export class BlogSection extends BaseElement {
  static get properties() {
    return {
      language: { type: String },
      articles: { type: Array }
    }
  }

  constructor() {
    super()
    this.articles = [
      {
        title: 'Web Components Fundamentals, Part 3/3',
        url: 'https://dev.to/pdesjardins90/web-components-fundamentals-part-3-1kge',
        coverImageUrl:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--oo8TciyU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--bYM1BLYl--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/omhgqj6ud0k0l1bslkxw.jpeg'
      },
      {
        title: 'Web Components Fundamentals, Part 2/3',
        url: 'https://dev.to/pdesjardins90/web-components-fundamentals-part-2-486j',
        coverImageUrl:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--YN140gPU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--YCtnCQ62--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/vaaof0dbnci96i5315km.JPG'
      }
    ]
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
          margin-bottom: 2rem;
          display: grid;
          grid-auto-rows: auto;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
        }

        li {
          position: relative;
          min-height: 12rem;
          border-radius: var(--radius-for-large);
          box-shadow: var(--shadow-3dp);
          cursor: pointer;
        }

        li img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        li a {
          position: absolute;
          width: 100%;
          height: 100%;
          padding: 1rem;
          box-sizing: border-box;
          background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.54) 0%, transparent 75%);
          color: var(--color-text-on-background-high);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          font-size: 1.2rem;
          word-wrap: normal;
        }

        :host > a {
          align-self: flex-end;
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
          min-width: 10rem;
        }

        @media (any-hover: hover) {
          li a {
            color: var(--color-text-on-background-medium);
          }

          li:hover {
            box-shadow: var(--shadow-6dp);
          }

          li:hover a {
            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.38) 0%, transparent 75%);
            color: var(--color-text-on-background-high);
          }

          button:hover {
            background-color: var(--color-secondary-lighter);
            box-shadow: var(--shadow-6dp);
            transition: var(--transition);
          }
        }

        @media (max-width: 768px) {
          ul {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 668px) {
          :host > a {
            align-self: center;
          }
        }
      `
    ]
  }

  render() {
    return html`
      <h2>
        ${this.language === 'fr' ? `Mes derniers articles de blogue` : 'My latest blog posts'}
      </h2>
      <ul>
        ${this.articles.map(
          article => html`
            <li>
              <img
                src="${article.coverImageUrl}"
                alt="${this.language === 'fr'
                  ? `Image de couverture de '${article.title}'`
                  : `Cover image of '${article.title}'`}"
              />
              <a rel="noreferrer noopener" href="${article.url}">${article.title}</a>
            </li>
          `
        )}
      </ul>
      <a rel="noreferrer noopener" href="https://dev.to/pdesjardins90">
        <button>${this.language === 'fr' ? 'En lire plus' : 'Read more'}</button>
      </a>
    `
  }
}

customElements.define('blog-section', BlogSection)
