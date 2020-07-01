import App from '../App.js'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express'
import serverless from 'serverless-http'

const app = express();
const router = express.Router();

router.get('/', async (req, res) => {
  const app = ReactDOMServer.renderToString(<App id={req.query.id} />);
  return res.status(200).send(app);
});

app.use('/.netlify/functions/express', router);
exports.handler = serverless(app);
