---
title : "What Happens After You Type in URL"

categories:
      - General

tags:
    - General
    - Interview Prep
---

> Author: Doe Hoon

<hr>

Have you wondered what happens after you type in a URL in a browser?

This is one of the mostly asked question in an interview too!


DNS (Domain Name System) converts domain name into IP addresses so that computers can understand.

1. We type in a URL !

    * If addresses were all in numbers (IP addresses), we wouldn't be able to recognize or remember them well.

and this is what #2 is for

2. Browser looks for IP address through DNS

Once the IP address is confirmed, we start communication now!

To access the web server, we need IP and port(80)

3. HTTP request to the server

    * The request is made with the following methods so that we know what it is for
        * GET
        * POST
        * PUT
        * HEAD
        * PATCH
        * DELETE
        * *difference between PATCH and PUT
            * PATCH is used when specific/some part is modified only
            * PUT is used when the whole part needs to be updated

4. HTTP response

    * HTTP response contains
        * status line
            * 1xx - Informational
            * 2xx - Success
            * 3xx - Redirection
            * 4xx - Client Error
            * 5xx - Server Error
        * HTTP headers
        * message body

5. Browsers begins building DOM.

    * HTML parsing
    * when it reaches link/script tag, it stops HTML parsing and starts CSS parsing or images or reads JS code
    * then when it is done, it goes back to HTML parsing

    * in DOM, every entity is considered as node
        * head, body, title, h1, etc. and even attributes and properties are nodes.