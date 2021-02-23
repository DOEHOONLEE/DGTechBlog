---
title : "SQL Cheatsheet"

categories:
    - SQL

tags:
    - SQL
    - Database
---

## English


## **A_**

 (1) AVG()

 - a function that returns average value of a column (according to the condition given)

```sql
SELECT AVG([ColumnName1])
FROM [TableName]
-- WHERE Condition;
```

## **B_**

 (1) BETWEEN

 - returns rows where the records falls between A and B

```sql
SELECT [ColumnName]
FROM [TableName]
WHERE ColumnName BETWEEN Value1 AND Value2;
```


## **C_**

 (1) COUNT()

  - a function that returns number of rows (according to the condition given)

```sql
SELECT COUNT (DISTINCT [ColumnName]) 
FROM [TableName]
-- WHERE Condition;
```

## **D_**

 (1) DELETE

 - deletes a row according to the condition given

```sql
DELETE FROM [TableName]
WHERE condition;
```

 - this will delete all the rows unless you specify the condition

 (2) DISTINCT

 - selectively returns distinct/unique values only

```sql
SELECT DISTINCT [ColumnName1], [ColumnName2], ...
FROM [TableName];
```

 (3) DIFFERENCE

```SQL
SELECT COUNT([ColumnName1]) - COUNT([ColumnName2])
FROM [TableName];
```


## **I_**

 (1) INSERT INTO

 - insert new record in a table

```sql
INSERT INTO [TableName] ([ColumnName1], [ColumnName2], [ColumnName3], ...)
VALUES (Value1, Value2, Value3, ...);

```

## **L_**

 (1) LIKE

 - is used with WHERE specifying condition
 - selects records with given pattern

```sql
SELECT [ColumnName1], [ColumnName2], ...
FROM [TableName]
WHERE [ColumnName] LIKE pattern;
```

| LIKE + pattern | Looking For |
|---|---|
| LIKE 'a%' | value that starts with "a" |
| LIKE '%e' | value that ends with "e" |
| LIKE 'a%e' | value that starts with "a" and ends with "e" |
| LIKE '_t' | value where the 2nd letter is "t" |
| LIKE 't___' | value that starts with "t" and the length is 4 |
| LIKE 'a%' | value that starts with "a" |


## **M_**

 (1) MIN() & MAX()

 - a function that returns the smallest/largets value from the column

```sql
SELECT MIN([ColumnName1])
FROM [TableName];

SELECT MAX([ColumnName1])
FROM [TableName];
```


## **O_**

 (1) Operators - AND, OR, NOT, IN

```sql
SELECT [ColumnName1], [ColumnName2], ...
FROM [TableName]
WHERE condition1 AND | OR condition2;
```

```sql
SELECT [ColumnName1], [ColumnName2], ...
FROM [TableName]
WHERE NOT condition1;
```

 - IN allows multiple conditions in WHERE

```sql
SELECT [ColumnName]
FROM [TableName]
WHERE ColumnName IN (Value1, Value2, ...);
```

 (2) ORDER BY ASC (DESC)

 - it sorts records in ascedning/descending order

```sql
SELECT [CoumnName]
FROM [TableName]
ORDER BY [ColumnName] ASC | DESC;
```

## **S_**

 (1) SELECT

 - is used for extracting data you want
 - make sure to specify WHICH data you would like to get and WHERE you want it from

```sql
SELECT [ColumnName1], [ColumnName2], ...
FROM [TableName];
```

 (2) SUM()

 - a function that returns the total sum of values of a column

```sql
SELECT COUNT([ColumnName1)
FROM [TableName];
```

## **T_**
 
 (1) TOP

 - SELECTS TOP number of records

```sql
SELECT TOP 3 * FROM [ColumnName]
WHERE condition;

-- OR

SELECT * FROM [ColumnName]
WHERE condition
LIMIT 3;
```

## **U_**

 (1) UPDATE

 - updates records in a table

```sql
UPDATE [TableName]
SET ColumnName1=Value1, ColumnName2=Value2, ...
WHERE Condition;
```

**NOTE**!! if condition is not set, all the records will be updated!

## **W_**

 (1) WHERE

 - is used for conditionally selecting data

```sql
SELECT * FROM [ColumnName1]
WHERE Name='Seoul';
```

 - select data where Name = 'Seoul'

```sql
SELECT * FROM [ColumnName1]
WHERE Name<>'Seoul';
```

 - select data where Name is NOT 'Seoul'


## 한국어

SQL 치트시트
