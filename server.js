require('dotenv').config();
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const PORT = process.env.PORT || 8080;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res, parse(req.url, true));
  }).listen(PORT, err => {
    if (err) {
      throw err;
    }
    console.log(`Listening on port ${PORT}`); // eslint-disable-line
  });
});
