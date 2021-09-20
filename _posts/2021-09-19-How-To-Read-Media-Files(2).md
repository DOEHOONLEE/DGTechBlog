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

![Duration Calculated]({{ site.url }}{{ site.baseurl }}/assets/img/post/duration.png)

###### Yay~!!

BUT!! the numbers don't look so nice though~!

Let's recalculate them with a proper format.

```js
if (duration.ms) {
    const addToSec = (duration.ms / 1000) | 0;
    const remainder = duration.ms % 1000;
    duration.s += addToSec;
    duration.ms = remainder;
}

if (duration.s) {
    const addToMin = (duration.s / 60) | 0;
    const remainder = duration.s % 60;
    duration.min += addToMin;
    duration.s = remainder;
}

if (duration.min) {
    const addToHour = (duration.min / 60) | 0;
    const remainder = duration.min % 60;
    duration.h += addToHour;
    duration.min = remainder;
}

console.log(`Final Result : \n
The Total Duration Of The Folder Is \n
${duration.h || 0} hour ${duration.min || '00'} min ${duration.s || '00'} sec ${duration.ms || '00'} ms long!`)
```

###### So put them all together in one, we have

```js
const { exec } = require('child_process');

const duration = {}

let res = [];

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

        if (duration.ms) {
            const addToSec = (duration.ms / 1000) | 0;
            const remainder = duration.ms % 1000;
            duration.s += addToSec;
            duration.ms = remainder;
        }

        if (duration.s) {
            const addToMin = (duration.s / 60) | 0;
            const remainder = duration.s % 60;
            duration.min += addToMin;
            duration.s = remainder;
        }

        if (duration.min) {
            const addToHour = (duration.min / 60) | 0;
            const remainder = duration.min % 60;
            duration.h += addToHour;
            duration.min = remainder;
        }

        console.log(`Final Result : \n
        The Total Duration Of The Folder Is \n
        ${duration.h || 0} hour ${duration.min || '00'} min ${duration.s || '00'} sec ${duration.ms || '00'} ms long!`)
    }
)
```

Running `node duration.js` will get you

![Duration Calculated Final]({{ site.url }}{{ site.baseurl }}/assets/img/post/durationFinal.png)

Note that this is not the final solution. This will be updated. Until then, this will remain as your challenge to refactor :)

As always, thanks for coming to DGTechBlog.

Have a wonderful day.