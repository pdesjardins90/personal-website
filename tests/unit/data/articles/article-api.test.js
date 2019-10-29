import { expect } from '@open-wc/testing'
import { ArticleApi } from '../../../../sources/data/articles/article-api.js'

const { fetchMock } = window

describe('ArticleApi', () => {
  let api = null
  beforeEach(() => {
    fetchMock.get('https://dev.to/api/articles?username=pdesjardins90', [
      {
        title: 'Article 1',
        published_at: '2019-09-26T19:32:46.147Z',
        url: 'https://httpbin.org',
        cover_image: 'https://httpbin.org'
      },
      {
        title: 'Article 2',
        published_at: '2019-09-27T19:32:46.147Z',
        url: 'https://httpbin.org',
        cover_image: 'https://httpbin.org'
      }
    ])

    api = new ArticleApi()
  })

  afterEach(() => {
    fetchMock.restore()
  })

  describe('getMostRecentArticles', () => {
    it('fetches the articles', async () => {
      await api.getMostRecentArticles()
      expect(fetchMock.called()).to.be.true
    })
  })
})
