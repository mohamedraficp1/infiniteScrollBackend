const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/data/:page', async (req, res) => {
  try {
    const response = await import(`node-fetch`).then((m) => m.default);
    const data = await response(`https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${req.params.page}`).then((res) => res.json());
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
