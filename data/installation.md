---
path: "/installation-guide"
title: "Installation guide"
hidden: false
information_page: true
---

The exercises in this course are based on python save for few exceptions where javascript is used.

In order to do programming exercises, you need to install several software packages:

- TestMyCode (TMC) client in order to download the exercises and upload your solutions
- Python 3 + several packages to test python exercises
- ChromeDriver + Chrome to test javascript exercises

## Installing TMC 

TMC requires a fairly modern Java 8 or later to work properly.
  Open jdk 1.8.0_212 for example works
  as should all 11.x and 12.x versions.
  You can try to install and run tmc and update your java install if logging in with the cli fails.

Follow the instructions on the following page to install [TMC client](https://github.com/testmycode/tmc-cli).

Note that on this course we use the command line version of TMC, not netbeans
or any other IDE. So, you need to know the basics of command line use in the
terminal/command prompt.

If you detest command line usage, it is possible to use Visual Studio IDE (with
python) as there is also a Visual Studio
[plugin](https://www.mooc.fi/en/installation/vscode) for TMC client.  

## Installing Python 3

The exercises requires Python 3 (3.5 or higher). This may be confusing as for
example Macs come with preinstalled Python 2. There are many many ways to install Python 3

- Download it from the official [website](https://www.python.org/downloads/).
- Ubuntu/debian users can use apt-get.
- Mac users can use MacPorts if it is installed.
- Popular distribution of python, [anaconda](https://www.anaconda.com/products/individual) or [miniconda](https://docs.conda.io/en/latest/miniconda.html), has its own package installation system. This distribution should work but it has not been tested.  If you already have anaconda installed, we suggest that you try to install the needed packages with anaconda.

We assume from now on that the command for Python 3 is `python3` which should
be the case for mac / linux.  It may be also just `python`, in which case,
whenever we ask you to type `python3`, just type `python`. You can see the
version of your python with

```sh
python3 --version
```

Package installer for Python (pip) should be already installed with modern python if you installed python from python.org or using conda distribution.
If you you installed it using apt-get or port, then most likely you will need to install pip. The package name is probably `python3-pip`,
alternatively follow these instructions to install [pip](https://pypi.org/project/pip/).


Install the following packages using pip

```sh
python3 -m pip install django selenium beautifulsoup4 requests 
```

You need to allow your firewall software to allow python to listen and to connect to the internet.


## Installing ChromeDriver and Chrome

There are few programming exercises that require writing javascript.
In order to test these exercises locally, the tests rely on a chrome browser.

Two pieces of software are required
- the browser [Google Chrome](https://www.google.com/chrome/)
- a software that allows python communicate with the the browser [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads)

When installing ChromeDriver you need to make sure that the driver version matches the browser version,
otherwise the driver refuses to work.
The browser version can be seen by going to chrome://version .

You also need to make sure that both chrome and the chromedriver can be reached via PATH environment variable, that is,
you should be able to open the chromedriver and the browser via command line without specifying the exact location of the executable.

Chromedriver doesn't come with an installer. Instead it's a zipped executable.
You need to unzip the package, and place the executable somewhere where the PATH
can reach it.

## Downloading the exercises

Go to a folder where you want to download the exercises, and issue command `tmc login`.

If it asks for a server address, then your TMC client is outdated. Re-install the client.

Provide login details, and use organization slug `mooc`.
