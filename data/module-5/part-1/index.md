---
path: '/module-5.1/index'
title: 'Project II'
overview: true
hidden: false
---
<deadline>30.12.2019</deadline>

In the second project, the participants will install an operating system with a
variety of vulnerabilities and then install a network intrusion prevention
system into it. Subsequently, the participants will familiarize themselves with
penetration testing software, and attack the system they installed.


<please-login></please-login>

The project has only 1 part.

### How to get started

This material contains the second project of the course series called [Cyber
Security Base](https://cybersecuritybase.mooc.fi/).  In order to submit your
project, you will need a MOOC.fi account that you can create at at the right
hand corner of this course material.

Once you have created the account, please answer a background questionnaire at
https://elomake.helsinki.fi/lomakkeet/74256/lomake.html. Answering the
questionnaire should take less than 10 minutes and will be very valuable for
the research conducted on this course.

### How to pass the course

To pass the course you need to complete the project assignment, write report,
and provide 3 reviews of other projects.

### Project description

In the second course project, you will install an operating system with a
variety of vulnerabilities and then install tools that monitor attacks into
it. After you have the system running, you will work with penetration
testing software to attack the system. Please note that this project is
challenging and completing it may take a lot of time if you're not
comfortable with the command line.

The system that you are expected to install is [Metasploitable
3](https://github.com/rapid7/metasploitable3/). We recommend that you create a
virtual machine for the installation by, e.g., using Virtualbox (See
installation notes in Appendix A on the bottom of the page). Once you have the
Metasploitable 3 virtual machine running, install
[Snort](https://www.snort.org/) into it -- see their
[F.A.Q.](https://www.snort.org/faq). Make sure that your Snort (community)
rules are up to date.

Now you have a system that you can attack! Next, download [Metasploit](https://www.metasploit.com/) and [get familiar with it](https://www.rapid7.com/products/metasploit/).

As a primer to the attacks, read [Intrusion detection evasion: How Attackers get past the burglar alarm](https://www.sans.org/reading-room/whitepapers/detection/intrusion-detection-evasion-attackers-burglar-alarm-1284).

Start your attacks by a simple port scan. If you worked through the Securing Software -course, you can also use the portscanner that you implemented as a part of the first assignments.


### Essay

You will then write a brief (1000 words) report with the title "Is it easier to fix the application than to detect attacks?". Include at least three attacks that Snort could identify and two attacks that Snort could not identify into the report. If you cannot find any attacks that Snort cannot identify, remove some of the Snort rules (and include description about this into the report as well!).


The report _must_ follow the following structure:

```foo
General observations

IDENTIFIED ATTACK 1:
<description>

IDENTIFIED ATTACK 2:
<description>

IDENTIFIED ATTACK 3:
<description>

...

MISSED ATTACK 1:
<description>

MISSED ATTACK 2:
<description>
```

We recommend not to write the essay directly to the browser. Instead write (and
save) it using your favourite text editor, and copy-paste it.

Once your report is completed, you will review three reports from other course
participants. Note that your report should be +- 20% of the expected report
length and it must include the content expected above.

### Submitting the project

<quiz id="a77a4d33-855e-411f-a4f7-dd63b31796e2"></quiz>


### Installation notes

We will use the following components:
1. Metasploitable 3 is an operating system with many security vulnerabilities
2. Virtualbox allows us to run Metasploitable 3 in a virtual machine, that is, Metasploitable 3 will be run as a "normal" program inside your host operating system but you can
ssh to it, and use it as a normal operating system.
3. We will use Vagrant to install Metasploitable 3 to Virtualbox.
4. We will use Snort to monitor the incoming attacks. Snort will be installed inside Metasploitable 3.
5. We will use Metasploit to attack Metasploitable 3.


#### Installation instructions

- Download and install Virtualbox and Vagrant.
- Download the Vagrantfile, i.e., `wget https://cybersecuritybase.mooc.fi/public/Vagrantfile` on to your local machine and use vagrant to build it, i.e., `vagrant up` in the same folder as the Vagrant file.
- The default address, username and password can be read from the Vagrantfile.
- Log into the newly created box `vagrant ssh`.
- Install snort to the box, i.e., `apt install snort`
- Download community rules, `wget https://www.snort.org/downloads/community/community-rules.tar.gz`
- Unpack it to snort rules folder (`/etc/snort/rules/`), i.e., `tar xzf community-rules.tar.gz -C /etc/snort/rules`
- wget the emerging rules set, i.e., `wget https://rules.emergingthreats.net/open/snort-2.9.0/emerging.rules.tar.gz`
- `tar xzf emerging.rules.tar.gz -C /etc/snort/rules/`
- Modify the `/etc/snort/snort.conf` to include all the rules in the `/etc/snort/snort.conf` or use the one we provided: [snort.conf](snort.conf)
- Note that some of the rules may conflict and cannot be enabled at the same time.
- Do remember that in a production setup you would not enable all of the rules by default but would choose a set of rules that you think are the important ones. Which of them are, there is a good question?
- Finalize snort configuration. We for example changed the file /etc/snort/snort.debian.conf to to the following: [snort.debian.conf](snort.debian.conf).
- Restart snort with "sudo service snort restart"
- Test the box and it's snort with metasploitable commandline, i.e., `msfconsole`

Some useful commands to use in msfconsole are

```code
use [exploit/...]
set RHOST [targetIP]
exploit
show options
info
search [KEYWORD]
```

- You can check that snort logged by tailing `/var/log/syslog` (or `/var/snort/snort.log`, depending on your configuration). If that doesn't work you can try starting snort from the command line -- you can force it to print straight to the console with the right options.
- Note that you can see malformed traffic without any attacks.

<exercises-in-this-section></exercises-in-this-section>
