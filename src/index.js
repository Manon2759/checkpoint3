require('dotenv').config();
const express = require("express");
const app = require('./app');

const PORT = process.env.PORT || 8000;

const albumRoute = require('./models/albumRoute')
const trackRoute = require('./models/trackRoute')

app.use(express.json());
app.use('/api/album', albumRoute)
app.use('/api/track', trackRoute)

app.listen(PORT, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.error(err);
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



