const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
const router = express.Router();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

router.get('/', (req, res) => {
  res.json({
    hello: 'hi there!',
  });
});

router.get('/test', (req, res) => {
  res.json({
    hello: 'test!',
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
