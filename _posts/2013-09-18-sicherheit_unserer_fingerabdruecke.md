---
title: 'Die Sicherheit unserer Fingerabdrücke'
categories: [Technologie]
---

Am 10. September hat Apple sein neuestes iPhone vorgestellt. Das auszeichendste Feature: [Ein Fingerabdruck-Sensor, genannt Touch ID](http://www.apple.com/de/iphone-5s/videos/#video-touch). Es war denkbar ungünstiges Timing für Apple, im Schatten des [NSA-Überwachungsskandals](http://de.wikipedia.org/wiki/Überwachungs-_und_Spionageaffäre_2013) die Auswertung solch intimer Daten anzukündigen.

Deshalb betonte [Apple SVP Phil Schiller](http://www.apple.com/pr/bios/philip-w-schiller.html), dass die Touch ID immer auf dem Gerät bleibt und nie auf Apples Server hochgeladen werden würde. Die Daten seien in einer *Secure Enclave* auf dem neuen A7-Chip gespeichert, der vom Rest des iPhone-Speichers getrennt sei.

Aber ist das nicht alles nur Marketing? Apple versucht doch bestimmt nur, die sowieso schon [aufgebrachten Medien](http://www.focus.de/digital/handy/iphone/verschluesselung-beim-iphone-5s-wie-sicher-ist-apples-fingerabdruck-scanner_aid_1098203.html) zu beschwichtigen. Warum sollten die sich denn plötzlich um unsere Privatsphäre scheren, die doch am liebsten alle unsere Daten in ihrer iCloud hätten?

## Tatsächliche Argumente

Der Sicherheitsexperte Brian Roemmele hat sich [auf Quora sehr gründlich mit Apples Behauptungen zu dieser Secure Enclave auseinandergesetzt](http://www.quora.com/Apple-Secure-Enclave/What-is-Apple’s-new-Secure-Enclave-and-why-is-it-important).

Er beschreibt im Detail, welche Features in den neuen ARMv8-Prozessoren (auf denen der Apple A7 aufbaut) die kryptographische Sicherung von Daten auf der Hardware-Ebene ermöglichen. Diese Features, genannt [TrustZone](http://www.arm.com/products/processors/technologies/trustzone.php), sind ein System, an denen ARM schon seit Jahren mit verschiedenen Partnern arbeitet. Roemmeles Fazit: 

> Thus we can really see just how deep the security runs in DNA of the A7 processor.  The deep level hardware based secure architecture is rather rock solid.  It would require a rather large magnitude of hardware hacking to even attempt access to the data stored in the Secure Enclave.  

Auf deutsch: Die sogenannte Secure Enclave ist tatsächlich sicher und selbst mit direktem Zugriff auf das Gerät kaum zu knacken. Der Fingerabdruck[^1] des Besitzers ist auf seinem iPhone ziemlich sicher.[^2]

Das Team in Cupertino hat die Sache also durchdacht. In Anbetracht der Sensibilität der involvierten Daten haben sie Touch ID erst umgesetzt, nachdem sie die sicherste und eleganteste Implementierung gefunden hatten.[^3] Und da sage einer, [Apple wäre nicht mehr innovativ](http://www.youtube.com/watch?v=TahD_vuLMEY).

## Tolle Zukunftsaussichten?

Damit sei aber nicht gesagt, Apple wäre der weiße Ritter, der selbstlos Millionen iPhones vor fremden Fingern (im Wortsinn) beschützen möchte. Nein, es geht dabei natürlich um Geld.

Brian Roemmele schreibt weiter in seinem [Quora-Text](http://www.quora.com/Apple-Secure-Enclave/What-is-Apple’s-new-Secure-Enclave-and-why-is-it-important), dass die Implementierung der Touch ID *zufällig* auch genau den Sicherheitsmaßstäben für ein mobiles Bezahlsystem entspreche. Und tatsächlich: Das iPhone 5s kann mit dem eigenen Fingerabdruck nicht nur entsperrt werden, sondern kann auch die Eingabe des iTunes-Passworts beim Kauf von Apps oder Musik ersetzen.

Da ist der Schritt zur Bezahlplattform, die auch Dritten offen steht, kein großer mehr. Dann hätte Apple Googe endgültig ausgetrickst und ganz ohne NFC die Kreditkarte überflüssig gemacht.

Ob das so eine tolle Zukunftsaussicht ist, steht natürlich auf einem anderen Blatt …

[^1]: Selbst wenn jemand die Secure Enclave knackt, würde er dort keinen Fingerabdruck finden – nur eine Sammlung von Merkmalen des Abdrucks. Diese würden zwar reichen, um das iPhone zu entsperren, aber nicht, um zum Beispiel den kompletten Fingerabdruck zu reproduzieren. Auf der anderen Seite sind natürlich auf dem durchschnittlichen iPhone auch so genügend Fingerabdrücke, die man abziehen könnte.

[^2]: Wichtig dabei ist auch, wie viel sicherer das iPhone ist. Kaum Leute verwenden eine Zugriffs-PIN auf ihrem Gerät. Mit Touch ID wird diese Zahl mit Sicherheit stark anwachsen. Ganz zu schweigen davon, dass ein Fingerabdruck um ein Vielfaches sicherer ist als ein vierstelliger Zahlencode.

[^3]: Gerüchte um einen Fingerabdruck-Leser von Apple gab es schon seit [einer Patentanmeldung von 2009](http://www.patentlyapple.com/patently-apple/2009/03/apple-files-an-enterprise-quality-biometric-security-system-patent-for-iphone.html).
