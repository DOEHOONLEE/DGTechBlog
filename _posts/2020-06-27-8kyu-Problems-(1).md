---
title : "Codewars <8kyu> 해설 (1)"

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

2020년 6월 27일 - 재미로 풀어본 8급 문제들

### (1) Convert a string to an array

> "Robin Singh" ==> ["Robin", "Singh"]
> "I love arrays they are my favorite"
> ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
> 
> 주어진 문자열을 배열로 바꾸는 문제!

```js
var stringToNumber = function(str){
  // 문자열 앞에 [" + "] 를 붙이면 숫자로 바뀝니다
  return +str;
}
```

`typeof +"421" // => String`


### (2) Remove String Spaces

> Simple, remove the spaces from the string, then return the resultant string.
>
> 문자열 안의 space들을 없애는 문제입니다.

```js
function noSpace(x){
  return x.replace(/ /g, "");
}

function noSpace(x){
  return x.replace(/\s/g, '');
}
// regex에서 \s 는 whitespace 를 뜻 합니다.
// remind 하려고 써봤습니다.
```

### (3) Reversed Words

> Complete the solution so that it reverses all of the words within the string passed in.
> reverseWords("The greatest victory is that which requires no battle")
> should return "battle no requires which that is victory greatest The"
> 
> 문자열 안에 나열된 단어들의 위치를 뒤집는 문제입니다.

```js
function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}
// split() 사용 시 문자열을 배열로 바꾸어 내보냅니다.
// NOTE!
// split() 괄호 안에서 문자열을 나누는 기준을 정합니다.
// 혹시 split("") 를 사용하게 되면 
// "A ABC ABCD".split("") => ["A", " ", "A", "B", " ", "A", "B", "C", "D"] 가 됩니다.
// 이처럼 알파벳을 기준으로 자르는게 아니라

// 문제에서는 단어가 필요 하기 때문에 split(" ") 을 이용합니다!
// "A ABC ABCD".split(" ") => ["A", "ABC", "ABCD"] 

// 반대로 join() 은 배열을 문자열로 리턴합니다.
// join() 괄호 안에서 문자열을 합치는 기준을 정합니다.
// join("") 은
// ["A", "ABC", "ABCD"].join("") => "AABCABCD" 가 되어버립니다.

// 문제에서 단어들 사이에 whitespace가 있으니까
// join(" ") 을 사용하도록 합니다.

// reverse() 은 배열을 받아와 배열 안의 element들을 뒤집어 리턴합니다.
```


### (4) Character Frequency

> [Description]
> Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!
>
> [Explanation]
>
> Your function will be called char_freq/charFreq/CharFreq
>
> and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters
>
> and as values how many times that character is in the string. You can assume you will be given valid input.
>
> charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}
> 
> 주어진 문자열 내에서 문자별 반복 횟수를 알아내는 문제입니다.
>
> 답은 객체로 리턴합니다
>
> NOTE! 문제 내에서는 빈 공간의 수도 카운트 했습니다!

```js
function charFreq(message) {
  let answer = {};
  for (let i=0; i<message.length; i++) {
    const char = message[i];
    if (answer[char]) {
      answer[char] += 1;
    }
    else {
      answer[char] = 1;
    }
  }
  return answer;
}

// 또는

function charFreq(message) {
  let answer = {};
  for (let i=0; i<message.length; i++) {
    const char = message[i];
    answer[char] = answer[char] + 1 || 1;
  }
  return answer;
}

// 객체에 새로운 key 를 부여하는 방법 중 하나
// answer["나는 Key!"] = "나는 value!" //=> answer = {나는 key!: "나는 value!!"}

// answer[char] 가 존재한다면
if (answer[char]) {

    // 이 key 의 value 에 1을 더한다
    answer[char] += 1;
}
else {

    // 존재하지 않는다면 이 키를 새롭게 추가하고 값으로 1을 부여한다
    answer[char] = 1;
}
```

###### 객체에 대한 개념을 모르면 풀기 귀찮아지는 문제일지도..
###### 공개된 solutions 보면 정말 다양한 방법들로 풀어놨다 :O


### (5) Century From Year

> Introduction
> The first century spans from the year 1 up to and including the year 100, The second 
> from the year 101 up to and including the year 200, etc.
> 
> Input, Output Examples ::
> centuryFromYear(1705)  returns (18)
> centuryFromYear(1900)  returns (19)
> centuryFromYear(1601)  returns (17)
> centuryFromYear(2000)  returns (20)
>
> 년도가 주어지면 해당 년도의 "세기"를 리턴하는 문제입니다.

```js
const century = (year) => Math.floor(year/100) + (year % 100 ? 1 : 0);

// 소수점을 없애는 방법에는 여러가지가 있지만
// 문제에서는 Math.floor() 를 사용
// 이것도 귀찮거나 기억 안 난다면
// 숫자 | 0 을 사용 할 수 있다.
// 예시 ::
// 15.348923 | 0 // => 15 
```

### (6) Area or Perimeter

> You are given the length and width of a 4-sided polygon.
>
> The polygon can either be a rectangle or a square.
>
> If it is a square, return its area. If it is a rectangle, return its perimeter.
>
> area_or_perimeter(6, 10) --> 32
>
> area_or_perimeter(4, 4) --> 16
>
> Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
>
> 정사각형인 경우 넓이를, 직사각형인 경우 총 길이를 리턴하는 문제

```js
const areaOrPerimeter = function(l , w) {
  return (l === w) ? l*w : 2 * (l + w);
};

// 간단히 삼항 연산자를 이용하여 풀었습니다.
// (괄호안의 값이) ? true 이면 이 부분을 : false 이면 이 부분을 리턴
```

### (7) 5 Without Numbers!

> Write a function that always returns 5
>
> Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
>
> 조금 당황스러운 문제입니다.. ^^;
> 
> 그냥 무조건 5를 리턴하면 되는 문제! 인데..

```js
function unusualFive() {
  return "AAAAA".length;
}
// 다른 사람들의 solutions를 보면
// 역시 대부분 length 를 이용하여 풀었습니다...
```

### (8) Calculate BMI!

> Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
> 
> if bmi <= 18.5 return "Underweight"
> 
> if bmi <= 25.0 return "Normal"
> 
> if bmi <= 30.0 return "Overweight"
> 
> if bmi > 30 return "Obese"
>
> BMI 를 계산하여 값에 따라 Underweight/ Normal/ Overweight/ Obese 를 리턴하면 됩니다.

```js
function bmi(weight, height) {
  let resBMI = weight / (height**2);
  if (resBMI <= 18.5) {
    return "Underweight";
  }
  else if (resBMI <= 25) {
    return "Normal";
  }
  else if (resBMI <= 30) {
    return "Overweight";
  }
  else {
    return "Obese";
  }
}
// 더 간단하게 만들 수 없을까 고민 해보고 업데이트 하겠습니다.
// 후.. 한국어로 뭐라고 하는지 기억이 안 나지요
// 거듭제곱?? 을 구하는 방법에는
// Math.pow(base, exponent) 가 있는데
// base ^ exponent 의 값을 리턴해줍니다.
// 이걸 간단하게 쓰면
//
// 위의 문제에서처럼
// base ** exponent 로 표현 할 수 있습니다!
```

### 위 포스트에서 틀린부분이 있거나 더 좋은 방법이 있는 분들은 댓글로 알려주세요!

