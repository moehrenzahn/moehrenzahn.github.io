---
layout: post
title: Hatten Webcam-Abkleber die ganze Zeit recht?
categories: [Technologie]
comments: true
slug: Ich bin dann mal weg, mir einen Aluhut basteln
---

Ich habe mich in der Vergangenheit immer ein bisschen lustig gemacht über Leute, die ihre Webcam am Laptop großzügig abkleben – Paranoia durch Unwissenheit. „Die LED ist mit der Kamera in Hardware verbunden, die eine kann nicht ohne die andere angehen“, würde ich jedes mal erklären.

Das scheint nach neuesten Erkenntnissen aber so nicht zu stimmen.  
<!--more-->

Die [Washington Post berichtet](http://www.washingtonpost.com/blogs/the-switch/wp/2013/12/18/research-shows-how-macbook-webcams-can-spy-on-their-users-without-warning/) von einem Forscherteam, das es geschafft haben soll, auf einem MacBook die LED der iSight-Kamera zu umgehen und Video aufzunehmen, ohne, dass die Leuchte den Benutzer darüber informiert.

Im [dazugehörigen Paper „iSeeYou: Disabling the MacBook Webcam Indicator LED“](https://jscholarship.library.jhu.edu/bitstream/handle/1774.2/36569/camera.pdf) erklären die Sicherheitsforscher Matthew Brocker und Stephen Checkoway ausführlich ihre Methode.

Für ihre Tests vewendeten sie ein MacBook der ersten Generation, also von 2007/2008. Es wird ausdrücklich betont, dass nicht geprüft wurde, ob der Exploit (genannt *iSeeYou*) auch bei neueren Macs funktioniert:

> We stress that our main result— disabling the iSight LED — only applies to the first generation internal iSight webcams and we make no claims of security or insecurity of later models, including the most recent (renamed) FaceTime cameras.  

Merkwürdig finde ich dabei, dass das Paper nur Aussagen über das 2008er MacBook trifft. Hatten die keinen neueren Mac da? Konnten die nicht ihr Programm wenigstens mal auf einem testen? Meine Vermutung ist, dass neuere Macs andere Hardware verwenden die nicht (oder zumindest nicht so einfach[^sandbox]) überbrückbar ist.

[^sandbox]: Interessant ist auch, dass laut dem Paper nur eine App die iSight-LED umgehen kann, die nicht in Apples Sandbox läuft. Wer also Programme exklusiv aus dem App Store bezieht, ist (zumindest vor *diesem* Exploit) sicher. Aber wer tut das schon?

Die Anfälligkeit besteht trotzdem[^iSightDefender] und es verblüfft mich sehr, dass die LED nicht unumgehbar mit der iSight verkoppelt ist (obwohl das laut Paper durchaus technisch möglich wäre). Da hat Apple einfach geschlampt.

[^iSightDefender]: Wer ein 2007er oder 2008er MacBook hat, kann auch den [iSightDefender](von den Autoren des Papers entwickelt) ausprobieren. Dieses von den Autoren entwickelte Tool soll den im Paper beschriebenen Exploit unschädlich machen.

Ich persönlich habe trotzdem keine Angst, dass mich jemand durch meine iSight beobachten könnte. Da finde ich die Vorstellung viel schlimmer, dass durch die ständige Kameraaktivität mein Akku schneller leergesaugt wird.

Aber ich habe jetzt auf jeden Fall etwas mehr Respekt für Leute, die ihre Privatsphäre mit Klebeband forcieren.

Ich bin dann mal weg, mir auch einen [Aluhut](http://de.wikipedia.org/wiki/Aluminiumhut) basteln … vorsichtshalber.