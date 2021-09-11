---
title: "Read/Get Media File Info On Mac Terminal"

categories:
  - Linux

tags:
  - Linux
---

> Author: Doe Hoon LEE

##### Read/Get Media File Info On Mac Terminal?!

Let's first get the tool we need!

```bash
brew install media-info
```

###### How do we use this?

```bash
mediainfo <path-to-the-file>
```

you would then get something like this

![mediainfo output]({{ site.url }}{{ site.baseurl }}/assets/img/post/mediaInfo.png)

It shows things like

* file name

* format

* duration

* created date

* etc..

##### What if I would like to get info of all media files in a directory?

```bash
for file in /Users/userName/Directory/*; do mediainfo $file; done
```

##### Wait a second! I see too many unnecessary extra information.

##### Can I see what I need only? SURE you can!

```bash
for file in /Users/userName/Directory/*; do mediainfo $file | grep 'Duration' | head -n 1; done
```

##### Next time, we will find out how we can get the total duration within a folder!

See you again!