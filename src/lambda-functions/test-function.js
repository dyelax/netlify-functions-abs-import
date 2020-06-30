import App from '../App.js'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from "path";
import fs from "fs";
import express from 'express'
import serverless from 'serverless-http'

// const app = express();
// const router = express.Router();
//
// router.get('/', async (req, res) => {
//   console.log(req);
//   console.log('HI');
//   const app = ReactDOMServer.renderToString(<App id={req.query.id} />);
//   res.status(200).send(app);
//
//   // const indexFile = path.resolve('./public/index.html');
//   // // let metas = await getMetas(req);
//   //
//   // console.log(req);
//   // // let metas = getMetas(req);
//   //
//   // fs.readFile(indexFile, 'utf8', (err, indexHtml) => {
//   //   if (err) {
//   //     console.error('Something went wrong:', err);
//   //     return res.status(500).send('Oops, better luck next time!');
//   //   }
//   //
//   //   indexHtml = indexHtml.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
//   //   // indexHtml = setMetas(indexHtml, metas);
//   //
//   //   return res.send(indexHtml);
//   // });
//
//
//
//   // res.writeHead(200, { 'Content-Type': 'text/html' });
//   // res.write('<h1>Hello from Express.js!</h1>');
//   // res.end();
//
//   // res.json({'a': 'wassup'})
// });
//
// app.use('/.netlify/functions/test-function', router);
//
// exports.handler = serverless(app);

exports.handler = async (event, context) => {
  console.log(event.queryStringParameters.id);
  return {
    statusCode: 200,
    head: 'asdf',
    body: ReactDOMServer.renderToString(<App id={event.queryStringParameters.id} />),
  };
};
