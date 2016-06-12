import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Main from './components/Main';
import fetch from 'node-fetch';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  createHtml().then((html) => res.send(html));
});

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log('Production Express server running at localhost:' + PORT);
});

function createHtml() {
  return fetch('http://localhost:9901/api.php')
  .then((result) => result.json())
  .then((json) => {
    const initialProps = { time: json.time };
    const appHtml = renderToString(
      <Main {...initialProps}/>
    );
    return `<!DOCTYPE html>
<html>
  <head>
    <title>SSR Sample</title>
  </head>
  <body>
    <div id="app">${appHtml}</div>
    <script src="/bundle.js"></script>
  </body>
</html>`;
  })
  .catch((err) => {
    console.log(err);
  });
}
