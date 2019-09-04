import '../../../sources/app/personal-website.js'

import { expect, fixture, html } from '@open-wc/testing'
import { stub, spy } from 'sinon'

describe('<personal-website>', () => {
  let component
  context('when unresolved', () => {
    let template
    beforeEach(() => {
      template = html`
        <personal-website unresolved></personal-website>
      `
    })

    context('when stamped', () => {
      beforeEach(async () => {
        component = await fixture(template)
      })

      it('is resolved', () => {
        expect(component.hasAttribute('unresolved')).to.be.false
      })
    })
  })

  describe('routing', () => {
    let section
    let scrollSectionIntoView
    context('when routing to #technologies', () => {
      beforeEach(async () => {
        component = await fixture(html`
          <personal-website></personal-website>
        `)
        section = component.shadowRoot.querySelector('[route="#technologies"]')
        scrollSectionIntoView = spy(section, 'scrollIntoView')
        window.location = '#technologies'
      })

      it('scrolls technologies section into view', () => {
        expect(scrollSectionIntoView.called).to.be.true
      })
    })
  })

  describe('i18n', () => {
    let navigatorLanguage

    const frenchRoutes = ['#accueil', '#services', '#technologies', '#a-propos']
    const englishRoutes = ['#home', '#services', '#technologies', '#about']
    const getRoutes = () =>
      Array.from(component.shadowRoot.querySelectorAll('[route]'))
        .map(routableSection => routableSection.getAttribute('route'))
        .filter(route => route.includes('#'))

    afterEach(() => {
      navigatorLanguage.restore()
    })

    context('when initial route is /', () => {
      beforeEach(() => {
        window.history.pushState({}, null, '/')
      })

      context('when navigator language is quebec french', () => {
        beforeEach(async () => {
          navigatorLanguage = stub(navigator, 'language').get(() => 'fr-CA')
          component = await fixture(html`
            <personal-website></personal-website>
          `)
        })

        it('renders the french section routes', () => {
          const routes = getRoutes()
          expect(routes).to.have.members(frenchRoutes)
        })

        it('updates location to /fr', () => {
          expect(window.location.pathname).to.equal('/fr')
        })
      })

      context('when navigator language is france french', () => {
        beforeEach(async () => {
          navigatorLanguage = stub(navigator, 'language').get(() => 'fr-FR')
          component = await fixture(html`
            <personal-website></personal-website>
          `)
        })

        it('renders the french section routes', () => {
          const routes = getRoutes()
          expect(routes).to.have.members(frenchRoutes)
        })

        it('updates location to /fr', () => {
          expect(window.location.pathname).to.equal('/fr')
        })
      })

      context('when navigator language is plain french', () => {
        beforeEach(async () => {
          navigatorLanguage = stub(navigator, 'language').get(() => 'fr')
          component = await fixture(html`
            <personal-website></personal-website>
          `)
        })

        it('renders the french section routes', () => {
          const routes = getRoutes()
          expect(routes).to.have.members(frenchRoutes)
        })

        it('updates location to /fr', () => {
          expect(window.location.pathname).to.equal('/fr')
        })
      })

      context('when navigator language is american english', () => {
        beforeEach(async () => {
          navigatorLanguage = stub(navigator, 'language').get(() => 'en-US')
          component = await fixture(html`
            <personal-website></personal-website>
          `)
        })

        it('renders the english section routes', () => {
          const routes = getRoutes()
          expect(routes).to.have.members(englishRoutes)
        })

        it('updates location to /en', () => {
          expect(window.location.pathname).to.equal('/en')
        })
      })

      context('when navigator language is british english', () => {
        beforeEach(async () => {
          navigatorLanguage = stub(navigator, 'language').get(() => 'en-GB')
          component = await fixture(html`
            <personal-website></personal-website>
          `)
        })

        it('renders the english section routes', () => {
          const routes = getRoutes()
          expect(routes).to.have.members(englishRoutes)
        })

        it('updates location to /en', () => {
          expect(window.location.pathname).to.equal('/en')
        })
      })

      context('when navigator language is plain english', () => {
        beforeEach(async () => {
          navigatorLanguage = stub(navigator, 'language').get(() => 'en')
          component = await fixture(html`
            <personal-website></personal-website>
          `)
        })

        it('renders the english section routes', () => {
          const routes = getRoutes()
          expect(routes).to.have.members(englishRoutes)
        })

        it('updates location to /en', () => {
          expect(window.location.pathname).to.equal('/en')
        })
      })

      context('when navigator language is not french or english', () => {
        beforeEach(async () => {
          navigatorLanguage = stub(navigator, 'language').get(() => 'es')
          component = await fixture(html`
            <personal-website></personal-website>
          `)
        })

        it('renders the english section routes', () => {
          const routes = getRoutes()
          expect(routes).to.have.members(englishRoutes)
        })

        it('updates location to /en', () => {
          expect(window.location.pathname).to.equal('/en')
        })
      })
    })

    context('when initial route is /fr', () => {
      beforeEach(async () => {
        window.history.pushState({}, null, '/fr')
        component = await fixture(html`
          <personal-website></personal-website>
        `)
      })

      it('renders the french section routes', () => {
        const routes = getRoutes()
        expect(routes).to.have.members(frenchRoutes)
      })
    })

    context('when initial route is /en', () => {
      beforeEach(async () => {
        window.history.pushState({}, null, '/en')
        component = await fixture(html`
          <personal-website></personal-website>
        `)
      })

      it('renders the english section routes', () => {
        const routes = getRoutes()
        expect(routes).to.have.members(englishRoutes)
      })
    })
  })
})
