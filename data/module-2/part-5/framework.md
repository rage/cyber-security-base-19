---
path: '/module-2.5/1-framework'
title: 'Making Mistakes is (not) Harder with Modern Frameworks'
hidden: true
---

This part of the course is devoted into (security) issues that developers make
when working with modern frameworks as well as ways how software developers can
mitigate such issues in a rapid fashion.


## Typical Security Issues Are (almost) Resolved

In the [third part](part3.html) of this course, we visited some of the most
common security issues in software. These are listed in the OWASP [top ten
list](https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf),
which contains the ten most common security flaws in software. They are as
follows:

- Injection
- Broken Authentication
- Sensitive Data Exposure
- XML External Entities (XXE)
- Broken Access Control
- Security Misconfiguration
- Cross-Site Scripting (XSS)
- Insecure Deserialization
- Using Components with Known Vulnerabilities
- Insufficient Logging & Monitoring

Modern frameworks seek to provide tools to combat these and many other issues
out of the box. For example, many of the injection flaws are related to dynamic
SQL queries that do not use parameterized queries (or do not use e.g. existing
ORM libraries). Similarly, weak authentication and session management is often
related to developers creating their own session management functionality that
end up containing bugs, and many of the XSS issues are related to being able to
render user inputted HTML content directly to the page -- this is something
that view templates often take care of.

Functionality for adding function level access control exist in frameworks, and
they also tend to provide facilities for avoiding cross site request forgery
attempts by transparently creating hidden tokens for each query that has to do
with form data.



<programming-exercise name="CSRF" tmcname="Set5-01.CSRF">

The assignment template contains an application that provides the opportunity
to change the password of the user. Currently, if the user is logged in, the
user can potentially be forced to change his or her password through a CSRF
attack.

Look into the security configuration of the application and fix the situation.
Once fixed, a CSRF token should be added to the requests that are handling
data.

Once you believe that you have solved the issue(s), return your solution to
TMC.

</programming-exercise>

<text-box variant=emph name="Should not Take This for Granted">

Note that the level of built-in security in existing frameworks depends highly
on the framework. Some take security more seriously, and some do not. When
starting to work with a framework, one should always look for the up to date
version and investigate the security features that the framework (or some of
its dependencies) currently provide.

</text-box>


## ..but Problems tend to Reside in Business Logic


Whilst frameworks provide ample support against the most common security
issues, they do not provide protection against flaws in the business logic of
the application. A security consultant does not only look for vulnerabilities
that are related to a user breaking into a system. She also looks for
vulnerabilities that are related to the user being able to do something that he
or she should not be able to do from the start.

<programming-exercise name="Millionaire" tmcname="Set5-02.Millionaire">

The assignment template contains the core elements of the "Who wants to be a
millionaire?"-game that we looked into earlier in the course. In this template,
you can observe that the link that is used to input details after finishing the
game can be accessed by anyone -- although it should be hidden.

Change the application so that only those who finished the game can enter their
details -- everyone with the link should not be able to do so. Do not change
the address though, but do it in the business logic of the application.

Once you believe that you have solved the issue(s), return your solution to
TMC.

</programming-exercise>

<programming-exercise name="Online Webshop" tmcname="Set5-03.OnlineWebshop">

The assignment template contains a version of the previously seen application
"EuroShopper". There are some issues in the code that -- although not direct
security issues -- may influence how profitable the online web shop will
eventually be. Look into the application code and try the webshop out.

You should be able to identify at least one type of issue that potentially
makes it possible to pay less than expected to the webshop. Identify the issue
and fix it.

Once you believe that you have solved the issue(s), return your solution to
TMC. This assignment has no tests.

</programming-exercise>

<text-box variant=emph name="Business Logic Security Cheat Sheet">

