---
path: '/module-1/3-stride'
title: 'Identifying threats'
hidden: false
---

When beginning development of a new application, there are few factors that
should immediately be considered. From the point of view of this course series,
we naturally take the stance that security is the biggest one. It is essential
to apply some kind of threat modelling in the design phase. If not, the
application may have serious flaws or the effort to maintain security is wasted
on the wrong part of the application. In the process of threat modelling one
examines the application and deconstructs it to smaller parts--features and
modules--that do a certain thing. From these parts threats are identified and
from these threats the vulnerabilities. This process can continue, with each of
part being further deconstructed to even smaller parts.

Threats can be revealed by a variety of actors. For example, an ordinary user
may stumble on a flaw in an application; a script kiddie running automated
tools may discover a flaw; or a truly motivated attacker may find a flaw in the
application through manual analysis. A threat's impact on an application might
include unauthorized access being granted due to authorization failure, the
browser cache being poisoned with malicious data, or private data being
revealed via eavesdropping.

To simplify modelling, multiple ways exist of classifying threats. Two examples
are the STRIDE and DREAD checklists. Neither one is exhaustive, but both
provide good structures for determining the type of a given threat.

## The STRIDE Threat Model

The STRIDE Threat Model is a useful checklist of questions that can help in the
threat-modelling of an application. 'STRIDE' is an acronym for the following
threat categories: *Spoofing, Tampering, Repudiation, Information Disclosure,
Denial of Service,* and *Elevation of Privilege*. *Spoofing* covers cases where
someone is illegally accessing a system using another user’s authentication
information. *Tampering* covers cases such as unauthorized changes made to
persistent data, whether inside a machine or in the transport. *Repudiation*
specifies that a system should be able to trace user operations to provide
evidence of what has happened in case of a breach. *Information Disclosure*
covers the exposure of information to unauthorized individuals. (This category
of threat can also occur within a machine or during transport.) *Denial of
Service* refers to cases where the server or service is made temporarily
unavailable. Lastly, *Elevation of Privilege* is a threat type in which an
unprivileged user finds a way to gain sufficient privileges to compromise the
system.

## The DREAD risk assessment model

DREAD is a mnemonic checklist for prioritizing threats based on their severity,
and stands for *Damage, Reproducibility, Exploitability, Affected Users,* and
*Discoverability*, all of which are fairly self-explanatory. (There has been a
fair amount of discussion concerning Discoverability, and whether encouraging
security professionals to minimize discoverability would in turn favor the
deprecated approach of security through obscurity.) A scale from 0-10 is
usually used in all categories, save for discoverability which is commonly set
to 10 on the grounds that any threat will eventually be discovered.


## Cyber security is not only a tech problem


The news of security breaches is full of reports of hackers using their own
radio setups to wreak havoc, such as the misdirection of yachts or the
reprogramming of the firmware of an USB device to hide malicious code. News
reports have a tendency to sound technical when trying to explain the root
cause of an exploited vulnerability. Security is multidisciplinary, however, in
the sense that effective security comes from understanding the vulnerabilities
that may come either from the physical environment, the technology, or from the
human element in the mix. Threats from the physical environment may include
fires, natural disasters, theft of computing resources, or exposed cables.
Technical threats are what this course considers in more detail, but it bears
remembering that there is a strong human element in cyber security. The best
security safeguards in the world count for very little in the following
situations:

- An bank employee accidentally emails out a file of bank details to a wrong address.
- A corporate employee copies a set of sensitive documents to a memory stick which is then stolen.
- A company-supplied portable devices such as a phone, laptop, or tablet has sensitive data on it, and is stolen, or accidentally left behind in a public place by the employee to whom it is assigned. (It is surprisingly common for people to forget laptops on planes, in coffee houses, etc. Encrypting devices and enforcing a policy of hard-to-crack passwords goes a long way towards protecting against data theft in such circumstances, but strong passwords are hard for humans to remember.)
- Company staff use their private email addresses--which may or may not be protected--for corporate communication.
- Staff receive attachments that are dubious and open them, or visit a dangerous website and are the target of a drive-by download of a malicious piece of code.
- Staff discuss a work-related matter in social media, or publish a photo of the workplace, which then leaks to the wrong people due to improper privacy settings.
- ...all of the above by a very disgruntled employee doing it on purpose.

It is evident, from the list above, that human actions in the office are potential threats, but threats that can be mitigated by educating staff and providing knowledge about correct cyber security procedures. Care must be taken in communicating proper procedures as the audience is broad and may or may not be technically aware.

In short, cyber security is everyone's business. Designers and implementers build systems that have no holes (well, as few as possible), operations staff build and maintain secure networks, administrators keep systems properly updated and configured, users should prefer secure software, and executives should make early investments in security.

<text-box variant="emph" name="Physical attacks">

Let's not forget the building and the doors. Here is a talk by Deviant Ollam
titled [I'll Let Myself In: Tactics of Physical Pen Testers](https://www.youtube.com/watch?v=rnmcRTnTNC8).

</text-box>



<quiz id="60886132-9277-5c00-8107-88e9623b1564"></quiz>
