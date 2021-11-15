---
path: '/module-3.1'
title: 'Part I'
overview: true
hidden: false
---
<deadline>31.12.2021</deadline>


In the first project, the participants will construct software with security
flaws, point out the flaws in the project, and provide the steps to fix them.


<please-login></please-login>

The project has only 1 part.


#### Before starting the course

Please read the [instructions](/pass) on how to start and pass the course.
Especially, pay extra attention on 'how to pass' section as this course
requires additional steps in order to receive ECTS credits.


#### Support channel and contact information

For support channel use [Discord](https://study.cs.helsinki.fi/discord/join/csb).

For any further questions, contact grp-cybersecuritybase(at)removethis.helsinki.fi.

### Project description

In the first course project, your task is to create a web application that has
at least five different flaws from the OWASP [top ten list](https://owasp.org/www-project-top-ten/).

We recommend that you implement the website using Python & Django. If you did the previous
course you should already Django libraries installed. See [installation guide](/installation-guide) otherwise.
To create a starter website, follow the instructions [here](https://docs.djangoproject.com/en/3.1/intro/tutorial01/).

You may do the project without using the starter template (in a language of
your own choosing). In that case, however, you must also provide guidelines for
installing and running the web application on Windows, Linux and Mac (including
guidelines for installing any possible required dependencies).

The code must be stored in a public repository so that other students may review it.
A standard option is to use [Github](https://github.com/). If you are a student at Helsinki University, you
can use [https://version.helsinki.fi](https://version.helsinki.fi). Make sure that the project is _public_.
Do _not_ remove the project until you have received the points.

Note that essay is not accepted immediately as it needs to be approved by the course staff.


### Essay

You will then write a 1000 word report (hard limits: 800-1500) that pinpoints the flaws and 
describes how they can be fixed. The report _must_ follow the following structure:

```rest
LINK: link to the repository
installation instructions if needed

FLAW 1:
exact source link pinpointing flaw 1...
description of flaw 1...
how to fix it...

FLAW 2:
exact source link pinpointing flaw 2...
description of flaw 2...
how to fix it...

...

FLAW 5:
exact source link pinpointing flaw 5...
description of flaw 5...
how to fix it...

```

Add source link to each flaw if appropriate. Ideally, the link should 
have the format `https://urldomain/repo/file.py#L42` (Line 42 in `file.py`).
The links can be easily obtained by clicking the line numbers in the Github repository file browser.
If the flaw involves in omitting some code, then comment-out the code, and provide the link to the beginning of the commented block. 

We recommend not to write the essay directly to the browser. Instead write (and
save) it using your favourite text editor, and then use copy-paste.

### Submitting the project

<quiz id="b2e421c1-c211-5200-acd7-8ff166b3163d"></quiz>

