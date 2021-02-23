---
title : "Codewars <7kyu> 해설 (1)"

categories:
      - Algorithm

tags:
    - Algorithm
    - Codewars
    - 7kyu
    - 코드워즈
---

<hr>

## CodeWars - 자바스크립트

### (1) Highest and Lowest - 최대와 최소 구하기

> In this little assignment, you are given a string of space separated numbers,
>
> and have to return the highest and lowest number.
> 
> highAndLow("1 2 3 4 5"); return "5 1"
> 
> highAndLow("1 2 -3 4 5"); "5 -3"
> 
> highAndLow("1 9 3 4 -5"); "9 -5"
> 
> 주어진 문자열 내의 숫자들을 비교하여 가장 큰 숫자와
> 가장 작은 숫자를 문자열에 넣어 리턴해주시면 됩니다!
> 
> **NOTE** 숫자를 리턴하는게 아닌, 문자열타입으로 리턴해야 합니다!

**[문제 풀어보기](https://www.codewars.com/kata/554b4ac871d6813a03000035)**

```js
// [1]
function highAndLow(numbers) {
    // step 1. numbers 의 숫자들을 split() 으로 나눠 배열에 담는다
    const sorted = numbers.split(" ")
        // step 2. map() 을 사용하여 각 요소들을 숫자 데이터 타입으로 바꿔준다
        .map(c => +c)

        // step 3. sort() 를 이용하여 숫자들을 (작은 -> 큰) 순서로 나열한다
        .sort((a,b) => a-b);
    
    // step 4. 위의 배열에서 마지막 인덱스에 있는 요소 + 첫번째 요소를 리턴한다
    return (sorted[sorted.length - 1] + " " + sorted[0])
}

// [2] 친구가 사용한 방법
function highAndLow(numbers) {
    // step 1. [1] 번의 방법 처럼 numbers 를 split() 으로 나눔
    let numSplit = numbers.split("");

    // step2.  Math.max.apply 와 Math.min.apply 를 이용하여 최대값/최소값을 찾는다
    return Math.max.apply(null, cut) + " " + Math.min.apply(null, cut);

}
    // Math.max() 와 Math.min() 은 기본적으로 배열에 사용될 수 없고
    // 
    // 콤마로 나누어져 있는 arguments 에만 사용이 가능합니다.
    //
    // 배열을 적용시키고 싶은 경우에는!

    Math.max.apply(null, 배열);
    Math.min.apply(null, 배열);

    // OR!!

    Math.max.apply(...배열);
    Math.min.apply(...배열);

    // 이렇게 사용하시면 됩니다!
    // 배열 내의 요소들의 타입이 문자열이어도 최대/최소 값을 리턴합니다.
```


### (2) Shortest Word

> Simple, given a string of words, return the length of the shortest word(s).
>
> String will never be empty and you do not need to account for different data types.
>
> "bitcoin take over the world maybe who knows perhaps" // => 3
>
> 문자열 내에서 가장 짧은 단어를 리턴하는 문제입니다!

**[문제 풀어보기](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript)**

```js
function findShort(s){
  return s
        // step 1. 문자열 내의 단어들을 나누어 배열에 담았습니다
        .split(" ")

        // step 2. 배열의 요소를 요소의 길이로 변환하여 배열에 담습니다
        .map(c => c.length)

        // step 3. 길이의 값들을 오름차순으로 나열한 후 0번째 인덱스의 요소를 리턴합니다
        .sort((a,b) => a - b)[0];
}
```

### (3) Even Numbers in an array

> Given an array of digital numbers, return a new array of
>
> length number containing the last even numbers from the original array (in the same order).
>
> The original array will be not empty and will contain at least "number" even numbers.
>
> ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
> 
> 배열에 담긴 짝수의 숫자들만을 가진 새로운 배열을 리턴하는데,
>
> 기존 배열에서 역순으로 (number) 개 까지만 가지고 옵니다.

**[문제 풀어보기](https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript)**

```js
const evenNumbers = (array, number) =>
    array
    // step 1. 먼저 filter() 를 이용하여 짝수들만을 가진 새로운 배열을 만듭니다
    .filter(n =>

    // step 2. n % 2 의 값이 0 이면 짝수!
    // => if 문에 0 이 들어가면 false
    // => ! 를 이용해 !false => true 를 만들어줍니다
        !(n % 2)
    )
    // step 3. splice() 에서 마이너스 값을 넣으면 배열의 뒤에서부터 number 까지 요소들을 줍니다.
    .splice(-number)
```

### (4) Form the Largest

> Given a number , Return _The Maximum number _ could be formed from the digits of the number given.
>
> Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive
>
> Digit Duplications could occur , So also consider it when forming the Largest
>
> 주어진 숫자의 자리수를 바꾸어 만들 수 있는 가장 큰 수를 리턴하는 문제입니다.

**[문제 풀어보기](https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e/train/javascript)**

```js
// n = 213;
const maxNumber = (n) =>
// step 5. 아래 전체를 Number 로 감싸 숫자형태로 바꿉니다
    // step 1. 주어진 숫자를 문자열로 변환! // 213 => "213"
    Number((n+"")
    
    // step 2. split() 을 이용하여 문자열을 나누고 // "213" => ["2", "1", "3"]
        .split("")
    
    // step 3. sort() 를 이용하여 내림차순으로 나열합니다 // ["2", "1", "3"] => ["3", "2", "1"]
        .sort((a,b) =>
            b - a)
    
    // step 4. join() 을 이용하여 배열 => 하나의 문자열로
        .join(""));
```

### (5) Build a Square

> I will give you an integer. Give me back a shape that is as long and wide as the integer.
>
> The integer will be a whole number between 0 and 50.
>
> n = 3;
> 
> + + +
> + + +
> + + +
>
> 주어진 숫자 (int) 를 이용하여 int x int 의 크기를 갖는 정사각형을 리턴하는 문제입니다

**[문제 풀어보기](https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript)**

```js
// int = 3;
function generateShape(int){
    // step 1. 문자 "+" 를 int 만큼 반복하고 맨 끝에 \n 을 넣습니다 => "+++\n"
    return ("+".repeat(int)+"\n")
      
    // step 2. 위에서 만들어진 "+++\n" 를 다시 int 만큼 반복 => "+++\n+++\n+++\n"
    .repeat(int)

    // step 3. slice() 를 이용해 맨 마지막의 \n 을 제거합니다
    .slice(0,-1);
}
```

### (6) Exes and Ohs

> Check to see if a string has the same amount of 'x's and 'o's.
>
> The method must return a boolean and be case insensitive.
>
> The string can contain any char.
> Examples input/output:
>
> XO("ooxx") => true
> XO("xooxx") => false
> XO("ooxXm") => true
> XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
>
> 문자열 내에 "x" 와 "o" 의 개수가 같으면 true! 아니면 false! 문자열 내에 "x" 나 "o" 가 없다면 true! 를 리턴

```js
const XO = str => {
    let num = 0;
    str
    // step 1. split() 을 이용해 문자열을 나눕니다
    .split("")

    // step 2. forEach() 를 사용하여
    .forEach(c => {
        
        // step 3-1. 해당 문자.toLowerCase() 가 "x" 와 같다면 num++
        if (c.toLowerCase() == "x") {
            num++;
        }

        // step 3-2. 해당 문자.toLowerCase() 가 "o" 와 같다면 num--
        else if (c.toLowerCase() == "o") {
            num--;
        }
    });

    // step 4. num 이 0 이면 "x" 와 "o" 의 개수가 같음을 의미합니다
    // 개수가 같은 경우 true 를 리턴해야하기 때문에
    // !num
    return !(num);
}
```