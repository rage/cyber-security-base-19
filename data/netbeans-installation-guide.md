---
path: "/netbeans-installation-guide"
title: "NetBeans installation guide"
hidden: false
information_page: true
---

You will have to install both Java and NetBeans TMC-environment.

## Installing NetBeans for Windows

### 1. Installing Java

**NB! The latest Java 8 development environment (8u231) might result in "Malformed argument has embedded quote" notice when building / running projects.** To fix the issue, you might want to ensure that the JDK you have install predates that version (so 8u221 or earlier). If you want to use the latest JDK, you can also append "-J-Djdk.lang.Process.allowAmbiguousCommands=true" to the default_options in "tmcbeans/etc/tmcbeans.conf" (in the folder where you have installed tmcbeans).

Download the Java 8 development environment (Java SE Development Kit
8u221) from address
[https://www.oracle.com/java/technologies/jdk8-downloads.html](https://www.oracle.com/java/technologies/jdk8-downloads.html).
It is very likely you are using 64-bit version of Windows, hence download the
file `jdk-8u221-windows-x64.exe`. Once you've downloaded the file, install it
on your computer. (Make sure that the available number is not bigger than 221).

Note, you will have to create yourself an Oracle-account, which requires a name of the company. You may put to all fields, which you don't know the input for, for example "Lolled Corporation Ltd"


<iframe width="560" height="315" src="https://www.youtube.com/embed/wR1vECnJAag" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you have other versions of Java installed, they may prevent IDE from working
properly. In this case, we recommend removing all other Java versions.
Especially versions 9, 10 and 11 are problematic.

### 2. Installing NetBeans with TMC

Download the file [http://update.testmycode.net/installers/tmc-netbeans\_org\_mooc/tmc-netbeans\_org\_mooc\_tmcbeans-windows.exe](http://update.testmycode.net/installers/tmc-netbeans_org_mooc/tmc-netbeans_org_mooc_tmcbeans-windows.exe). Once the file is downloaded, install it on your computer.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Mwe2vuONhZc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- <h3> JAVA_HOME -problem </h3>

<p>If you encounter "ERROR: Compilation failed" -error when you're running tests on NetBeans, look at the following instructions to fix the error: <%= link_to 'JAVA_HOME virhe testejä ajaessa', 'java_home_not_found.html' %></p> -->

<br/>
<br/>
<br/>
<br/>


## Installing NetBeans for macOS

### 1. Installing Java

**NB! The latest Java 8 development environment (8u231) might result in "Malformed argument has embedded quote" notice when building / running projects.** To fix the issue, you might want to ensure that the JDK you have install predates that version (so 8u221 or earlier). If you want to use the latest JDK, you can also append "-J-Djdk.lang.Process.allowAmbiguousCommands=true" to the default_options in "tmcbeans/etc/tmcbeans.conf" (in the folder where you have installed tmcbeans).

Download the Java 8 development environment (Java SE Development Kit 8u221) from address [https://www.oracle.com/java/technologies/jdk8-downloads.html](https://www.oracle.com/java/technologies/jdk8-downloads.html).  Download file `jdk-8u221-macosx-x64.dmg`. Once you've downloaded the file, install it on your computer. (Make sure that the available number is not bigger than 221).

Note, you will have to create yourself an Oracle-account, which requires a name of the company. You may put to all fields, which you don't know the input for, for example "Lolled Corporation Ltd"

If you have other versions of Java installed, they may prevent IDE from working properly. In this case, we recommend removing all other Java versions. Especially versions 9, 10 and 11 are problematic.

### 2. Installing NetBeans with TMC

Download the file [http://update.testmycode.net/installers/tmc-netbeans\_org\_mooc/tmc-netbeans\_org\_mooc\_tmcbeans-macosx.tgz](http://update.testmycode.net/installers/tmc-netbeans_org_mooc/tmc-netbeans_org_mooc_tmcbeans-macosx.tgz). Once the download is ready, install it on your computer.

If the downloaded installation program doesn't seem to open, try opening it with by pressing with the right side of the mouse and selecting 'Open'.

<!-- <h3>2.1 Fixing internet connection on macOS </h3> -->

<!-- <p>
Follow the following instruction so that NetBeans may have an access to the Internet: <a href="https://materiaalit.github.io/tmc-asennus/macos-verkkoongelma/">Instructions</a>.
</p> -->


With modern MacOS, it is likely that you cannot open NetBeans, instead you will
receive a message "macOS cannot verify that this app is free from malware".

In order to go around it, do as follows:

- Go to System Preferences, and open Security & Privacy.
- In the General Tab, under Allow apps downloaded from, you should see the app
  you’ve been tying to open – click on the Open Anyway button to its right.
- You will once again see a warning message that tells you the app cannot be
  verified as safe, but this time you will have the option to open it anyway.
  If you are certain you want to execute the app, click on Open.


<br/>
<br/>
<br/>
<br/>

## Installation for Linux

### 1. Installing Java

We recommend installing OpenJDK package in linux. For example, you may execute the following command:

```shell
sudo apt-get install openjdk-8-jdk
```

If you have other versions of Java installed, they may prevent IDE from working properly. In this case, we recommend removing all other Java versions. Especially versions 9, 10 and 11 are problematic.

Change the active version of Java with command:

```shell
sudo update-alternatives --config java
```

Type the option number, which has Java 8 written in it (e.g. in the writer's computer "/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java"), and press enter.

After this, install OpenJFX, which is used to create and handle graphical user interfaces. This can be done in ubuntu (terminal) with a command:

```shell
sudo apt-get install openjfx
```

### 2. Installing NetBeans with TMC

Download the file [http://update.testmycode.net/installers/tmc-netbeans\_org\_mooc/tmc-netbeans\_org\_mooc\_tmcbeans-linux.sh](http://update.testmycode.net/installers/tmc-netbeans_org_mooc/tmc-netbeans_org_mooc_tmcbeans-linux.sh). When the download is ready, double click the file. If this doesn't work, navigate to the folder where the downloaded file is and run command:

```shell
chmod +x tmc-netbeans_org_mooc_tmcbeans-linux.sh && ./tmc-netbeans_org_mooc_tmcbeans-linux.sh
```

After this, follow the instructions that have appeared to the screen.

<br/>
<br/>
<br/>
<br/>


## Uploading changes automatically

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

