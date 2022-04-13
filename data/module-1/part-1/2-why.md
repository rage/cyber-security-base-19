---
path: '/module-1/2-why'
title: 'Cyber security in the real world'
hidden: false
---

## What is cyber security and why should we care about it?

Software is literally everywhere. Initially software resided on mainframes and only few people were in contact with it. Somewhat later the personal computer was invented and thanks to its popularity, software moved to our homes. (That said, in the home software was still restricted and an attacker would need physical access to the target.)

One day the Internet spawned and began globally connecting personal computers. The Internet is incredibly useful to non-attackers but it made things easier for attackers as they no longer needed to physically visit targets. The evolution of computers kept rolling on and one day we were introduced to cellular phones and eventually smart phones, which are basically small scale computers with wireless connectivity.

Currently we are on the brink of Internet of things, which promises to connect every device to the Internet. For example, we have smart TVs, smart locks, smart cars, and smart toasters. The software ranges from large, such as the operating system, to small, such as the USB driver.

There is an ongoing explosion in the number of devices needing software.
Number of devices connected to the internet is in tens of billions, this is especially
due to the internet of things where dedicated devices (instead of multipurpose computers)
are connected directly to the internet. The number of such devices is still increasing.
This poses a growing need for code and software developers, who will
have great pressure to write both functional and secure code in a limited
timeframe. Developers may face unrealistic time pressure to rush code to
production.

In addition to the growing need for more code, the code base has gotten more
complex. Every machine is connected and larger systems are now distributed.
Different parts of the systems may be developed by different vendors, but need
to interoperate. Moreover, most current systems are based on software
frameworks which enlarge the code footprint of even small applications, and/or
are extensible with/via plugins and addons.

