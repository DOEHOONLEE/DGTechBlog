---
title: "Four Different For Loooops!"

categories:
  - JavaScript
  - Algorithm

tags:
  - JavaScript
  - Algorithm
---

> Author: Doe Hoon LEE

##### Today, we are going to learn about for loop!

##### There are different ways to loop through arrays. Let me introduce four of them here.

### Here is the sample Array that we are going to use!

```js
var personArray = [
    {"name": "John Doe", "age": 20},
    {"name": "Jane Doe", "age": 19},
];
```

##### Regular For Loop!

for (let i=0; i < personArray.length; i++) {
    console.log(`His/her name is ${personArray[i].name}. He/She is ${personArray[i].age} years old.`);
}

#### For...Of

for (const person of personArray) {
    console.log(`His/her name is ${person.name}. He/She is ${person.age} years old.`);
}

#### For...In

for (const person in personArray) {
    console.log(`His/her name is ${personArray[person].name}. He/She is ${personArray[person].age} years old.`);
}

#### forEach()

personArray.forEach(person => {
    console.log(`His/her name is ${person.name}. He/She is ${person.age} years old.`);
})