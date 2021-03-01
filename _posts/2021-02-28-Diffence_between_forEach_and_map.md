---
title : "forEach와 map의 차이"

categories:
      - Algorithm
      - JAVASCRIPT

tags:
    - Javascript
---

> Author: Gidon Ryu

##### forEach의 형태

### Array.forEach( callBackFunction(currentValue, index, Array) )

forEach의 경우 배열의 값들을 가져와 읽는 역할을 합니다.
```js
const array=["apple","banana","melon"]
array.forEach(function(currentValue){
    console.log(currentValue);
})
//결과
//"apple"
//"banana"
//"melon"
```
다른 메서드들, 예를 들어 reduce와 map과 forEach의 큰 차이점은 콜백함수가 어떤 특정 값을 return하는 것이 아닌 undefined를 출력합니다.
따라서 배열과 관련해서 어떤 명령을 내리고 새로운 값을 유지하기 위해서는 함수 밖에 변수를 선언하여야 합니다.
```js
const array=[1,2,3]
let newArr=[];
array.forEach(function(currentValue){
    newArr.push(currentValue + 1);
})
console.log(newArr);
//결과
//[2,3,4]
```

##### Map의 형태

### Array.map( callBackFunction(currentValue, index, Array )

Map의 경우 각각의 값들을 읽어오는데 콜백함수에 따라서 값을 변경해줍니다.
```js
const array=[1,2,3]
const modified=array.map(function(currentValue){
    return currentValue + 1;
})
console.log(modified)
//결과
//[2,3,4]
```
하지만 기존의 배열을 변경하는 것이 아니기 때문에, 위와 같이 새로운 변수로 선언을 해주어야 변경된 값들이 유지될 수 있습니다.
```js
const array=[1,2,3]
const modified=array.map(function(currentValue){
    return currentValue + 1;
})
console.log(array)
//결과
//[1,2,3]
```