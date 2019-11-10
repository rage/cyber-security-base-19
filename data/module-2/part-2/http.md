---
path: '/module-2.2/3-http'
title: 'The HTTP protocol'
hidden: false
---


Almost everything that we've done so far has relied on the HTTP protocol. The HTTP protocol is the protocol that browsers and servers use for communication. It defines eight separate request methods, from which the `GET` and `POST` are most widely used. Each request method has a set of restrictions and suggestions on the content of the message and on how the message should be processed by the server. For example, [Java Servlet API (version 2.5)](http://jcp.org/aboutJava/communityprocess/mrel/jsr154/index2.html) includes the following suggestion for handling the normal GET requests, i.e. the ones that users use for retrieving data.

_The GET method should be safe, that is, without any side effects for which users are held responsible. For example, most form queries have no side effects. If a client request is intended to change stored data, the request should use some other HTTP method._

#### Data is retrieved using the GET method

The GET method is used for retrieving data. When you type in an address to the
browser input field and press enter, the browser performs a GET request. No
additional parameters are required. In the protocol, assuming that we are using
HTTP/1.1, information on the host machine needs to be sent as well -- this is
needed so that each server can handle multiple domains.

```HTTP
GET /page.html HTTP/1.1
Host: f-secure.com

```

We have used the `@RequestMapping` annotation for handling GET requests that
are sent to the server. Actually, the same annotation can be used for any of
the HTTP request methods; the annotation can be configured using attributes.
For example, the following annotation would capture GET requests to the path
"/salmiakki": `@RequestMapping(value = "/salmiakki", method = RequestMethod.GET)`.


#### Data is sent using the POST method

The practical difference between the POST and GET requests is that whilst GET
methods may contain information within the path and the request parameters,
content can be added to the body of the POST method. The type of the data in
the body is sent as a part of a request header, and it can contain images,
videos, music etc.

```HTTP
POST /page.html HTTP/1.1
Host: f-secure.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 10

...data...
```

<text-box variant=emph name="Other request methods">

Whilst the GET and POST methods are most widely used in the communication
between servers and browsers, other types of requests also exist. These include
requesting the types of options that the server supports, asking to delete a
resource, etc.

For additional details, see e.g.
[http://www.w3schools.com/tags/ref_httpmethods.asp](http://www.w3schools.com/tags/ref_httpmethods.asp).

</text-box>


## HTTP is stateless

HTTP is a stateless protocol which means that each request that is sent to a
server is processed individually, and from the point of view of the server, the
requests are not linked with each others. This design decision was made to make
it straightforward to retrieve content from multiple servers and to increase
the performance of the HTTP protocol ([Basic HTTP as defined in
1992](https://www.w3.org/Protocols/HTTP/HTTP2.html)). The decision was
initially solid as most of the web traffic was related to transmitting static
content.

Identifying users is however needed. For example, web shops and other services
that identify users require means to maintain knowledge of the user. A classic
-- but rather poor -- way to maintain knowledge of the user was to use
parameters in the GET request that could be used to identify the user. This is
not recommended however, as these parameters can also be modified or tampered
with.

Currently, many web applications include user-specific functionality that
expect that the users can be identified. Here, cookies that were introduced in
the HTTP/1.1 protocol are handy. When the server adds a cookie to the response
that it sends to the user, the browser of the user will always send the cookie
back to the user. This way, sessions across multiple requests can be
maintained.

<text-box variant=emph name="Session Management Cheat Sheet">

Familiarize yourself with the [OWASP Session Management Cheat
Sheet](https://www.owasp.org/index.php/Session_Management_Cheat_Sheet) and
[Session hijacking
attack](https://www.owasp.org/index.php/Session_hijacking_attack).

</text-box>



<programming-exercise name="EuroShopper" tmcname='Set2-07.EuroShopper'>

The assignment template has a very basic web shop functionality. Study the code
and add a vulnerability to it that makes it possible to conduct a session
highjacking attack on the web site. Limit your approach to predictable session
tokens and client-side attacks such as inserting malicious Javascript codes.
The template already contains a mistake that will make your job a bit easier.

Once finished, submit the assignment to TMC. There are no tests for the
assignment, so you can modify the application as much as you want.

</programming-exercise>


During this part of the securing software course, we briefly visited frontend
and backend functionality and looked into how databases are used when
developing web applications. During the next week we will look deeper into the
typical security issues in web applications.
