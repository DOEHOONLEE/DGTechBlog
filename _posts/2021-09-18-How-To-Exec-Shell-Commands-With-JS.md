---
title: "How To Execute Shell Commands with JS"

categories:
  - Linux
  - JavaScript

tags:
  - Linux
  - JavaScript
---

> Author: Doe Hoon LEE

As you may know, I am a JavaScript lover 😍

I would like to do anything with JavaScript 😄

Anyway, I had to run shell commands for one of my projects and thought 'Can I do this with JavaScript? hmm..?'

Then, of course, I googled LOL and not so surprisingly, the answer was 👍 YES.

It does `require` something though.

So we will first have to write this

```js
const { exec } = require('child_process');
```

Hmm.. what should we do then?

How about we follow the tradition and print `Hello World` 🤣

```js
const { exec } = require('child_process');

exec(`echo 'Hello World'`, (err, stdout) => {
    if (err) console.log(err);
    console.log(stdout)
})
```

![execute hello world]({{ site.url }}{{ site.baseurl }}/assets/img/post/execHelloWorld.png)

Yay!

###### Oh, wait a second..

Do you remember this [How To Open Everything on Terminal (1)](https://doehoonlee.github.io/linux/How-To-Open-Everything-on-Terminal/) post?

Can we do this on JavaScript too?

```js
const { exec } = require('child_process');

const folderPath = '/Users/doehoonlee/Desktop/sample'

exec(`open ${folderPath}`, (err, stdout) => {
    if (err) console.log(err);
    console.log(stdout)
})
```

###### Can we store something we got from executing a command?

```js
const { exec } = require('child_process');

const info = {
    pwd: '',
    currentTime: '',
}

exec(`pwd`, (err, stdout) => {
    if (err) console.log(err);
    info.pwd = stdout;

    console.log('pwd stored..!')
});

exec(`date`, (err, stdout) => {
    if (err) console.log(err);
    info.currentTime = stdout;

    console.log('Current Time stored..!')
    console.log(info)
})
```

###### Wallah!!

![execute variables]({{ site.url }}{{ site.baseurl }}/assets/img/post/execVars.png)

See you again!