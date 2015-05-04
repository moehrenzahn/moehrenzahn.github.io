---
layout: post
title: Anatomie eines Jailbreak-Trojaners
link: http://ryanhileman.info/posts/webgl
categories: [Technologie]
---

Sehr beunruhigend: [Ryan Hileman](https://twitter.com/lunixbochs/) hat einen Jailbreak-Tweak für iOS entdeckt,[^1] der nebenbei eine Art Trojaner ist.<!--more--> Das Tool lädt unbemerkt vom Benutzer im Hintergrund unsichtbare Werbung, die den Entwickler bei jeder Verwendung des Gerätes etwas Geld verdienen lässt. [In einem Blog-Eintrag erklärt Hileman im Detail, wie die Software funktioniert](http://ryanhileman.info/posts/webgl):

> Finishing up the HTML, there are several more affiliate iframes and JavaScript to refresh the page every five minutes. Regular background refreshes could keep your CPU awake, be taxing on your battery, plus slowly and silently wear down at your data plan.

Es hat schon seine Gründe, warum Apple das ganze Gejailbreake am liebsten verbieten will. Inzwischen wurde der "Tweak" offline genommen, aber mit Sicherheit gibt es noch viele weitere Tweaks in den unzähligen zwielichtigen Cydia-Repos, die ganz ähnliche Hintertüren öffnen.

[^1]: Das witzigste ist ja, dass er [auf Twitter schreibt](https://twitter.com/lunixbochs/status/382737948363325440) er habe extra für diesen Post eine eigene Blog-Engine geschrieben.