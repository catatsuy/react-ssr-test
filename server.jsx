import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Main from './components/Main';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  const html = createHtml();
  res.send(html);
})

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log('Production Express server running at localhost:' + PORT);
})

function createHtml() {
  const appHtml = renderToString(
    <Main />
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
</html>
  `;
}
