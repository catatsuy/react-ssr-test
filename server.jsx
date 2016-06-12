import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Main from './components/Main';
import Leaf from './components/Leaf';
import fetch from 'node-fetch';
import escape from 'escape-html';
import { match, RouterContext } from 'react-router';
import routes from './routes';

const api = 'http://localhost:9901';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  // https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err)
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {

      const appHtml = renderToString(
        <RouterContext {...renderProps} />
      );
      res.send(createHtml(appHtml, renderProps));
    } else {
      res.status(404).send('Not found')
    }
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
