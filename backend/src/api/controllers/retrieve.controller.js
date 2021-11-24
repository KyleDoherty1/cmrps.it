const monk = require('monk');
const express = require('express');

const router = express.Router();
const db = monk(process.env.MONGODB_URI);

const urls = db.get('urls');

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line consistent-return
router.get('/:id', async (req, res, next) => {
  const { id: shortURL } = req.params;
  try {
    const response = await urls.findOne({ shortURL });
    if (response) {
      urls.findOneAndUpdate({ shortURL: response.shortURL },
        { $set: { clicks: response.clicks + 1 } });
      return res.json({
        url: response.url
      });
    }
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
