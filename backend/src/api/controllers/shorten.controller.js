const express = require('express');
const yup = require('yup');
const monk = require('monk');
const { nanoid } = require('nanoid');

const router = express.Router();
const db = monk(process.env.MONGODB_URI);

const schema = yup.object().shape({
  url: yup.string().trim().url().required(),
});

const urls = db.get('urls');
urls.createIndex({ shortURL: 1 }, { unique: true });

router.post('/url', async (req, res, next) => {
  let { url } = req.body;
  let shortURL;

  try {
    if (url.toLowerCase().startsWith('www')) url = `https://${url}`;

    await schema.validate({ url });
    shortURL = nanoid(5);
    const urlEntry = await urls.insert({
      url, shortURL, createdAt: Date.now(), clicks: 0
    });

    res.json({ status: 200, shortURL: urlEntry.shortURL });
  } catch (error) {
    if (error.message === 'url must be a valid URL') {
      res.statusCode = 400;
      next(new Error(`${error.value.url} is not a valid URL`));
    }
    next(error);
  }
});

module.exports = router;
