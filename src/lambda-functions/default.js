import App from '../App.js'
import React from 'react';
import ReactDOMServer from 'react-dom/server';

exports.handler = async (event, context) => {
  const app = ReactDOMServer.renderToString(<App />);

  return {
    statusCode: 200,
    body: app,
  };
};
