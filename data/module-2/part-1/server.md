---
path: '/module-2.1/2-servers'
title: 'Web Servers and Web Applications'
hidden: false
---


Web servers are essentially programs that listen to incoming connections
(typically, on port 80) and follow the
[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)-protocol.
Whilst at first, web servers were mainly used to serve static content such as
HTML pages and funny GIF images, they nowadays serve dynamic content that is
often built separately for each user.

Web applications run on the web servers. Web servers listen for the incoming
connections and forward the connections to the web applications. Developers who
work with web applications very rarely implement functionality within the web
servers.

Web applications include both client- and server-side functionality.
Client-side functionality is executed in the browser of an user, i.e. you,
whilst the server-side functionality is executed on the web server.

Whenever the user makes an action such as types in an URL and presses enter or
clicks a link in the browser, the user's computer sends a request to the
server. Once the server receives the request, it processes it and builds a
corresponding response. The response may be, for example, HTML-code, JSON data,
or an image that the browser should display to the user.

<figure>

![Request and response](./request-and-response.svg)

_Flow of a typical request: (1) the user clicks a link on the browser, (2) the
browser makes a request to the server, (3) the server receives the request and
constructs a response, (4) the server returns the response, (5) the response is
processed within the browser (and, e.g., shown to the user) -- not in the
picture._

</figure>