OWASP has been working on a draft that contains typical vulnerabilities in
business logic. See the draft at
[https://www.owasp.org/index.php/Business_Logic_Security_Cheat_Sheet](https://www.owasp.org/index.php/Business_Logic_Security_Cheat_Sheet).

</text-box>



## Software Development Cycle


The software development process contains requirements engineering, planning,
implementation, testing and maintenance of software. During requirements
engineering, developers and stakeholders define and document requirements
related to the software component that is being developed. This is followed by
a planning phase, where the developers decide how the requirements are
implemented into the software. The implementation phase involves programming as
well as integrating existing components to the software, and during testing the
software is tested both manually and automatically. Once the software or parts
of it are in production, maintaining the software becomes a part of the process
as well -- here, developers keep the software up to date, fix issues that have
been discovered, and add new features to the software.

A natural part of the software development process is the continuous search for
solutions that fulfill some parts of the requirements. In essence, problems are
solved by planning and trying out different solutions until a suitable solution
is found. If a problem and the solution for it is previously known, there is no
need for an exhaustive search, and the developer is in essence guided by a
heuristic that has been learned while working on tasks in the past.

[Agile software development
methodologies](https://en.wikipedia.org/wiki/Agile_software_development) such
as [ScrumBan](https://en.wikipedia.org/wiki/Scrumban) are essentially about
making the software development process visible to stakeholders, which makes it
more straightforward to improve the working process. Emphasis is put on
interaction and individuals, creating value (i.e. working software),
collaborating with the customers to understand their needs, and responding to
changes as the expectations and needs of the customers evolve over time. See
the [Manifesto for Agile Software Development](http://agilemanifesto.org/).


### Defining Requirements

The requirements are identified in collaboration with the customer and the end
users. The requirements are written down for future reference, for example in
form of features or "user stories". Good [user
stories](http://xp123.com/articles/invest-in-good-stories-and-smart-tasks/) are
something that one can INVEST into, and they can be used to create SMART tasks.

<text-box variant=emph name="INVEST and SMART">

INVEST and SMART are acronyms that outline good characteristics of user stories and tasks. See the article by [Bill Wake](http://xp123.com/articles/invest-in-good-stories-and-smart-tasks/).

INVEST:

- <strong>I</strong>ndependent
- <strong>N</strong>egotiable
- <strong>V</strong>aluable
- <strong>E</strong>stimable
- <strong>S</strong>mall
- <strong>T</strong>estable

SMART:

- <strong>S</strong>pecific
- <strong>M</strong>easurable
- <strong>A</strong>chievable
- <strong>R</strong>elevant
- <strong>T</strong>ime-boxed

</text-box>

User stories are typically written down from the view point of a user who
expects a specific functionality from the software. The typical way to
formulate these stories follows a "As a, I want, So that"-pattern, that
includes the stakeholder, the functionality, and the reason why the
functionality is needed. For example, "As a restaurant owner, I want to be able
to view the daily sales of different menu items, so that I can determine which
menu items are profitable and which are not."

Once the user stories have been identified and written down -- or at least a
part of them have been written down -- they are prioritized in collaboration
with the stakeholders (including the customer). Once a rough prioritization has
been performed, a few of the user stories can be taken under development. As
the developers work on the user stories, they slowly become familiar with the
problem domain, and can ask the customer for further clarifications regarding
the software. Once the user stories have been finished, they are shown to the
customer, and the customer can request new features, re-prioritize the existing
user stories, and also clarify his or her points about the software.


<text-box variant=emph name="Evil User Stories">

User stories are used to justify the development cost to the customer. If the
requirements do not include security-related user stories, it is possible that
the development team does not pay attention to security. If the customer does
not pay for such functionality, is it the fault of the customer if data is
breached? What if the development team had not suggested such requirements to
the customer?

Adding [evil user
stories](https://www.owasp.org/index.php/Agile_Software_Development:_Don't_Forget_EVIL_User_Stories)
to the requirements is a start. Evil user stories outline functionality that an
evil user expects to be available, which may lead to unwanted results. For
example, "As a hacker, I can modify the sales of different menu items, so that
the daily sales reports no longer are accurate."

A good starting point for thinking about evil user stories is the OWASP [Top
Ten Proactive Controls
list](https://www.owasp.org/index.php/OWASP_Proactive_Controls).

</text-box>



### Version control systems

The source code of the software and the documentation is typically stored in a
version control system, which is used to maintain the changes to the software
as well as distribute it if needed. In practice, every developer has their own
"sandbox" in which they can develop the software and try out things. When a new
change is sent to the version control system, other developers can download the
change, [review it](https://en.wikipedia.org/wiki/Code_review), and see how it
reacts with their current version of the system.

One of the most commonly used version control systems is
[Git](https://en.wikipedia.org/wiki/Git), which is also used by
[Github](https://github.com/). If you are not familiar with them, see the
[Hello World tutorial provided by
Github](https://guides.github.com/activities/hello-world/) -- more advanced
users may benefit from the [Pro Git book](https://git-scm.com/book/en/v2).


### Continuous integration

Version control systems are often connected to continuous integration servers
that runs automated tests on the software after every change in the version
control system. When the tests are run on both the local sandbox of the
developer as well as in a continuous integration server, issues that are not
discovered during local testing appear. These may be related to for example the
used operating system, browser, configuration etc. It is also possible that the
local sandbox does not include all the components of the software, which makes
it impossible to test the changes properly locally. If the tests do not pass in
the continuous integration server, the changes are either reverted or fixed as
soon as possible.

<text-box variant=emph name="Notes on testing software">

Software is not like good wine: it does not get better over time. On the
contrary, software has a habit of breaking down over time due to deprecated
dependencies, software bugs, as well as security issues. People who have worked
on it also tend to disappear and move on over time.

Creating automated tests for a software component is a way of documenting the
functionality of the component. It provides an outline of the expected
functionality and a way to test whether the software currently fulfills the
expectations. If a new developer starts to work on the project, she can change
parts of the functionality and see whether the changes broke something. Writing
tests for a project is also a good way of getting familiar with the component.

For different types of testing, see a list provided by
[testingexcellence.com](http://www.testingexcellence.com/types-of-software-testing-complete-list/).
Frameworks typically provide a set of tools that one can use to test the
written functionalities, see e.g. [Spring Boot
Testing](http://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-testing.html)
and [A Guide to Testing Rails
Applications](http://guides.rubyonrails.org/testing.html).

</text-box>

Examples of tools that are used for continuous integration include [Travis
CI](https://travis-ci.org/) and [Coveralls](https://coveralls.io/). Travis
verifies that the software compiles and that the tests pass after the latest
change, and coveralls provides functionality to assess the [Code
Coverage](https://en.wikipedia.org/wiki/Code_coverage) of the tests. Code
coverage is essentially a measure that reflects the amount of code lines that
the tests touch. Here, [Cobertura](http://cobertura.github.io/cobertura/) is
also useful.

Both Travis CI and Coveralls are free for open source projects.


### Continuous Deployment

Once a new feature has been completed and the automated tests for it pass, the
new version of the software is deployed to a server. This makes it possible for
the end users to try out new features and to give feedback. The new version can
be either deployed to a staging server that is used mostly for testing, or it
can be also deployed into production. Different variations of this deployment
are also possible; if there are plenty of servers in which the software is
hosted, the software may e.g. be deployed only into a small part of the
servers.

One possibility for hosting the software is cloud services such as
[Heroku](https://www.heroku.com/). See e.g. [Heroku Github
Integration](https://devcenter.heroku.com/articles/github-integration) and
[Travis Heroku
integration](https://docs.travis-ci.com/user/deployment/heroku/). The first
link also has functionality for Travis CI integration.


## DevOps

DevOps is an increasingly popular set of development practices that aims to
bridge the gap between development and system administration. This goal is
achieved by increasing the collaboration between the administrators and
developers. This involves placing administrators and developers to same teams,
creating workflows for quickly iterating and releasing features. Moreover,
developers are given access to systems and the opportunity to perform
administrave tasks on them in order to make problem solving easier.

DevOps is about minimizing unnecessary delays and maximizing efficiency with
small, continuous and iterative changes. It usually relies on automatic
testing, continuous integration and deployment that were mentioned above. New
changes are pushed to production frequently, which also leads to the need for
the automatization, optimization, and simplification of the deployment process.
This also makes the whole process more transparent and auditable.

<quiz id="d8636f02-274a-5f39-b6d5-b05553a1c8c9"></quiz>

Automating the deployment of new changes can be beneficial when patching the
system(s) against common security flaws. When new security flaws are published,
staying secure is often about being able to patch systems faster than they can
be exploited. If the deployment is an automatic and frequent operation,
patching will also likely be very quick.

One might perceive all deployments as a risk because it might break something.
One way to mitigate the risk of new deployments are so-called <a
href="http://martinfowler.com/bliki/CanaryRelease.html" target="_blank">canary
releases</a>. If one has multiple machines that have to be updated, changes can
be pushed only to a small percentage of the nodes. Then one can observe the
nodes that have the newer code in place, and see if the work as intended. If
everything is ok, the changes can be deployed to the rest of the network.


<text-box variant=emph name="Quick iterations -- why is security often neglected?">

With quick iterations, how much time does one invest in securing code? There is
a risk that developers and customers see security as something that gets in the
way of delivering new features. If the features that have been produced in the
iteration are likely to be thrown away quickly, does it make sense to invest
hours and money into securing the features?

Securing a feature post-release is almost always more cumbersome than securing
the feature during the development process. This "cumbersomeness" or cost can
be compared to bugs and the need of fixing them, see e.g. [the true cost of a
software bug](http://blog.celerity.com/the-true-cost-of-a-software-bug).

Moreover, it is challenging to estimate which features are such that will
remain in the software and which ones will not. Whilst the goal of agile
software development is to prioritize those features that bring the most value
to the customer, the needs of the customer may change during the software
process. Simply securing all may not be a cost-effective option, and, securing
none is also likely not cost-effective. Go figure.

</text-box>

It is important that security is a part of the DevOps workflow. The continuous
integration system should run automatic security checks in each commit so that
the easy-to-find vulnerabilities are spotted right away. These checks could
include for example finding obsolete dependencies, static code analysis and
fuzz testing.

DevOps workflows often take advantage of
[microservices](https://en.wikipedia.org/wiki/Microservices),
[virtualization](https://en.wikipedia.org/wiki/Hardware_virtualization), and
[containerization](https://en.wikipedia.org/wiki/Operating-system-level_virtualization).
While the systems created with these practices often have only a minimal set of
dependencies, the dependencies can be a security risk. These components are
commonly forgotten with no easy way to deploy security patches to them. This is
an especially big problem with containers where it is common that there are a
lot of containers, and the only way to patch them is to build them again.

In addition to making the developed software secure, it is essential that the
servers the software is running on is secure as well. A common way to solve the
problem is to use configuration management tools like
[Ansible](https://www.ansible.com/) and [Puppet](https://puppet.com/). These
tools automatically make sure the correct packages are installed and configured
on the server. This increases the awareness of what is actually running on the
systems so that all of the components can be audited and verified. These tools
can also monitor that the software on the servers will stay correctly
configured. If something changes in the configuration, stakeholders can be
alerted or the tool can sometimes even correct the problem.

<text-box variant=emph name="DevOps.com">

For further resources on the DevOps culture, see e.g.
[DevOps.com](https://devops.com/downloads/).

</text-box>

In this part of the course series, we looked at the business logic of software
as well as the software development cycle. During the next part, which is the
final part in the Securing Software course, we will study secure architectures
using data flow analysis.
