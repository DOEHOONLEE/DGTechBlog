---
title: "How To Open Everything on Terminal (2)"

categories:
  - Linux

tags:
  - Linux
---

> Author: Doe Hoon LEE

In the previous post [How To Open Everything on Terminal (1)](https://doehoonlee.github.io/linux/How-To-Open-Everything-on-Terminal/), we learned how to open folder/applications using terminal.

Today, we will learn how to open files with VSCode.

For example, we can open a .html file like this!

`code sample.html`

Oops!! Seeing something like this?!

`command not found: code`

Let's open VSCode first then press `command` + `shift` + `p`.

Type in `shell` and click the very first one you see.

![open with VS code]({{ site.url }}{{ site.baseurl }}/assets/img/post/openVSCode.png)

Now, we are ready to use the command `code`!

Shall we go ahead and try again?

`code sample.html` !!

##### How about when we want to open the whole contents as a project/folder?

Easy! Instead of typing in a file name, type in the path to the folder

`code <projectFolderPath>`

:)