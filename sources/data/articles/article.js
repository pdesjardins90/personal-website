export class Article {
  constructor({ title, cover_image: coverImageURL, published_at: publishedAtDateString, url }) {
    this.title = title
    this.coverImageUrl = coverImageURL
    this.publishedAtTimestamp = new Date(publishedAtDateString).valueOf()
    this.url = url
  }
}