Combining the connectivity, complexity, and extensibility of the software, we
get a comfortably-sized attack surface for the attacker. It is perhaps not
surprising, therefore, that the number of vulnerabilities in software has
steadily risen over the years. Vulnerabilities and their statistics can be
queried from the National Vulnerability Database and from the Common
Vulnerability and Exposure database
([NVD](https://nvd.nist.gov/vuln/search)
and
[CVE](https://cve.mitre.org/cve/search_cve_list.html)).

For the attackers the attacking will stay easier than defending as long as the
attacker can attack anywhere and the latter have to defend everywhere. With a
successful security analysis, however, many of the obvious vulnerabilities --
in other words, the low hanging fruit -- can be found. This doesn't necessarily
make a system totally secure, but rather that it makes the system able to
withstand attack attempts by unskilled attackers, automated attacks.

<text-box variant="emph" name = "Vulnerabilities are hard to find">

Even though the software or/and the protocol it implements is at its mature phase it may still hold surprises. Below are some examples of some "recent" vulnerabilities found in well-known and highly-used pieces of software.

- [Beast](https://blog.qualys.com/ssllabs/2013/09/10/is-beast-still-a-threat)
- [Heartbleed](https://heartbleed.com/)
- [Heist](http://arstechnica.com/security/2016/08/new-attack-steals-ssns-e-mail-addresses-and-more-from-https-pages/)
- [Krack](https://arstechnica.com/information-technology/2017/10/severe-flaw-in-wpa2-protocol-leaves-wi-fi-traffic-open-to-eavesdropping/)

</text-box>

The world is changing and cyber security is a rapidly-growing global issue.
Adversaries come in many shapes and sizes, ranging from script kiddies to
foreign governments to organized crime. Regardless of the adversary, all have
easy access to very sophisticated and powerful technologies. Moreover, some
attacks are so sneaky that they become evident only after the attack has
happened.

Attacks can result in much mayhem and harm with significant monetary losses,
but the business impact of a security breach can be difficult to tell. This is
an area where it is hard to reach definitive and representative figures or
findings. At least one study, however, from [Oxford Economics](https://www.oxfordeconomics.com/my-oxford/projects/276032) (the PDF is obtainable via [wayback machine](https://web.archive.org/web/20210121202944/https://www.oxfordeconomics.com/my-oxford/projects/276032)), provides a set of findings based on
surveys and case studies. Those findings show that cyber attacks do indeed
result in major business impact on victims.

<quiz id="d44b8055-56a8-536c-9eba-91b350509369"></quiz>

The job of a vulnerability researcher is to come up with recommendations for
minimizing the risk to an organization. The tasks of protecting enterprise
systems and data include establishing policies, practices and tools that lower
the risk of illicit behaviour. The technical security assessments performed by
vulnerability researchers include the identification of vulnerabilities,
misconfigurations, and weaknesses.

<text-box variant="emph" name="TED: a source of infinite goodness">

Watch Dan Cornell's talk [It's all about the coders](https://www.youtube.com/watch?v=fi44mL7mcq0)

Watch Paul Carugati's talk [Cyber Self-Defense](https://www.youtube.com/watch?v=knLDY7hRm5I)

Watch James Lyne's talk [Everyday cybercrime -- and what you can do about it](https://www.ted.com/talks/james_lyne_everyday_cybercrime_and_what_you_can_do_about_it?language=en) on TEDTv.

</text-box>

<quiz id="aecd3d43-e043-5598-ad21-0503bfb51748"></quiz>


## Media reports only the tip of the iceberg

Security-related news has become more and more common. Media reports about
breaches are no longer minor items buried in miscellaneous news, but instead
are prominent front-page material. Everything, from baby monitors to security
cameras, from cars to luxury yachts, has been targeted and hacked. The threats
news agencies talk about have become more complex and more professional. Stolen
password lists have become sought-after merchandise and news about targeted
ransomware attacks have been seen at an unprecedented rate. This reveals the
grim truth that our lives online, and by extension our lives offline, have
become an easy way for criminals to make money, and that this threat affects
all industries, countries, and social spaces.

Although the media is beginning to take breach news seriously, and studies such
as the [Crime Survey of England and Wales](http://www.crimesurvey.co.uk/) from
the Office of National Statistics show that the frequency of incidents is
increasing, it is still commonly believed that cyber crime is an underreported
area of illegality.

<quiz id="b85fcce7-ff87-5430-b51c-02940d5804e1"></quiz>

The above conveys a bleak picture of the current state of things. At the same time, however, governments, organizations, corporations and institutions are funnelling more and more money, research and effort into improving the situation.

<text-box variant="emph" name="Additional links to breach news">

- [Millions of email accounts compromised in massive data breach that includes Google and Yahoo](http://www.telegraph.co.uk/news/2016/05/04/millions-of-email-accounts-compromised--in-massive-data-breach-t/)
- [Android security breach puts millions at risk of smartphone hijacking](http://www.telegraph.co.uk/technology/internet-security/11788184/Android-security-breach-puts-millions-at-risk-of-smartphone-hijacking.html)
- [Ransomware hackers are targeting U.S. execs](http://money.cnn.com/2016/08/05/technology/ransomware-study-malwarebytes-hackers/)
- [Hackers Turn Security Camera DVRs Into Bitcoin Miners](https://www.wired.com/2014/04/hikvision)

</text-box>


## Responsibilities and liabilities

This course will not delve deeply into the law, but note that companies and
corporations have responsibilities and liabilities for the data they gather.
Most have made a commitment, whether legally enforceable or not, to treat data
gathered with the utmost care. In addition, laws and regulations govern the way
these entities must secure their data and dictate the correct procedure to
follow after a breach has occurred.

For example, the General Data Protection Regulation (GDPR) (Regulation (EU)
[2016/679](http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#d1e6226-1-1))
unifies and simplifies the regulations for data protection within the European
Union. The GDPR replaces the current directive in this area, and has as its
main objective in giving people control over their personal data. Furthermore,
the regulation covers matters such as the export of personal data outside of
the EU, sanctions for non-compliant parties, the right to erasure, and data
breach reporting procedure. This regulation is in force as of the 25th of May,
2018.

The GDPR provides the first economical grounds for data protection: just as
environmental regulations have internalized the cost of environmental damage to
production, we may see the same happening with data protection. Insurance
companies have also noticed the impending GDPR and have introduced various
types of cyber security insurance which would cover some costs caused by a
breach (for example a loss of profit).

<quiz id="9c244f29-b8cf-5ed7-96d2-5c06a634f8c1"></quiz>

However, the law is for the law abiding; for a criminal it is just a deterrent.
The Internet provides anonymity and distances the attacker from the victim,
making it easier to step into the world of crime via the Internet. The
commission of crimes via the Internet is commonly known as *hacking*.
(When discussing hacking we do have to mention *ethical hacking*. An
ethical hacker, like his criminal counterpart, is an expert who tries to
penetrate a computer system, but the former does it with permission from the
system owner in order to reveal security vulnerabilities that malicious actors
could potentially exploit.)

<text-box variant="emph" name="TL;DR Breaking into computers is illegal, use common sense">

This information is provided for educational purposes and not for causing
malicious or damaging attacks. Again, performing any penetration testing
requires permission from the owner of the target. Moreover, it should be noted
that the target may reside on the same server as other services, so permission
from the service provider may also be needed.

</text-box>
