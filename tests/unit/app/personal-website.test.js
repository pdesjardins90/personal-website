import { expect, fixture, html } from '@open-wc/testing'
import { stub } from 'sinon'
import { PersonalWebsite } from '../../../sources/app/personal-website.js'

describe('<personal-website>', () => {
  let component
  beforeEach(() => {
    component = new PersonalWebsite()
  })

  describe('_updateIsMainIntersecting', () => {
    let intersectionObserverEntries
    context('when main is not intersecting', () => {
      beforeEach(() => {
        intersectionObserverEntries = [{ isIntersecting: false }]
        component._updateIsMainIntersecting({ intersectionObserverEntries })
      })

      it('updates isMainIntersecting to false', () => {
        expect(component.isMainIntersecting).to.be.false
      })
    })

    context('when main is intersecting', () => {
      beforeEach(() => {
        intersectionObserverEntries = [{ isIntersecting: true }]
        component._updateIsMainIntersecting({ intersectionObserverEntries })
      })

      it('updates isMainIntersecting to true', () => {
        expect(component.isMainIntersecting).to.be.true
      })
    })
  })

  describe('_updateCurrentlyIntersectingSection', () => {
    let intersectionObserverEntries
    let section1
    let section2
    let section3
    beforeEach(async () => {
      section1 = { name: 'section1' }
      section2 = { name: 'section2' }
      section3 = { name: 'section3' }
    })

    context('when no sections are visible', () => {
      beforeEach(() => {
        intersectionObserverEntries = [
          { isIntersecting: false, target: section1 },
          { isIntersecting: false, target: section2 },
          { isIntersecting: false, target: section3 }
        ]

        component._updateCurrentlyIntersectingSection({ intersectionObserverEntries })
      })

      it('unsets currently intersecting section', () => {
        expect(component.currentlyIntersectingSection).to.not.exist
      })
    })

    context('when a section is visible', () => {
      beforeEach(() => {
        intersectionObserverEntries = [
          { isIntersecting: false, target: section1 },
          { isIntersecting: true, target: section2 },
          { isIntersecting: false, target: section3 }
        ]

        component._updateCurrentlyIntersectingSection({ intersectionObserverEntries })
      })

      it('sets corresponding section as currently intersecting', () => {
        expect(component.currentlyIntersectingSection).to.be.equal(section2)
      })
    })
  })

  describe('_scrollRequestedSectionIntoView', () => {
    let hash
    let sections

    let homeSection
    let section1
    let section2

    beforeEach(async () => {
      homeSection = await fixture(html`
        <section route="#home"></section>
      `)

      section1 = await fixture(html`
        <section route="#route1"></section>
      `)

      section2 = await fixture(html`
        <section route="#route2"></section>
      `)

      stub(homeSection, 'scrollIntoView')
      stub(section1, 'scrollIntoView')
      stub(section2, 'scrollIntoView')

      sections = [homeSection, section1, section2]
    })

    afterEach(() => {
      homeSection.scrollIntoView.reset()
      section1.scrollIntoView.reset()
      section2.scrollIntoView.reset()
    })

    context('when no hash', () => {
      beforeEach(() => {
        hash = null
        component._scrollRequestedSectionIntoView({ hash, sections })
      })

      it('does not scroll anywhere', () => {
        expect(homeSection.scrollIntoView.called).to.be.false
        expect(section1.scrollIntoView.called).to.be.false
        expect(section2.scrollIntoView.called).to.be.false
      })
    })

    context('when known hash', () => {
      beforeEach(() => {
        hash = '#route2'
        component._scrollRequestedSectionIntoView({ hash, sections })
      })

      it('scrolls to requested section', () => {
        expect(section2.scrollIntoView.called).to.be.true
      })
    })

    context('when unknown hash', () => {
      beforeEach(() => {
        hash = '#some-unknown-hash'
        component._scrollRequestedSectionIntoView({ hash, sections })
      })

      it('does not scroll anywhere', () => {
        expect(homeSection.scrollIntoView.called).to.be.false
        expect(section1.scrollIntoView.called).to.be.false
        expect(section2.scrollIntoView.called).to.be.false
      })
    })
  })
})
