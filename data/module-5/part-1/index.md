---
path: '/module-5.1/index'
title: 'Project II'
overview: true
hidden: false
---
<deadline>31.12.2023</deadline>

In the second project, the participants will install an operating system with a
variety of vulnerabilities and then install a network intrusion prevention
system into it. Subsequently, the participants will familiarize themselves with
penetration testing software, and attack the system they installed.


By continuing, you agree to not to do any harm with this information or other similar information on the internet.

<please-login></please-login>

The course consists of 1 part.


#### Before starting the course

Please read the [instructions](/pass) on how to start and pass the course.
Especially, pay extra attention on 'how to pass' section as this course
requires additional steps in order to receive ECTS credits.

Completing the course requires setting up TestMyCode environment.
Please read the [installation instructions](/installation-guide).


#### Support channel and contact information

For support channel use [Discord](https://study.cs.helsinki.fi/discord/join/csb)  (use #csb_general channel).

For any further questions, contact grp-cybersecuritybase(at)removethis.helsinki.fi.

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
3](https://github.com/rapid7/metasploitable3/). There are two versions: Windows or Ubuntu.
For the project the Ubuntu version *should* be used.

We recommend that you create a
virtual machine for the installation by, e.g., using Virtualbox (See
installation notes in Appendix A on the bottom of the page). Once you have the
Metasploitable 3 virtual machine running, install
[Snort](https://www.snort.org/) into it -- see their
[F.A.Q.](https://www.snort.org/faq). Make sure that your Snort (community)
rules are up to date.

Now you have a system that you can attack! Next, download [Metasploit](https://www.metasploit.com/) and [get familiar with it](https://www.rapid7.com/products/metasploit/).

As a primer to the attacks, read [Intrusion detection evasion: How Attackers get past the burglar alarm](https://www.sans.org/reading-room/whitepapers/detection/intrusion-detection-evasion-attackers-burglar-alarm-1284).

Start your attacks by a simple port scan. If you worked through the Securing
Software course, you can also use the portscanner that you implemented as a
part of the first assignments, or you can use `nmap`.

A list of known exploits in metasploitable 3 can be found for example
[here](https://stuffwithaurum.com/2020/04/17/metasploitable-3-linux-an-exploitation-guide/)
(archived [link](https://web.archive.org/web/20210126234700/https://stuffwithaurum.com/2020/04/17/metasploitable-3-linux-an-exploitation-guide/) if the current one is broken),
or you can challenge yourself and try to find them on your own from scratch.


### Essay

You will then write a brief (1000 words) report.
The report should contain 5 attacks.
Include at least three attacks
that Snort could identify and two attacks that Snort could not identify into
the report.
Describe shortly each attack, what component is being attacked, how the attack is performed in metasploit. 

For the detected attacks include the Snort output (if the output is too long, then shorten it, for example by selecting a single line).

A port scan does *not* count as an attack.
If you cannot find any attacks that Snort cannot identify, remove
some of the Snort rules (and include description about this into the report as
well!). 

The report should also contain an essay on the topic
"The benefits and shortcomings of using intrusion detection systems".


The report _must_ follow the following structure:

```rest
Introduction

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

ESSAY: The benefits and shortcomings of using intrusion detection systems
```

Please write the essay carefully and with thought. Other participants in the course
will review them and give you feedback.
Essays should be written individually and using your own words. Copy-pasteing
from other sources is not allowed. Copy-pasteing text from other sources and pretending
it to be your own counts as plagiarism.
Plagiarism is not
allowed under any circumstances, and will have consequences when caught.
See [here](https://studies.helsinki.fi/instructions/article/what-cheating-and-plagiarism) for more detailed descriptions.

If appropriate, add a list of references to the end of the essay.

We recommend not to write the essay directly to the browser. Instead write (and
save) it using your favourite text editor, and copy-paste it.

##### Peer reviewing reports

Once your report is completed, you will review three reports from other course
participants.

Peer reviewing consists of general comments and 5 criteria which are graded on
a scale 1-5. One criterion grades the attacks, and the remaining 4 criteria
grade the essay "The benefits and shortcomings of using intrusion detection systems".

You should justify your grading in the general comments. Be specific, constructive, and polite.

The general explanation for the grades is as follows:

- 1: _failed_, the essay should be rejected
- 2: _passable_, the essay is still acceptable but barely
- 3: _average_, main points are presented but there are obvious ways to improve the essay
- 4: _good_, minor issues, but otherwise excellent work
- 5: _excellent_, no issues or only cosmetic issues

The more detailed criteria-specific rubric is given below.
When providing feedback take into account length limitations on essays.



| Criteria        | Grade 1  | Grade 2 | Grade 3 | Grade 4 | Grade 5 |
| --------------- | -------- |-------- |-------- |-------- |-------- |
| attacks         | plagiarized, unrelated, copy-paste, wrong or missing logs / descriptions, or otherwise inappropriate | logs are included, but descriptions of attacks are barebone, mostly just metasploit settings | descriptions are adequate but some important, obvious aspects are missing| minor issues with the descriptions | no issues or only cosmetic issues|
| comprehensive   | plagiarized, unrelated, copy-paste, or otherwise inappropriate | most important points are presented, an obvious point that should have been discussed is missing | all major points are mentioned but obvious connections are not described | all major points are described but some (subtle) connections that could have been mentioned are missing | no issues or only cosmetic issues |
| on-topic        | plagiarized, unrelated, copy-paste, or otherwise inappropriate | the essay answers the asked topic but contains portions of unrelated, unjustified discussion | most of the essay stays on topic but contains some unrelated discssion | the essay stays on-topic but contains some minor, unrelated points | no issues or only cosmetic issues |
| easy to follow  | plagiarized, unrelated, copy-paste, or otherwise inappropriate | the intention of the author is understandable from the essay but the presentation leaves room for improvement| meandering sentences, not grouped properly into paragraphs | minor grammar issues but otherwise excellent | no issues or only cosmetic issues |
| well-reasoned   | plagiarized, unrelated, copy-paste, or otherwise inappropriate | the essay requires significant effort from the reader to infer the missing steps | few gaps in logic but they can be read between the lines | minor gaps in logic | no issues or only cosmetic issues |

### Submitting the project

<quiz id="f8aa7d5e-28f9-5c87-94d8-e13b31448d54"></quiz>


### Installation notes

We will use the following components:
1. Metasploitable 3 is an operating system with many security vulnerabilities
2. Virtualbox allows us to run Metasploitable 3 in a virtual machine, that is, Metasploitable 3 will be run as a "normal" program inside your host operating system but you can
ssh to it, and use it as a normal operating system.
3. We will use Vagrant to install Metasploitable 3 to Virtualbox.
4. We will use Snort to monitor the incoming attacks. Snort will be installed inside Metasploitable 3.
5. We will use Metasploit to attack Metasploitable 3. Metasploit will be installed outside Metasploitable 3.


#### Installation instructions

Download and install Virtualbox and Vagrant.

Download the Vagrantfile, for example,
```bash
wget https://cybersecuritybase.mooc.fi/public/Vagrantfile
```
on to your local machine and use vagrant to build it, i.e., `vagrant up` in the same folder as the Vagrant file.
The default ip address, username and password can be read from the Vagrantfile.

Log into the newly created box `vagrant ssh`.

Install snort to the box, i.e., `apt install snort`.

Download community rules and
unpack it to snort rules folder (`/etc/snort/rules/`), i.e.,
```bash
wget https://www.snort.org/downloads/community/community-rules.tar.gz
tar xzf community-rules.tar.gz
cp community-rules/*.rules /etc/snort/rules/
```
Download the emerging rules set, i.e.,
```bash
wget https://rules.emergingthreats.net/open/snort-2.9.0/emerging.rules.tar.gz
tar xzf emerging.rules.tar.gz
cp rules/*.rules /etc/snort/rules/
```
Make sure that the community rules and the emergency rules are both unpacked to `/etc/snort/rules/` folder.

Modify the `/etc/snort/snort.conf` to include all the rules in the `/etc/snort/snort.conf` or use the one we provided: [snort.conf](snort.conf).
Note that some of the rules may conflict and cannot be enabled at the same time.
Do remember that in a production setup you would not enable all of the rules by default but would choose a set of rules that you think are the important ones. 

Finalize snort configuration. We for example changed the file /etc/snort/snort.debian.conf to to the following: [snort.debian.conf](snort.debian.conf).
This was needed so that snort monitors the correct network interface if metasploitable 3 is run inside the virtualbox.

Restart snort with
```bash
sudo service snort restart
```
It is probably easier to run snort directly on a command line
```bash
sudo snort -A console -u snort -g snort -c /etc/snort/snort.conf -i eth1 -k none
```
Test the box and its snort with metasploitable commandline, i.e., `msfconsole`

Some useful commands to use in msfconsole are

```shell-session
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
