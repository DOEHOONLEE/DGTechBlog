---
title : "Functional Programming"

categories:
      - General

tags:
    - Functional Programming
    - JavaScript
---

> Author: Doe Hoon LEE

#### [한글버전](#kor-ver) <- 클릭!


### English Ver.


## What is it about? 

##### 1. Pure Functions

- Functions should not have side effects

- Do not use globally defined variables to compute its output

- Functions should compute output depending on its input (=> with the same input, it always returns the same output)


NOT FUNCTIONAL

```js
const name = "Green Apple"
const num = 19;
console.log(`${name} is ${name} years old`); // => "Green Apple is 19 years old"
```

Functional

```js
function background(name, age) {
    console.log(`${name} is ${name} years old`);
}

background("Green Apple",19); // => "Green Apple is 19 years old"
```


##### 2. Higher Order Functions

- Higher-Order function takes a function as an argument or returns a function or both


##### 3. Avoiding Side-Effects

- Do NOT modify global variables

- Do NOT write/log to screen/console

- Do NOT write to network

- Do NOT triger any external process


##### 4. Avoiding Mutability

- Data should not be modified after it is created


##### 5. Avoiding Iteration (like for loop)

- Use higher order functions like map(), reduce(), filter(), forEach() instead of for loop

| methods | Description |
| --- | --- |
| `map()` | Creates a new array with elements resulted from calling a provided function |
| `reduce()` | Takes an array and reduces to a single value |
| `filter()` | Creates a new array with elements that passes the given condition |
| `forEach()` | Calls a function for each element visited |

## What is so good about functional programming?

- Enhanced readability

- Easier to test

- More predictable

- Better reusability