---
title: "How To Read Excel File With NodeJS (1)"

categories:
  - JavaScript
  - Node

tags:
  - JavaScript
  - Node
---

> Author: Doe Hoon LEE

##### Long time no see!

##### Today, we are going to learn how to read an excel file with an npm called

`read-excel-file`

##### To install, type the following in terminal

`npm install read-excel-file --save`

##### We first need to import the module

```js
const readXlsxFile = require('read-excel-file/node');
```

then

##### To print the data,

```js
readXlsxFile(pathToExcelFile).then((rows) => {
  console.table(rows);
})
```

##### Then we execute the file we created

```bash
node excelReader.js
```