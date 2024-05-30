---
path: '/module-3.1'
title: 'Part I'
overview: true
hidden: false
---
<deadline>30.11.2024</deadline>


In the first project, the participants will construct software with security
flaws, point out the flaws in the project, and provide the steps to fix them.


<please-login></please-login>

The project has only 1 part.


#### Before starting the course

Please read the [instructions](/pass) on how to start and pass the course.
Especially, pay extra attention on 'how to pass' section as this course
requires additional steps in order to receive ECTS credits.


#### Support channel and contact information

For support channel use [Discord](https://study.cs.helsinki.fi/discord/join/csb)  (use #csb_general channel).

For any further questions, contact grp-cybersecuritybase(at)removethis.helsinki.fi.

### Project description

In the first course project, your task is to create a web application that has
at least five different flaws from the OWASP [top ten list](https://owasp.org/www-project-top-ten/) as well as their fixes.
The application should have a backend.

OWASP recently updated its list and there are now two lists: 2017 and 2021.
You can use either list but specify which one you are using. Do not mix the lists.
Note that CSRF is missing from both lists as it is more rare nowadays due to the more secure frameworks.
However, due to its fundamental nature it is allowed as a flaw.


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
The easiest way to check the visibility is to try the links in incognito mode.
Do _not_ remove the project until you have received the points.

Make sure that (these are the most common reasons for project being rejected)
- The flaws are real, and not just hypothetical, and the fixes are included in the code,
- The fix actually fixes the problem, and not just hide it,
- There is a backend, and the flaws/fixes occur in the backend. Remember that the user can manipulate the frontend as much as possible.

Note that essay is not accepted immediately as it needs to be approved by the course staff.


### Writing essay

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

Be specific with your fix. If possible, provide a fix to the problem in the
code. The fix can be commented out. If appropriate, add a source link to each
fix as well.

We recommend not to write the essay directly to the browser. Instead write (and
save) it using your favourite text editor, and then use copy-paste.

Please write the essay carefully and with thought. Other participants in the course
will review them and give you feedback.
Essays should be written individually and using your own words. Copy-pasting
from other sources is not allowed. Copy-pasting text from other sources and pretending
it to be your own counts as plagiarism.
[Plagiarism](https://studies.helsinki.fi/instructions/article/what-cheating-and-plagiarism) is not
allowed under any circumstances, and will have consequences when caught.
See [here](https://cybersecuritybase.mooc.fi/rubric#heading-on-the-usage-of-llm) regarding the usage of LLMs.

### Peer reviewing essays

Peer reviewing consists of general comments and 5 grades, one for each flaw.

You should justify your grading in the general comments. Comment on each flaw.
Be specific, constructive, and polite.

If the essay contains more than 5 flaws, select 5 flaws you would like to grade, for example, 5 first
or, in your opinion, 5 best.

The rubric for the scores are as follows:

1. _Failed:_ The flaw is missing, or otherwise inappropriate
2. _Passable:_ The flaw is identified correctly, the fix partially corrects the problem. The underlying problem and the effect of the fix is somewhat misuderstood.
3. _Average:_ The flaw described adequately and the fix fixes the problem. Minor misunderstanding of the underlying mechanism. The description is too vague but ultimately correct.
4. _Good:_ The flaw and the fix are correctly done. Minor issues in descriptions.
5. _Excellent:_ No issues or only cosmetic issues



### Submitting the project

<quiz id="df558692-ddd1-5df7-8c84-c5dc269fa58f"></quiz>

