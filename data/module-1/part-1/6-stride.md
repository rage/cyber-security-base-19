---
path: '/module-1/6-stride'
title: 'STRIDE and DREAD'
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
