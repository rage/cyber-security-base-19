---
path: '/module-4.4/1-cellular'
title: 'Cellular security'
hidden: false
---


In the last part we discussed about cryptography. In this part we are giving a rudimentary introduction to the cellular security.</p>


## Introduction to cellular networks

Cellular networks are intended for providing connectivity for users everywhere and everytime, regardless of whether the user is moving or not. The first cellular technology with a global footprint was GSM that spread with phenomenal speed during the last decade of the last century.

The GSM system was originally designed for voice calls but support for data connections was added later, in the form of GPRS (General Packet Radio Service).

In a cellular network, a _mobile device_, e.g., mobile phone or tablet, connects to a _base station_ over a _radio interface._ The base station connects to the _core network_ that manages the whole system. Functions of the core network include tasks such as

- Keeping track of where the mobile devices are (<I>mobility management</I>)
- Providing Internet connectivity for mobile devices (_session management_)
- Setting up calls between different mobile devices (_call control_)
- Authenticating the mobile devices (_security_)

The next generation of cellular technology was introduced during the first decade of the millennium. This technology is called 3G (3rd generation) and support for both voice calls and data connections was included from the beginning.

Soon it turned out that the amount of data traffic increased much faster than the amount of voice traffic in the cellular networks. Consequently, the 4th generation of cellular technology was exclusively designed for data connections. Voice call service was simply seen as one of the many services that could be offered in the data network. An alternative name for the 4G technology is LTE. The LTE network is completely optimized for the purpose of carrying IP packets.

## Encryption

Because connections are provided over the radio, it is in principle very easy to eavesdrop them. This can even be done in a way that is very difficult to observe. To protect _confidentiality_ of voice calls, support for encryption was applied in the radio interface already in the GSM system, and the same practice has been carried over to the later generations.

During the time when GSM system was designed the general viewpoint was that it would provide _complementary_ means for phone calls when users are on the move, e.g., in a car. The vast majority of phone calls were still expected to happen over _fixed_ telephone cables. Therefore, the requirements for confidentiality, and security in general, were defined in relation to the fixed networks: the GSM should be _at least as secure as_ the fixed networks.

Following this logic a step further the designers of GSM security concluded that it was the radio interface that made the biggest difference between the mobile network and the fixed network. An attacker could always _wiretap_ the fixed cables but that would require physical access to these cables. On the other hand, an attacker could listen to the radio traffic almost from any physical location.

Because the communication traffic was expected to be carried over fixed cables after the base station, it seemed sufficient to protect the voice traffic by encryption between the mobile device and the base station. Luckily, the voice traffic was designed to be carried over the radio interface in _digital_ form: The speech is _encoded_ into a stream of bits. This was a new thing in the GSM technology compared to its regional predecessors for mobile telephony. Now it was, at least in principle, to turn the encoded bit stream into _encrypted_ bit stream that was then sent over the radio interface. Please note the difference between _encoding_ and _encryption_ here.

<quiz id="3efc19b7-d80f-5dfe-86e8-11234650bf9b"></quiz>


During the design of 3G security, some limitations of the GSM encryption have become evident. Sometimes the base stations were communicating with the rest of the network also over radio. This implied that it would be better to use encryption also for that communication link.

In 3G the encryption happens between the mobile device and the _radio network controller_. This is an element in the 3G network that a base station connects to. Communication content is encrypted in the mobile device, then it passes through the base station in encrypted form and gets decrypted in the radio network controller. This arrangement has an impact on the choice of the _communication layer_ that provides encryption and decryption.

The two lowest layers of communication, the _physical_ layer and the _link_ layer, terminate in the base station. This implies control information shared between the mobile station and the base station on these low layers cannot be kept confidential in 3G. Fortunately, all this information deals with the radio conditions rather than individual users.

Another limitation of the GSM encryption that had become evident already at the time when 3G was designed was that the actual encryption algorithms were too weak. First, the secret key had only 64 bits. Secondly, the algorithm specifications were kept confidential which fact did not increase confidence on their security level.

