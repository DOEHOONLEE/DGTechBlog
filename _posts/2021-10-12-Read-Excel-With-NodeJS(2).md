---
title: "How To Read Excel File With NodeJS (2)"

categories:
  - JavaScript
  - Node

tags:
  - JavaScript
  - Node
---

> Author: Doe Hoon LEE

###### In the last post, we learned [How To Read Excel File With NodeJS (1)](https://doehoonlee.github.io/linux/Read-Excel-With-NodeJS(2)/) post?

##### This time, we are going to, well, beautify the data we get from excel files.

##### One way is to use console.table()

`console.table()` is an WebAPI where it takes an array/object then puts it in a form of table.

You can use it on a browser console or with node.

Let's see how it looks on a browser.

First, copy the sample data we got from the last post, put it in a variable

```js
const sample = [
  [ 'index', 'name', 'age' ],
  [ 0, 'David', 30 ],
  [ 1, 'Greg', 49 ],
  [ 2, 'Joe', 36 ],
  [ 3, 'Dan', 37 ],
  [ 4, 'Ben', 21 ],
  [ 5, 'Christine', 27 ],
  [ 6, 'Jen', 39 ],
  [ 7, 'Kelly', 41 ],
  [ 8, 'Hugh', 51 ],
  [ 9, 'Amy', 34 ]
];
```

then go to dev tool on a browser and paste it, type in the following.

```js
console.table(sample);
```

![console table]({{ site.url }}{{ site.baseurl }}/assets/img/post/consoleTable.png)

Looks nice, huh?!

With this, we can view our excel data better.

Try putting them altogether.

```js
const readXlsxFile = require('read-excel-file/node');

readXlsxFile('sample.xlsx').then((rows) => {
    console.table(rows);
})
```