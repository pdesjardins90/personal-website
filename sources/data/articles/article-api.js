import { Article } from './article.js'

export class ArticleApi {
  async getMostRecentArticles({ amount = 2 } = {}) {
    // ISSUE: Cannot query DEV API, see: https://github.com/thepracticaldev/dev.to/issues/4195
    const articleResources = [
      {
        title: 'Web Components Fundamentals, Part 3/3',
        published_at: '2019-09-26T19:32:46.147Z',
        url: 'https://dev.to/pdesjardins90/web-components-fundamentals-part-3-1kge',
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--oo8TciyU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--bYM1BLYl--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/omhgqj6ud0k0l1bslkxw.jpeg'
      },
      {
        title: 'Web Components Fundamentals, Part 2/3',
        published_at: '2019-09-19T15:46:58.117Z',
        url: 'https://dev.to/pdesjardins90/web-components-fundamentals-part-2-486j',
        cover_image:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--YN140gPU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--YCtnCQ62--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/vaaof0dbnci96i5315km.JPG'
      }
    ]

    return articleResources
      .map(articleResource => new Article(articleResource))
      .sort((a, b) => b.publishedAtTimestamp - a.publishedAtTimestamp)
      .slice(0, amount)
  }
}