3G encryption algorithms were made public from the beginning. The shared key that is used for encryption is 128 bits long. This key length is seen as sufficient, at least until a true [Quantum computer](https://en.wikipedia.org/wiki/Quantum_computing) becomes a feasible tool for the attackers. The algorithms used for 3G are [KASUMI](https://en.wikipedia.org/wiki/KASUMI) and [SNOW3G](https://en.wikipedia.org/wiki/SNOW).

When it was time to develop 4G no significant limitations had been observed with the 3G encryption. However, it was not straight-forward to use the 3G encryption as a model for 4G encryption. This was due to the fact that in 4G network the base station takes over many duties carried out in 3G by the radio network controller. In the end, it was decided that encryption would terminate in the base station. This decision was complemented by using a separate encryption between the base station and the rest of the network. This arrangement implies that, in opposite to 3G, the user data is available inside the base station in cleartext form.


The 4G (and current 5G) encryption algorithms are based on [SNOW3G](https://en.wikipedia.org/wiki/SNOW), [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) and [ZUC](https://en.wikipedia.org/wiki/Zuc_stream_cipher). All encryption functions in all generations of mobile communications technology are [stream ciphers](https://en.wikipedia.org/wiki/Stream_cipher). Both AES and KASUMI are actually [block ciphers](https://en.wikipedia.org/wiki/Block_cipher) but they are used in stream [cipher mode](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation). Stream cipher is suitable for high-speed communication scenarios because major part of encryption/decryption can be done already before the plaintext/ciphertext is even available.

<quiz id="951b82c3-bd44-5a1f-b201-6832a6017b9b"></quiz>

## Authentication

Customers of mobile operators typically pay for getting access to the cellular network. Therefore, it is important to verify identities of users when they attach to the network. Of course, the network operator needs to know where users are to be able to deliver received calls and messages to the right place. Furthermore, calls and messages should be delivered to the correct user.

These are the main reasons why _authentication_ is a cornerstone of cellular security.

Authentication of a human user is typically based on one of the following:

- Something that the user _knows_, like a _password;_
- Something that the user _has_, like a physical _token;_
- Something that the user _is_, like a _fingerprint_

Cellular authentication is based on the middle option. The user gets a _smart card_ from the operator and the card is inserted into the mobile device. The main purpose of the card is to serve as an authentication token. In GSM, the card was called _SIM_ ([Subscriber identity module](https://en.wikipedia.org/wiki/Subscriber_identity_module)) while in later generations a more advanced card, called _UICC_ ([Universal Integrated Circuit Card](https://en.wikipedia.org/wiki/Universal_Integrated_Circuit_Card)), is in use.

The smart card contains a permanent _master key_ that is specific to the particular card and user. Another copy of the key is stored in the mobile operator&rsquo;s Home Subscriber Server (HSS). Based on the master key, the operator can prepare a _challenge_ for the user. A random bit string is generated and sent to the user, or more accurately, to the user&rsquo;s mobile device. To be able to pass the authentication the mobile device has to send a correct _response_ to the network. The response is generated by a _one-way function_ using the random challenge bit string and the master key as inputs. Both the challenge bit string and the response bit string are sent over the radio interface. Therefore, a potential eavesdropper could collect correct _challenge-response pairs._ If the operator would re-use the challenge bit string later then the eavesdropper would be able to masquerade as the user and pass the authentication successfully. However, the random challenge is so long (=128 bits) that chances for that ever happening are extremely small, provided that the operator really creates a _fresh_ random bit string for each challenge.

Often authentication is accompanied by the process of generating a temporary _session_ key. This is how encryption keys are generated  also in cellular systems. Based on the same random challenge bit string, both the mobile device and the network generate another bit string, using the same method as explained above for the response string. The difference is that this another bit string is not sent over to the network but, instead, each party keeps it for further use in encrypting communications.

## Mutual authentication

What was described above is how authentication is arranged in GSM networks. During the first years of GSM operations it was observed that the authentication has one big shortcoming. The mobile device has no means to authenticate the network. It is possible to build a _fake base station_ that transmits with sufficiently high power to lure mobile devices to try to attach to it. Of course, the fake base station would not know the master key of the user because it cannot connect to the HSS of the real operator. But this does not prevent the fake base station from inventing a random bit string and sending it as a challenge to the mobile device. The mobile device computes the correct response and sends it to the fake network who just accepts the authentication without checking the response in any way. Developers of the GSM security were aware of such an attack scenario but it was finally concluded that the attack would require such a sophisticated machinery that such attacks would not create a significant problem in practice.

At the time when 3G technology was developed it had already become clear that fake base stations were indeed used against real users. Therefore, a mechanism was included with which the mobile device can verify that it is connected to a legitimate network. One possible mechanism for that purpose is to simply change roles. The mobile device would send a random string as a challenge, and the network would compute a correct response with the shared master key. However, in _roaming_ situations this would be quite impractical. If a user has travelled to the other side of the world, the challenge bit string would need to sent all the way to the home country of the user. Another solution would be to send the master key to the operator who is serving the travelling user. This latter solution would be problematic from security point of view. Indeed, keeping the master key always in the two original locations (the smart card on the user side and HSS on the network side) is a cornerstone of the cellular security.

How to get around this difficulty? The solution was the following. Instead of waiting for a challenge from the mobile device the HSS would compute a response bit string against its own challenge. Then this response would be sent to the mobile device with the random challenge string, as a proof that the sender has had access to the shared master key.

But wait a minute... if the network adds the correct response to the challenge wouldn&rsquo;t that nullify authentication of the mobile device? The solution to this problem is to use _different_ one-way function for computing the response that is attached to the random challenge instead of the one-way function that is used to compute the response from the mobile device to the same challenge.

But there is still another problem. An attacker could record the random challenge and the corresponding response, and use those two later in a fake base station attack. Such an attack is called a _replay attack._ The solution to this problem is to include a _sequence number_ in the computation of the response that is attached to the challenge. Then the mobile device is able to check that the random challenge is not a replayed one.

We have now discussed how _mutual authentication_ works in 3G. It is worth noting that the mobile device does not explicitly verify the identity of the network that it is connected to. Instead, the mobile device just gets confirmation that it is connected to a legitimate network.

In the 4G network the actual identity of the visited network was added as another input to the computations. Then the mobile device knows in a roaming situation that it is connected to the same network to which the HSS has delivered the random challenge and the related parameters.

For the 5G networks, the authentication is also based on a shared key. However,
there are additional security features: in 3G and 4G, the identifier of the
phone (that is the identifier that HSS uses to find the correct shared key and
generate a challenge) is sent plain-text. In 5G, this is encrypted with a
public key of HSS.

## Key agreement

In all generations, key generation happens as a by-product of authentication. Different one-way functions are used to derive keys for different purposes, using the shared master key and the randomly generated challenge bit string as inputs.

In the GSM networks, the encryption key is the only key that is needed. In the 3G networks, another key was needed for the purpose of protecting _integrity_ of control communications. In the 4G networks, there is a whole _hierarchy_ of cryptographic keys intended for different purposes.
5G networks have more complex key hierarchy than the one used in 4G, see for example [Figure 5](https://www.cablelabs.com/insights/a-comparative-introduction-to-4g-and-5g-authentication).

<quiz id="291fe2f2-ad05-5297-bf38-9bae5da0614f"></quiz>

## Integrity protection

In all generations of cellular technology, encryption is provided by a stream cipher. This kind of cipher has the following property. If one bit of the ciphertext is flipped (from zero to one or vice versa) then the impact to the decryption is that the corresponding bit of the plaintext is also flipped. One consequence of this property is that an attacker who is able to guess correctly the contents of the plaintext would be able to modify the ciphertext in such manner that the decryption of the modified ciphertext would result into any plaintext of attacker&rsquo;s choice.
An example of such attack is [Alter](https://alter-attack.net/).

A separate cryptographic protection mechanism was introduced in 3G networks in order to protect against such an attack. It is especially the control communication whose contents may be easily guessable at least in some situations. Therefore, a _message authentication code_ was added to the _control plane_ messages. These messages contain the data that needs to be exchanged between the mobile device and the network to guarantee correct functioning of the network. The message authentication code is computed based on the message itself, an integrity key and a time-varying counter. The shared integrity key is derived during the authentication and key agreement procedure. The time-varying counter is needed to protect against a replay attack where a previously recorded genuine control message is sent at time chosen by the attacker.

One of the good properties of a stream cipher is that it does not increase the size of the message at all. In contrast to that, a message authentication code makes the message longer. This was one of the main reasons why message authentication code is _not_ added to _user plane_ messages. This is the case for both 3G and 4G networks.
In current version of 5G, user plane protection with message authentication code is optional.


<quiz id="f4bd40b8-f7d4-5c06-9d29-5fc9a1168c74"></quiz>

## Identity privacy

Let us return to the fake base station attack scenario. It is the duty of the network to decide which encryption algorithm is going to be applied in the communication between the mobile device and itself. It is also in principle possible to choose not to apply encryption at all. This possibility enables the fake GSM base station to establish a connection with the victim mobile device even if it cannot derive the encryption key.

Starting from 3G, this kind of attack is prevented in cellular networks by the mutual authentication. But this does not mean that fake base stations would be useless against 3G or 4G networks. They can still be used as _IMSI catchers_. These are devices used for just collecting identities of the victim devices instead of data sent from them,

The goal of the attack is to request the user to send its permanent identity IMSI (International Mobile Subscriber Identity). After the user has been identified the IMSI catcher may, for example, simply reject the user without even starting the authentication procedure. After this the mobile device would try to attach to another base station which in this case typically belongs to the legitimate network. The human user would then have a very limited chance to even notice that something unusual has happened.

There is a serious effort of trying to prevent IMSI catchers in 5G technology: IMSI is encrypted by a _public key_ of the network whenever it is sent over the radio interface. Of course, the mobile device should get the public key in some other way than transmitted from the base station.

<quiz id="238975c3-41cd-5a04-8470-edcf92982598"></quiz>
<quiz id="fa192c4c-59fa-59eb-b03b-10091a4dbcc4"></quiz>


In the next part of this course we are discussing about IoT security.

