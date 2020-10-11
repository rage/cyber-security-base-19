---
path: '/module-4.2/index'
title: 'Part II'
overview: true
hidden: false
---

<deadline>22.02.2020</deadline>

<please-login></please-login>

The course consists of 5 parts.

### On Advanced Topics

This material contains the advanced topics part of the course series [Cyber
Security Base](https://cybersecuritybase.mooc.fi/). During this
course, you will learn about topics such as internet security issues, internet
of things security issues, issues in 4G networks as well as the issues and
remedies planned for the upcoming 5G network. This includes also relevant
cryptography topics. Architectural analysis of existing (software) systems will
be also visited.

By continuing, you agree to not to do any harm with this information or other
similar information on the internet.


### How to get started

In order to answer the questionnaires and essays, you will need a MOOC.fi
account that you can create at [https://mooc.fi](https://mooc.fi). The same
account that you did for the introduction part works here as well. Once you've
signed up, you can login to this page (click on the top right corner).


Once you have created the account, please answer a background questionnaire at
[https://elomake.helsinki.fi/lomakkeet/74256/lomake.html](https://elomake.helsinki.fi/lomakkeet/74256/lomake.html). 
Answering the questionnaire should take less than 10 minutes and will be very
valuable for the research conducted on this course.

When answering the short essay questions in this course, please answer them
carefully and with thought. Other participants in the course will review them
and may give you feedback.

### How to pass the course

To pass the course you need to get 51 points (max 60 points).  Each passed
essay or completed programming exercise is equivalent to 5 points, and each
multiple choice question is equivalent of 1 point.

To pass an essay, you need to write an essay within the given length, and
provide 3 reviews.  We also may reject your answer if it's flagged too many
times as spam or if it doesn't contain deep enough discussion. Also, we may
reject your peer reviews if you haven't put genuine effort into them.




# Your system is the target

This part discusses about how we can notice that something is going on in the system we are administrating. After this we are moving towards cryptography and cellular network security.

You can try and then try some more but it is impossible to protect your network against every kind of attack. It would be nice to know if something fishy is happening or in the worst case if the system is already breached that you would have data that can be used to identify the cause of it. Well, how to achieve this. One word, LOGS. They contain the digital trail of what happens in your system.

## Purpose of logs

According to OWASP the log always contains four basic types of information: _when_, _where_, _who_, and _what_ and security events should always be included. So logs are files that contain information of all activities that happen in the system. The timestamped entries can be considered as fingerprint of what happened. Which can be used to reconstruct the breach. One should be able to figure out what happened and in what order. Mining logs is a vital method of doing forensics analysis. Managing the logs has to be done properly in such a manner that the intruder shouldn’t be able to modify them. Properly managed logs can also be used as evidence in prosecution.

In addition, to the obvious reasons such as identifying security incidents, or assisting non-repudiation controls, logs are vital source of information to establishing the baseline behaviour for the day-to-day business and with that baseline it is easier to use techniques such as anomaly detection to be warned when something out of the ordinary is going on. For example if something is about to break.

## Managing Logs

For all of the system it is not necessary to keep everything. Instead one could categorize parts of the systems into groups based on their vitality to the system (the architecture analysis, which was discussed earlier, can be used as a guide of figuring out what parts are the vital ones). Based on those groups one can then decide how much information is stored on the actions. This is a balancing act between the storage and the knowledge of what happened. For example if you store few short messages your log does not require large storage but then again you do not have much knowledge what actually happened. Or on the other end of the spectrum you store basically everything you need lots of storage but you know exactly what happened.

<text-box variant=emph name="Too much is too much">

You might be tempted to store everything. You can but consider the following. If you store everything you will also create more work for the system to handle besides the normal operations it has to do. This will slow down the system and is not what you want.

</text-box>

Moreover, there are other things, such as law, that the log collector has to remember. Depending on the content of what is logged from the machine you might bump into situation that you need to have a privacy policy for people to read and take extra precautions on the data integrity and storage (even storage times). For example if you log the site's usernames or emails you are actually gathering personal information which then makes the log a person register. Other example is any other data in the log about the communications that can be associated with a certain user and so identifying who did what. As a reminder, soon we are going to have even stricter regulations (General Data Protection Regulation (GDPR) (Regulation (EU) [2016/679](http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#d1e6226-1-1))) on how we have to handle the personal data.



<quiz id="f4e27197-bf71-5dd8-ae83-cacd8443e019"></quiz>



<text-box variant=emph name="Further reading">

OWASP has gathered a good [cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) for what to log and how.

</text-box>

## Logging in Linux systems

Here we are going to give you a very brief introduction to logging on Linux system. For other \*nix and flavors of Linux there might be some differences, such as filenames `auth.log` vs. `auth_log`, but the basics remain the same. Why Linux? Well, according to [W3tech](https://w3techs.com/technologies/overview/operating_system/all) and [Netcraft](https://news.netcraft.com/archives/2016/02/22/february-2016-web-server-survey.html) the Linux as OS and Apache as the web server are holding the market share of the used options for setting up a webserver to serve the clients.

## Linux Log Files

<text-box variant=emph name="Logs. Where are they stored?">

Traditionally, logs in Linux systems have been stored as text files in the `/var/log/` directory. However, most newest Linux distributions have switched to binary logging for performance reasons and the same logs are available with the [journalctl](https://www.freedesktop.org/software/systemd/man/journalctl.html) command. Some of those newer systems also forward the logs to the /var/log directory for compatibility with legacy software.

</text-box>

A typical log directory in Linux-based systems contains many types of logs. First, there is the auth.log that contains the authentication events, such as sudos, remote logins, etc. Second, the daemon logs that log the information about the running application daemons. Third, the kernel log and the kernel ring buffer that are useful for kernel troubleshooting, Fourth, the debug log which collects the debug level information if enabled. Fifth, the system log itself that contains the greatest amount of data. It is usually the place where to look if other logs do not contain the looked for data. After this there are the application logs, out of which we will briefly introduce the Apache logs.

As an example below are couple of lines from different logs. The first is an example of auth log line and the second is an example of a system log line. They are similar in format. First the time stamp, hostname, who reported and what.

```rest
Jan 18 19:24:59 examplehost sudo: pam_unix(sudo:auth): authentication failure; logname= uid=1073634 euid=0 tty=/dev/pts/0 ruser=username rhost=  user=username
```

```rest
Jan 23 18:05:24 examplehost dnsmasq[1536]: using nameserver 8.8.8.8#53
```


### Apache logs

Apache creates two logs under the `/var/log/apache2/` (may vary depending on the system) and it contains an error log and an access log. The error log contains diagnostic information and any records of errors encountered. The access log contains everything else. It is highly customizable but can contain something like the following.

```rest
127.0.0.1 -- frank [10/Oct/2007:13:55:36 -0700] "GET /index.html HTTP/1.0" 200 2326
```

The first in the line is the host, followed by the identity reported by the client (here dash as it is not found) and the userid (usually the `REMOTE_USER` environment variables contents). After this there is the timestamp and the request line used followed by the return code and transferred object size.

### Remote logging

It is not wise to store the only copies of the logs on the machine that might be hacked. It is a good idea to set up a central logging server to collect all the logs (possibly from multiple machines). This way one will have redundant copies of the logs in case they are lost or tampered with. Remote collection of logs into central server is also a good place to run analytics and identify and present security anomalies.  WIth multiple machines sending their logs one must be certain that their perception of time is the same. Otherwise, interleaving what happened where and when can be difficult. One can setup a remote logging in such a way that it is secured by TLS and one could possibly send the logs via the public Internet, but it might be a better idea to send them to another machine via a dedicated control network not attached to the Internet (Although even then it should be encrypted, as it could be a mere oversight later when changing routes and suddenly the control network is accessible from the Internet. This is also one of the reason why even machines in the "inside" networks should have access control).

<text-box variant=emph name="Only a small intro">

This was only a small intro that scratched the surface and for more details one should consult the respective sites for the mentioned software. [Ubuntu logfiles](https://help.ubuntu.com/community/LinuxLogFiles), [Apache](https://httpd.apache.org/docs/1.3/logs.html), and [rsyslogd](http://www.rsyslog.com/) ([securing](http://www.rsyslog.com/doc/v8-stable/tutorials/tls_cert_summary.html))

</text-box>

<quiz id="2b03d1db-04c3-5cfe-8d05-cf9971ce3130"></quiz>

## Analysing the log files

The logs are quite huge and can easily be over a GB. Remembering that one line is an action that has happened and it does not take that many bytes so giga byte files contain "many" events and going through them is a massive task. You can manage the task with bash, grep, cat, cut, awk, less, etc. but other purpose built tools also exist.

### What to look for in a log

If you start seeing error messages of device drivers that you have not plugged in. If for example the parallel port driver starts to send error messages and there is no actual device using it. The conclusion would be that something fishy is going on.

Successful user logins, i.e., _Accepted password_, _Accepted publickey_, or _Session opened_. These keywords can be valid actions but what if you know that none of your workers are abroad and the IP addresses attached to these messages are from a far away place. Or what if you see thousands of failed attempts before these. Although, everything is working correctly when you see failed user logins, i.e. _authentication failure_ or _failed password_, you should have something to slow them down like a _iptables_ rule to drop too frequent connections from the same IP or use the script, such as authfail [script](http://freecode.com/projects/authfail/) to ban the IP for some period of time.

Changes on the user are also a point of interest. Things, such as user account additions,  changes or deletions, and password changes, are really interesting along with failed sudo commands (`FAILED su`).

As last but not least when something starts sending failures. It is usually something that should be checked out. It could be a faulty device, a bug, or someone trying to figure out if there is a whole in the system.

<text-box variant=emph name="Don’t panic">

So you got hacked. What to do when you notice it. Here is a short [procedure](https://business.f-secure.com/what-you-actually-need-to-do-if-youre-hacked/) of what to do.

</text-box>

So you have the logs for the web server and you are wondering what you should be looking from them. Below is a small list of points where you can start (the list is not complete but can be used to start to look for something going wrong).

- Executable file requests
- Excessive access attempts to non-existent files
- Code seen as part of the URL (urlencoded etc.)
- Access to extensions you have not implemented
- Access to pages that accept user input
- Oddly large transferred bits size
- System paths
- Web service stopped/started/failed messages
- SQL injection attempts, such as SELECT
- Lots of failed logins
- Large numbers of  of not found error (404) or internal server error (500) codes
- Error code 200 on files that are not yours

For example, in the request line one could see something like the following that could result in XSS attack.

```rest
’\"--></style></script><script>MALICIOUS CODE</script>
```

Or you could be seeing strings with many urlencoded characters when you are not supposed to see them. For example the following might be something you do not want to see.

```rest
%3cscript%20src=%22http%3a%2f%2fwww.malicious.com%2fcode.js%22%3e%3c%2fscript%3e
```

If you see an error code 404 it is actually a good thing as the server just said "I did not find the requested file". But then again if you start having loads of 404 codes it could mean that someone is searching for something that they should not be looking. On the other hand the success message 200 OK can be much more than an OK. Especially if when 200 OK is a result of, for example, either of the previous. 302 Redirect messages can be a sign that something has happened that should not have happened.

File paths and extensions is also something that one should look. Executable files are something that you might not want to see in the logs.  Moreover,  system paths, such as `/var/log` or `/etc/shadow` are not a good thing if found from web server’s log on a Linux box. It is also wise to remove backup and old files from the production site (.bak .old) as they are good source to look for changes in the system and they could reveal that the developer is lazy and makes mistakes etc.

<text-box variant=emph name="Serious security Warning from the Apache manual">

Anyone who can write to the directory where Apache is writing a log file can almost certainly gain access to the uid that the server is started as, which is normally root. Do NOT give people write access to the directory the logs are stored in without being aware of the consequences; see the [security tips](https://httpd.apache.org/docs/1.3/misc/security_tips.html) document for details.

In addition, log files may contain information supplied directly by the client, without escaping. Therefore, it is possible for malicious clients to insert control-characters in the log files, so care must be taken in dealing with raw logs.

</text-box>

<text-box variant=emph name="Knocking on SSH’s Door">

Although, one has configured their SSH correctly and closed all the unnecessary ports one should still expect to see numbers of failed attempts. The do not use a weak password for `root` and other real life stories about logs can be found from this [article](http://searchsecurity.techtarget.com/tip/An-inside-look-at-security-log-management-forensics-investigations).

</text-box>

<quiz id="b0fd97a7-8ba3-53bb-94bb-8874b7315eeb"></quiz>


During this second part of the advanced topics course, we have taken the steps into understanding system and application logging and how it can be used for intrusion detection. We also briefly glanced about the future with machine learning. This can be considered as intrusion detection.

<exercises-in-this-section></exercises-in-this-section>