When constructing the functionality that is shown in the browser, development
is typically focused on three separate and intertwined fronts. The structure of
the view is constructed using [HTML](http://en.wikipedia.org/wiki/HTML), the
layout and theme using [CSS](http://en.wikipedia.org/wiki/CSS), and possible
dynamic functionality with
[JavaScript](http://en.wikipedia.org/wiki/JavaScript).

On the other hand, when constructing the functionality that is executed on the
backend -- i.e. the server --, the developer typically focuses on the
functionality that is needed to retrieve and construct the response that needs
to be sent back to the user. This often involves connecting to other software
such as a database server, and retrieving data from there. The server may --
again -- run either locally or on a separate machine. Naturally, the client-
and server-side development can be interlinked, and software developers
typically work on tasks that are related to both sides. That is, these days it
is rather rare that a developer focuses solely on e.g. maintaining a database.

When the user accesses an online page using a browser, a request is sent to the
server. The server creates the content of the response and sends it back to the
user. If the content has links to other resources such as images or scripts,
each of these resources are retrieved separately by the browser (except for the
[HTTP/2 Server Push](https://en.wikipedia.org/wiki/HTTP/2_Server_Push)-model).

<text-box variant=emph name="It is not just about the requests, but..">

Each resource that the browser retrieves is also a potential security threat.
For example, if a malicious user has found means to include his or her own
Javascript as a part of a site, the Javascript will be executed on the users'
machine.

Whilst this may not at first sound like such a bad deal, it can -- for example
-- lead to each and every keypress you make being sent to the malicious user
(hello passwords!). Or, you could be redirected to a replica of the page that
you were supposed to be using, and -- again, for example -- end up ordering
non-existing products and giving out your credit card details.

</text-box>



## Building a Simple Web Application

The main functionality of a web application is to create a response to each
request. Developers do not typically implement the web-server functionality and
the HTTP-protocol specifics, but use a framework that abstracts away many of
the existing tasks. Here, we look at one such framework, called
[Django](https://www.djangoproject.com/). For Java(TM) enthusiasts, a de facto
web framework is [Spring](https://spring.io/).


Let us look at the Hello Web exercise in TMC (the actual exercise assignment is
given in below). The exercise contains a barebone webserver that can be start
up with
```shell
python3 manage.py runserver
```
and should be available at `http://localhost:8000/`
if the port is free.

There are a lot of files in the project, most of them are automatically
generated skeleton files, and provide functions that are not of our concern for
the moment.

We are interested in two files.
The first file is `src/pages/views.py`,

```python
from django.http import HttpResponse

def homePageView(request):
    return HttpResponse('Hello World!')
```

and the second file is `src/pages/urls.py`

```python
from django.urls import path

from .views import homePageView

urlpatterns = [
    path('', homePageView, name='home')
]
```

Before we continue, few words about path conventions. The `src` part of the path
is needed for TMC to work, and would normally not exist in a typical Django project.
The `pages` is a name of our _app_. Apps are Django's way to group
services provided by the server. The name `pages` could have been different
and a single web server can have different apps at the same time.

The file `urls.py` tells the server that if the client (browser) requests for a
root web page, the ouput of `homePageView` should be provided as a response.
The optional `name` parameter is sometimes handy if you need to refer to the path from your code.
The file `views.py` contains the actual definition of `homePageView`.


<programming-exercise name="Hello Web!" tmcname="part1-02.helloweb" course="Securing Software">

In this assignment, you will familiarize yourself with the very basic
functionality of the web framework.

Change the provided application so that the output is "Hello Web!".

Once finished, submit the assignment to the TMC server.

</programming-exercise>


## Requests and Responses


Web applications typically respond to requests to multiple paths, where each
path has specific functionality. In the example below, there are three separate
paths, each of them returning a different string as a response to the user.

```python
# urls.py
from django.urls import path

from .views import pathView, trailView, routeView

urlpatterns = [
    path('path/', pathView, name='path'),
    path('trail/', trailView, name='trail'),
    path('route/', routeView, name='route')
]
```

```python
# views.py
from django.http import HttpResponse


def pathView(request):
    return HttpResponse('Path')


def trailView(request):
    return HttpResponse('Trail')


def routeView(request):
    return HttpResponse('Route')
```



Each request may contain information that is being sent to the web application.
In principle, there are two ways to handle this: (1) by adding parameters to
the address, or by (2) adding parameters to the request body. We will look into
the request body later in the course.

There are two ways of passing arguments in an address. The first way is to add
parameters directly into a path, for example, a path
`http://localhost:8000/greet/ada/`, may be parsed such that `ada` is a
parameter of the view that handles the request. The parsing of this parameter
is done in `urls.py`.

```python
# urls.py
from django.urls import path

from .views import greetView

urlpatterns = [
    path('greet/<str:user>/', greetView, name='greet')
]
```

```python
# views.py
from django.http import HttpResponse


def greetView(request, user):
    return HttpResponse('Hi ' + user)
```

The other, and more conventional way, is to use the GET parameters.
In this case, the path looks like
`http://localhost:8000/greet/?user=ada`. The corresponding code would be then

```python
# urls.py
from django.urls import path

from .views import greetView

urlpatterns = [
    path('greet/', greetView, name='greet')
]
```

```python
# views.py
from django.http import HttpResponse


def greetView(request):
	user = request.GET.get('user')
    return HttpResponse('Hi ' + user)
```

We will be mostly using this approach throughout the course.



<programming-exercise name="Calculator" tmcname="part1-03.calculator" course="Securing Software">


In this assignment, you will familiarize yourself with handling (1) requests to
several paths and (2) request parameters. Implement the following functionality
in `src/pages/views.py`.

* A request to the path `add/` sums the values in the request GET parameters
  `first` and `second` together and returns the response to the user. Note that
  the parameters are integers and should also be treated as such.
* A request to the path `multiply/` multiplies the values in the request GET
  parameters `first` and `second` and returns the response to the user. Note
  that the parameters are numbers and should also be treated as such.

For example, `add/?first=10&second=10` should result in `20`.

Once finished, submit the assignment to the TMC server.

</programming-exercise>


## Views to the Users


The applications that we have worked on so far have received a request to a
specific path and responded with a string. Whilst it is exactly the same
end-to-end functionality that applications that send users HTML content use,
HTML content is typically created using templates that include embedded
commands that are used for determining the content that should be added to
those templates. Here, we use a Django's own template [language](https://docs.djangoproject.com/en/3.0/ref/templates/language/).
For Java(TM) aficionados [Thymeleaf](http://www.thymeleaf.org/) is the correct choice.

The templates for `pages` app should be placed in `src/pages/templates/pages` folder.

In the example below, we have created an application that listens to the root
path `/`. When the user makes a request to the application, a HTML page that
has been created based on a template is returned to the user. The template that
is used for creating the site is determined based on the string that the method
returns -- here `"pages/index.html"`. This will lead to the framework looking for a
template called `index.html` at `src/pages/templates/pages/`. If the page is
found (make sure the name is correct!), Django template engine will handle the page and
return it to the user.


```python
# urls.py
from django.urls import path

from .views import homePageView, videoPageView

urlpatterns = [
    path('', homePageView, name='home')
]
```

```python
# views.py
from django.http import HttpResponse
from django.template import loader


def homePageView(request):
    template = loader.get_template('pages/index.html')
    return HttpResponse(template.render())
```

```HTML
<!-- index.html -->
<html>
    <head>
        <title>Hi</title>
    </head>

    <body>
		Hello from the template side.
    </body>
</html>
```


<programming-exercise name="Hello Templates" tmcname="part1-04.templates"  course="Securing Software">

Next, we will look into returning content created using a template. Implement
the following functionality in `views.py`:

* A request to the path `/` will return a response based on the template `pages/index.html`.
* A request to the path `/video` will return a response based on the template `pages/video.html`.

Once finished, submit the assignment to the TMC server.

</programming-exercise>

<text-box variant=emph name="HTML">

If you are wondering what this thing called HTML is about or want to refresh
your HTML knowledge, now would be a great moment to visit the site
[http://www.w3schools.com/html/default.asp](http://www.w3schools.com/html/default.asp).

</text-box>

### Adding data to the view

The purpose of using templates is to be able to generate content dynamically.
First, we will need to pass data to the template. The easiest way to do this
is to pass a context parameter using the [render](https://docs.djangoproject.com/en/3.0/topics/http/shortcuts/#render) helper function.

```python
# views.py
from django.shortcuts import render


def homePageView(request):
    return render(request, 'pages/index.html', {'msg' : 'Hi!', 'from' : 'Ada'})
```

The context variable is a
[dictionary](https://docs.python.org/3/tutorial/datastructures.html#dictionaries),
and it can also contain nested dictionaries and lists.

The context can be then rendered using the `{{}}` syntax in the template

```HTML
<!-- index.html -->
<html>
    <head>
        <title>Hi</title>
    </head>

    <body>
		{{msg}} from {{from}}
    </body>
</html>
````



## Forming up: Content from Forms

Web applications may contain forms that are used to send content to the
application. Forms are defined in HTML (see
[form](http://www.w3schools.com/html/html_forms.asp)) using the `form`-element.
The form-element will contain the path to which the content will be sent to,
the type of the request, and the data. For now, the type of the request will be
POST. We will discuss POST and GET later.

The data is defined using fields such as the input field (`<input
type="text"...`), and the content is sent to the server using a button (`<input
type="submit"...`). The form below is submitted to the root path of the
application, and the field that the user can input content to has a name
"content".

```HTML
<form action="/" method="POST">
	{% csrf_token %}
    <input type="text" name="content"/>
    <input type="submit"/>
</form>
```

Note that above code contains a django special tag `{% csrf_token %}`. The tag
will generate a hidden input with a random value that server remembers.
Whenever the form is submitted the hidden input must match what server
remembers.  This is a security counter measure against CSRF attacks which we
will discuss in great details later.


## Handling Lists

One may also include lists to the template.

```python
# views.py
from django.shortcuts import render


def homePageView(request):
    return render(request, 'pages/index.html', {'msg' : 'Hi!', 'senders' : ['Ada', 'Alice', 'Bob']})
```

The list can be enumerated using the `{% for %}` syntax in the template

```HTML
<!-- index.html -->
<html>
    <head>
        <title>Hi</title>
    </head>

    <body>
		{{msg}} from
		{% for user in senders %}
		{{user}}
		{% endfor %}
    </body>
</html>
```


<programming-exercise name="Hello List" tmcname="part1-05.hellolist"  course="Securing Software">

In this assignment we will look into using lists and using them as data for the
templates.

The assignment has the server side functionality that handles a request to the
root path and adds a list for the template to process. The template that is
used to create the site is missing some functionality however.

Your task is to (1) print the values in the list between `<ul>` and `</ul>` tags, and (2) add a form that can
be used to send content to the server.

Once finished, submit the assignment to the TMC server.

</programming-exercise>

In the previous exercise the server had to keep a track of the current list.
This is done using `sessions`, a functionality provided by Django. Essentially,
Django allows to maintain a state for a user. The state is a dictionary-like object
that can be accessed via `request.session`. Since a web server typically has multiple
users at the same time, sessions need to be identified for different users.
This is done via cookie: id is given to the browser by the server, the id is stored
in a cookie by the browser, and is sent to the server every time a browser makes a request.
Sessions are stored in a database by default, meaning that if you restart the server,
the session will still be intact.


<programming-exercise name="Notebook" tmcname="part1-06.notebook"  course="Securing Software">


Implement a notebook application in `views.py`
and the template `index.html`. The notebook application
should list the existing notes, allow adding new notes, and erasing notes (see `urls.py` for the mapping but do not change it). If there are more
than 10 notes, the application should only keep the ten most recent ones.

The test assumes that the text input field containing the note is named `content`.

To run the server, you will most likely need to initialize the database so that session can be maintained.
This can be done with
```shell
python3 manage.py migrate
```

NB! Be wary that `items = request.session.get('items', [])` doesn't create a new list in session if one doesn't exist,
it will simply initialize `items` to `[]`. Moreover, for example, `items = []` will not update the list in sessions.
It will only set the `items` to point to `[]`.
Consequently, in certain cases, you have to update the actual list explicitly for example with `request.session['items'] = items`.

Once finished, submit the assignment to the TMC server.

</programming-exercise>


During this part of the securing software course, we have taken the first steps
into understanding web applications. The next part will look into using
databases and the underlying HTTP protocol.
