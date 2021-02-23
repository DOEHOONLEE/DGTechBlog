---
title : "Rotate 2D Array"

categories:
      - Algorithm

tags:
    - JavaScript
    - Algorithm
---

> Author : Doe Hoon LEE

<hr>

#### How do I turn a 2 dimensional array?

![Clockwise]({{ site.url }}{{ site.baseurl }}/assets/img/post/clockwise.png)

Let's try rotating this given 2D array!

First, our output should look like this.

```js

answer = [
    [7,4,1],
    [8,5,2],
    [9,6,3]
]

```

[1]

Let's make an empty `answer` array to show our final answer. Also, declare row and col lengths.

```js
function rotateMatrix(matrix) {
    const answer = [];
    const row = matrix.length;
    const col = matrix[0].length;
}
```

[2]

What you want to do next is to grab elements in specific order in the direction of the arrow on the picture.

![Clockwise-Order]({{ site.url }}{{ site.baseurl }}/assets/img/post/clockwise-order.png)

For clockwise rotation,

1. The very first element's index would be

```js
matrix[matrix.length - 1][0];
```

2. So the first three elements we want should look like this

```js
const temp = [matrix[matrix.length - 1][0], matrix[matrix.length - 1 - 1][0], matrix[matrix.length - 1 - 2][0]];
```

[3]

Then, let's now put above concept into `for` loop !

```js
function rotateMatrix(matrix) {
    const answer = [];
    const row = matrix.length;
    const col = matrix[0].length;

    for (let i=0; i < col; i++) {
        // create temporary array;
        const temp = [];

        for (let j=0; j < row; j++) {
            temp.push(matrix[row-1-j][i]);
        }
        // finally, push temp array to answer array
        answer.push(temp);
    }

    return answer;
}
```

Oh?! but what if we want to rotate the array "counter-clockwise?!"

![Counter-Clockwise]({{ site.url }}{{ site.baseurl }}/assets/img/post/counter-clockwise-order.png)

[4]

The concept is very similar to clockwise rotation in step [2]. We only have to visit elements in a different order with different direction.

1. The very first element's index would be

```js
matrix[0][matrix.length - 1];
```

2. So the first three elements we want should look like this

```js
const temp = [matrix[0][matrix.length - 1], matrix[0+1][matrix.length - 1], matrix[0+2][matrix.length - 1]];
```

[5]

So counter-clockwise rotation would look like this.

```js
function rotateMatrixCounterClockwise(matrix) {
    const answer = [];
    const row = matrix.length;
    const col = matrix[0].length;

    for (let i=0; i < col; i++) {
        // create temporary array;
        const temp = [];

        for (let j=0; j < row; j++) {
            temp.push(matrix[j][row-1-i]);
        }
        // finally, push temp array to answer array
        answer.push(temp);
    }

    return answer;
}
```

[6]

Hmm, I am getting a bit lazy writing two different algorithms for rotation problem though..

Shall we put those two in one?

Let's have two arguements so that we can specify direction that we are rotating.

```js
function rotateMatrix(matrix, direction) {
    const answer = [];
    const row = matrix.length;
    const col = matrix[0].length;
}
```

[7]

and we put the same `for-loop`, but also include `if-statment` so that we rotate in the direction we want.

```js
function rotateMatrix(matrix, direction) {
    const answer = [];
    const row = matrix.length;
    const col = matrix[0].length;

    for (let i=0; i < col; i++) {
        // create temporary array;
        const temp = [];

        for (let j=0; j < row; j++) {
            if (direction === 'clockwise') {

            }
            else {

            }
        }
        // finally, push temp array to answer array
        answer.push(temp);
    }

    return answer;
}
```

[8]

Now, we fill in the for loop with the concept we learned in [2] and [4]

```js
function rotateMatrix(matrix, direction) {
  const answer = [];
  const row = matrix.length;
  const col = matrix[0].length;
  
  for (let i=0; i < col; i++) {
    // create temporary array;
    const temp = [];

    for (let j=0; j < row; j++) {
        if (direction === 'clockwise') {
            temp.push(matrix[row-1-j][i]);
        }
        else {
            temp.push(matrix[j][col-1-i]);
        }
    }
    // finally, push temp array to answer array
    answer.push(temp);
  }
  
  return answer;
}
```

[TEST]

Let's move to dev tool and test our algorithm!

![rotateMatrixOutput]({{ site.url }}{{ site.baseurl }}/assets/img/post/rotateMatrixOutput.png)

Thanks for following through!! Have fun developing!!