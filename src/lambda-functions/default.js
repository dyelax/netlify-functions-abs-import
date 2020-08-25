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
