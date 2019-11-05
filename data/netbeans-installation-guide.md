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

