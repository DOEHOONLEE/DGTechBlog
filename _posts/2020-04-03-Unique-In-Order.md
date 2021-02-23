---
title : "Codewars - Unique In Order <6kyu>"

categories:
    - Algorithm

tags:
    - Algorithm
    - Codewars
    - 6kyu
    - 코드워즈
---

<hr>

> Author: Doe Hoon LEE

## Codewars Problem [JavaScript]

###### Solved on Apr. 3rd, 2020

> Implement the function unique_in_order which takes as argument a sequence
>
> and returns a list of items without any elements with the same value next to each other
>
> and preserving the original order of elements.
> For example:
>
> uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
>
> uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
>
> uniqueInOrder([1,2,2,3,3])       == [1,2,3]

<hr>

### Test_01

```js
var uniqueInOrder = function(iterable) {
    var arr = [];
    for (var i=0;i<iterable.length;i++) {

    // check if there is back to back letter
    if (iterable[i] !== iterable[i+1]) {

        // if not, push the current value to arr
      arr.push(iterable[i]);
    }
  }
  return arr;
}
```

### Test_02

```js
var uniqueInOrder = function(iterable){
  return (typeof iterable == "object") ? iterable.filter((v,i,a) => a[i] !== a[i+1]) : iterable.split("").filter((v,i,a) => a[i] !== a[i+1]);
}
```

### 1. check given input type -> object/array or string

```
(typeof iterable == "object")
```

### 2. filter and return a new array with values that are not given back to back

```
filter((v,i,a) => a[i] !== a[a+1])
```

* Please **NOTE** that `filter()` method returns a new array with elements that PASS the test

* Here are some similar methods

| methods | Description | Returns | Argument
| --- | --- | --- | --- |
| `every()` | EVERY item has to pass the test | TRUE/FALSE | 
| `some()` | SOME item has to pass the test | TRUE/FALSE | `function`
| `includes()` | checks if the array has certain string | TRUE/FALSE | `string`
| `filter()` | check for elements that pass the test | `new array` | 
| `map()` | similar to filter(), but modifies items | `new array`| 

* Please **NOTE** that `every()`, `some()`, `includes()` methods return `true` or `false` !
* `filter()`, `map()` return **new array**