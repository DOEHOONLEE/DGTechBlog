---
title: "Read/Get Media File Info On Mac Terminal"

categories:
  - Linux

tags:
  - Linux
---

> Author: Doe Hoon LEE

##### How Do I Open Things with Mac Terminal?!

Why do we need to do this?

![open option]({{ site.url }}{{ site.baseurl }}/assets/img/post/openOption0.jpeg)

Well, I was always so annoyed by tapping that tiny little arrow and open `Applications`.

So let me introduce you to a simple and better way!!

###### Well, let's find out together!

[0] First, how do we open a folder??

`open`

Say again? YES, it is that simple~!

You only have type in the path of the folder you would like to open.

`open <path>`

For example,

`open /Documents/SampleFolder`

[1] Secondly, how do we then open applications??

Do we have to navigate to `Applications` folder?

Well, luckily, if we type in `open -help` on the terminal,

![open option]({{ site.url }}{{ site.baseurl }}/assets/img/post/openOption1.png)

we are going to use the very first option introduced in here: `-a`.

Try typing in `open -a terminal`.

Yay! new terminal opened!

[1-1] BUT to ensure that we know all the applications we have and to type in the terminal to open, let's see how we can check the list of applications.

`cd / && cd Applications && ls`

this will show the list of Applications you have installed.

[2] Shall we try opening an application and see if it works well?

`open -a Google Chrome`

![open option]({{ site.url }}{{ site.baseurl }}/assets/img/post/openOption2.png)

ooops!! What happened?!

Well, there's a space in Application name.. hmm.. what do we do?

`open -a 'Google Chrome'`

YAY!!