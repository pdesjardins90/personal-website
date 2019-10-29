import { Article } from './article.js'

export class ArticleApi {
  async getMostRecentArticles({ amount = 2 } = {}) {
    const response = await fetch('https://dev.to/api/articles?username=pdesjardins90')
    const articleResources = await response.json()
    return articleResources
      .map(articleResource => new Article(articleResource))
      .sort((a, b) => b.publishedAtTimestamp - a.publishedAtTimestamp)
      .slice(0, amount)
  }
}
