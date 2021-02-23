---
title: "Regex Cheat Sheet"

categories:
  - RegExp

tags:
  - RegExp
---

> Author: Doe Hoon LEE

## Regular Expression Cheat Sheet

## **C\_**

(1) Consecutive/Repeating pattern

```js
// let str = "dd_aaa_vvvv_iiiii_dddddd";

return str.replace(/(.)\1+/g, "$1");

// => "d_a_v_i_d"
```

## **D\_**

(1) Match digits in a string

```js
let str = "1A2BC3DEF4GDSAF84";
str.match(/\d+/g);
// => ["1", "2", "3", "4", "84"]
```

## **E\_**

(1) Every n(-th) letters

```js
// cut every single letter
"ABCDEFGHIJKLMNOPQRSTUVWXYZ".match(/.{1,1}/g);
// => ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// cut every TWO letters
"ABCDEFGHIJKLMNOPQRSTUVWXYZ".match(/.{1,2}/g);
// => ["AB", "CD", "EF", "GH", "IJ", "KL", "MN", "OP", "QR", "ST", "UV", "WX", "YZ"]
```

## **L\_**

(1) Match letters (uppercase in this example) in a string

```js
let str = "1A2BC3DEF4GDSAF84";
str.match(/[A-Z]+/g);
// => ["A", "BC", "DEF", "GDSAF"]
```

## **N\_**

(1) Check if string contains numbers only

```js
let str = "abc123";
let strTwo = "123";

/^\d+$/.test(str) // => false
/^\d+$/.test(strTwo) // => true
```
