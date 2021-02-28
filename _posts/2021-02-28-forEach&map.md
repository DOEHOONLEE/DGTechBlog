---
title : "forEach와 map의 차이"

categories:
      - Algorithm
      - JAVASCRIPT

tags:
    - Javascript
---

##### forEach의 형태

```js
Array.forEach( callBackFunction(currentValue, index, Array) )
```

forEach의 경우 배열의 값들을 가져와 읽는 역할을 합니다. 배열과 관련해서 어떤 명령을 내리고 새로운 값을 유지하기 위해서는 함수 밖에 변수를 선언하여야 합니다.

##### Map의 형태

```js
Array.map( callBackFunction(currentValue, index, Array )
```

Map의 경우 각각의 값들을 읽어오는데 콜백함수에 따라서 값을 변경해줍니다. 하지만 기존의 배열을 변경하는 것이 아니기 때문에 새로운 변수로 선언을 해주어야 변경된 값들이 유지될 수 있습니다.
