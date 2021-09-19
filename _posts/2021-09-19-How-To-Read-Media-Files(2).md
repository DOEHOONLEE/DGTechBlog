---
title: "Read/Get Media File Info On Mac Terminal (2)"

categories:
  - Linux
  - JavaScript

tags:
  - Linux
  - JavaScript
---

> Author: Doe Hoon LEE

###### Do you remember this [Read/Get Media File Info On Mac Terminal(1)](https://doehoonlee.github.io/linux/How-To-Read-Meida-Files(1)/) post?

I mentioned that we will learn how to calculate the total duration of a folder!

Let's go back to the previous section and see how we got duration for each file in a folder.

```bash
for file in /Users/userName/Directory/*; do mediainfo $file; done
```

and of course, we do it the JavaScript way!!

###### In the post [How To Execute Shell Commands with JS](https://doehoonlee.github.io/linux/javascript/How-To-Exec-Shell-Commands-With-JS/), we learned how to execute shell commands with JavaScript.

We are going to combine these lessons.

We will first write `require('child_process')`, create a `duration` object, and `res` where we are going to store returned result.

```js
const { exec } = require('child_process');

const duration = {}

let res = [];
```

then PLUS

```js
exec(`
    for file in /Users/doehoonlee/Desktop/sample/*; do mediainfo $file | grep 'Duration' | head -n 1; done
`, (err, stdout) => {
    if (err) console.error(err);

    console.log("Durations of files : \n", stdout)
})
```

With this, we get something like this

```bash
Durations of files :
 Duration                                 : 1 min 1 s
Duration                                 : 10 s 750 ms
Duration                                 : 24 s 500 ms
Duration                                 : 1 min 36 s
```

Then we will get rid of all unnecessary information like `Duration`, `:`, `spaces`.

```js
exec(`
        for file in /Users/doehoonlee/Desktop/sample/*; do mediainfo $file | grep 'Duration' | head -n 1; done
    `, (err, stdout) => {
        if (err) console.error(err);

        console.log("Durations of files : \n", stdout)
    
        res = stdout.replace(/ +/g, ' ').replace(/Duration :/g, '').replace(/[\r\n]/g, '').split(" ").filter(c => c.length > 0)

        console.log("hr, min, s, ms separated : \n", res)
    }
)
```

we then get

```bash
hr, min, s, ms separated :
 [
  '1',  'min', '1',   's',
  '10', 's',   '750', 'ms',
  '24', 's',   '500', 'ms',
  '1',  'min', '36',  's'
]
```

We are going to, now, clean this up.

```js
exec(`
        for file in /Users/doehoonlee/Desktop/sample/*; do mediainfo $file | grep 'Duration' | head -n 1; done
    `, (err, stdout) => {
        if (err) console.error(err);

        console.log("Durations of files : \n", stdout)
    
        res = stdout.replace(/ +/g, ' ').replace(/Duration :/g, '').replace(/[\r\n]/g, '').split(" ").filter(c => c.length > 0)

        console.log("hr, min, s, ms separated : \n", res)

        for (let i=res.length-1; i > 0; i-=2) {
            duration[res[i]] = duration[res[i]] + Number(res[i-1]) || Number(res[i-1]);
        }
    
        console.log("Cleaned up : \n", duration)
    }
)
```