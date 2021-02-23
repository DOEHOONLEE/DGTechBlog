---
title : "Codewars - Square Every Digit <7kyu>"

categories:
      - Algorithm

tags:
    - Algorithm
    - Codewars
    - 7kyu
    - 코드워즈
---

<hr>

> Author: Doe Hoon LEE

## Codewars Problem [JavaScript]

###### Solved on Oct. 11, 2019

> Welcome. In this kata, you are asked to square every digit of a number.
>
> For example, if we run 9119 through the function, 811181 will come out because 9 squared is 81 and 1 squared is 1.
>
> NOTE : The function accepts an integer and returns an integer.

<hr>

### Test_01

```js
function squareDigits(num){
    //may the code be with you
    // check if the number is an integer
    if (num % 1 === 0) {
        // convert the number to a string
        var NumToStr = num.toString();
        
        // number storage
        var NumStor = [];
        
        // get each digit of a number
        for (var x = 0; x < NumToStr.length; x++) {
        
        // get the number String and change it to a number
        var backToNum = parseInt(NumToStr[x]);
        
        // self squared
        var sqrdNum = backToNum * backToNum;
        
        // push it to the array
        NumStor.push(sqrdNum);
        }
        
        // join the elements in the array
        var joinedNum = NumStor.join();
        // remove commas
        var finalResult = joinedNum.replace(/,/g , "");
        
        return parseInt(finalResult);
    }
}
```
