import App from '../App.js'
import React from 'react';
import ReactDOMServer from 'react-dom/server';

exports.handler = async (event, context) => {
  ReactDOMServer.renderToString(<App />)
  return {
    statusCode: 200,
    headers: {'Content-Type': 'text/html'},
    body: ReactDOMServer.renderToString(<App />),
  };
};

//==================================================
// Trying with express...
//==================================================
// import App from '../App.js';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import serverless from 'serverless-http';
// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
//
// const app = express();
//
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
//
// const Html = ({body, styles, title}) => {
//   return `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <title>${title}</title>
//       </head>
//       <body style="margin:0">
//         <div id="root">${body}</div>
//       </body>
//     </html>
//   `;
// };
//
// app.get(['/*', '/.netlify/functions/default'], (req, res) => {
//   const reactAppHtml = ReactDOMServer.renderToString(<App/>);
//   const html = Html({
//     title: 'React SSR via Functions!',
//     body: reactAppHtml
//   });
//   res.send(html);
// });
//
// exports.handler = serverless(app);
