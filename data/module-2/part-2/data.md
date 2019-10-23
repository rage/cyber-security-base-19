---
path: '/module-2.2/2-data'
title: "The Data has Value -- Let's store it!"
hidden: true
---


The web applications that we built in the previous part of this course handled
and stored data within the application. This means that when the web server or
the application is restarted, the data is lost.

Almost every web application has the need for storing and retrieving data. The
data can be stored into the file system as files by the application, or the
responsibility of storing the data can be given out to a separate application
such as a database management system. Database management systems have been
built with the explicit purpose of storing and retrieving data in a robust and
efficient manner, and they can reside both on the same server as the web
application or somewhere elsewhere on the internet.

Although there are vast differences between the term database management system
and database, we will use the term 'database' to cover these both. Similarly,
although there are many types of database systems, we will mostly focus on
relational databases.

<text-box variant=emph name="Not familiar with SQL or databases?">

Check out the tutorial at [https://sqlbolt.com/](https://sqlbolt.com/)

</text-box>


## Java Database Connectivity API

We will use the [H2 Database Engine](http://www.h2database.com/html/main.html)
for getting started with databases. H2 Database Engine can be added to a Maven
project by adding the following dependency to the `pom.xml` file.

```xml
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <version>1.4.193</version>
</dependency>
```

The previously added dependency provides H2-specific support for interacting with the database.

A program that uses a database needs to (1) create a database connection, (2)
execute a query to the database, (3) do something with the query results, and
(4) close the connection. When using Java and
[JDBC](https://en.wikipedia.org/wiki/Java_Database_Connectivity), a program
that does the previously mentioned steps could be as follows -- we assume, that
there exists a database table called "Book" with the columns "id" and "name".

```java
// Open connection
Connection connection = DriverManager.getConnection("jdbc:h2:file:./database", "sa", "");

// Execute query and retrieve the query results
ResultSet resultSet = connection.createStatement().executeQuery("SELECT * FROM Book");

// Do something with the results -- here, we print the books
while (resultSet.next()) {
    String id = resultSet.getString("id");
    String name = resultSet.getString("name");

    System.out.println(id + "\t" + name);
}

// Close the connection
resultSet.close();
connection.close();
```

Perhaps the most important part here is the class
[ResultSet](https://docs.oracle.com/javase/8/docs/api/java/sql/ResultSet.html),
which provides an access to the query results. The method `next` moves to the
next row in the result table, and the method `getString("column name")`
retrieves the value for column "column name" for that row as a String.

<text-box variant=emph name="On creating a database connection">

The command `DriverManager.getConnection("jdbc:h2:file:./database", "sa", "");`
creates a JDBC connection to a database called "database". The username is "sa"
and the password is empty.

If no such database called "database" exists, the file will be created to the
root of the project. In this case, the file `database.mv.db` would be created
during the first run, which would be complemented by a file called
`database.trace.db` later. One could also create the database connection to an
in-memory database, for example by
`DriverManager.getConnection("jdbc:h2:mem:./database", "sa", "");`. Here, the
database file would not exist on the file system, and the information would be
lost during application restart.

For more information on the tools and commands that the H2 Database Engine
supports, see a tutorial at
[http://www.h2database.com/html/tutorial.html](http://www.h2database.com/html/tutorial.html).

</text-box>


The data in a database is typically organized so that it represents the problem
domain and follows a specific structure. This structure, i.e.
[schema](https://en.wikipedia.org/wiki/Database_schema), defines the database
table names, the columns in each table, and the datatypes for each column. In
addition to the schema, a database contains data.

H2 Database Engine provides support for loading schemas and data using the
[RunScript](http://www.h2database.com/javadoc/org/h2/tools/RunScript.html)
class. In the example below, the content of `database-schema.sql` and
`database-import.sql` is inserted to the database after the database connection
has been made.

```java
// Open connection to database
Connection connection = DriverManager.getConnection("jdbc:h2:file:./database", "sa", "");

try {
    // If database has not yet been created, create it
    RunScript.execute(connection, new FileReader("database-schema.sql"));
    RunScript.execute(connection, new FileReader("database-import.sql"));
} catch (Throwable t) {
    System.out.println(t.getMessage());
}
// ...
```


<programming-exercise name="Hello Database" tmcname='t-hellodatabase-ex'>

You have a database with the following schema at your disposal.

```sql
CREATE TABLE Agent (
    id varchar(9) PRIMARY KEY,
    name varchar(200)
);
```

Write a program that outputs all the agents and their identifier codes from the database. The output format should be as follows:

```sample
agent_id agent_name
agent_id agent_name
...
```

Once completed, return the assignment to the TMC server.

</programming-exercise>

<programming-exercise name="Hello Insert" tmcname='t-helloinsert-ex'>

The same database schema from the previous assignment is at your disposal here.
Implement the functionality for adding an agent to the database. The
application should function as follows (input from the user given in red):

```sample
Agents in database:
Secret	Clank
Gecko	Gex
Robocod	James Pond
Fox	Sasha Nein

Add one:
What id? Riddle
What name? Voldemort

Agents in database:
Secret	Clank
Gecko	Gex
Robocod	James Pond
Fox	Sasha Nein
Riddle	Voldemort
```

Now, when the application is started again, agent Voldemort is within the database and the details of a new agent is queried from the user.

```sample
Agents in database:
Secret	Clank
Gecko	Gex
Robocod	James Pond
Fox	Sasha Nein
Riddle	Voldemort

Add one:
What id? Feather
What name? Major Tickle

Agents in database:
Secret	Clank
Gecko	Gex
Robocod	James Pond
Fox	Sasha Nein
Riddle	Voldemort
Feather	Major Tickle</pre>
```

</programming-exercise>

<text-box variant=emph name="Parameterized queries and SQL Injection Prevention">

Read the [OWASP SQL Injection Prevention Cheat
Sheet](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet).
If you implemented the insert query in the previous assignment without
parameterized queries, i.e. as below, redo the assignment.

```java
String query = "INSERT INTO Agent (id, name) VALUES ('" + id + "', '" + name + "')";
```
</text-box>


## Objects and Databases

When working with classes, objects and databases, the need for transforming
database query results into objects arises (see [Object-relational
mapping](https://en.wikipedia.org/wiki/Object-relational_mapping), ORM). As
this is a very typical task, an abundance of tools have been created for the
task.

ORM tools offer -- among other things -- the functionality needed to transform
existing classes into database schemas and to build queries using objects. This
has created a situation where large parts of the typical database interaction
is no longer implemented by the developer, but by a framework. The developer
effectively only needs to implement the database interaction in those parts,
where the existing approaches are not sufficient.

One standard for ORM technique in Java is the [Java Persistence
Api](http://en.wikipedia.org/wiki/Java_Persistence_API) (JPA), which has been
implemented by a set of frameworks. When using JPA and an implementation of the
standard such as [Hibernate](http://www.hibernate.org/), developing basic
database queries becomes quite straightforward.

<text-box variant=emph name="Including JPA to a Spring Boot Project">

Including Java Persistence API support to a Spring project requires adding the
dependency `spring-boot-starter-data-jpa` to the `pom.xml`. In the following
snippet, both the JPA starter and the H2 Database Engine are included.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
</dependency>
```

We do not need to include the H2 Database Engine version as it is already
stated in the Spring Boot parent project.

</text-box>


## Classes and Entities

The JPA standard states that each class that represents a database table should
be defined as an _entity_; this can be done with the annotation `@Entity`.
Moreover, each class that represents a table should have an identifier that can
be used to identify a specific instance of that class. Such an identifier is
typically an object variable which is annotated using the `@Id` annotation.
Finally, the class should implement the `Serializable`-interface.

For example, the following class that represents a person would be transformed
into a database table on the fly, and instances of it could be stored to that
database table.

```java
// package

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Person implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    // getters and setters
}
```

If the programmer wishes to, the column names and the database table name can be included using the annotations `@Column` and `@Table`.

```java
// package

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Person")
public class Person implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;

    // getters and setters
}
```

The above configuration defines a database table called "Person" that has the
columns "id" and "name". The column types are inferred from the variable types
(but can be also defined through the `@Column` annotation).

The above examples follow the JPA specification. The Spring project called
Spring Data JPA provides a superclass
[AbstractPersistable](http://docs.spring.io/autorepo/docs/spring-data-jpa/current/api/org/springframework/data/jpa/domain/AbstractPersistable.html)
that can be inherited. It provides functionality that makes the previous
definitions a bit more straightforward.

```java
// package

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Person")
public class Person extends AbstractPersistable&lt;Long&gt; {

    @Column(name = "name")
    private String name;

    // getters and setters
}
```

Now, creating the queries that alter the data in table "Person" is rather
straightforward. We need to implement an interface that extends the interface
[JpaRepository](http://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html).
This provides us all the basic functionality needed for altering the database
contents.


```java
// package

import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository&lt;Person, Long&gt; {
}
```

Note that we only created an interface, but not the actual implementation. The
Spring framework takes care of the rest for us, given that we tell it to
_autowire_ -- i.e. include -- the implementation of the interface to our
application. This is done using an annotation called `@Autowired`.

The database functionality can be included to a controller as follows:


```java
// package and imports

@Controller
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    // when a request is made to the address "/persons"
    @RequestMapping("/persons")
    public String listAll(Model model) {

        // find all persons from the database and add them to the model
        model.addAttribute("persons", personRepository.findAll());

        // then create a view from a file called "persons.html" and
        // send it as a response to the request
        return "persons";
    }

    // etc ...
}
```

<programming-exercise name="Hello Web with a Database" tmcname='t-hellowebwithdatabase-ex'>

The assignment template contains an application that always returns the message
"Hello Web!" to the user. Change the implementation so that the message content
is randomly selected from the messages in the database. That is, if the
database has messages "Hello" and "World", the message "Hello" should be shown
now and then, as should the message "World".

Once finished, return your solution to TMC.

</programming-exercise>

<text-box variant=emph name="H2 Database Engine and Spring">

By default, when developing applications, Spring loads the H2 database engine
in memory. This means that as the application is restarted, the data will be
lost. For other options, see [Working with SQL
databases](http://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-sql.html).

</text-box>


## Database Transactions

Transactions are used to verify that all the database operations in a group are
executed, or that none of them are. Database management systems offer support
for implementing transactions, but, as we often work outside the database,
additional steps are needed.

Spring provides transaction support on both class- and method-level through the
`@Transactional` annotation. If a method has been annotated using the
`@Transactional` annotation, then all the database functionality within that
method will be performed within a single transaction. If the annotation is on
the class level (i.e. before the class definition), then all the methods in
that class are transactional.

Perhaps the most classic transaction example is shown below. If the execution
of the method fails (e.g. an exception is thrown) after money has been
withdrawn from one account and the money has not yet been added to another,
then the original withdraw will be also canceled. Without the annotation
`@Transactional`, the money would disappear.

```java
@Transactional
public void bankTransfer(Long fromAccount, Long toAccount, Integer amount) {
    Account from = accountRepository.findOne(fromAccount);
    Account to = accountRepository.findOne(toAccount);

    from.setBalance(from.getBalance() - amount);
    to.setBalance(to.getBalance() + amount);
}
```

The annotation `@Transactional` also indicates that the entities are managed
within the method. That is, the entities that have been loaded from the
database are tracked, and the changes that are made to them are written to the
database at the end of the method.

If the method would not have been annotated with the `@Transactional`
annotation, the accounts would have to be separately saved if we want to commit
the changes to the database.


```java
@Transactional
public void bankTransfer(Long fromAccount, Long toAccount, Integer amount) {
    Account from = accountRepository.findOne(fromAccount);
    Account to = accountRepository.findOne(toAccount);

    from.setBalance(from.getBalance() - amount);
    to.setBalance(to.getBalance() + amount);
}
```

<programming-exercise name="Bank Transfer" tmcname='t-banktransfer'>

The assignment template has a simple application for managing accounts and
transfers. There is, however, small things to be fixed in the transfer
functionality. Think about the fixes that are needed, perform them, and return
the assignment to the TMC server.

Note that the assignment has no tests; this means that you get to define what
types of changes are needed.

</programming-exercise>


## Handling object relationships

When working with databases, information in one table can refer to information
in another table. A customer -- for example -- can have multiple orders, and
each order points to a specific customer. In Java, the references for such a
case would be written as follows.

```java
// package and imports

public class Customer {
    // variables

    private List<Order> orders = new ArrayList<>();

    // getters and setters
}
```

```java
// package and imports

public class Order {
    // variables

    private Customer customer;

    // getters and setters
}
```


When working with JPA and databases, the programmer needs to define the
relationships with annotations. These relationship types are `@OneToMany`,
`@ManyToOne` and `@ManyToMany`. The above classes would be transformed into the
following entities.

```java
// package and imports

@Entity
public class Customer extends AbstractPersistable<Long> {
    // variables

    // the field customer in Order points here
    @OneToMany(mappedBy = "customer")
    private List<Order> orders = new ArrayList<>();

    // getters and setters
}
```

```java
// package and imports

@Entity
public class Order extends AbstractPersistable<Long> {
    // variables

    @ManyToOne
    private Customer customer;

    // getters and setters
}
```


<text-box variant=emph name="@OneToMany and @ManyToMany annotations in practice">

In practice, when you write a reference from one entity class to another (e.g.
a list), the IDE will ask you for the type of relationship between the
entities. Getting familiar with the programming environment always helps!

</text-box>


<programming-exercise name="Simple Banking" tmcname='t-simplebanking'>

The assignment template has the entities for managing accounts and clients, but
they are missing a connection. Modify the application so that a customer may
have multiple accounts, but each account belongs only to a single client.
Adding an account must also add the account to a client.

Look for hints and tips in the existing classes and templates. When the
application works as intended, return it to TMC.

</programming-exercise>


<div class="quiznator-plugin" data-quiz-id="5be98a0257a13b8543cb0f46"></div>

<div class="quiznator-plugin" data-quiz-id="5be98a0257a13b8543cb0f47"></div>

<div class="quiznator-plugin" data-quiz-id="5be98a0257a13b8543cb0f48"></div>

<div class="quiznator-plugin" data-quiz-id="5be98a0257a13b8543cb0f49"></div>

<div class="quiznator-plugin" data-quiz-id="5be98a0257a13b8543cb0f4a"></div>
