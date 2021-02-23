---
title : "Programmers (프로그래머스) SQL Challenge Part1 SELECT"

categories:
      - Algorithm
      - SQL

tags:
    - Programmers
    - 프로그래머스
    - SQL
---

#### [한글버전](#kor-ver) <- 클릭!


### English Ver.

>
> As always, I would love your opinions and corrections on my posts.
>
> Please comment! Thanks!
>

##### 1. Look Up All the Records

The table `ANIMAL_INS` has records of animals that came to the shelter.

Here is the `ANIMAL_INS` table structure.

ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE indicate animal's ID, type, admitted date, sex upon arrival.

| NAME | TYPE | NULLABLE |
|  --- |  --- |    ---   |
| ANIMAL_ID | VARCHAR(N) | FALSE |
| ANIMAL_TYPE | VARCHAR(N) | FALSE |
| DATETIME | DATETIME FALSE |
| INTAKE_CONDITION | VARCHAR(N) | FALSE |
| NAME | VARCHAR(N) | TRUE |
| SEX_UPON_INTAKE |  VARCHAR(N) | FALSE |


**Task.**

Please return all animals' records and the result should be sorted by ANIMAL_ID.

**Solution.**

```sql
SELECT * -- select all records
FROM ANIMAL_INS -- from the table ANIMAL_INS
ORDER BY ANIMAL_ID ASC; -- and sort the result by ANIMAL_ID alphabetically
```

##### 2. Reverse Sort

For this problem, we are using the same table with the same records, but the result will be reversed.

**Task.**

Please return all animals' records and sort them by descending ANIMAL_ID.

**Solution.**

```sql
SELECT * -- select all records
FROM ANIMAL_INS -- from the table ANIMAL_INS
ORDER BY ANIMAL_ID DESC; -- and sort the result by ANIMAL_ID descending alphabetical order
```

##### 3. Find Sick Animals

**Task.**

Please return IDs and names of sick animals. The result should be sorted by ID.

**Solution.**

```sql
SELECT ANIMAL_ID, NAME -- select animal IDs and names
FROM ANIMAL_INS -- from the table named ANIMAL_INS
WHERE INTAKE_CONDITION = 'Sick'; -- where animal's condition is 'Sick'
```

##### 4. Find Young Animals

**Task.**

Please return IDs and names of "young" animals. The result should be sorted by ID.

**Solution.**

```sql
SELECT ANIMAL_ID, NAME -- select animal IDs and names
FROM ANIMAL_INS -- from the table named ANIMAL_INS
WHERE INTAKE_CONDITION <> 'Aged' -- where animal's condition is not 'Aged';
```

##### 5. Animal ID and Name

**Task.**

Please return IDs and names and sort by ANIMAL_ID.

**Solution.**

```sql
SELECT ANIMAL_ID, NAME -- grab IDs and names
FROM ANIMAL_INS -- from the talbe named ANIMAL_INS
ORDER BY ANIMAL_ID; -- and sort them by ID
```

##### 6. Sort By Multiple Conditions

**Task.**

Please return IDs, names, admitted date, and sort them by name.

Also, animals with the same type should be sorted by descending admitted date.

**Example.**

When there are two animals with the same type like this

| ANIMAL_ID | ANIMAL_TYPE | DATETIME | INTAKE_CONDITION | NAME | SEX_UPON_INTAKE |
| A410668 | Cat | 2015-11-19 13:41:00 | Normal | Raven | Spayed Female |
| A396810 | Dog | 2016-08-22 16:13:00 | Injured | Raven | Spayed Female |

You should return

| ANIMAL_ID | NAME | DATETIME |
|    ---    |  --- |    ---   |
| A396810 | Raven | 2016-08-22 16:13:00 |
| A410668 | Raven | 2015-11-19 13:41:00 |

**Solution.**

```sql
SELECT ANIMAL_ID, NAME, DATETIME -- get IDs, names, admission date
FROM ANIMAL_INS -- from the table named ANIMAL_INS
ORDER BY NAME, DATETIME desc; -- and sort them by name alphabetically and by descending DATETIME
```

##### 7. Top n Records

**Task.**

Please return the name of the animal who's been staying at the shelter the longest (the one that got admitted first).

**Solution.**

```sql
SELECT NAME -- get names
FROM ANIMAL_INS -- from the table named ANIMAL_INS
ORDER BY DATETIME limit 1; -- sort by date and get 1 record from the top
```
Note. See how to use **[TOP](#t)**.

<hr>

### KOR Ver.