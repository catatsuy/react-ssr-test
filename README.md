# react-ssr-test

API -> Node (React SSR) -> User
    <--------------------- React DOM Update

# Server

Express web server.

```
$(npm bin)/babel-node server.js
```

# Assets

Build `browser.js` and included files into `public/bundle.js`.

```
$(npm bin)/webpack --watch
```
