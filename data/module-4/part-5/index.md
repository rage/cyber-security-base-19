---
path: '/module-4.5/index'
title: 'Part V'
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



# Internet of Things

In the last parts we discussed about cryptography and cellular network security. In this part we discuss about Internet of Things.

## What is Internet of Things

If we look at what Wikipedia says about the latest evolution of the Internet called Internet Of Things (IoT) we find something along the lines of "Network of physical objects, devices, vehicles, buildings and other items embedded with electronics, software, sensors, and network connectivity that enables these objects to collect and exchange data." Sounds about right as the Internet of Things is a network of devices. Nowadays, everything is connected - from refrigerators to industrial hardware. They are connected so that they can share data.

Sometimes these devices are called smart devices but it could be omitted as addition of an Internet connection or that it shares data does not make them smart and definitely it does not make them secure. It can make them a complex challenge for their owners and administrators of the networks they are connected to. From a company point of view this represents a large source of new devices that are difficult to manage and secure. Especially, because the new devices may run something really custom and haphazardly made software.

To top it all, we have to mention the number of these devices. Depending on the
study you read it is from vast quantities to unfathomable. For example, [IDC](https://www.idc.com/getdoc.jsp?containerId=prUS45213219)
predicts there will be around 42 billion connected devices worldwide in 2025
years. One [prediction](https://www.statista.com/statistics/471264/iot-number-of-connected-devices-worldwide/) for 2020 is 30 billion devices.
So this is the playground for this part of the course. Gargantuan number of not
so smart devices equipped with Internet connection with sharing of data as
their main purpose.

Sounds a bit bleak but from the security perspective IoT is. However, remember that IoT is a nice idea and it has its place in the world. Such as, the industrial IoT where sharing data for maintenance and operational purposes makes industrial equipment a lot more responsive and useful, and creates a much safer working environment. Also in agriculture planting, irrigation, harvesting and even soil monitoring have uses for IoT. But in any case care must be taken when implementing and deploying any smart device in home or industry.

IoT is far from a simple challenge for everyone.

## IoT ecosystem

What is connected to what and how. The image below depicts one possible manifestation of an IoT ecosystem. IoT devices are connected to some local hub in some manner or other. This may be anything from bluetooth to Wi-Fi to cellular connectivity (some of the more recent and interesting  connectivity methods include protocols such as, Lora, Sigfox, NB-IoT, and LTE M). IoT hub or gateway is a device handling the devices inside one location, e.g. at home. Sometimes the hub is omitted and the device connects directly to the cloud, usually these devices are using cellular connections.



From the cloud the data can be gathered for analytics that may be handled in the cloud or on some IoT platform. As the last entity there is the remote that uses a dashboard, such as a mobile application. They include smartphones, tablets, PCs, etc.

## IoT Characteristics

In the following we will go through some of the characteristics that define the IoT. The characteristics are separated into two categories, the device and the network. 

### Constraints from the device perspective

There are many kind of devices out there. They can be divided into two categories high-end and low-end. The high-end devices are devices such as laptops and smartphones and the low-end devices such as sensors and actuators themselves. Then there is one more subcategory of devices that are passive. These devices include things like barcodes, RFID and NFC. What actually constitutes as a constrained device. Pretty popular definition is along the lines of "a device that has limited processing and storage capabilities and often runs on batteries". Below is a list from [RFC 7228](https://tools.ietf.org/html/rfc7228). A device can be considered a constraint if one or more items in the list is limiting the device.

- Maximum code complexity (ROM/Flash)
- Size of state buffers (RAM)
- Amount of computation feasible in a period of time (processing capabilities)
- Available power
- User interface and accessibility in deployment (set keys, update software)

The same document also provides more detailed classifications for the devices but for this part of the course we are satisfied with this level.

### Network Constraints

As there are many kind of devices out there. Similarly there are many kinds of networks out there. The most common communication method is the wired communications. Although, not that popular with IoT devices. At least not with the smaller ones. Wireless communications are more popular with IoT devices. Wireless communications can be divided into long, medium, and short range methods. Cellular networks such as the 4G and 5G belong to the long range. Medium range includes mainly the Wi-Fi. Last but not least are the short range techniques, such as Bluetooth, Zigbee, and 6LoWPAN, that are most useful in personal and in home area networks.

In practice mass market wireless data networks are quite constrained. First of all high bandwidth comes at expense and is not always feasible or even wanted. When considering that the device might be constrained on the available power and running power-hungry radios might not then be the best option to go. More generally the power and/or spectrum limitations lead to lower bandwidth, at least in comparison to the wired alternatives.

The current networks can have latency issues that can be caused by their complicated routing. The reliability of the networks varies widely and fails differently between different networks and locations. Even complete network outages are not that rare (sometimes they can be caused by attacks). Smaller issues that can be seen in the networks range from low throughput to packet loss to packet fragmentation to asymmetric link characteristics.

In the Internet the communications design patterns have mainly followed the conventional client-to-server pattern. We have also seen peer-to-peer (P2P) patterns emerging and in somewhat recent past we have seen the rise of the clouds in the communication design patterns. The IoT puts a twist into the common communication design patterns. The main difference is the device-to-device (D2D) communication pattern. In which the devices talk directly with other devices. In most cases this communication is handled without IP with protocols such as, RFID, NFC, 6LowPAN (OK this is IPv6 but with really compressed headers and cannot communicate with IP without an edge router doing the translation so it can be left here), ZigBee, and Bluetooth. This communication pattern relies heavily upon secure pairing of the devices and the security is done mostly on the link layer. The cloud may be the communication partner for the Device. However, in most IoT cases the device is not communicating directly to the cloud but rather uses middlemen such as gateways or smart phones. These can be seen as extensions to the device-to-device communication patterns as the device first uses a D2D pattern and then the connection is forwarded to the cloud. The protocols for the first hop can be mostly the same as for D2D sometimes with the addition of WiFi. From the security point of view this is more complicated. How to handle end-to-end security efficiently from the device via a middle man and the cloud. Remember that the device itself and the used communication method may be constrained and the connection to the cloud may need more protection. For the connection to the cloud it is common to use protocols such as EAP, AAA, and PANA  for the authentication of the access to the network. In some cases the devices discuss between themselves in the local network. This can be seen as subcase of the device to cloud via a gateway pattern but in this pattern the devices use the gateway to communicate with other devices in the same local network. Sometimes the security is foolishly omitted or weak (the assumption is that the traffic is only in the local network) and the main security is thought to be in the authentication of the devices. If you are fortunate enough you can communicate directly to the cloud with a device that eg. has cellular radio and has enough CPU cycles to do proper crypto. Then you can use network access authentication and end-to-end security features easily. 

## Securing the IoT

Not that long ago one could have thought that you were describing a movie if you told that large numbers (really large) of IoT devices (CCTV cameras and such) were harassing DNS service providers and made several high-profile sites inaccessible. This was [Mirai](https://en.wikipedia.org/wiki/Mirai_(malware)) malware in 2016 that identified IoT devices with network connection. The effectiveness of the method of getting access to the devices by using a list of default passwords should make us worried. Yes, really it used a list of 60 common default passwords to spread and it was effective as people had not changed their passwords. The devices were just plugged in and left running.

IoT is growing with an ever increasing pace. It is disrupting our lives in an unseen manner. Every aspect of our lives from the places we work to our homes. We can do many nifty and good things with IoT. But there is a downside to this. All those connected devices are really interesting to cybercriminals. They offer more possible attack vectors for the criminals to target us. Moreover, remember that you have more computing power on your phone than the Apollo era computers. Now don't even get me started about the amount of highly personal data that you carry with you on your phone. That is really interesting for the criminals. We have to be fast when addressing this problem. Before it is too late.

<text-box variant=emph name="Apollo era computer versus iPhone">

Put simply, the iPhone 6’s clock  is 32,600 times faster than the best Apollo era computers and could perform instructions 120,000,000 times faster. You wouldn’t be wrong in saying an iPhone could be used to guide 120,000,000 Apollo era spacecraft to the moon, all at the same time.

</text-box>

So why are the IoT devices left unprotected or with their default passwords. It might be that their configuration is complicated (configuring or updating a device without a screen can be considered too difficult for most laymen… ...the ever so elusive usable security), it could be a simple bug or even simpler as the owners of these devices might consider IoT devices as not so important and constrained devices that do not contain anything important to be worried about. However, they should be worried. They should realize that large number of IoT devices can cause huge amounts of unwanted traffic and cause Distributed Denial of Service ([DDoS](https://en.wikipedia.org/wiki/Denial-of-service_attack)) attacks. Moreover, they should realize that the criminals may consider the devices just to gain access to the other systems on the network the IoT devices are connected to, i.e., to use them as jumping boards. IoT devices can be unsecured entry points into the networks. Now that you read this far you might have thought that could all these problems stem just from the users as manufacturers have not been discussed at all. It has to be said that many of the IoT device manufacturers are not security experts (some of them can be more than others this cannot be generalized). If you have built toasters all your life and you are getting into the IoT business with a tweeting toaster you might not consider the security as the most important factor. You might think things like profit margins and so on. On the other hand when you go out and buy a toaster, the first question about the toaster is not: "what ports are open in the toaster and what kind of security features it implements". Your questions will most likely be concentrated on the toasting results (or something that people ask when buying toasters, I really do not know the answer for that). So it is not just the users but we all need the incentive to build the security and the incentive to demand for it.

<!-- essay should everything be connected -->
<quiz id="f9659b39-bea2-5551-a302-4d80ceb2b8c1"></quiz>


<text-box variant=emph name="Quantifying the risks of IoT devices">

Authors of ["The Internet of Hackable Things"](https://arxiv.org/pdf/1707.08380.pdf) give us an literary overview and argue on the fact that educating people is the best way to tackle the situation.

"We are strongly convinced that education is the key to tackle a significant number of today IoT security flaws. Therefore, if we raise the levels of cyber risks understanding, both in the corporations and in the general end-users, maybe what future holds would not look as daunting as it looks today. We call the research community to this new exciting challenge."

</text-box>

<!-- essay what woudl happen if our smart system was compromised-->
<quiz id="05155d68-178d-568c-a493-5e2a0b0fa34e"></quiz>

### What are the approaches to secure the IoT devices

Security must be built-in feature of the development lifecycle of both the IoT device and the software used with them. As we have gathered this far we have a large number of devices fitted with communication functions, that used to have no communication functions. These devices are always connected and use one-time authentication. Somewhat understandable if you consider that would you bother to securely pair and authenticate the light bulbs in a house for more than once (i.e., that would be during their installation). You just want them to turn on.

The conventional approach is to use a gateway that connects the devices to the Internet. Moreover, depending on the device and its constraints and communication method chosen the gateway may be the only option to use. These gateways are very important to be secured so that the overall system security improves. Even though some weak devices may be connected to the gateway.

IoT network security is a bit more challenging than traditional network security because there is a wider range of communication protocols, standards, and device capabilities, all of which pose signiﬁcant issues and increased complexity. Key functionalities here include traditional endpoint security features such as collecting, aggregating, monitoring, and normalizing data from IoT devices. For security reasons providing actionable reporting and alerting on speciﬁc activities or anomalies. Conventional cyber security measures have used methods such as antivirus software and intrusion detection systems. These systems, although they seem small measures, still play a big role in the overall security. More work needs to be put into the detection of IoT-speciﬁc attacks and intrusions that are not detected by traditional network security solutions. Although, the conventional measures are effective at detecting known attacks, their inability to detect zero-day attacks is a problem. However, currently on all fronts the developers and researchers of these applications add machine learning/artiﬁcial intelligence in order to provide predictive modeling to increase the detection accuracy and possibly to detect previously unknown attacks. However, some of these capabilities are still in their infancy.

REST-based APIs, which are commonly used with IoT, provide authentication and authorization services  for data movement between smart devices, back-end systems, and applications. The API security is instrumental in ensuring that the authorized devices and apps are the only ones communicating with APIs. The APIs can be used also in detecting potential threats against the API in question.

In threat analysis of IoT it is safe to assume that the attacker has complete control over the communications of the device. The attack can be of two kinds: the attacker could be passive and eavesdropping on the traffic or active and sending for eg. spoofed packets. The attacker can be on-path or off-path. The on-path attacker is usually considered the Man-in-the-middle and is actively meddling with the communication in hand. The off-path attacker is sending packets that contain spoofed information such as the sender's IP. 

We have discussed in an earlier part of the course series about the threat analysis but not much about its limitations. The threat analysis can give you good requirements (You can find helping documents from IETF, such as [State-of-the-Art and Challenges for the Internet of Things Security, draft-irtf-t2trg-iot-seccons-09](https://tools.ietf.org/html/draft-irtf-t2trg-iot-seccons-09) or [RFC 3552: Guidelines for Writing RFC Text on Security Considerations](https://tools.ietf.org/html/rfc3552)) to meet when designing your devices but they may be a bit theoretic and it may leave room for interpretation when implementing the device or software. What would be the part where the interpretation comes in? Well, you have to decide things such as on which layer the security is added and what kind of security is used (using proven protocols is a better way to go than implementing your own). As discussed earlier the analysis may be complex to perform and for IoT this is also true as the IoT system may contain multitude more devices and they are constrained and may use many different communication methods opening up many more attack vectors.

## Could we learn from the attacks that we have seen

We have gotten this far and we have understood the importance of IoT security. We have also noted that the conventional security measures will work to some extent but something new is also needed. How about what we can do to improve the situation. If we look at the attacks, would there be something we can learn from? On the first glance there is not much new in IoT attacks and most of the attacks we have lately seen are based on rather basic vulnerabilities, eg. using default passwords (which by the way are usually published on the manufacturers site, i.e., not that hard to find out). Some other basic mistakes that some of the attacks have used include pretty simple things such as missing encryption on wireless communication or directory traversal attacks against web/FTP servers in which the given path is not sanity checked and it is writing information to configuration files etc.

What about the communication protocols in IoT? It has been estimated that circa 90% of the threats for IoT are against the communication services, protocols, and mediums. Most out of those threats are common to the other Internet protocols. There are communication protocols with security mechanisms specifically designed for IoT, and they can help in the situation, protocols such as Message Queuing Telemetry Transport (MQTT) and Constrained Application Protocol (CoAP). The standardization work has mainly been done for CoAP (2014)  and for MQTT it still continues. The adoption of these protocols has gained popularity among the IoT developers.

<text-box variant=emph name="Some standards for IoT traffic security and guidelines for crypto with them">

- [RFC 7252](https://tools.ietf.org/html/rfc7252) "The Constrained Application Protocol (CoAP)"
- [MQTT](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/mqtt-v3.1.1.html) Version 3.1.1 Plus Errata 01
- [RFC 4107](https://tools.ietf.org/html/rfc4107) “Guidelines for Cryptographic Key Management”
- [RFC 4492](https://tools.ietf.org/html/rfc4492) “Elliptic Curve Cryptography Cipher Suites for TLS”
- [RFC 4086](https://tools.ietf.org/html/rfc4086) “Randomness Requirements for Security”

</text-box>

In the following sections we will go through some of the common attacks. We will start from the physical attack which obviously needs access to the physical device. Then we will briefly discuss about common configuration, password, communication security issues, and as last we will talk about the software updates.

### What if you can get your hands on the device?

Usually this can be considered as game over for most of the devices. First you would need to have access to the machine. Depending on the place there might be physical security or public access. The attacker could just walk in and find a system and try to access it. The attacker could install a rogue device that is intended for collecting information or provide access from outside the building. The attacker could also try to reset the devices to known unsafe configurations and try to penetrate them. If the attacker cannot just walk in then tailgating people on correct business, use disguises (it seems to be quite common that people do not want to bother someone in workwear with tools), sneaking in or breaking in could be considered.

But what is considered as a physical attack on a computer system? Some examples of attacks that could happen that would be bad for IoT: most of the smart devices have some kind of debugging or test interface that could be used to communicate to the device. The attacker might try to sniff the inter-bus communication interfaces such as Inter-Integrated Circuit (I2C) or Serial Peripheral Interface (SPI) and try to get dumps out from the chips used in the device and try to extract for example keys from the device. Some of the more complicated attacks include attacks such as glitch attacks in which you try to manipulate the clocks in the chips as modern digital hardware work based on a reliable clock that syncs circuits together. If you mess with the clock you might be able to get the hardware to do unintended things and as a byproduct you might get the hardware to skip important checks. The attacker could even monitor the power consumption during AES computation and figure out what the secret key is (K. Meritt [ "Differential Power Analysis attacks on AES"](https://people.rit.edu/kjm5923/DPA_attacks_on_AES.pdf)). As a last but not least physical attack can be deliberate physical damage to the equipment. Sometimes the attacker could force the system administrators to implement a haphazard fix to their systems and get in during the mayhem.

### Key management problems

Encryption of the data at rest and in transit between the devices or the cloud is important. Moreover, it is important to use standard cryptographic algorithms and not fall into security by obscurity mentality (it is a good idea to use properly vetted algorithms than something that you only heard to be secure). However, the heterogeneous nature of IoT device field is one of the biggest limiting factor against using standard processes and protocols. Moreover, the key management becomes an issue as for the encryption to work properly the encryption must be accompanied with lifecycle management process for the keys, from start to end. It might be easier to do something else or skip this but failing to do this properly will result in problems. Take for example the HUE personal lightning system that only calculated MD5 sum over the MAC address of the lightbulb and used that as the secret token to control the bulbs (Nitesh Dhanjani's [paper](http://www.dhanjani.com/docs/Hacking%20Lighbulbs%20Hue%20Dhanjani%202013.pdf) about the security of HUE). As another example, LIFX lamps had at least AES symmetric encryption in use but used the same key for all of the bulbs (see Alex Chapman's [post ](https://www.contextis.com/blog/hacking-into-internet-connected-light-bulbs) on Context about the reverse engineering of the bulbs).

### Lifecycle management

One of the most interesting problems in the security of IoT devices is the lifecycle management of these devices. If you simply look at the fact that you are going to have tens of billions of devices out in the wild. Devices that have constraints that limit their capabilities to run conventional crypto with long enough keys. Moreover, the devices may not have any easy way to communicate with the user. Consider then that, after the manufacturer has shipped of tens of thousands devices, a serious vulnerability is found on the devices. Is there any good way to fix this? For example, Huawei home gateway used RomPager that had an vulnerability called the [Misfortune Cookie](https://www.bleepingcomputer.com/news/security/4-year-old-misfortune-cookie-rears-its-head-in-medical-gateway-device/) (CVE-2014-9223). The web servers implementor issued a fix to the device, but years after the problem still persists as vulnerable devices still exist. Why is that? One reason could be that there is no good, easy, and secure way (that a person without a CS degree could manage) to upload new firmware on you router for example. What could be done to solve? One possible solution could be to implement a service to the network that would monitor the devices and identify the vulnerable ones. This kind of fingerprinting has been proposed already earlier, one example could be DHCP fingerprinting in which the DHCP server would ask some extra information about the device. What to do when the malicious/vulnerable devices have been found from the network and how they can coexist with other devices. Well, the trend seems to be to isolate the vulnerable devices to different VLANs. This is an important problem and it has been talked about alot and for example at least IETF has started working on a standard way to solve the issue (see IETF's Security Areas working group [charter](https://datatracker.ietf.org/wg/suit/about/) about the issue).

## Good practices

<text-box variant=emph name="Some practical things to consider">

- Do you really need to connect the device to the Internet?
- How about a separate network for the IoT devices? Or at least limit their traffic only to the needed ports etc.
- How about the passwords? Do not get me started again, remember Mirai.
- How about keeping the device up-to-date?
- Do you really need to run all the services the devices offer, could you turn off the ones you are not using?
- Follow the security recommendations, if they say use longer keys, use longer keys
- Automatic software update mechanism
- When launching a product disable the debugging features.
- Hardware crypto and memory protection units?
- Encrypt the traffic the best it can be protected

</text-box>

<quiz id="c1f71d62-b2a0-5d5d-a2e2-328810da67d3"></quiz>

Although this part of the course painted a bleak picture of IoT it has its benefits but remember the field of IoT security is still alive and evolving and we have to take care that it is done properly and not forgotten. During this course, we have taken a tour on some of the more advanced topics of security. In the course project, some of this knowledge is taken into use. Stay tuned.

<exercises-in-this-section></exercises-in-this-section>
