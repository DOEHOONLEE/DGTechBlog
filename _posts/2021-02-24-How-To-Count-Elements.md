---
title : "How To Count Elements"

categories:
      - Algorithm

tags:
    - JavaScript
    - Algorithm
---

> Author : Doe Hoon LEE

<hr>

### How Do We Count Number of Items in an Array?

```js
const givenAlphabets =  ["A", "B", "A", "C", "B", "B", "A", "S", "C", "B", "C", "A", "D", "S"];
const givenNums = [1,8,4,6,3,5,2,6,3,8,9,10,10,2,2,2,4,5];
```

##### There are several ways you can count occurrences or frequency of elements

##### Let's try one way with `givenAlphabets` array

##### We will first sort the array

```js
function freq(arr) {
    arr.sort();
    // arr => ["A", "A", "A", "A", "B", "B", "B", "B", "C", "C", "C", "D", "S", "S"];
}
```

##### Then we loop through the array and start counting

##### When we hit an element that is different from the previous one, we will push `[currentElement, count]` to the `answer` array

```js
function freq(arr) {
    let count = 1;
    const answer = [];
    arr.sort();
    // arr => ["A", "A", "A", "A", "B", "B", "B", "B", "C", "C", "C", "D", "S", "S"];

    for (let i=0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            answer.push([arr[i], count]);
            count = 1;
        }
        else {
            count++;
        }
    }
    return answer;
}
```

##### Let's move onto Dev Tool and see if it works

![Alphabet-Count]({{ site.url }}{{ site.baseurl }}/assets/img/post/alphaCount.png)

##### How about counting num frequency though?

```js
const givenNums = [1,8,4,6,3,5,2,6,3,8,9,10,10,2,2,2,4,5];
givenNums.sort() // => [1, 10, 10, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9];
```

##### The thing is that you cannot sort numbers this way

##### So we will have to add something to it

```js
givenNums.sort((a,b) => a - b) // => [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 10, 10];
```

##### Now, we apply the same logic to this sorted array

```js
function freq(arr) {
    let count = 1;
    const answer = [];
    arr.sort((a,b) => a - b);
    // arr => [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 10, 10];

    for (let i=0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            answer.push([arr[i], count]);
            count = 1;
        }
        else {
            count++;
        }
    }

    return answer;
}
```

##### Of course, though, this is one of the ways you can count items in an array, but this isn't really my thing.. Yes. I am lazy :)

##### Also, sort() messes up the original array unless you use the copy of the original (see post on sort()).

##### This is my personal way of counting items.

```js
function occurence(arr) {
    const counter = {};

    for (let i=0; i < arr.length; i++) {
        counter[arr[i]] = counter[arr[i]] + 1 || 1;
    }

    return counter;
}
```

##### What does it do?

##### First, we create an empty array

##### Then we go through the given array with a `for` loop

##### If object `counter` does not have the key `arr[i]`, we give assign it with value of 1

##### If it does have the key `arr[i]`, then we will add 1 to its value

##### So this is what you get !

![Count-With-Object]({{ site.url }}{{ site.baseurl }}/assets/img/post/countWithObject.png)


### Thanks for studying with me! Have fun developing!! :D