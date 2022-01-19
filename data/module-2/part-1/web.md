---
path: '/module-2.1/1-web'
title: 'Ports and Applications'
hidden: false
---


Each computer has a series of communication points that are called
*ports*. If a computer has a software process -- a program -- running on
it and the program has control of a port and listens to the data sent to it,
then the program can be communicated with. The communication follows a
*protocol*, which lists the commands that the program understands.


The other party of the communication can reside on the same machine -- another
program on the same machine may be the source of a message -- or the message
can originate from a separate computer. For this to happen, the computer must
be connected to a network, which allows computers to exchange data using a data
link. The most prominent example of such a network is the internet, which has
essentially become ubiquitous during the last decade.

<p>Computers use IP addresses to identify other computers. In principle, each
computer that is connected to the internet has an IP address that associates to
it. An IP Address is a set of four numbers between 0 and 255 separated by a
period (e.g. 127.0.0.1, which corresponds to your own computer). As there are
only 2<sup>32</sup> possible options for the address, these are slowly running
short due to the emergence of coffee pots with IP addresses and accompanying
software -- the internet of things. A more recent version called IPv6 also
exists; it has 2<sup>128</sup> different address possibilities and essentially
solves this issue.</p>


<text-box variant=emph name="Ports... really?">

In practice, a port is a concept in the [transport
layer](https://en.wikipedia.org/wiki/Transport_layer). When a computer sends a
message to another computer, the message has embedded information on the port
that the message is supposed to be sent to on the target computer. When the
message reaches the target computer, the embedded information is processed, and
the port information is used to identify the specific program on the target
computer that the message has been sent to.

</text-box>


### Stepping up to the Task

From the programmer's point of view, communication between two computers is
done using a [socket](https://en.wikipedia.org/wiki/Network_socket). A socket
is essentially a handle -- similar to a file handle -- that the programmer can
use for both reading and writing. However, instead of working with a file, the
"writing" is done to a given port at the remote machine, and "reading" is done
from a stream of data that the remote machine sends.

<text-box variant=emph name="Coding horror: they're asking me to do Python?!!">

From now on, the materials will include programming examples as well as
programming assignments in Python. Python has decent libraries and syntax has a gentle
learning curve. The language is not without its [issues](https://wiki.theory.org/index.php/YourLanguageSucks)
but it very suitable for this course.

The previous iterations of this course were based on Java, Spring framework, and Thymeleaf.
It is recommended to look into this frameworks as well as knowing more than a single
language is definitely a good thing, and is a sign of a mature software developer.

</text-box>

Programming languages typically come with libraries which typically reduce the
amount of code that a programmer must write to achieve a specific task. For
example, accessing a remote computer in Python can be done using the
[socket](https://docs.python.org/3/library/socket.html) module.
In principle, the programmer only needs to create an
instance of socket, connect it to the target (ip and the port of the
target machine is given as parameters), and then -- for example -- read the data from
the target machine.

```python
address = "127.0.0.1"
port = 12321

s = socket.socket()
s.connect((address, port))
data = s.recv(1024)         # Attempt to read at most 1024 bytes
```

The above example will -- depending on the target server -- throw an exception
if the port cannot be connected to. See [Python tutorial on
Exceptions](https://docs.python.org/3/tutorial/errors.html)
for how to handle exceptions. Alternatively you can use `connect_ex`
instead of `connect`.

Note that `connect` parameters are wrapped in a additional parentheses.
The reason for this is that `connect` takes _one_ parameter, and in our case
it is a tuple of form `(address, port)`.

Port scanners are a common tool that security researchers use to identify
services available on a given machine. Port scanners work by iterating through
a range of ports, and attempting to connect to each of the ports. If a
connection is successful, something has responded to the request, and it can be
investigated further.


<text-box variant=emph name="Getting the tools ready">

In order to be able to work on the programming assignments, you will need
install several software packages...some of them are not so installer-friendly.
Please read and follow the [instructions](/installation-guide).

</text-box>


<programming-exercise name="Port Scanner" tmcname='part1-01.portscanner'  course="Securing Software">

In this assignment, you will gain some hands-on experience on working with
ports in Python and familiarize yourself with the tools used for some of the
programming tasks in this course.

The assignment template that you can retrieve either using Test My Code, or the
Test My Code web site contains the following code in portscanner.py.

```python
#!/usr/bin/env python3
import sys
import socket


def get_accessible_ports(address, min_port, max_port):
    found_ports = []

    # write code here

    return found_ports


def main(argv):
    address = sys.argv[1]
    min_port = int(sys.argv[2])
    max_port = int(sys.argv[3])
    ports = get_accessible_ports(address, min_port, max_port)
    for p in ports:
        print(p)

# This makes sure the main function is not called immediatedly
# when TMC imports this module
if __name__ == "__main__":
    if len(sys.argv) != 4:
        print('usage: python %s address min_port max_port' % sys.argv[0])
    else:
        main(sys.argv)

```

For this assignment, you should write the code needed for the method
`get_accessible_ports` to scan the given range of ports. The method
should scan the ports at a given address, and then return the list of ports
that have a service listening for them.

Note that the test server will not submit any data; you shouldn't try to
receive any data.

Once completed, submit your solution to the TMC server for assessment.

Note that while we implement port scanners and other tools, we will later also
look into existing software that have similar functionality.

</programming-exercise>

Note that port scanning can be seen as a preparation for a cyber attack. It
may be also that your internet service provider (ISP) has prohibited making
port scans. Before participating in the following quiz, verify that you are
allowed to do so.




## Talking with the remote program

If a computer has a port open, the program listening to that port can likely be
talked with. One of the simplest approaches for trying out such discussion is
the use of [Telnet](https://en.wikipedia.org/wiki/Telnet), which is available
in most of the operating systems: if not, you can always download e.g.
[PuTTY](https://en.wikipedia.org/wiki/PuTTY) (with PuTTY make sure that your connection type is raw). Modern MacOS no longer has built-in Telnet
but you can use netcat (nc) like demonstrated [here](https://medium.com/ayuth/bring-telnet-back-on-macos-high-sierra-11de98de1544).

Telnet connections are made to a specific address and to a specific port. For
example, a connection to the F-Secure web server could be initiated through the
address `f-secure.com` and the port `80`.

When discussing with an application, it is important to know the protocol --
discussion format -- that the application follows. One such example is the
[HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)-protocol,
which is used by web servers.

The basic command for retrieving the root content from a web-server is as follows.

```HTTP
GET / HTTP/1.1
Host: f-secure.com
```

In the above example, we first tell the server that we want to get the resource
at "/", and that we are following version 1.1. of the HTTP. The next line
describes the address we want to access -- this is entered as servers may host
multiple web sites. An HTTP request is ended by two empty lines.

When launching telnet and retrieving the content from f-secure -site, we see
something similar to the following.

```HTTP
username@machine:~$ telnet f-secure.com 80
Trying 104.126.172.25...
Connected to f-secure.com.
Escape character is '^]'.
GET / HTTP/1.1

Host: f-secure.com
HTTP/1.1 302 Moved Temporarily
Server: AkamaiGHost
Content-Length: 0
Location: http://f-secure.com/fi_FI/
...
```

In the above example, instead of returning the content of the page, the
F-Secure web server asks us to look for the content from the address
[http://f-secure.com/fi\_FI/](http://f-secure.com/fi_FI/).

<text-box variant=emph name="Ohh.. Some logic in that server?">
If you do not reside in Finland and make the same request as above, you are likely directed to another address.
</text-box>

<quiz id="0e7b1003-4504-5ab6-af10-e4405c45d832"></quiz>

<quiz id="72d266aa-f0ad-5e62-8cd8-74820e5550de"></quiz>
