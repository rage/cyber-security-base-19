---
path: '/module-2.2/2-data'
title: "The Data has Value -- Let's store it!"
hidden: false
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


## Python and SQLite

We will use SQLite with python since it is ridiculously easy to use.
SQLite is a naive SQL database engine, which makes it very easy to use,
for example one does not need to care about setting up database user rights
because there are no users. While SQLite is an ideal engine for learning 
SQL, more serious projects should use more refined database engines such as
[MySQL](https://www.mysql.com/) or [PostgreSQL](https://www.postgresql.org/).
Note that all of them support vanilla SQL commands, the differences are within
performance, extensions to SQL, as well as access rights.

SQLite stores its database in a file, for example `db.sqlite`. Accessing the file
in Python can be as follows.

```python
import sqlite3

conn = sqlite3.connect('db.sqlite')
cursor = conn.cursor()

```

Once the cursor has been established, we can use `cursor.execute()` to execute a single
SQL command or `cursor.executescript()` to execute multiple SQL commands. If we
modify the database, then we should save the changes with `conn.commit()`.
For more information, see Python's sqlite [library](https://docs.python.org/3/library/sqlite3.html).





<programming-exercise name="Hello Database" tmcname="part2-08.hellodatabase">

You have a database with the following schema at your disposal.

```sql
CREATE TABLE Agent (
    id varchar(9) PRIMARY KEY,
    name varchar(200)
);
```

Write a program that outputs all the agents and their identifier codes from the database. The output format should be as follows:

```rest
agent_id agent_name
agent_id agent_name
...
```

You can create a test database with
```shell
python3 create_test_db.py
```
in the src directory.

Once completed, return the assignment to the TMC server.

</programming-exercise>

<programming-exercise name="Hello Insert" tmcname="part2-09.helloinsert">

The same database schema from the previous assignment is at your disposal here.
Implement the functionality for adding an agent to the database. The
application should function as follows (input from the user given in red):

```rest
Active agents:

Secret	Clank
Gecko	Gex
Robocod	James Pond
Fox	Sasha Nein

What would you like to do: [a]dd, [r]emove, or [q]uit? a

id? Riddle
name? Voldemort

Active agents:

Secret	Clank
Gecko	Gex
Robocod	James Pond
Fox	Sasha Nein
Riddle	Voldemort

What would you like to do: [a]dd, [r]emove, or [q]uit? q
```

Now, when the application is started again, agent Voldemort is within the database and the details of a new agent is queried from the user.

```rest
Active agents:

Secret	Clank
Gecko	Gex
Robocod	James Pond
Fox	Sasha Nein
Riddle	Voldemort

What would you like to do: [a]dd, [r]emove, or [q]uit? a

id? Feather
name? Major Tickle

Active agents:

Secret	Clank
Gecko	Gex
Robocod	James Pond
Fox	Sasha Nein
Riddle	Voldemort
Feather	Major Tickle
```

You can create a test database with
```shell
python3 create_test_db.py
```
in the src directory.

</programming-exercise>

<text-box variant=emph name="Parameterized queries and SQL Injection Prevention">

Read the [OWASP SQL Injection Prevention Cheat
Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).
Try to implement the delete query incorrectly, that is, form the string
directly. 

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


## Django Models

The convention is that persistent data structures that app wants to store in a database
is defined `models.py`. The data structures should be defined a subclass of `models.model`.

```python
# models.py

from django.db import models

class Person(models.Model):
    name = models.TextField()
    age = models.IntegerField()

```

The class allows us to manipulate the database.
We can add a new Person with

```python
bob = Person.objects.create(name='Bob', age=42)
alice = Person.objects.create(name='Alice', age=37)
```

We can fetch all persons with

```python
persons = Person.objects.all()
```

We can query the database with

```python
bobs = Person.objects.filter(name='Bob')
middleaged = Person.objects.filter(age__gte=40)
alice = Person.objects.get(name='Alice') # Works only if there is a unique entry
```

For query notation, see the [documentation](https://docs.djangoproject.com/en/3.0/topics/db/queries/#retrieving-objects).

We can update the entries (as long as we save them)

```python
bob.age = 45
bob.save()
```

The models are saved in a database. The default database is a sqlite stored in
`db.sqlite` file.  The same database is also used for storing user sessions, as
well as, registered users and admins (something that django provides as a
built-in service).

Whenever the model specifications are changed, Django needs to be told to
update the schema in `db.sqlite`. Two commands are required

```shell
python3 manage.py makemigrations
python3 manage.py migrate
```

The first command will make a migration Python file, located in
`pages/migrations` and starting with a number, while the second command updates
the database.  During the early development cycle it may be the case that
migrating the database is too cumbersome with the existing database. If there
is no valuable information in `db.sqlite` a valid cop-out strategy is to delete
the migration files and the database and sync the database from scratch.
Naturally, this is not a good idea if the database has any valuable information.




<programming-exercise name="Hello Web with a Database" tmcname="part2-10.hellowebwithdatabase">

The assignment template contains an application that always returns the message
"Hello Web!" to the user. Change the implementation so that the message content
is selected from the messages in the database. The id of the message is given
as a GET parameter `id`. The database has 3 messages with ids 1, 42, and 99.

Hint: see how to query with [primary keys](https://docs.djangoproject.com/en/3.0/topics/db/queries/#the-pk-lookup-shortcut).

Once finished, return your solution to TMC.

</programming-exercise>



## Database Transactions

Transactions are used to verify that all the database operations in a group are
executed, or that none of them are. Database management systems offer support
for implementing transactions, but, as we often work outside the database,
additional steps are needed.

Transactions matter also if there are multiple database users, which may lead 
to unintented consequences. Consider the following classic problem of transforming money
from one account to another.

```python
def transfer(sender, receiver, amount):
    acc1 = Account.objects.get(iban=sender)
    acc2 = Account.objects.get(iban=receiver)

    acc1.balance -= amount
    acc2.balance += amount

    acc1.save()
    acc2.save()
```

Consider two threads A and B calling `transfer` at the same time with the following sequence:
* Thread A retrieves the accounts 
* Thread B retrieves the accounts
* Thread B updates and saves the accounts
* Thread A updates and saves the accounts

If both sender and receiver were the same, the net effect of this operation is
that the action of Thread B will be overwritten by Thread A. While this
sequence of events is unlikely to happen, we should obviously prevent it from
happening in the first place.

In order to do that, Django provides `transaction.atomic` either as a decorator for a function

```python
from django.db import transaction

@transaction.atomic
def transfer(sender, receiver, amount):
    acc1 = Account.objects.get(iban=sender)
    acc2 = Account.objects.get(iban=receiver)

    acc1.balance -= amount
    acc2.balance += amount

    acc1.save()
    acc2.save()
```

or as a context manager within a function

```python
from django.db import transaction

def transfer(sender, receiver, amount):
	with transaction.atomic():
		acc1 = Account.objects.get(iban=sender)
		acc2 = Account.objects.get(iban=receiver)

		acc1.balance -= amount
		acc2.balance += amount

		acc1.save()
		acc2.save()
```

What happens in the background is the following. Whenever `transaction.atomic`
is reached Django sends `BEGIN TRANSACTION` command to SQLite (Actually it
sends `SAVEPOINT` but it is almost the same thing).
Once the function is done Django sends `COMMIT` to SQLite which completes the transaction.

SQLite does not allow any writes whenever there is an open (second) transaction. 
So in our previous example, _both_ threads A and B will fail, by throwing an exception.
More importantly, the fail will happen only during the commit. That is, the local
objects `acc1` and `acc2` that are currently held in memory during the call of `transfer` are updated,
and have different values, but the database itself is not updated.

SQLite locks the _entire_ database, that is, as long as transaction is open
no writes are possible. To see this effect in practice, we can open a connection to the
database and open a transaction without closing it

```shell
$ sqlite3 src/db.sqlite3 
SQLite version 3.30.1 2019-10-10 20:19:45
Enter ".help" for usage hints.
sqlite> BEGIN TRANSACTION;
sqlite> 
```

As long as this connection is open, no other connection (manual or Django) can
write to the database.  This is a very conservative approach (and one of the
downsides of SQLite). Fancier database engines do not lock the database, and
[select for
update](https://docs.djangoproject.com/en/3.0/ref/models/querysets/#select-for-update)
is probably needed to lock the objects that are about to be modified.



<programming-exercise name="Bank Transfer" tmcname="part2-11.banktransfer">

The assignment template has a simple application for managing accounts and
transfers. There is, however, small things to be fixed in the transfer
functionality. Think about the fixes that are needed, perform them, and return
the assignment to the TMC server.

The automatic test for atomic operation here is quite conservative. Make sure
that during the transfer view, there are no other SQL commands before the
atomic portion. Also, use only one atomic section.

</programming-exercise>


## Handling object relationships

When working with databases, information in one table can refer to information
in another table. A customer -- for example -- can have multiple orders, and
each order points to a specific customer. In Django, the references for such a
case would be written using a `ForeignKey`.

```python
from django.db import models

from django.contrib.auth.models import User

class Account(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    iban = models.TextField()
```

Here `User` is a Django built-in model for [users](https://docs.djangoproject.com/en/3.0/ref/contrib/auth/).

The above statement allows users to have multiple accounts.
If only one account is allowed per user one can use [`OneToOneField`](https://docs.djangoproject.com/en/3.0/ref/models/fields/#django.db.models.OneToOneField).

We can access the User object from Account object with

```python
acc = Account.objects.get(pk=0)
user = acc.owner
```

We can also cross-search accounts using owner's information 

```python
accounts_owned_by_johns = Account.objects.filter(owner__first_name='John')
```


<programming-exercise name="Simple Banking" tmcname="part2-12.simplebanking">

The assignment template has the entities for managing accounts and clients, but
it is incomplete. Modify the application so that addition and listing
the accounts actually works.

The web server has 3 users with the following passwords:
 * admin:admin
 * bob:squarepants
 * alice:redqueen

When the application works as intended, return it to TMC.

</programming-exercise>
