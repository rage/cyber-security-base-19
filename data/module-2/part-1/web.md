---
path: '/module-2.1/1-web'
title: 'Structure and Development of Web Applications'
hidden: false
---
## Ports and applications


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

<text-box variant=emph name="Coding horror: they're asking me to do Java?!!">

From now on, the materials will include programming examples as well as
programming assignments in Java. Whilst one may think that [Java
sucks](https://wiki.theory.org/index.php/YourLanguageSucks), it can -- in the
end -- be a decent language to work with due to, among other things, static
typing, a good developer base, and an abundance of high-quality libraries and
developer tools.

At F-Secure, there is no single or preferred programming language that one works with when developing software. Several of the smaller projects and scripts are written in languages like [Python](https://www.python.org/), and some of the larger software tend to be created with statically typed languages. This also naturally depends on whether the goal of the project is to be something that lives only for a few moments, or if it is supposed to be alive after five years.

Knowing more than a single language is definitely a good thing. The same thing goes for the courses offered at the University of Helsinki, where the first programming language that students start with is Java.

</text-box>

Programming languages typically come with libraries which typically reduce the
amount of code that a programmer must write to achieve a specific task. For
example, accessing a remote computer in Java can be done using the
[Socket](https://docs.oracle.com/javase/8/docs/api/java/net/Socket.html) class
from the Java API. In principle, the programmer only needs to create an
instance of the Socket-class (the constructor takes the ip and the port of the
target machine as parameters), and then -- for example -- read the data from
the target machine.

```java
String address = "127.0.0.1";
int port = 12321;

Socket socket = new Socket(address, port);
Scanner reader = new Scanner(socket.getInputStream());
```

The above example will -- depending on the target server -- throw an exception if the port cannot be connected to. See [Java(TM) Lesson on Exceptions](https://docs.oracle.com/javase/tutorial/essential/exceptions/index.html) for how to handle exceptions.

Port scanners are a common tool that security researchers use to identify
services available on a given machine. Port scanners work by iterating through
a range of ports, and attempting to connect to each of the ports. If a
connection is successful, something has responded to the request, and it can be
investigated further.


<text-box variant=emph name="Getting the tools ready">

In order to be able to work on the programming assignments, you will need a
programming environment that supports Java and Maven. NetBeans and IntelliJ --
among others -- tend to do this out of the box.

We suggest that you use NetBeans with Java 8 (Netbeans unfortunately has
problems with newer versions of Java at the moment) and the Test My Code
plugin. The Test My Code plugin is used for downloading and submitting
assignments directly from the programming environment. First install Java if
you don't have it already from:
[http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
Then grab a Netbeans bundle that includes the Test My Code plugin from here:
[http://update.testmycode.net/installers/tmc-netbeans_org_mooc/](http://update.testmycode.net/installers/tmc-netbeans_org_mooc/).
Choose either an installer for your operating system or download the portable
zip file that should work on all operating systems.

Once everything is istalled, select **MOOC** as your organization and select  **Securing Software 2019** as your course.


Once this is done, you will receive a pop up that lists the assignments that you may download. 

#### Possible issues:

- No Maven support: note that some NetBeans downloads may have Maven support
  disabled by default. If you do not have Maven support in NetBeans, see
  [Fixing Maven in NetBeans](https://github.com/UniversityHelsinkiTKTL/tmc-plugin-installation-guide/blob/master/FixingMavenInNetbeans.md)
  to address this issue.

- Assignments listed as *unloadable* in NetBeans: if the assignments are listed
  as *unloadable* in NetBeans and NetBeans has Maven support, select the
  projects and choose "Clean and build". This should resolve the issue. If not,
  let us know at mooc@cs.helsinki.fi!



If you choose not to use the NetBeans + TMC combination, there are also other options:

- You may use other clients for Test My Code such as the [TMC command line client](https://github.com/testmycode/tmc-cli) and the [TMC IntelliJ plugin](https://plugins.jetbrains.com/plugin/8551). Both of these are in <i>beta</i> though so they won't work as reliably as the Netbeans plugin.
- You can retrieve the assignment templates from the [TMC course page](https://tmc.mooc.fi/org/mooc/courses/383), complete them locally, and submit them to TMC as a zip using the previous site. Note that you must retain the original folder structure.


</text-box>


<programming-exercise name="Port Scanner" tmcname='t-port-scanner'>

In this assignment, you will gain some hands-on experience on working with ports in Java and familiarize yourself with the tools used for some of the programming tasks in this course.

The assignment template that you can retrieve either using Test My Code (NetBeans plugin, experimental IntelliJ plugin) or the Test My Code web site contains the following code.

```java
package sec.portscanner;

import java.net.Socket;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class PortScanner {

  final static int MIN_PORT = 1024;
  final static int MAX_PORT = 49151;

  public static void main(String[] args) throws Exception {
    Scanner reader = new Scanner(System.in);

    System.out.println("Which address should I scan?");
    String address = reader.nextLine();
    System.out.println("Start at port?");
    int start = Integer.parseInt(reader.nextLine());
    System.out.println("End at port?");
    int end = Integer.parseInt(reader.nextLine());

    Set<Integer> ports = getAccessiblePorts(address, start, end);
    System.out.println("");

    if (ports.isEmpty()) {
      System.out.println("None found :(");
    } else {
      System.out.println("Found:");
      ports.stream().forEach(p -> System.out.println("\t" + p));
    }
  }

  public static Set<Integer> getAccessiblePorts(String address, int start, int end) {
    Set<Integer> accessiblePorts = new TreeSet<>();
    start = Math.max(start, MIN_PORT);
    end = Math.min(end, MAX_PORT);

    // write the code needed to scan the ports from
    // start to end at the given address

    return accessiblePorts;
  }
}
```

<p>For this assignment, you should write the code needed for the method
`getAccessiblePorts` to scan the given range of ports. The method
should scan the ports at a given address, and then return the list of ports
that have a service listening for them.</p>

Once completed, submit your solution to the TMC server for assessment.

Note that while we implement port scanners and other tools, we will later also look into existing software that have similar functionality.

</programming-exercise>

Note that port scanning can be seen as a preparation for a cyber attack. It
may be also that your internet service provider (ISP) has prohibited making
port scans. Before participating in the following quizz, verify that you are
allowed to do so.

<div class="quiznator-plugin" data-quiz-id="5be0212ef9930d994cd8e654"></div>



## Talking with the remote program

If a computer has a port open, the program listening to that port can likely be talked with. One of the simplest approaches for trying out such discussion is the use of [Telnet](https://en.wikipedia.org/wiki/Telnet), which is available in most of the operating systems: if not, you can always download e.g. [PuTTY](https://en.wikipedia.org/wiki/PuTTY). Telnet connections are made to a specific address and to a specific port. For example, a connection to the F-Secure web server could be initiated through the address `f-secure.com` and the port `80`.

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
[http://f-secure.com/fi_FI/](http://f-secure.com/fi_FI/).

<text-box variant=emph name="Ohh.. Some logic in that server?">
If you do not reside in Finland and make the same request as above, you are likely directed to another address.
</text-box>

<div class="quiznator-plugin" data-quiz-id="5be0212ef9930d994cd8e655"></div>
