import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Main from './components/Main';
import Leaf from './components/Leaf';
import fetch from 'node-fetch';
import escape from 'escape-html';

const api = 'http://localhost:9901';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  fetch(`${api}/csrf_token`)
  .then((result) => result.json())
  .then((tokenResponse) => {
    return fetch(`${api}/time`, {
      headers: { 'x-csrf-token': tokenResponse.token },
    })
    .then((result) => result.json())
    .then((timeResponse) => {
      const initialProps = { csrfToken: tokenResponse.token, time: timeResponse.time };
      const appHtml = renderToString(
        <Main {...initialProps}/>
      );
      res.send(createHtml(appHtml, initialProps));
    })
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
});

app.get('/leaf', (req, res) => {
  fetch(`${api}/csrf_token`)
  .then((result) => result.json())
  .then((tokenResponse) => {
    const initialProps = { csrfToken: tokenResponse.token };
    const appHtml = renderToString(
      <Leaf {...initialProps}/>
    );
    res.send(createHtml(appHtml, initialProps));
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
});

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log('Production Express server running at localhost:' + PORT);
});

function createHtml(appHtml, initialProps) {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>SSR Sample</title>
  </head>
  <body>
    <div id="app" data-initial-props="${escape(JSON.stringify(initialProps))}">${appHtml}</div>
    <script src="/bundle.js"></script>
  </body>
</html>`;
}
