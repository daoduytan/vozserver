import cheerio from 'cheerio';
import { split } from 'lodash';

import constant from '../constant';
import getHtml from './getHtml';

const getStory = async url => {
  const html = await getHtml(url);
  const $ = cheerio.load(html);
  const page = $('#posts + table .pagenav:nth-child(1) .vbmenu_control').text();
  const totalPages = split(page, ' ')[3];

  let data = [];
  $('#posts > div').each((i, e) => {
    const post = {
      id: i,
      author: $(e)
        .find('.bigusername')
        .text(),
      content: $(e)
        .find('.voz-post-message')
        .html()
    };

    data = [...data, post];
  });

  const title = $('#posts > div:nth-child(1)')
    .find('.smallfont > strong')
    .text();

  const story = {
    title,
    data,
    totalPages
  };

  return story;
};

export default getStory;
