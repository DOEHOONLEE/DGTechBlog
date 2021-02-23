---
title: "What is -rw-rw-r-- ?!"

categories:
  - Linux

tags:
  - Linux
---

<hr>

> Author: Doe Hoon LEE

#### Linux Permission and Ownership

When you type `ls -l` on your terminal, you are going to see something like this

![File and Directory Information]({{ site.url }}{{ site.baseurl }}/assets/img/post/rw-rw-r--.png)

- What is `ls` ?

* `ls` is short for 'list'

* simple `ls` shows visible contents of the current directory

* option `-l` will show permissions

* option `-al` will show contents including hidden files

Let's dig more into it then?

| #   | Field         | What is this ?                                                  |
| --- | ------------- | --------------------------------------------------------------- |
| 1   | -rw-rw-r--    | - indicates file permission <br /> - `-` indicates regular file |
| 2   | 1             | number of hard link(s)                                          |
| 3   | ec2-user      | User ownership                                                  |
| 4   | ec2-user      | Group ownership                                                 |
| 5   | 0             | file size                                                       |
| 6   | Feb 23 08:05  | Last modified date                                              |
| 7   | tutorial.text | name of file/directory                                          |

#### Permission

- The very first field of Permission indicates type of the content

| Symbol | Type             |
| ------ | ---------------- |
| -      | regular file     |
| d      | directory        |
| b      | block device     |
| c      | character device |
| l      | symlink          |
| p      | pipe             |
| s      | socket           |

- From second to last indicate categories and accesses

* There are two ways to represent permission: symbolic and numeric

* r(read) : read the contents of the file

* w(write) : write or modify the file/directory

* x(execute) : execute or view contents

|               | Owner |     |     | Group |     |     | Others |     |     |
| ------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Symbolic mode |  r  |  w  |  x  |  r  |  w  |  x  |  r |  -  |  -  |
| Numeric mode  |  4  |  2  |  1  |  4  |  2  |  1  |  4 |  0  |  0  |

- Each numerics are added to see each category's accessibility (ex. 664 or 777)

- Let's go back to the terminal and check tutorial.txt !

![File and Directory Information]({{ site.url }}{{ site.baseurl }}/assets/img/post/rw-rw-r--.png)

`-rw-rw-r-- 1 ec2-user ec2-user 0 Feb 23 08:05 tutorial.txt`

- Can you now tell what this means?

* `-rw-rw-r--`

This means the owner has the ability to 'read' and 'write', but other(s) can only read

This can be rewritten in numeric mode

|               | Owner |     |     | Group |     |     | Others |     |     |
| ------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Symbolic mode |  r  |  w  |  -  |  r  |  w  |  -  |  r  |  -  |  -  |
| Numeric mode  |  4  |  2  |  0  |  4  |  2  |  0  |  4  |  0  |  0  |
| Sum           |     |  6  |     |     |  6  |     |     |  6  |     |

- `1`

There is one hard link attached to it

- The first `ec2-user` is owner name

- The second `ec2-user` is owner group

- `0`

File size is zero

- `Feb 23 08:05`

This file was last modified on Feb 23rd at 08:05

- `tutorial.txt`

Name of this file is `tutorial.txt`
