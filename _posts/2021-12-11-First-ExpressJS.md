---
title: "My First Express JS!"

categories:
  - JavaScript

tags:
  - JavaScript
  - Express
  - Node
---

> Author: Doe Hoon LEE

#### We are going to learn how to set up a sever today!

#### What exactly it does is~

Take a look at this figure.

![server client request response figure]({{ site.url }}{{ site.baseurl }}/assets/img/post/firstExpressJS.png)

When we type in an URL in a browser, the browser sends a request to the server, and the server sends back a response according to the URL it received.

**Express.js** is a framework and we don't actually need express to set up a server, but then..

#### What's so special about Express.js?! Why do we use it?

* It takes the URL and sorts out the parameters

* It takes care of statick files or images

* It takes care of things like "Logging in"


#### Baic setup

```bash
# start an npm
$ npm init -y

# install express
$ npm install express
```

#### create an index file

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.render('Hello World!!');
})

app.listen(port);
```