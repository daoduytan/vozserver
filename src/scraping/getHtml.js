require('babel-polyfill');
import axios from 'axios';

const getHtml = async url => {
  const res = await axios.get(url);
  return res.data;
};

export default getHtml;
