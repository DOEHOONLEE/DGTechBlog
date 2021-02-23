---
title : "Codewars <8kyu> 해설 (2)"

categories:
      - Algorithm

tags:
    - Algorithm
    - Codewars
    - 8kyu
    - 코드워즈
---

<hr>

## CodeWars - 자바스크립트

2020년 6월 29일 - 재미로 풀어본 8급 문제들

### (8) N-th Power

> This kata is from check py.checkio.org
> You are given an array with positive numbers and a number N.
> You should find the N-th power of the element in the array with the index N.
> If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
> Let's look at a few examples:
>
> array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
> 
> array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
>
> array 속 N 인덱스자리의 숫자를 N승 하여 리턴하는 문제입니다.
> 
> **NOTE!** N 인덱스가 array 에 존재하지 않는 경우에 -1 을 리턴!

```js
function index(array, n){
    // 삼항 연산자를 이용
  return (array.length - 1 < n) ? -1 : array[n]**n;
}
```
"삼항 연산자"와 "거듭제곱 계산" 관련은

**[2020-06-27 8kyu Problems](https://doehoonlee.github.io/algo/8ku-Problems/)** 의 6번 & 8번 문제 해설을 참고해주세요


### (9) Remove String Spaces

> Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
>
> 매개변수 number 가 홀수이면 Odd,
> 
> 짝수이면 Even 을 리턴하는 문제!

```js
function even_or_odd(number) {
    // if statement 에서 0 은 false 로, 음수나 소수점을 포함한 다른 숫자들은 true 로 인식됩니다.
  return (number%2) ? "Odd" : "Even";
}
```

### (10) Multiple of Index

> Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
>
>  Some cases::
> [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
> [68, -1, 1, -7, 10, 10] => [-1, 10]
> [-56,-85,72,-26,-14,76,-27,72,35,
> -21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
> 
> 해당 항목의 숫자가 해당 인덱스로 나누어지는 경우 새로운 배열에 넣어 리턴
>
> 예시::
> 
> 배열 =>  [22, -6, 32, 82, 9, 25]
> 
> 인덱스=> [ 0,  1,  2,  3, 4,  5]
> 
> -6 은 1 로 나누어짐 => 새 배열에 추가
> 
> 32 역시 2 로 나누어짐 => 새 배열에 추가
> 
> 25 도 5 로 나누어짐 => 추가!
> 
> 답!  =>  [-6, 32, 25]
```js
function multipleOfIndex(array) {
    // filter() 를 사용하여 풀어보았습니다.
    // filter() 는 주어진 조건을 통과하는 요소/항목들만을 모아 새로운 배열로 리턴해줍니다.
    // (c,i) 안에서 c 는 현재 요소/항목을, i 는 그 항목의 인덱스를 뜻합니다
    // 현재 항목을 인덱스로 나누었을 때의 나머지가 0 이라면 조건 통과!
  return array.filter((c,i) => c%i === 0);
}
```

filter() 의 사용법을 자세히 알고싶으면

**[JavaScript Tips](https://doehoonlee.github.io/JavaScript/)** 에서 filter() 를 참고해 주세요!


### (11) Third Angle of a Triangle

> You are given two angles (in degrees) of a triangle.
>
> Write a function to return the 3rd.
>
> Note: only positive integers will be tested.
>
> 음.. 두 각도가 주어지며 이를 이용해 삼각형을 만들고자 할 때 나머지 한 각도를 찾으면 됩니다.

너무 쉬운 문제를 골라왔나요..

```js
function otherAngle(a, b) {
  return 180-a-b;
}
```

### (12) A Needle in the Haystack

> Can you find the needle in the haystack?
> Write a function findNeedle() that takes an array full of junk but containing one "needle"
> After your function finds the needle it should return a message (as a string) that says:
> "found the needle at position " plus the index it found the needle, so:
> findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
> should return "found the needle at position 5"
> 
> 주어진 배열 내에서 "needle" 이라는 문자를 찾아 해당 인덱스를 리턴하여 주면 됩니다!

```js
function findNeedle(haystack) {
    // indexOf() 를 이용하여 해당 문자의 인덱스를 알 수 있습니다!
  return "found the needle at position " + haystack.indexOf("needle");
}
```

### (13) Is it a palindrome?

> Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.
> In Racket, the function is called palindrome?
>
> (palindrome? "nope") ; returns #false
> (palindrome? "Yay")  ; returns #true
>
> 코딩 문제로 유명합니다!
> 
> 문자를 뒤집었을 때 같으면 true! 아니라면 false 를 출력!

대소문자를 구분하는 문제였으면 더 어려웠을텐데 해당 문제는 8급이라 그런지 대소문자를 구분하지 않았습니다.
여기서는 대소문자를 구분하지 않아야 문제를 통과합니다!

```js
function isPalindrome(x) {
  let toLower = x.toLowerCase();
  return (toLower === toLower.split("").reverse().join("")) ? true : false;
}

// 우선, reverse() 는 문자열에 사용될 수 없기 때문에 split("") 을 이용하여 배열로 변화해줍니다!
// 예시::
// "Abba".split("") // => ["A", "b", "b", "a"]
// reverse() 를 이용하여 배열의 순서를 뒤바꿔줍니다
// ["A", "b", "b", "a"].reverse() // => ["a", "b", "b", "A"]
// 배열을 다시 문자열로 바꾸기 위해 join("") 을 사용합니다
// ["a", "b", "b", "A"].join("") // => "abbA"
```

### 위 포스트에서 틀린부분이 있거나 더 좋은 방법이 있는 분들은 댓글로 알려주세요!

다음번에는 코드워즈 7급 문제들을 풀어보겠습니다!