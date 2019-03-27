import cheerio from 'cheerio';
import { split } from 'lodash';
// import constant from '../constant';
import getHtml from './getHtml';

const getStories = async url => {
  const html = await getHtml(url);
  const $ = cheerio.load(html);
  let data = [];

  // $('#threadbits_forum_145 .alt1 div > a ').each((i, e) => {
  //   const id = split($(e).attr('href'), '=')[1];

  //   const item = {
  //     id,
  //     href: $(e).attr('href'),
  //     author: $(e)
  //       .find('div.smallfont span')
  //       .text(),
  //     title: $(e).text()
  //   };
  //   data = [...data, item];
  // });

  $('#threadbits_forum_145 .alt1 ').each((i, e) => {
    const author = $(e)
      .find('div > span')
      .text();

    if (author) {
      const id = split(
        $(e)
          .find('div > a')
          .attr('href'),
        '='
      )[1];

      const item = {
        id,
        author,
        href: $(e).attr('href'),
        author: $(e)
          .find('div.smallfont span')
          .text(),
        title: $(e)
          .find('div > a')
          .text()
      };
      data = [...data, item];
    }
  });

  return data;
};

export default getStories;
