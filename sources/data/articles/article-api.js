export class ArticleApi {
  async getArticles() {
    return [
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
}
