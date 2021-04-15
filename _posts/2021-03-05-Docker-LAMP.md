---
title: "Setup Docker for LAMP!"

categories:
  - Docker
  - Linux

tags:
  - Linux
  - Docker
  - LAMP
---

#### This shows the steps to setup LAMP environment with Docker

##### What is LAMP?

#### LAMP stands for Linux Apache MySQL PHP

##### You can simply git clone [https://github.com/DOEHOONLEE/dockerLAMP.git](https://github.com/DOEHOONLEE/dockerLAMP.git) or try typing in the following steps!

### 1. Project Structure

![Project Structure]({{ site.url }}{{ site.baseurl }}/assets/img/post/lampSetup/projectStructure.png)

 1. Create directories `php` and `www`

 2. Create a Docker file `Dockerfile` in `php` directory

 3. Create a file `docker-compose.yml` in the root directory

 4. Create `index.php` in `www` directory

 5. Create `.env` in root directory [this can be skipped if you do not want to use environment variables]

### 2. In `Dockerfile` inside `php` directory, we will write

![PHP Dockerfile]({{ site.url }}{{ site.baseurl }}/assets/img/post/lampSetup/phpDOCKERFILE.png)

### 3. `index.php` within the `www` directory looks like this

![indexPHP]({{ site.url }}{{ site.baseurl }}/assets/img/post/lampSetup/indexPHP.png)

### 4. Now, the most interesting one: `docker-compose.yml`

![Docker Compose]({{ site.url }}{{ site.baseurl }}/assets/img/post/lampSetup/dockerCompose.png)

You can use different names for DATABASE, user, password, or even ports if you want to. Also, again, you do not have to use environment variables like in the picture.

(See step 9 for environment variables)

### 5. We are now all set! Let's test it out!

![Compose Build]({{ site.url }}{{ site.baseurl }}/assets/img/post/lampSetup/composeBuild.png)

type in `docker-compose up --build` and test if it works!

### 6. Check if all containers are running smoothly!

type in `docker ps`

![dockerPS]({{ site.url }}{{ site.baseurl }}/assets/img/post/lampSetup/dockerPS.png)

### 7. Go to `localhost`

![localhost]({{ site.url }}{{ site.baseurl }}/assets/img/post/lampSetup/localhost.png)

You should see `Connected to MySQL successfully!`

### 8. Test if `phpmyadmin` is working

Go to `localhost:8080`

![phpmyadmin]({{ site.url }}{{ site.baseurl }}/assets/img/post/lampSetup/phpmyadmin.png)

### 9. In case you want to use environment variables

![env]({{ site.url }}{{ site.baseurl }}/assets/img/post/lampSetup/env.png)

### 10. To stop the service,

type in `docker-compose stop`

![Docker Compose Stop]({{ site.url }}{{ site.baseurl }}/assets/img/post/lampSetup/dockerStop.png)
