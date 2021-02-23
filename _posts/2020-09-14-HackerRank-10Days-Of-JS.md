---
title : "HackerRank 10 Days of JS"

categories:
      - Algorithm

tags:
    - HackerRank
    - Algorithm
---

> Author: Doe Hoon LEE

## Day 0 : Hello, World!

> Task
>
> Use console.log() to print the parameter
>

```js
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable)
}
```


## Day 0 : Data Types

>
> (1) Convert 'secondInteger' to an integer(Number type), the sum it with 'firstInteger' and print the result on a new line using `console.log()`
> 
> (2) Convert 'secondDecimal' to a floating-point number (Number type), the sum it with 'firstDecimal' and print the result on a new line using `console.log()`
> 
> (3) Print the concatenation of 'firstString' and 'secondString' on a new line using `console.log()`
>

```js
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(firstInteger + Number(secondInteger));
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal + Number(secondDecimal));
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}
```

## Day 1 : Arithmetic Operators

> 
>getArea(length, width): Calculate and return the area of a rectangle having sides 'length' and 'width'.
> 
>getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides 'length' and 'width'.
> 
>The values returned by these functions are printed to stdout by locked stub code in the editor.
>

```js
// function calculating area
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

// function calculating perimeter
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width);
    return perimeter;
}
```

## Day 1 : Functions

>
> Implement a function named factorial that has one parameter: an ineger, n. It must return the value of n!
> 

```js
function factorial(num) {
    let array = [];
    for (let i=num; i > 0; i--) {
        array.push(i);
    };
    return array.reduce(function(a,b) {
        return a * b;
    }, 1);
}
```

## Day 2 : Let and Const

>
> 1. Declare a constant variable PI, and assign it the value of Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI(UPPERCASE)
> 
> 2. Read a number r, denoting the radius of a circle from stdin.
>
> 3. Using PI and r to calculate the area and perimeter of a circle having radius r.
> 
> 4. Print area as the first line of output and print perimeter as the second line of output.
>

```js
const r = readLine();
const PI = Math.PI;
// Print the area of the circle:
console.log(PI*(r**2));
// Print the perimeter of the circle:
console.log(2*PI*(r));
```

## Day 2 : Conditional Statements : If-Else

>
> If 25 < score <= 30, then grade = A.
> If 20 < score <= 25, then grade = B.
> If 15 < score <= 20, then grade = C.
> If 10 < score <= 15, then grade = D.
> If 5 < score <= 10, then grade = E.
> If 0 < score <= 5, then grade = F.
>

```js

```

## Day 2 : Loops

>
> Complete the vowelsAndConsonants function.
>
> 1. First, print each vowel in s on a new line. The English vowels are a, e, i, o, u, and each vowel must be printed in the same order as it appeared in s.
> 
> 2. Second, print each consonant (ie., non-vowel) in s on a new line in the same order as it appeared in s.
>

```js
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i=0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        }
    }
    for (let i=0; i < s.length; i++) {
        if (!vowels.includes(s[i])) {
            console.log(s[i]);
        }
    }
}
```