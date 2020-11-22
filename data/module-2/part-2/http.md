---
path: '/module-2.2/3-http'
title: 'The HTTP protocol'
hidden: false
---


Almost everything that we've done so far has relied on the HTTP protocol. The
HTTP protocol is the protocol that browsers and servers use for communication.
It defines eight separate request methods, from which the `GET` and `POST` are
most widely used. Each request method has a set of restrictions and suggestions
on the content of the message and on how the message should be processed by the
server. For example, the [HTTP protocol](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)
includes the following suggestion for handling the normal GET requests, i.e.
the ones that users use for retrieving data.

_In particular, the convention has been established that the GET and HEAD
methods SHOULD NOT have the significance of taking an action other than
retrieval. These methods ought to be considered "safe". This allows user agents
to represent other methods, such as POST, PUT and DELETE, in a special way, so
that the user is made aware of the fact that a possibly unsafe action is being
requested._

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

Any parameters that are provided to the server are part of the URL, for
example, `http://localhost:8000/greet?user=ada`.  Consequently, these
parameters will be shown in the URL bar of the browser.



#### Data is sent using the POST method

The practical difference between the POST and GET requests is that while GET
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

Unlike in GET, the parameters are not shown in the URL browser (also it doesn't make sense
to show them as the parameters can be, for example, images). Moreover, a modern browser
will ask you whether to resubmit the form if you try to reload a web page that has been
retrieved using a POST method: a sign that POST should be considered as something that modifies
the server data while GET is simply to query the server. 

<text-box variant=emph name="Other request methods">

While the GET and POST methods are most widely used in the communication
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
Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html). 

Consider also checking information on [Session hijacking](https://en.wikipedia.org/wiki/Session_hijacking).

</text-box>



<programming-exercise name="Bank heist" tmcname="part2-13.sessionhijack">

The assignment contains a very simple bank application with 3 normal users

* bob:squarepants
* alice:redqueen
* patrick:asteroid

The application has a predictable session id generation.
Figure out the formula and obtain Alice's balance by guessing Alice's session id (assuming she is logged in).

Hints:
* Note that the server code is now in `server/` directory. Do not modify the server, instead modify the session sniffer in `src/` folder.
* The server has a `/balance/` web page that provides the balance in JSON format for the logged in user. Note that this web page is not included in the
address parameter when the sniffer is called by the automated test.
* To test your code, log in as Alice in a browser, and only then try to guess the session id with the session sniffer.
* You should be able to figure out the session id formula by studying the [cookies](https://developers.google.com/web/tools/chrome-devtools/storage/cookies).
* During automated tests, the counter in the session id will be a small random number (between 1 and 11). The sniffer should do multiple guesses to find Alice.
* Use Python library [requests](https://www.w3schools.com/python/ref_requests_get.asp).
* Note that `json.loads` does not work with byte streams when using Python 3.5. 
* The session id for Django web servers is stored in a cookie named `sessionid`.


</programming-exercise>


During this part of the securing software course, we briefly visited frontend
and backend functionality and looked into how databases are used when
developing web applications. During the next week we will look deeper into the
typical security issues in web applications.
