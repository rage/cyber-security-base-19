---
path: '/module-1/4-history'
title: 'From Brain to Stuxnet: selected history of malware'
hidden: false
---

In this section we will focus on the history and the development of malware and hacking in general.
We will provide selected historical examples and comment on patterns and trends.

## Examples of malware

Malware predates commercial, wide-spread internet.
[Brain](https://www.youtube.com/watch?v=lnedOWfPKT0), the first _virus_
for PC (with MS-DOS being the operating system) was written in January 1986.
The virus infected the boot sector of floppy disks. 
If the floppy disk was inside the PC during its boot,
a contemporary computer would first try boot it from the floppy, before moving
to the hard disk (if such was present). Booting from the floppy disk allowed
the virus to be uploaded into memory, and replicate itself if a new floppy disk
was inserted into the computer. The original version of the virus did not do
any intentional damage (though the code contained bugs and some user information may
have been destroyed if the floppy disk was too full). Moreover, the makers of the
virus included their names and their _phone numbers_ in the code.
It has been estimated that Brain and its variants infected
over 300 000 floppy disks.

Another notable early PC virus was _Jerusalem_, discovered in 1987. Instead
of infecting a boot sector, the program would infect every executable file
(with exception of `command.com`, an MS-DOS shell) that the user ran while
Jerusalem was in memory. The infection worked by modifying the code of the
program so that when user launched the program, the virus would first upload
itself into a main memory and hooked itself to the low-level commands, and then allowed
the original program to execute itself. By hooking itself to the low-level commands,
the virus code was called, for example, whenever the user would open a new executable.
Jerusalem was a _logic bomb_, meaning that it would go off if certain conditions
were met: if the date was Friday 13th, the virus would delete any executable
that was run on that date.

One of the first _worms_, and the first worm escaping 'containment', was Morris
worm (1988), named after its creator. The difference between a worm and a computer
virus is somewhat hazy, as there is a lot of malware that combine both aspects.
Typically, a virus requires a host program to which it attaches while the worm
is an independent, hidden program.  Moreover, often a
virus requires an action from the user, such as opening an executable file,
whereas a worm relies primarily on bugs and vulnerabilities in software.

Worm typically spreads using a computer network by infesting the host
and scanning new targets. Morris worm spread by abusing known vulnerabilities
of several UNIX programs as well as users using weak passwords. According to Morris,
the worm was not to meant to be harmful. However, a design flaw resulted the same
machine being infected multiple times, rendering them inoperative until the worm was removed.
The worm infected significant portion of connected UNIX machines, resulting in Internet
being partitioned for several days.

In 1989, A _trojan_ named _AIDS_ was discovered.
Trojans, unlike viruses or worms, do not replicate themselves. Instead they
hide their true purpose within a program that users willingly launch.
AIDS is the first known _ransomware_: after certain amount of
time has passed it would encrypt the hard drive, and demanded a payment of $189
to a post box office in Panama. The trojan contained a design failure so that
one could restore files without paying the ransom. Modern ransomware would require
payment in a difficult-to-trace digital currency such as bitcoin.

Early PC viruses were based on executing code, meaning that they were attached
to an executable file or a boot sector. The first _macro virus_ Concept was discovered in 1995,
infecting Microsoft Word documents. The concept of macro virus was made
possible due to the significant scripting abilities in Microsoft office programs.  This
led to a significant rise of macro viruses as now viruses could spread through
documents, especially as email attachments.

The first email virus/worm/trojan, _Happy99_ appeared in January 1999. 
The virus consisted of a trojan executable that upon execution would show firework
animation, and attached itself to an existing windows library. Under certain conditions,
it would then send itself further over email to a new machine.
In May, 2000, an internet worm _ILOVEYOU_ infected over 10 million Windows users.
The worm consisted of an email asking to open an attachment "LOVE-LETTER-FOR-YOU.txt.vbs".
At the time file extensions such as "vbs" were hidden from the user, so it appeared
that the attached file was a text file. Opening the file would execute a Visual Basic script,
overwriting random files, and sending a copy of itself to everyone in the address book.

While early viruses pay little attention to hide themselves from anti-virus
software, modern viruses often have sophisticated stealth techniques. For
example, a virus can be polymorphic meaning that it changes its binary code without
changing its behaviour. The first polymorphic virus was
[1260](https://en.wikipedia.org/wiki/1260_(computer_virus)), created as a
demonstration of the technology. A notable non-research software was Mutation
Engine (MtE) written by Dark Avenger. The software is not a virus itself but
can be used as an add-on module that would encrypt the payload (the actual virus code) to look like
random byte code, making it very difficult to detect using a traditional
signature-based anti-virus software.

Viruses or worms can also monitor the computer and take actions whenever they
detect that they are being scanned.  For example,
[Fizzer](https://www.f-secure.com/v-descs/fizzer.shtml) would kill known anti-virus
processes. An interesting case was [WannaCry](https://www.vox.com/new-money/2017/5/15/15641196/wannacry-ransomware-windows-xp) ransomware that encrypted the
victim's data and demanded payment in bitcoins. The original variant of the virus contained a kill
switch: it checked whether a certain domain existed. If the domain did not exist, only then the worm would continue to spread.
Anti-virus researchers were able to slow down the spread of the virus by simply purchasing
the domain name.  While it is not known why the creators included a kill switch,
one plausible theory is that this was done to slow down the analysis by security experts.
When being researched, viruses are launched in a 'sandbox' environment so that the virus cannot
do any external damage. In such environment, internet is simulated,
with the consequence that _every_ domain name is valid. The theorized logic behind the kill-switch is as follows: if a specific
domain, that should not exist, exists, then surely we are in a sandbox environment, so
we should remain dormant.

<quiz id="c873abfc-7259-552c-8d09-a2d205d6708a"></quiz>

## Hacking

It is useful to distinguish a targeted security attack against a single entity
and a malware campaign. Both share common technical components in that they are
using the same vulnerabilities to achieve their goal. Moreover, malware have been
used for targeted attacks. However, the goal of a targeted attack is to break
into a single system while a malware campaign usually tries spread out as much
as possible. A targeted attack is interactive, meaning that a hacker is probing
the system real-time, looking for a weak point. A typical target for a hacker
is either a company or an institution or a public figure, such as a celebrity or a politician or a journalist.
However, targeted
attacks on companies do have an effect on layman individuals if, for example, personal
data, such as, passwords, emails, photos, or credit card numbers, are stolen in the process.


<text-box variant="emph" name = "On the word hacking">

The [origins](https://www.wired.com/2014/11/the-tech-model-railroad-club/) of
the word _hacking_ or _hacker_ originated in Tech Model Railroad Club (TMRC) at
MIT.

The connotation of the word is controversial: while the media for general
public uses the word hacker usually when describing cyber criminals, and this
is the most common use of the word. However, among computer enthusiasts a
hacker can mean any skilled computer expert. The former creates a negative
association while the latter is more positive.  To complicate the matter,
several (in)famous hackers that have been caught and sentenced, have later started
security consultancy businesses and/or have written books about their acts.

Terms have been suggested to indicate the intent of hacking. Malicious hackers
are sometimes called crackers or black hats while ethical hackers or
computer security experts are referred as white hats.

We will use the word hacking as a neutral term without addressing the
intent or the morality of the act.

</text-box>

Early prominent example of hacking was manipulating phone signals, known as
_phone phreaking_. The phone system during 1950-1970s used the same lines to carry the
conversation as well as the control signals. Hackers figured out how to manipulate
these control signals which allowed them to among other things free long-distance phone calls.
An early phone phreak, Joe Engressia, discovered that whistling 2600Hz tone had an effect
on phone switches. John Draper used a toy whistle packaged with breakfast cereal to generate
the 2600Hz to manipulate phone switches. More sophisticated tone generators, known as blue boxes,
were constructed. Among blue-box enthusiasts were Steve Wozniak and Steve Jobs (who later founded Apple).

The main reason why phone phreaking was possible is that control signals and
user data (conversation) shared the same communication channel. The lack of
sanitizing user data allowed hackers to manipulate the program that was
processing the data, in this cases the phone switches.  Similar oversights are
responsible for significant portion of historical and modern vulnerabilities in computer
systems, most prominent being [SQL
injection](https://owasp.org/www-community/attacks/SQL_Injection)
and [buffer overflow](https://owasp.org/www-community/vulnerabilities/Buffer_Overflow).

Hackers used, and still do, software
vulnerabilities to hack into various systems. However, the aspect of social engineering
in hacking cannot be overstated: human element is most of the time the
weakest link, for example, by using a weak password, or being fooled to give out
sensitive information to a malicious party. As an example, see Kevin Mitnick [talk](https://www.youtube.com/watch?v=NtzZBTjKngw&t=3775).
Targeted attacks often involve a combination of social engineering and exploiting weaknesses.
Some of the social engineering attacks may be extremely sophisticated, making them very difficult
to recognize, as demonstrated (in the same [talk](https://youtu.be/NtzZBTjKngw?t=2330)) by Kevin Mitnick.

### Advanced persistent threats

While early hackers tend to be (younger) individuals that were hacking "as a
hobby", nowadays there are several hacker groups that have significant
resources, computer hacking skills, and time at their disposal. These agents
are often referred as [advanced persistent
threats](https://www.fireeye.com/current-threats/apt-groups.html), and they are
often claimed to be funded by nation states. We should stress that nation
states never confirm their connection to an APT group. Any connection is
claimed by either other nations or cyber security experts. We consider these
alleged connections as is, without further speculation.

Notable examples of APT actions include:

* [APT1](https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf), a Chinese cyber espionage group 
* [Guccifer 2.0](https://www.washingtonpost.com/world/national-security/cyber-researchers-confirm-russian-government-hack-of-democratic-national-committee/2016/06/20/e7375bc0-3719-11e6-9ccd-d6005beac8b3_story.html), a hacker group responsible for cyber security attack against Democratic National Committee in United States, supported by Russian government.
* [Lazarus Group](https://www.nytimes.com/2014/12/18/world/asia/us-links-north-korea-to-sony-hacking.html?_r=0), a hacker group responsible for hacking Sony Pictures as a retaliation for the movie "The interview", with possible links to North Korea.
* [Stuxnet](https://www.wired.com/2014/11/countdown-to-zero-day-stuxnet/) a significant and extremely sophisticated computer worm designed to attack
Iranian nuclear enrichment facility, widely understood to be designed by The United States and Israel.


## Trends and patterns

We can observe several trends and patterns on how cyber security has developed over the years.


Introducing new technology has typically introduced new attack opportunities:
dual-tone signaling in telecommunication systems led to phone phreaking, macro
languages in documents led to macro viruses, allowing storing and modifying
user content through web servers significantly increased attack surface. Smart
phones and Internet of Things are no exceptions.

Early malware were primitive due to the nature of creators as well as other
technical constraints.  Modern malware may be complex software, containing
anti-detection mechanisms. Moreover, tooling for creating malware have improved
over the years.

The attack surface is in a constant state of change. New vulnerabilities are
discovered and old vulnerabilities are patched. Also, motives for creating
malware has changed over the years.  For example, few years back computers were
hijacked to mine bitcoins, but this has largely stopped since using normal computers
to mine bitcoins is no longer profitable.

Modern cyber security protection does not only focus on detecting malicious
software but also tries to limit the human factor. This includes recognizing
phishing emails and malicious websites, password constraints, two-factor
authentication, or not allowing users to have admin rights on their work computers. A historical change
that is nowadays taken for granted was introducing a user-friendly way of
patching software: before the user had to manually search, download, and
install the patch, leading to many unpatched computers.

While early malware creators / hackers were hacking as a hobby, nowadays cyber criminality
is more organized with the means and the goal to make money.
