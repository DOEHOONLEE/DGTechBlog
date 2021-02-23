---
title : "Algorithm Dictionary"

categories:
      - Algorithm
tags:
    - Algorithm
---

## Algorithm Dictionary

### **A_**

### **B_**

 ###### (1) Brute Force Search (완전 탐색)

> Brute Force Algorithm
> 
> is where you take advantage of computer's fast calculation
> 
> and go through all the possibilities until the solution is found.
> 
> This can be used to find the most optimal solution.

컴퓨터의 빠른 계산 속도를 이용해, 가능한 모든 경우의 수를 연산하여 답을 찾아내는 알고리즘입니다.

답을 찾을 수 있는 가장 확실한 방법이지만, 그 답을 찾는데 가장 시간이 오래 걸리는 방법입니다.


 (2) Backtracking (백트랙킹)

 (3) Binary (이진 탐색)

> Called "Binary" because it keeps cutting a list in half
> 
> until you find the value you are looking for.

리스트가 정렬되어있다는 가정 하에 사용하며

리스트를 반으로 쪼개어 비교하는 과정을 반복하여 원하는 값을 찾아냅니다.

example.

'찾고자 하는 값 = 9' 인 경우

`let myArr = [1,2,3,4,5,6,7,8,9,10];`

 - 가운데에 있는 값을 선택 => 기준 = 5

    [비교] : (기준 = 5) < (찾는 값 = 9)

    찾는 값(9)이 기준(5)의 오른쪽에 있으니,

 - [6,7,8,9,10] 에서 가운데 있는 값을 선택 => 기준 = 8 

    [비교] : (기준 = 8) < (찾는 값 = 9)

    찾는 값(9)이 기준(8)의 오른쪽에 위치!

 - [9,10] 에서 가운데 있는 값을 선택 => 기준 = 9

    [비교] : 9 = 9

    해결!


 ###### (4) Bubble Sort (버블 정렬)

### **G_**

 ###### (1) Greedy (탐욕법)

### **L_**

 ###### (1) Linear Search (선형/순차 검색)

> 
> Used when you want to check element one by one sequentially
>
> until you find the value you are looking for.
> 

찾고자 하는 값이 나올 때까지 순차적으로 하나하나 비교하며 찾는 방법입니다.

### **R_**

 ###### (1) Recursive (재귀)

> Recursive Algorithm
> 
> An algorithm where it (directly/indirectly) calls itself

자기 자신을 호출 하는 알고리즘 기법.