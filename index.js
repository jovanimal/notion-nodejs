const express = require('express');
const getVideos = require('./services/notion');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'));

app.get('/videos', async (req, res) => {
  try {
    const videos = await getVideos();
    res.json(videos);
  } catch (error) {
    console.log(error)
  }
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
