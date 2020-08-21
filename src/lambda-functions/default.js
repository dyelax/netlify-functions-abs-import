import App from '../App.js'
import React from 'react';
import ReactDOMServer from 'react-dom/server';

exports.handler = (event, context) => {
  return {statusCode: 200, body: ReactDOMServer.renderToString(<App />)};
};
