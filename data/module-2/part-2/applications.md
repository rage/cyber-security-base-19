---
path: '/module-2.2/1-web'
title: 'Web Applications continued...'
hidden: true
---


A few of the participants have asked for information on how to reload the
changes automatically to the web application. There exists a few ways to do
this, one of which is the use of [Spring Boot developer
tools](http://docs.spring.io/spring-boot/docs/current/reference/html/using-boot-devtools.html).
They can be enabled by including the following dependency to the `pom.xml`
file.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
</dependency>
```

When the developer tools are in use, changes in the code trigger an automatic
restart of the web application. This depends on the used programming
environment. In NetBeans, one may need to additionally take the Spring Boot
Maven plugin into use. This can be done by adding the following snippet to the
`pom.xml`.

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <fork>true</fork>
            </configuration>
        </plugin>
    </plugins>
</build>
```

Now, the application can be restarted from the command line using the command
`mvn spring-boot:run` (when in the same folder with the `pom.xml` file). This
launches the application. As the program is developed in NetBeans, changes will
trigger reloads.

When the above plugins are in use, it is possible to also use
[LiveReload](http://livereload.com/) to trigger a site refresh in the browser.
Chrome plugin for LiveReload can be found
[here](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei).


## Dynamic Content in the Browser


The pages that are shown to the user are defined using the HTML language. A
single HTML document consists of nested and sequential elements that define the
structure and the content of the page.

Each element may contain attributes that may have one or more values. For
example, an input element typically has the attribute `name`, and the value of
that attribute is then used to identify the data from that input element as it
is being sent to the server. Other common attribute names include `id` that is
used to define a unique identifier for the element and `class` that is used to
define a classification for that element.

### Javascript

While HTML is the language for defining the structure and content of a web
page, Javascript is a language for defining dynamic content to the page.
javascript is a programming language, and like almost any programming language,
it is executed one command at a time, top to bottom, left to right.


<text-box variant=emph name="What about all the Javascript frameworks out there?">

For the purposes of this course, we use the [VanillaJS](http://vanilla-js.com/)
framework. It is one of the most used Javascript frameworks, requires no
downloading or installing, and is crucial for an in-depth understanding of most
of the other Javascript components and frameworks.

(VanillaJS is not actually a framework, just plain Javascript. _Understanding_
it will likely help you immensely, and likely also reduce the possibility of
writing code with plenty of holes that others must fix...)


<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">“Maybe switching to [insert new JS framework] will compensate for my lack of actual JavaScript knowledge” - front-end developers in 2015.</p>&mdash; I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/status/610191865216786432">14. June 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

</text-box>


Javascript file names typically end with `.js` and they are included to a HTML
page using the `script` element. The element `script` has an attribute `src`,
which defines the location of the source code file.

When adding Javascript code to a Spring Boot project, it is typically added to
the folder `src/main/resources/public/javascript/`. All the files in the folder
`src/main/resources/public` are made publicly available and downloadable
through the server. Given that a Javascript file -- say `code.js` is in the
folder `javascript`, the `script`-element is used as follows: `<script
th:src="@{/javascript/code.js}"></script>`.

Assume that the file `code.js` has the following content, i.e. a function that
displays an alert pop-up with the text "Hello there!".


```javascript
function sayHello() {
    alert("Hello there!");
}
```

The Javascript file can be included to a HTML site as follows. Note that we
load the Javascript file at the end of the document. This is both to allow the
browser to parse the page before including the Javascript code, and to avoid
any blocking downloading of content.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Title (shown in the browser bar)</title>
    </head>
    <body>
        <header>
            <h1>Title on the page.</h1>
        </header>

        <article>
            <p>Text content (within a paragraph, p). By pressing
            the button below, a javascript function "sayHello" is called.</p>
            <input type="button" value="Boom!" onclick="sayHello();" />
        </article>

        <!-- Ask the browser to load the Javascript -->
        <script th:src="@{javascript/code.js}"></script>

    </body>
</html>
```

<text-box variant=emph name="Javascript tutorials">

The Mozilla Developer Network has a high-quality and comprehensive
[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) tutorial.

</text-box>


### Modifying page content with Javascript

Each element in a web page can be accessed and modified using Javascript.
Specific elements can be identified using the
[querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
method. It allows identifying elements based in the id-attribute value
(identified with a hash), as well as the class attribute value (identified with
a dot). If multiple elements with the same class exist,
[querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
is used.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Title (shown in the browser bar)</title>
    </head>
    <body>

        <article>
            <input type="text" id="content" value="0"></input></p>
            <input type="button" value="Add!" onclick="increment();" />
        </article>

        <!-- Ask the browser to load the Javascript -->
        <script th:src="@{javascript/code.js}"></script>

    </body>
</html>
```

In the above HTML document, the input field can be identified with the id value
"content". Using Javascript, the value of the field could be changed as
follows.

```javascript
function increment() {
    document.querySelector("#content").value = "new value";
}
```

The above functionality would change the field value to "new value", which is
not exactly what the function promises. We can, also, change the functionality
so that it increments the previous value by one.

```javascript
function increment() {
    var value = Number(document.querySelector("#content").value) + 1;
    document.querySelector("#content").value = value;
}
```



### Setting a value as a part of text

In the previous example, the value attribute of a text field was altered.
However, some elements do not have an attribute called value. Instead, for some
elements, the value of the element is inside the element. Changing the value
inside an element can be changed -- for example -- using the innerHTML
parameter of an element.

As an example, one could create a simple validator that verifies that an input
field is not empty.


```html
<!DOCTYPE html>
<html>
    <head>
        <title>Title (shown in the browser bar)</title>
    </head>
    <body>

        <article>
            <p>Type in your username</p>
            <p id="error"></p>
            <input type="text" id="content"></input></p>
            <input type="button" value="Add!" onclick="validate();" />
        </article>

        <!-- Ask the browser to load the Javascript -->
        <script th:src="@{javascript/code.js}"></script>

    </body>
</html>
```

```javascript
function validate() {
    var content = document.querySelector("#content").value;
    if(!content) {
        document.querySelector("#error").innerHtml = "No content to process";
        return;
    }

    // do something else
}
```

<text-box variant=emph name="Validation and Javascript">

Note that Javascript code is executed within the browser. This means that the
above validation functionality works primarily as a way to increase usability
of the site, but not the validity of the data. If there is a need to validate
content, one cannot only rely on the browser (i.e. the client).

</text-box>

<quiz id="0be2397d-a2de-5c6a-92da-61b69fd2348b"></quiz>


### Adding elements to a page

New elements can be created using the [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) function. In the example below, a new `p` element is created, and text content is added to it. Finally, the paragraph is added to an element with the id "messages".

```javascript
var paragraph = document.createElement("p");
var textContent = document.createTextNode("content");

paragraph.appendChild(textContent);

document.querySelector("#messages").appendChild(paragraph);
```


<text-box variant=emph name="DOM">

These Javascript calls use the Document Object Model (DOM) interface for altering the HTML document. See [https://developer.mozilla.org/en-US/docs/Web/API/Document\_Object\_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) for additional information.

</text-box>

### JSON dataformat and retrieving data from a server

Objects and data in Javascript are typically represented using the [Javascript
Object Notation](http://www.json.org/) (JSON) format. The format follows
essentially a key: value structure, where variables are separated using commas.
The definition of an object starts and ends with a bracket. For example, a
person could be represented as follows.

```javascript
var person = {name: "Jack Bauer", age: 24};
```

Assuming that the page would have an element with an id "user", the person
details could be added to the page dynamically. Variable values can be
retrieved using dot notation.

```javascript
var person = {name: "Jack Bauer", age: 24};
document.querySelector("#user").innerHtml = person.name;
```

Often, we wish to retrieve data from the server. This can be done using the
[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
object as follows.

```javascript
var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var response = JSON.parse(xmlHttp.responseText);
        document.querySelector("#content").innerHTML = response.value.joke;
    }
}
xmlHttp.open("GET", "http://api.icndb.com/jokes/random/", true);
xmlHttp.send(null);
```

In the example above, a query is made to the address
"http://api.icndb.com/jokes/random/". When a response is received, it is
processed and content from the response is shown to a user in an element with
the id "content".

<text-box variant=emph name="On debugging Javascript applications">

When building and analyzing Javascript applications, being able to debug them is crucial. Up to date browsers such as Google Chrome provide quite good tools for analyzing the application. See [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) for a start.

When debugging your own applications, the very basic command is `console.log()`, which can be used to print out variable details and other information to the developer tools console. When the command `console.log("Hello world!");` is inserted into your Javascript code, the text "Hello world!" will be printed to the Developer tools console. When looking for problems in code, debugging using the console log is a good start.

If you are familiar with debuggers and breakpoints in IDEs, similar functionality is available for browsers as well. See [Inspect and Debug Javascript](https://developers.google.com/web/tools/chrome-devtools/javascript/add-breakpoints) at Google Developers.

</text-box>


## Returning JSON Data from the Web Application

The controller classes can return JSON data as well. If a method that returns
an object is annotated using the `@ResponseBody` annotation, then the object
will be returned as a JSON object by default. Let us assume that we have a
class Book, which is as follows:


```java
public class Book {
    private String name;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

Now a controller that returns a Book object and has been annotated with the
`@ResponseBody` annotation would return a JSON object as a response to the
request made to that address.

```java
@RequestMapping("/books")
@ResponseBody
public Book getBook() {
    Book book = new Book();
    book.setName("The Book of Eli.");
    return book;
}
```


<text-box variant=emph name="Assignments can be found in Test My Code">

Similarly to the previous part, these assignments are submitted to the Test My Code service.

</text-box>

        <div class="assignments">
          <div class="assignment">
            <header>
              <h1 class="panel-title">
                <a data-toggle="collapse" class="collapsed" href="#t-tasks">
                  Tasks (Click to Open!)
                </a>
              </h1>
            </header>
            <div id="t-tasks" class="collapse">

        <p>The assignment template has some functionality for adding tasks. Your task is to alter the loadTasks function so that the existing tasks are loaded when the page is shown to the user. Do this using Javascript -- note that the server will return a list of objects.</p>

        <p>If you wish an additional challenge, add the functionality to remove tasks as well.</p>

        <p>Note that the application has no automated tests. Once you are able to list the tasks, return your solution to TMC.</p>

            </div>
          </div>
        </div>

<text-box variant=emph name="Cross-origin Resource Sharing">

Public resources such as javascript files, images and stylesheets and can be
accessed from anywhere. At the same time, if a web application requests data
using javascript, the request may be blocked if the target server has not
explicitly allowed such requests and the target server is not the same server
on which the application is currently running on.

[Cross-origin resource
sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) (CORS)
defines guidelines for the browser. Following those guidelines, the browser can
restrict and allow queries to specific external resources. It is configured on
the server.

Simple CORS support is added through the `@CrossOrigin` annotation, which is
given the application addresses, from which requests can be made to the server.
In the configuration below, books can be retrieved from any application.

```java
@CrossOrigin(origins = "/**")
@RequestMapping("/books")
@ResponseBody
public Book getBook() {
    Book book = new Book();
    book.setName("Spring API");
    return book;
}
```

Additional information on how CORS and Spring can be found in the [Spring documentation](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/cors.html).

</text-box>
