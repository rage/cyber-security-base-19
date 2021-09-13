---
path: '/module-1/6-crypto'
title: 'Encrypt, decrypt'
hidden: false
---

## Encryption algorithms

Encryption algorithms can be roughly divided into 3 categories:

* algorithms without a key
* algorithms based on a symmetric hidden key
* algorithms based on an asymmetric public/private key


The "security" of the encryption technique without a key comes from the idea
that the decryption algorithm is not known. Perhaps the most known such algorithm is
[ROT13](https://rot13.com/), where letters are shifted by 13 and wrapped
around. Consequently, for example, 'a' becomes 'n'.
Keyless algorithms are not considered to be secure, and should not be used
outside newspaper puzzles.


Algorithms based on a symmetric hidden key assume that both encryption and decryption algorithms
are known but both parties share a hidden key so that without the key decryption is very difficult.
Perhaps the most known such algorithm is Caesar
cipher, named after Julius Caesar. The cipher involves shifting letters by a certain
amount, and wrapping around. Here the key is an integer indicating the shift. ROT13 is a special
case of Caesar cipher where the shift is specifically fixed to 13. Julius himself used a shift of 3
while his nephew Augustus used a shift of 1.

<p>
It is crucial that the number of candidates for a key is very large, making a brute-force
attack impossible. For example, Caesar cipher can be easily broken, even
without a computer, since there are only 26 options. A more contemporary case
is Content Scrambling System (CSS) for DVDs introduced in 1996, and compromised in 1999. CSS was using a 40-bit key,
leaving 2<sup>40</sup> options for a key value.
The reason for such a "small" key is at the time United States have
restrictions on exporting strong cryptographic methods (nowadays, the
restrictions have been loosened, but not completely removed). The short key
allowed for a brute-force attack, breaking the encryption in 17 hours, using a contemporary computer.</p>

The major issue with using a symmetrical key is that both parties need to know
the key in advance. To solve the issue, algorithms based on a public/private
key are used. The main idea is as follows: A recipient has two keys
one public and one private. A sender encrypts a message using an algorithm
with a public key. This message can only be decrypted using a private key.
Consequently, only the recipient can decrypt a message.

Since the public key is known it is vital for the encryption algorithm that
_one cannot deduce the private key easily from the public key_. In other words,
there is no significantly better way of deducing a private key than just using a brute-force
attack. If both public and private keys are long enough, then a brute-force
attack becomes infeasible. The most used and known public/private encryption
method is RSA, where the security comes from the common assumption that
factorization of very large integers is computationally very expensive. 

Asymmetric encryption is often not efficient enough for encrypting large data streams.
So in practice, it is used just to establish a symmetric hidden key that is only a valid
for one session, and this key is then used with a more efficient algorithm based on a symmetric hidden key. 

<quiz id="07ce1684-42d2-50f9-b2ed-fd47dd6ae187"></quiz>

## Cryptographic hashes

Modern computer systems rarely store passwords as clear text. Otherwise, if the
file containing the passwords is compromised, the attacker obtains a list of
plain-text passwords for that particular system--a significant security
breach. Instead passwords are stored as hashes. They are scrambled with a known
_hash_ function. The key difference here is that a hash cannot be decrypted.
When user tries to log in to the system, the stored password is not decrypted. Instead the
user input is hashed and hashes are compared.

Since hashes are deterministic, same password will always have the same hash. This
leads to a possibility that an attacker can build a large library of reversed
hashes by simply precomputing them. To fight against this attack, passwords are typically _salted_:
a random string, unique to each user, is attached to a password before it is hashed.
The salt is stored in plain-text, so that it can be used when a password verification is required.

Currently, the most prominent hash function family is
[SHA-2](https://en.wikipedia.org/wiki/SHA-2).  A notable hash function,
[MD5](https://en.wikipedia.org/wiki/MD5), has also been used for hashing
sensitive data. However it has been severely compromised, and should not be
used for any security application. MD5 is still useful, for example, as providing unique identifier for  documents.

## Certificates

While encryption makes sure that the 3rd party cannot eavesdrop on the communication, it is still
still vulnerable to a man-in-the-middle attack: the 3rd party can pretend that it is the server
to which the user wishes to contact. The attack is done as follows. Consider two parties, Alice
and Bob, and an attacker Melissa. Alice wishes to send safely a message to Bob, and Melissa wishes
to intercept the message.

1. Melissa makes Alice believe that she is Bob.
2. Alice asks Bob (Melissa in disguise) for a public key. Instead Melissa provides Alice with her own public key.
3. Alice encrypts the information with the spoofed key and sends it back to Melissa.
4. Melissa decrypts the information using her secret key.

The crux of the problem is that Alice cannot verify whether the public key belongs
to Bob. To solve this problem certificates are used.

Certificates work as follows. Consider that there is an additional party, Benedict.
Alice wants to send an encrypted message but is not sure whether
Bob's public key is really his. However, Alice knows and trusts Benedict's public key.
The verification consists of the following steps:

1. Bob asks Benedict to sign his public key.
2. Benedict uses Bob's public key and his identity to construct a signature, that is encrypted with Benedict's _secret_ key, and sends Bob the signature.
3. Upon request, Bob sends Alice the certificate, that is, his information and the encrypted signature.
4. Alice decrypts the signature using Benedict's _public_ key and verifies that the information in the certificate matches the decrypted signature.
5. Alice checks that the identity in the certificate is indeed Bob.
6. Alice can now trust the public key provided in Bob's message.

Let's look more closely at the sequence of these events. First, note that
signature is done by encrypting using a secret key, instead of a public key.
Since Benedict is the only one that knows the secret key, he is the only one
that can produce the signature. The signature contains Bob's identity as well as the
public key, so Alice can trust that the information is correct by trusting Benedict's action.

This is how certificates work. In the above example, Benedict is known as a
Certificate Authority (CA), Bob is a web server, and Alice is a normal user.
Certificate Authorities are companies that provide certificates for web servers, 
essentially giving them means to prove who they are.

Melissa cannot fake being Bob, because she needs to provide
a fake certificate for Bob. She has 3 options, none of them will succeed:

1. She can use Bob's certificate, but she cannot decrypt the incoming traffic because Alice will encrypt the data with Bob's public key.
2. She can obtain her own valid certificate, but Alice will notice that the certificate is Melissa's and not Bob's.
3. She can modify the certificate by replacing Bob's key with her own but the content no longer match the signature, so Alice rejects the tampered signature.

The key assumption here is that Alice trusts Benedict. In practice, a computer has a list of
trusted certificate authorities, that are obtained via a secure channel, for
example, when installing a new operating system.

In practice, there may be intermediate parties, meaning Bob doesn't use
Benedict directly, instead he asks a mediator, say William, to issue a
certificate. William has his own certificate that he has obtained from Benedict.
Alice then needs verify both Bob's and William's certificates. 

Similar scheme is also for signing executables.

<quiz id="3b4e6450-9470-5e0d-9031-47894dace7b3"></quiz>
