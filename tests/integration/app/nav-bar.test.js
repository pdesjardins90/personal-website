import '../../../sources/app/nav-bar.js'

import { expect, fixture, html } from '@open-wc/testing'

describe('<nav-bar>', () => {
  let component
  describe('the menu button', () => {
    let menuButton
    beforeEach(async () => {
      component = await fixture(html`
        <nav-bar></nav-bar>
      `)
    })

    context('when navigation menu is opened', () => {
      beforeEach(async () => {
        component.isNavigationMenuOpened = true
        await component.updateComplete
        menuButton = component.shadowRoot.querySelector('svg')
      })

      it('is a close icon', () => {
        expect(menuButton.classList.contains('close-icon')).to.be.true
      })
    })

    context('when navigation menu is closed', () => {
      beforeEach(async () => {
        component.isNavigationMenuOpened = false
        await component.updateComplete
        menuButton = component.shadowRoot.querySelector('svg')
      })

      it('is a menu icon', () => {
        expect(menuButton.classList.contains('menu-icon')).to.be.true
      })
    })
  })

  describe('i18n', () => {
    const frenchRoutes = ['#accueil', '#services', '#technologies', '#a-propos']
    const englishRoutes = ['#home', '#services', '#technologies', '#about']
    const getRoutes = () =>
      Array.from(component.shadowRoot.querySelectorAll('[href]'))
        .map(routableSection => routableSection.getAttribute('href'))
        .filter(route => route.includes('#'))

    context('when language is french', () => {
      beforeEach(async () => {
        component = await fixture(html`
          <nav-bar language="fr"></nav-bar>
        `)
      })

      it('renders the french section routes', () => {
        const routes = getRoutes()
        expect(routes).to.have.members(frenchRoutes)
      })
    })

    context('when language is english', () => {
      beforeEach(async () => {
        component = await fixture(html`
          <nav-bar language="en"></nav-bar>
        `)
      })

      it('renders the english section routes', () => {
        const routes = getRoutes()
        expect(routes).to.have.members(englishRoutes)
      })
    })
  })
})
