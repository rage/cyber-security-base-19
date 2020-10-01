---
path: '/module-2.3/1-security'
title: 'Most Common Security Vulnerabilities'
hidden: false
---

This part of the course is devoted to the discovery and reporting of security
vulnerabilities in web applications. The focus is on the most critical web
application security risks as reported by OWASP.


<text-box variant=emph name="Open Web Application Security Project (OWASP)">

The [Open Web Application Security
Project](https://www.owasp.org/index.php/Main_Page) is a not-for-profit
organization that focuses on disseminating knowledge on software security. They
help organize
[events](https://owasp.org/index.php/OWASP_Events/upcoming_events) and maintain
security related databases and lists.

One of the important lists that they maintain is the [OWASP Top
10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project) which
contains a list of the ten most critical web application security risks. The
most recent list is from
[2017](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/).

</text-box>





## Injection

Injection vulnerabilities make it possible for the user (or the application) to
send data to the web application that is then interpreted by the web
application or one of its components although is should not be. A common
example of such a vulnerability is the SQL injection, where query parameters or
other unsanitized data are used as a part of a SQL query.


![Exploits of a mom](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)

_(source [xkcd: Exploits of a mom.](https://xkcd.com/327/))_

<programming-exercise name="SQL injection" tmcname="part3-14.injection">

Python SQLite API provides two main methods for executing commands, `execute` and `executescript`.
The latter along with the unsanitized data allows you to escape the current command, and tricks like
`DROP TABLES` become possible. However, with `execute` you can execute only _one_ command. That is, you cannot escape the current command but you can still do
significant damage.

The exercise contains a database with the schema

```SQL
CREATE TABLE Users (name TEXT, password TEXT, admin BOOL);
CREATE TABLE Tasks (name TEXT, body TEXT);
```

You can create a test database with
```sh
python3 create_test_db.py
```
in the src directory.

The exercise performs a single unsafe query
```python
"SELECT body FROM Tasks WHERE name='%s' and body LIKE '%%%s%%'" % (username, query())
```
Complete `query` that finds the admin password stored in Users table. The result should contain only one entry containing the adming password.

Hints:
* If `injection.py` does not contain the `query()` method, then you have outdated exercise. In that case, update the exercise. You may have to do update manually by downloading the zip file
from the TMC server with a browser.
* You can assume that there is only one admin, marked with `admin = 1`
* See UNIONs

</programming-exercise>


While SQL injections are perhaps the most common examples of Injection
vulnerabilities (see e.g. [Ruby on Rails](http://rails-sqli.org/) and [Spring
Data JPA](https://pivotal.io/security/cve-2016-6652)), other types of
injections also exist. It can be, for example, possible to execute code on the
application server (see e.g. [Ruby on
Rails](http://ronin-ruby.github.io/blog/2013/01/09/rails-pocs.html) and
[Spring](https://jira.spring.io/browse/SPR-5308)) or [Django](https://docs.djangoproject.com/en/3.0/topics/http/sessions/#using-cookie-based-sessions).


## Broken Authentication

Broken Authentication vulnerabilities allow users to impersonate other users.
This may happen, for example, through poor session management (session
hijacking), through very poor passwords, or through storing the users'
passwords in plain-text format (or in an easily decryptable format) and
accidentally leaking the data. If the user uses the same password in multiple
locations, it is also possible that the data from some other web application is
leaked, and a malicious user is able to connect the username and password of
another web application to this application.

## Sensitive Data Exposure

Sensitive Data Exposure is a vulnerability that is related to not properly
protecting sensitive user data such as credit card information, social security
numbers etc. Access to such information may lead to credit card fraud, identity
theft, etc. This risk is related to many of the other vulnerabilities in that
other vulnerabilities may allow leaking of such data; at the same time, if a
data leak occurs, risks should be minimized. For example, passwords should be
salted etc.

<text-box variant=emph name="Have I been Pwned?">

It is common that a user does not know that his or her account has been
compromised. The site
[https://haveibeenpwned.com/](https://haveibeenpwned.com/) provides a database
that can be used to search for leaked usernames and email addresses in [various
data breaches](https://haveibeenpwned.com/PwnedWebsites), and to see if
passwords have been associated with them.

Here, your task is to see if your username or email has been compromised. If
so, it might make sense to consider changing your passwords.

</text-box>



## Broken Access Control

Broken accesss control makes it possible to access resources or functionalities
on the server that should not be available to the user. As an example, the web
application may store user specific data that is available through a query
parameter or a path variable. If the user modifies the variable, access can be
gained to resources that should not be accessible. Another common mistake with
access control is having functionalities that should require authentication but
do not. It may be the case that the application checks that the user is
authenticated, but may fail to verify that the user has the required
credentials for the action that he or she seeks to take.

The next assignment is done within Test My Code.

<programming-exercise name="Hihaupload" tmcname="part3-15.hihaupload">

The assignment template contains the functionality for uploading and storing
personal files on a web server. The files uploaded by an individual should not
be accessible by anyone else. However, there seems to be a few flaws in how
this has been implemented. Fix the application so that everyone can access only
the files that they have uploaded (unauthorized actions should redirect to `/`).

The application has the following username and password combinations for testing:

- alice:redqueen
- bob:squarepants

</programming-exercise>


## Security Misconfiguration

Security misconfiguration includes a wide range of issues from poorly
configured servers and outdated software libraries to not changing default
passwords. Such misconfigurations can reside both within the application as
well as outside the application. Questions such as 'who has access to the
server where the web application is running?', 'who has access to the server
where the database or other components are running?', 'are the software
components and libraries as well as the operating systems up to date?', 'are
the used passwords high quality?' and so on.

As an example, one of the [Denial of Service
attacks](https://www.theguardian.com/technology/2016/oct/26/ddos-attack-dyn-mirai-botnet)
was partially made possible by thousands of internet of things devices with
default passwords (or poor passwords).

As software is often developed for third parties who become responsible for
maintaining the software, fixing the issues is not straightforward. If a flaw
is identified in the platform that is used to host the software, is it the task
of the original developer(s) to provide support? For free, or at what cost? The
customer may not be able to distinguish between the product and the platform
and may not understand the responsibilities related to managing software.

<text-box variant=emph name="The server sec-mooc-1.cs.helsinki.fi">

Once a server is put online, it will also start receiving requests that are not
related to the services that it officially offers. For example, SSH login
attempts have been made to the server at `sec-mooc-1.cs.helsinki.fi` from
hundreds of separate IP addresses. Many of the attempts are repetitive and use
brute-force scripts for guessing possible passwords for the server.

If the server would use a very poor password or one that exists in existing
password lists on the internet (see e.g.
[https://github.com/danielmiessler/SecLists/tree/master/Passwords](https://github.com/danielmiessler/SecLists/tree/master/Passwords)),
it is likely that the server would have already been cracked.

</text-box>


## Cross-site Scripting

Cross-site scripting (XSS) vulnerabilities make it possible for the user to
include malicious content to a site that will then be executed on the machine
of another user. The malicious content may be permanently stored on the web
application (e.g. in a database if the input and output is not sanitized), or
it may be included temporarily (e.g. as a part of a query parameter).

Such attacks make it possible to -- among other things -- hijack users'
sessions and as a consequence impersonate another user. For example, the
cookies that are related to the current document may be accessible through the
variable `document.cookie`, and sent to the server of a malicious user through
a simple XMLHttpRequest.

```html
<script>alert(document.cookie);</script>
```

There exists a handful of (incomplete) solutions that are used to filter out
possible XSS attacks, including removing brackets from the code. OWASP has a
good
[checklist](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet)
that can be used for XSS testing.

<programming-exercise name="Cookie heist" tmcname="part3-16.xss">

The exercise contains a simple direct message application, where messages are
not properly sanitized. Write a message to `src/msg.html` that steals the cookie.

To steal the cookie use Javascript with POST and submit it to `mail/` request
on the same server (note that in practice this can be _any_  server but for
automatic testing we added the `mail/` service to the same server to simulate the heist).
The parameter to `mail/` should be a JSON object with a field `content` containing the victim's cookie as a string.

Hints:
* Look into Tasks exercise on how to do POST requests with Javascript.
* For debugging purposes, the server will print to the console any mail obtained through `mail/` request.

</programming-exercise>

## Using Components with Known Vulnerabilities


Using Components with Known Vulnerabilities is typically related to
unmaintained software. As software is built upon existing libraries and
vulnerabilities are constantly identified and fixed, it is important to keep
track and maintain the software libraries in use. This is an issue that is not
limited to web frameworks, but also to the underlying software components
including the operating system (see e.g. [The Dirty
COW](http://thehackernews.com/2016/10/linux-kernel-exploit.html)).

Most dependency management tools have plugins that can analyze the used
dependencies and identify components with vulnerabilities. For example,
Python packages `safety` (and `safety-db`) can be used to check any vulnerable packages.


<programming-exercise name="Safety first" tmcname="part3-17.safety">

Python package `safety` can be used to find installed vulnerable packages.
The package relies on another package `safety-db` which is simply a curated
JSON file of known vulnerable python modules.

In this assignment, the goal is to write a simple query system that given
the safety-db json file and a package name returns a list of all vulnerabilities
associated with that package. 

The output should contain a list of tuples
```python
[(id1, version1, cveid1), (id2, version2, cveid2), ...]
```

During the writing of this exercise the `safety-db` package was quite broken,
so instead of installing `safety-db`, you should download the json file `insecure_full.json` directly
from [here](https://github.com/pyupio/safety-db/tree/master/data).

</programming-exercise>


## Unvalidated Redirects and Forwards

Unvalidated Redirects and Forwards may cause the web application to redirect
the user to an unwanted location. This may happen, for example, if the address
to which the user is forwarded after an action can be tampered with. For
further information, see the [OWASP Cheat
sheet](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html).

<text-box variant=emph name="Incident Databases">

Knowing the top 10 most critical web application security issues is a good
start. However, new security flaws are constantly discovered, and a security
professional needs to keep up with the development of the field. Incident
databases such as [Common Vulnerabilities and
Exposures](https://cve.mitre.org/) 
are crucial for keeping up with the
latest developments of the field.

It is important to also follow the relevant mailing lists. For example, Ruby on
Rails has a public mailing list at
[https://groups.google.com/forum/#!forum/rubyonrails-security](https://groups.google.com/forum/#!forum/rubyonrails-security).

</text-box>


## Cross-site Request Forgery

Cross-site Request Forgery (CSRF) makes it possible to create requests from
another site (source) to the web application (target). If the user who is
accessing the source site is authenticated to the target web application, the
browser of the user will send an authentication token (e.g. cookie) with the
request to the target application as the user is accessing the source site,
making it possible to access data as an authenticated user that should not be
accessible. Many frameworks these days include CSRF defences by default.

<programming-exercise name="CSRF Prompt-By Pass" tmcname="part3-18.csrf">

The exercise contains an unsafe bank application that uses GET methods without
any CSRF protection. 

The application has the following username and password combinations for testing:

- alice:redqueen
- bob:squarepants

Write an HTML file that when opened (if the user is logged in) moves $10 to Alice's account.
Note that there is a confirmation dialog which you also need to deal with.

Do not use Javascript, instead use `img` tags.

The automated test will ignore the DNS name of the server in img tags, so you
can use `localhost:8000` freely, or any other name, depending on your setup.

</programming-exercise>


In this this part of the securing software course, we looked at some of the
most common web security issues. During the next part, we will look a bit
deeper into finding flaws in software.
