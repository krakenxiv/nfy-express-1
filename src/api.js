const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const router = express.Router();

app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('combined'));

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://clinquant-pavlova-18d509.netlify.app',
  ],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const ads = [{ title: 'Hello, world (again)!' }];

router.get('/', (req, res) => {
  res.json({
    hello: 'hi there!',
  });
});

router.get('/ads', (req, res) => {
  res.send(ads);
});

app.use(`/.netlify/functions/api`, router);

//comment test
module.exports = app;
module.exports.handler = serverless(app);
