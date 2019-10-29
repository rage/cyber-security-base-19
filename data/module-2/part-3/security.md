---
path: '/module-2.3/1-security'
title: 'Most Common Security Vulnerabilities'
hidden: true
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
[2017](https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf).

</text-box>


In order to work on the assignments in this part of the course, you need to
download the [WebGoat Lesson server](https://github.com/WebGoat/WebGoat). The
latest stable build (at the time of the writing of this material) is the
version 7.0.1, which can be downloaded at
[https://s3.amazonaws.com/webgoat-war/webgoat-container-7.0.1-war-exec.jar](https://s3.amazonaws.com/webgoat-war/webgoat-container-7.0.1-war-exec.jar).

Once you have downloaded WebGoat, it can be started from the command line using the command:

```shell
java -jar webgoat-container-7.0.1-war-exec.jar -httpPort 8081
```

This launches the WebGoat server on the port 8081. Once the server has been started, the application can be accessed at `http://localhost:8081/WebGoat`.

In this part, the assignments are done within the WebGoat server and reported
in the questionnaires in this material. The goal is to practice the discovery
of vulnerabilities as well as reporting them on a level that others can
replicate the found vulnerability. The level of detail for the reporting should
be as follows (you can assume that the user is logged in to WebGoat as a
guest):

```sample
Issue: SQL Injection
Steps to reproduce:
1. Open Injection Flaws
2. Select Numeric SQL Injection
3. Open Developer Console
4. Inspect the Weather Station Element
5. In the Developer Console, find the select element that
   lists the weather stations.
6. Edit one of the option elements within the select element and
   change the option value to "101 OR station < 9999999".
7. Select the altered option from the dropdown list on the page
8. Press Go!
9. You can now see all weather the weather data.
```

In addition to reporting issues, you are expected to review the issue reports
from others. Try following them step by step and see if you can reproduce the
security issues that others have found. If you are unable to reproduce an issue
by following the steps in the report, indicate the specific step that caused
you to fail to reproduce the issue and why. If, on the other hand, you are able
to reproduce the issue, thank them for the report.



## Injection

Injection vulnerabilities make it possible for the user (or the application) to
send data to the web application that is then interpreted by the web
application or one of its components although is should not be. A common
example of such a vulnerability is the SQL injection, where query parameters or
other unsanitized data are used as a part of a SQL query.


![Exploits of a mom](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)

_(source [xkcd: Exploits of a mom.](https://xkcd.com/327/))_


<quiz id="2d373a9b-8a8c-50f0-a663-e1480cdebdc2"></quiz>

Whilst SQL injections are perhaps the most common examples of Injection
vulnerabilities (see e.g. [Ruby on Rails](http://rails-sqli.org/) and [Spring
Data JPA](https://pivotal.io/security/cve-2016-6652)), other types of
injections also exist. It can be, for example, possible to execute code on the
application server (see e.g. [Ruby on
Rails](http://ronin-ruby.github.io/blog/2013/01/09/rails-pocs.html) and
[Spring](https://jira.spring.io/browse/SPR-5308)).


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

<programming-exercise name="Megaupload" tmcname="Set3-01.Megaupload">

The assignment template contains the functionality for uploading and storing
personal files on a web server. The files uploaded by an individual should not
be accessible by anyone else. However, there seems to be a few flaws in how
this has been implemented. Fix the application so that everyone can access only
the files that they have uploaded.

The application has the following username and password combinations for testing:

- roger:carrots
- valiant:vaudeville

Note that the application has no automated tests. Once you believe that you
have solved the issue(s), return your solution to TMC.

</programming-exercise>


<quiz id="83933e2f-b6a9-5c0e-962e-d48b898cc062"></quiz>

## Security Misconfiguration

Security misconfiguration includes a wide range of issues from poorly
configured servers and outdated software libraries to not changing default
passwords. Such misconfigurations can reside both within the application as
well as outside the application. Questions such as 'who has access to the
server where the web application is running?', 'who has access to the server
where the database or other components are running?', 'are the software
components and libraries as well as the operating systems up to date?', 'are
the used passwords high quality?' and so on.

As an example, one of the [recent Denial of Service
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


<quiz id="bbf5436f-d245-5969-8280-86f330de3f14"></quiz>

## Using Components with Known Vulnerabilities


Using Components with Known Vulnerabilities is typically related to
unmaintained software. As software is built upon existing libraries and
vulnerabilities are constantly identified and fixed, it is important to keep
track and maintain the software libraries in use. This is an issue that is not
limited to web frameworks, but also to the underlying software components
including the operating system (see e.g. [The Dirty
COW](http://thehackernews.com/2016/10/linux-kernel-exploit.html)).

Most dependency management tools have plugins that can analyze the used
dependencies and identify components with vulnerabilities. For example, the
[Dependency-Check](https://jeremylong.github.io/DependencyCheck/dependency-check-maven/index.html)
Maven plugin can be used to determine whether the current project utilizes
faulty components.

The Dependency-Check plugin can be taken into use by including the following statement to the project pom.xml:

```xml
...
<plugins>
  ...
  <plugin>
    <groupId>org.owasp</groupId>
    <artifactId>dependency-check-maven</artifactId>
    <version>1.4.4</version>
    <executions>
      <execution>
        <goals>
          <goal>check</goal>
        </goals>
      </execution>
    </executions>
  </plugin>
  ...
</plugins>
...
```

Once included, the project can be analyzed by running the command `mvn dependency-check:check`
from the command line. Note that the version 1.4.4
assumes that the Maven version is at least 3.1, whilst older versions (Maven
3.0) can be used with 1.4.2.


The next assignment is partially done within Test My Code and partially within
the following questionnaire.

<programming-exercise name="Oldies but goodies" tmcname="Set3-02.OldiesButGoodies">

The assignment template contains a simple Spring Framework application that
uses a version of Spring released in December 2009. You can launch the
application from command line using the command `mvn jetty:run`, which launches
server.

Run the Maven Dependency Check plugin on the application to identify the types
of security vulnerabilities in the software. When the plugin reports
vulnerabilities, e.g. `CVE-2014-1904`, you can find their many of their
descriptions using the Common Vulnerabilities and Exposures database at
[https://cve.mitre.org/index.html](https://cve.mitre.org/index.html).

Once you have identified the vulnerabilities, answer the questionnaire that
follows this assignment -- the assignment template has no tests and can be
submitted to server.

</programming-exercise>


<quiz id="b4cc3307-042a-57d2-980e-14662d8805db"></quiz>

## Unvalidated Redirects and Forwards

Unvalidated Redirects and Forwards may cause the web application to redirect
the user to an unwanted location. This may happen, for example, if the address
to which the user is forwarded after an action can be tampered with. For
further information, see the [OWASP Cheat
sheet](https://www.owasp.org/index.php/Unvalidated_Redirects_and_Forwards_Cheat_Sheet).

<text-box variant=emph name="Incident Databases">

Knowing the top 10 most critical web application security issues is a good
start. However, new security flaws are constantly discovered, and a security
professional needs to keep up with the development of the field. Incident
databases such as [Common Vulnerabilities and
Exposures](https://cve.mitre.org/) and
[https://fusiontables.google.com/DataSource?snapid=S283929Jw2s](https://fusiontables.google.com/DataSource?snapid=S283929Jw2s)
that is maintained by OWASP and [Web Application Security
Consortium](http://www.webappsec.org/) are crucial for keeping up with the
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

<quiz id="555f2288-82d9-5cb9-b3af-f0b36d6858c4"></quiz>

In this this part of the securing software course, we looked at some of the
most common web security issues. During the next part, we will look a bit
deeper into finding flaws in software.
