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

##### This is the sample excel data that we are going to use!

![Sample Excel Data]({{ site.url }}{{ site.baseurl }}/assets/img/post/sampleExcelData.png)

##### We first need to import the module

```js
const readXlsxFile = require('read-excel-file/node');
```

then

##### To print the data,

```js
readXlsxFile(pathToExcelFile).then((rows) => {
  console.log(rows);
})
```

##### Then we execute the file we created

```bash
node excelReader.js
```

![Sample Excel Data Read]({{ site.url }}{{ site.baseurl }}/assets/img/post/sampleExcelDataRead.png)

Please take some time and see how the contents of excel file are converted in a form of array!

Next time, we are going to learn how to format better with these!

See you again!

Take care!