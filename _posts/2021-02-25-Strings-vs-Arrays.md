---
title : "Handling Strings and Arrays in JavaScript"
classes: wide
categories:
      - JavaScript
      - Data Structure

tags:
    - JavaScript
    - Data Structure
---

> Author : Doe Hoon LEE

<hr>

### Strings and Arrays in JavaScript

##### The most obvious difference is the way they look

```js
const myString = "DGTechBlog";
const myArray = ["D", "G", "T", "e", "c", "h", "B", "l", "o", "g"];
```

##### `Strings` are encapsulated with `" "` and `Arrays` are encapsulated with `[ ]`

##### One of the ways to find out the data type is to use `typeof`

```js
const myString = "DGTechBlog";
const myArray = ["D", "G", "T", "e", "c", "h", "B", "l", "o", "g"];

typeof myString // => "string"
typeof myArray // => "object"
```

##### Another difference would be that `Arrays` can contain any data type. However, `Strings` cannot!

```js
const dataTypes = ["String", 0, NaN, ["A","R","R","A","Y"]]
```

### How can I access?

##### Let's find out 3rd item in both

```js
const myString = "DGTechBlog";
const myArray = ["D", "G", "T", "e", "c", "h", "B", "l", "o", "g"];

myString.charAt(3) // => "e"
myArray[3] // => "e"
```

##### Most commonly used techniques for `Strings`

`length` returns the length of the `String`

`indexOf(WHAT_YOU_ARE_LOOKING_FOR)` returns the index of the string you are looking for or `-1` if there is no match

| method | returns |
| --- | --- |
| "START STRING".startsWith("SART") | true |
| "END STRING".endsWith("STRING") | true |
| "END STRING".endsWith("END") | false |

`slice(HERE,THERE)` returns the string index from HERE to THERE or from HERE to the end if not specified

Fun fact! if you type in a negative number in `slice()`

```js
"STRING".slice(-2) // => "NG"
```

What it does is `string.length + (-2) = 6 + (-2) = 6 -2 = 4` => `"STRING".slice(4)`

