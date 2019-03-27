import express from 'express';
import constant from '../constant';
import { getStory, getStories } from '../scraping';

const router = express.Router();

router.get('/', async (req, res) => {
  const { page } = req.query;

  console.log(page, constant.url);
  try {
    // const { page } = req.query;
    const url = `${constant.url}&order=desc&page=${page}`;
    console.log('url213123123', url);

    const stories = await getStories(url);

    res.json({ stories });
  } catch (error) {
    res.status(400).json({ status: false });
    console.log('error');
  }
});

router.get('/story', async (req, res) => {
  try {
    const url = 'https://forums.voz.vn/showthread.php?t=';
    const { page, id } = req.query;

    const story = await getStory(`${url}${req.query.id}&page=${page}`);
    res.json({ story });
  } catch (error) {
    res.status(400).json({ status: false });
  }
});

export default router;
