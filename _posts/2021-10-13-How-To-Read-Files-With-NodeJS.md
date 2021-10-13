---
title: "How To Read And Write Files With NodeJS"

categories:
  - JavaScript
  - Node

tags:
  - JavaScript
  - Node
---

> Author: Doe Hoon LEE

###### As usual, I am starting my post with JavaScript :)

Today, we are going to learn how to read files using Node.js

Do we need to install anything? Nope

BUT! we do need nodejs installed, obviously :p

##### Let's begin!

Hmm.. well, to "READ" a file, we "NEED" a file though.. !!

`echo 'Hello World!' > sample.txt`

![Sample Text File]({{ site.url }}{{ site.baseurl }}/assets/img/post/helloWorldTxt.png)

Why don't we create a sample text file with `"Hello World!"` in it?!

Oh! Let's not forget to create a JS file too!

`touch fileReader.js`

##### Inside the fileReader.js

```js
import * as fs from 'fs';

const dataRead = fs.readFile('sample.txt', (err, data) => {
    const dataRead = data.toString();
    console.log(dataRead);
});
```

![File Read Result]({{ site.url }}{{ site.baseurl }}/assets/img/post/fileReadResult.png)

##### YAY!!

I personally use `readFile` and `writeFile` more for dealing with JSON.

So let's try that!

BUT! Why don't we create JSON with `writeFile`? So it will be the opposite xD

###### writeFile

```js
import * as fs from 'fs';

const sampleDATA = {
    name: 'David',
    age: 30,
    gender: 'male',
    location: 'Korea'
}

const data = JSON.stringif(sampleDATA);

fs.writeFile('sampleData.json', data, (err) => {
    if (err) console.error(err);

    console.log('Task Complete!');
})
```

![Write File Error]({{ site.url }}{{ site.baseurl }}/assets/img/post/writeFileErr.png)

OOOPS!! What is going on?!

Well, I intentionally made a typo to see how we get an error message with

```js
    if (err) console.error(err);
```

It is always better when it tells us where or what went wrong :)

So, shall we correct the typo and redo it?

```js
import * as fs from 'fs';

const sampleDATA = {
    name: 'David',
    age: 30,
    gender: 'male',
    location: 'Korea'
}

const data = JSON.stringify(sampleDATA);

fs.writeFile('sampleData.json', data, (err) => {
    if (err) console.error(err);

    console.log('Task Complete!');
})
```

Then~~ we can try reading what we just wrote!

```js
import * as fs from 'fs';

const dataRead = fs.readFile('sampleData.json', (err, data) => {
    const dataRead = data.toString();
    console.log(dataRead);
});
```

![Write File Result]({{ site.url }}{{ site.baseurl }}/assets/img/post/writeFileResult.png)

As usual, thanks for reading and participating in the activity :)

HAPPY CODING THEN!!