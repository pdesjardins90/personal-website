import { expect } from '@open-wc/testing'
import { NavBar } from '../../../sources/app/nav-bar.js'

describe('<nav-bar>', () => {
  let component
  beforeEach(() => {
    component = new NavBar()
  })

  describe('closeNavigationMenu', () => {
    context('when navigation menu is closed', () => {
      beforeEach(() => {
        component.isNavigationMenuOpened = false
        component.closeNavigationMenu()
      })

      it('stays closed', () => {
        expect(component.isNavigationMenuOpened).to.be.false
      })
    })

    context('when navigation menu is opened', () => {
      beforeEach(() => {
        component.isNavigationMenuOpened = true
        component.closeNavigationMenu()
      })

      it('closes', () => {
        expect(component.isNavigationMenuOpened).to.be.false
      })
    })
  })

  describe('toggleNavigationMenuOpened', () => {
    context('when navigation menu is closed', () => {
      beforeEach(() => {
        component.isNavigationMenuOpened = false
        component.toggleNavigationMenuOpened()
      })

      it('opens', () => {
        expect(component.isNavigationMenuOpened).to.be.true
      })
    })

    context('when navigation menu is opened', () => {
      beforeEach(() => {
        component.isNavigationMenuOpened = true
        component.toggleNavigationMenuOpened()
      })

      it('closes', () => {
        expect(component.isNavigationMenuOpened).to.be.false
      })
    })
  })
})
