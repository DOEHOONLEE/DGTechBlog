---
title: "JavaScript Cheatsheet"
permalink: /JavaScript/
layout: single
---

# JavaScript Cheatsheet

### 한국어

## QUICK VIEW

#### array manipulation
```js
// let arr1 = [1,3,4,5,7,9];
// let arr2 = [2,5,6,7];

// intersection
let inter = arr1.filter(x => arr2.includes(x));

// difference
let diff = arr1.filter(x => !arr2.includes(x));
let diffTwo = arr1.filter(x => arr2.indexOf(x) < 0);

// union
let union = [...arr1, ...arr2]; // [key=combine/union]
```


#### convert number to string  

see also **[String() & toString()](#s_)**

```js
const val = 21 + ""; // -> "21"; typeof val -> "string";
```

#### convert string to number
```js
var int = "421";
console.log(+int); // -> 421
```

**NOTE**
```js
var number = "1e5";
console.log(+number); // -> 100000
```

#### filter unique values
```js
const arr = [1, 2, 2, 4, 7, 2, 1];
const uni = [...new Set(arr)]; // -> uni = [1, 2, 4, 7];
const unique = arr.filter((v, i, a) => a.indexOf(v) === i); // -> unique = [1, 2, 4, 7];

// reduce consecutive to single value => remove duplicates
const removeDuplicate = arr.filter((c,i) => c !== arr[i+1]); // -> removeDuplicate = [1, 2, 4, 7];
```

#### function within a function
```js
function power(base) {
  return function(exp) {
    return Math.pow(base, exp);
  }
}
const powerOf = power(4);
console.log(powerOf(3)) // -> 64
```

#### methods 

| methods | Description | Returns | Argument
| --- | --- | --- | --- |
| `every()` | EVERY item has to pass the test | TRUE/FALSE | 
| `some()` | SOME item has to pass the test | TRUE/FALSE | `function`
| `includes()` | checks if the array has certain string | TRUE/FALSE | `string`
| `filter()` | check for elements that pass the test | `new array` | 
| `map()` | similar to filter(), but modifies items | `new array`| 


#### reverse without reverse()
```js
let ans = "";
for (let i=0; i<str.length;i++) {
 const char = str[i];
 ans = char + ans;
}
// or //
return str.split("").reduce((output, char) => {
 output = char + output;
 return output;
}, "");

let str = "bbbaaabaaaoijeroajgalerifjaliohgailwuegha";

function letCnter(str) {
  let counter = {};
  for (let i=0; i<str.length; i++) {
    counter[str[i]] = counter[str[i]] + 1 || 1;
  }
  for (let i in counter) {
    console.log("key -> " + i, "value -> " + counter[i]);
  }
  return counter;
}
```


### 

***
## **B_**

###### 1. Bubble Sort
```js
const bubbleSort = arr => {
 for (var i=0; i<arr.length; i++) {
  for (var j=0; j<arr.length; j++) {
   if (arr[j] > arr[j+1]) {
    let tmp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = tmp;
   }
  }
 }
 return arr;
}
```  
```js
const bubbleSort = arr => {
 var swapped;
  for (var i=arr.length; i>0; i--) {
   swapped = true;
   for(var j=0; j<i; j++) {
    if (arr[j] > arr[j+1]) {
     var temp = arr[j];
     arr[j] = arr[j+1];
     arr[j+1] = temp;
     swapped = false;
    }
   }
  if(swapped) break;
 }
 return arr;
}
```

***
## **C_**

###### 1. Consecutive Numbers
```js
// solution 1
let solution1 = [];

for (let i=0; i < 11; i++) {
  solution1.push(i);
}
// [0,1,2,3,4,5,6,7,8,9,10]

// solution 2
let solution2 = [...Array(10).keys()];
// [0,1,2,3,4,5,6,7,8,9,10]
```

***
## **D_**

###### 1. Destructuring
```js
const myStock = {
  stockName: "JavaScript",
  amount: 4,
  worth: "$3,000"
}

const { stockName, amount, worth } = myStock;

console.log(`You are holding ${amount} of ${stockName} and is worth ${worth}`);
// => You are holding 4 of JavaScript and is worth $3,000
```

***
## **E_**

###### 1. every()
```js
// every() method goes through an array and returns TRUE if ALL items pass the test or FALSE if not.
// EVERY ITEM has to pass the test
  // ex. var IQ = [99, 105, 138, 89]; or const IQ = [99, 105, 138, 89];
IQ.every(function(intelligence) {
  return intelligence >= 100;
})
// false
// ES6
IQ.every(intelligence => intelligence >= 75);
// true
```

***
## **F_**

###### 1. filter()
```js
// filter() returns a new array with elements that pass the certain condition
  // ex. return a new array with integers only
filter_list function(l) {
  l.filter(function(c) {
    return (typeof c == "number");
  })
}
// ES6
const filter_list = l => l.filter(c => (typeof c == "number"));
```

***
## **N_**
 ###### (2) Null & Undefined

`null` indicates a declared variable with "blank/ empty" value

`undefined` means that the variable is declared, but a value is not assigned.

```js
let car; // => undefined
let truck = null; // => null
```

***
## **O_**
 ###### (1) Object!

**What is object?**

Object consists of **keys** and **values**. Below is an example.

```js
let sampleObject = {
  key1: "value1",
  key2: "value2",
    .
    .
  key6: "value6"
}
```
**How to access/get values?**

```js
sampleObject["key1"] // => "value1"
sampleObject.key2 // => "value2"
```

**How to create a new property?**

```js
sampleObject["key5"] = "value5"
sampleObject.key6 = "value6"
sampleObject // => {key1: "value1", key2: "value2", . . ., key5: "value5", key6: "value6"}
```

 ###### (2) Object Constructor // a way to construct a new object
 ```js
 function Person(name, age) {
   this.name = name;
   this.age = age;
   this.info = function() {
     console.log(this.name + "'s age is " + this.age);
   }
 }
 const p = new Person('David', 29);
 const a = new Person('Cat', 35);
 console.log(p); // Person {name: "David", age: 29}
 console.log(a); // Person {name: "Cat", age: 35}

 p.info(); // => "David's age is 29"
 a.info(); // => "Cat's age is 35"
 ```
 
 **NOTE::** arrow function cannot have `this` in it

 **NOTE::** Constructor's name starts with a capital letter

***
## **P_**

###### 1. power a number
```js
Math.pow(base, exponent)
```

***
## **R_**

###### 1. replace()
```js
// remove commas
replace(/,/g, "")
```

###### 2. reverse()
```js
// this method reverses the order of elements in the array - original array affected
const IQ = [99, 105, 138, 89];
const.reverse(); // IQ = [89, 138, 105, 99];
```

###### 3. remove last digit(s) + remove last letter(s)/item(s)
```js
const int = 4210 / 10 | 0; // -> 421
const str = ("Hello World!").slice(0,-1); // -> "Hello World"
const arr = [0, 2, 5, 4, 21, 7];
arr.slice(-1); // -> [7];
```

***
## **S_**

###### 1. some()

```js
// checks if some elements are in the array and returns TRUE/FALSE - similar to `incldues()`
  // ex. var IQ = [99, 105, 138, 89]; or const IQ = [99, 105, 138, 89];
const IQ = [99, 105, 138, 89];
IQ.some(pass => pass > 100);
// true
```

###### 2. sort()

```js
// sorts items in the array -> can be alphabetical or numerical + ascending/descending - original array affected
const IQ = [99, 105, 138, 89];
IQ.sort((a,b) => a-b); // 89, 99, 105, 138
IQ.sort((a,b) => b-a); // 138, 105, 99, 89
```

###### 3. spread operator (...)
 
 ```js
 // is used for copying/combining arrays, using math functions, etc. [key=combine/union]
 let str = "This is a string!!";
 let arr1 = ["David", "Doe", "Hoon", "LEE"];
 let arr2 = ["Rabbit", "King"];
 let num = [-1, 2, 4, 21, 7, 3];
 
 console.log([...str]); // -> ["T", "h", "i", "s", " ", "i", "s", " ", "a", " ", "s", "t", "r", "i", "n", "g", "!", "!"];
 console.log([...arr1, ...arr2]); // -> ["David", "Doe", "Hoon", "LEE", "Rabbit", "King"];
 console.log(Math.max(...num)); // -> 21;
 ```
 **Note ::** Math.max() & Math.min() cannot be used with an array **

###### 4. String() & toString() methods

```js
// String()
String(undefined);
//  => "undefined"

// toString()
(16).toString();
// => "16"
(true).toString();
// => "true"
```

| method | input | return |
|   ---  |  ---  |  ----  |
| String() | anything | string |
| toString() | number or boolean | string|

**Note ::** String() takes any input and returns it as a string while toString() can only take number/boolean as inputs.

***
## **T_**

###### 1. Template literals
```js

const stockName = "JavaScript";
const amount = 4;
const worth = "$3,000";

console.log(`You are holding ${amount} of ${stockName} and is worth ${worth}`);
// => You are holding 4 of JavaScript and is worth $3,000
```
