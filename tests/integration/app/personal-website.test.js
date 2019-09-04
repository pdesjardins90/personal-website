import { fixture, expect, html } from '@open-wc/testing'

import '../../../sources/app/personal-website.js'

describe('<personal-website>', () => {
  let component
  describe('when it is initially unresolved', () => {
    describe('when stamped in the DOM', () => {
      beforeEach(async () => {
        const unresolvedTemplate = html`
          <personal-website unresolved></personal-website>
        `
        component = await fixture(unresolvedTemplate)
      })

      it('is now resolved', () => {
        expect(component.hasAttribute('unresolved')).to.be.false
      })
    })
  })
})
