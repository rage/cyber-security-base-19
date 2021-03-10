---
path: '/module-4.3/4-certificates'
title: 'Certificates'
hidden: false
---

One important part of the digital signature process was explained above as follows: _Let us assume that Alice has given her public key to Bob_. But this imposes quite a big restriction: Bob can only verify signatures from such parties with whom he has already been in contact beforehand. It would be better if Bob could get Alice&rsquo;s public key just when a need to verify her signature arises, without any preparations in advance.

A straight-forward solution would be that Alice provides her public key together with the message that she has digitally signed. But now we encounter a &rdquo;chicken-and-egg&rdquo; problem because the whole point of the digital signature is to verify that the message is really coming from Alice, and not from somebody who just pretends to be Alice. If the public key of Alice is delivered together with the message, and this public key should be used to verify the origin of the message, then an imposter could just include a fake public key to the delivery, i.e., a key for which the corresponding private key is in the possession of the imposter, not Alice.

One way out of the &rdquo;chicken-and egg&rdquo; situation is found if Alice&rsquo;s public key is signed by somebody whose signatures Bob is able to verify, e.g., by some authority. Such digitally signed information is called a _certificate_. Note that the authority is just endorsing Alice&rsquo;s public key, the authority does not have to  take any stand on messages that Alice is sending.

A typical example where certificates are needed is when a user wants to get some assurance of the validity of the web page he visits. HTTPS protocol enables this and the _authentication_ of the web server is carried out by digital signatures, based on a certificate.

All browsers provide information about the certificate. In our example, the information can be found as shown below.

![HTTPS](https_3.png)

What has been signed is the fingerprint of the information in the certificate. The authority who has signed the certificate is &rdquo;DigiCert SHA2 Extended Validation Server CA&rdquo;.


## Public-key infrastructure

Our solution to the &rdquo;chicken-and-egg&rdquo; problem did not remove all restrictions. We still assumed that

- Authority _A_ has verified somehow Alice&rsquo;s identity and, consequently, has signed Alice&rsquo;s public key;
- Bob has somehow acquired the public key of the _same_ authority _A_.

Such an authority _A_ is called a _Certificate Authority_ (CA). But it should be possible for Alice and Bob to be in contact with _different_ authorities. Otherwise, the CA easily becomes a bottleneck in the system.

A typical solution for this problem is to arrange a _hierarchy_ of authorities. For example, Bob could have a public key of a _root_ CA, e.g., in-built into his browser. This root CA would then provide certificates for other CAs that are one level lower in the hierarchy. These CAs could provide certificates for public keys of _regional_ CAs, and Alice could be in contact with one such regional CA.

Bob would need to verify all certificates in a _certificate chain_. Once all certificates are verified, Bob is finally able to verify Alice&rsquo;s signature.

All CAs, together with some other authorities (that are needed, e.g., for managing _revoked_ certificates), form a _public-key infrastructure_ (PKI).

In our HTTPS example, the certificate chain has a length of two. &rdquo;DigiCert SHA2 Extended Validation Server CA&rdquo; has provided a certificate for the F-Secure website, and &rdquo;DigiCert High Assurance EV Root CA&rdquo; has provided a certificate for &rdquo;DigiCert SHA2 Extended Validation Server CA&rdquo;. The root CA public key needs to be embedded in the browser for successful authentication of the website.

![HTTPS](https_4_oval.png)

The actual signature value of the certificate is provided as shown below.

![HTTPS](https_5_box.png)

<programming-exercise name="Man in the middle" tmcname="part3-08.maninthemiddle" course="Advanced Topics">

Certificates are needed to prevent man in the middle attacks. In this exercise we will create a
man-in-the-middle server that capitalizes every letter of the HTML page. You should
capitalize the output only if the server responses with HTML.

The template contains a simple web server that connects simply shows the page address and nothing else.
Modify the server so that it pretends to be the server given in
`self.remote_address` but capitalizes every letter in the response.

You should at least match response code, content, and content type.

You can test the server manually with
```sh
python3 mitm.py 8000 target_domain
```
and by going to `http://localhost:8000`. Do not forget to add `http://` or `https://` in the `target_domain`.

You can use an external target or you can start your own local target by launching a target server with
```sh
python3 -m http.server 9000
```
in the `server` folder.
This will start the target server at port 9000 and
```sh
python3 mitm.py 8000 http://localhost:9000
```
in the `src` folder
will start a man-in-the-middle server at 8000.

Note that you can use https website as a target as well. The visible difference
here is that the browser will not show that the displayed website is secure.

_Hints:_

1. Make sure to use both `self.remote_address`  and `self.path`.
2. Requests library is your friend.
3. You don't need to parse HTML. You can simply capitalize every letter in response (use `upper()`).
This will certainly break certain pages, especially with javascript code.
Fancier approach would be to parse HTML with beautifulsoup but it is not needed for this exercise.

</programming-exercise>

<quiz id="942675e6-e429-54ac-acb4-4f2d6b9aa49b"></quiz>

