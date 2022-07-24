---
layout: post
title: Kostenloses Blog-Webhosting für Nerds mit Octopress
categories: [Technologie]
comments: true
---

Zugegeben, die Überschrift klingt ein wenig nach SEO-Spam, aber ich mein’s nicht so. Ich will hier kurz erklären, welche technische Lösung ich für diesen Blog gefunden habe und wie ich dazu kam.
<!--more-->
Zu allererst hatte ich [moehrenzahn.de](http://moehrenzahn.de) auf [Wordpress.com](http://wordpress.com) gehostet. Das war kostenlos, einfach und schnell eingerichtet.

## Warum mir Wordpress nicht reicht

Die Premium-Features von Wordpress.com sind ziemlich kostspielig. Ich wollte vor allem meine eigene Domain ([moehrenzahn.de](http://moehrenzahn.de)) verwenden und das Design nach meinen Wünschen anpassen. Der [custom domain support](http://en.support.wordpress.com/domains/) ist zwar noch erschwinglich, aber [30 € pro Jahr für ein custom design](http://en.support.wordpress.com/custom-design/) wollte ich eigentlich nicht ausgeben, vor allem nicht für einen Blog den – wenn’s hochkommt – zwei Leute lesen.

Also überlegte ich, mir meine eigene [Wordpress.org](http://wordpress.org)-Installation zu hosten. Da ich für diese Spielerei wie gesagt kein Geld ausgeben wollte, schaute ich mich nach kostenlosen Webhosting-Angeboten um. Nur eins dazu: Vergiss es. Alles was ich ausprobiert habe war der größte Obermurks.

Aus meiner Wordpress-Zeit ist mir noch etwas anderes wichtig geworden: Eleganz. Das CMS von Wordpress gefällt mir überhaupt nicht. Vor allem, weil ich gern alle meine Artikel wie ich sie geschrieben habe[^2] auf meiner Festplatte archivieren will. Wenn ich nun aber in Wordpress eine änderung an einem Artikel vornehmen wollte, musste ich die jedesmal in meinen lokalen Dateien manuell ergänzen.

Außerdem will ich mich nirgendwo einloggen müssen – meine Texte sollen einfach online erscheinen.

## Die Suche nach einer stabilen Plattform

Tatsächlich gibt es für diese scheinbar utopischen Anforderungen Lösungen: Zum Beispiel [Blogging-Plattformen mit Dropbox-Sync](http://www.fearofconfusion.com/2012/01/three-markdown-dropbox-bloggging.html). Ich hatte meinen Blog eine ganze Weile auf [Scriptogr.am](http://scriptogr.am).[^3] Scriptogr.am hat zwar auch ein Webinterface, aber dort braucht man nur einen Knopf: Synchronisieren. Dann nahm der Dienst alle Markdown-Dateien aus einem bestimmten Ordner meiner Dropbox und machte Blog-Einträge daraus. änderte ich etwas in meinen Dateien, änderte es sich nach einem Klick auf "Sync" auch online.

Das Ganze war kostenlos, ich konnte meine eigene Domain benutzen und sogar nach Herzenslust in HTML und CSS das Design anpassen. Scriptogr.am war und ist wirklich super und ich würde es ohne zu zögern jedem weiterempfehlen, der einfach elegant Texte online stellen will.[^4]

Warum bin ich aber dort nicht geblieben? Zum einen war es die Sorge über die Zukunft der Platform. Neil Boyd selbst, über [dessen Blog](http://www.fearofconfusion.com/2012/01/three-markdown-dropbox-bloggging.html) ich erst auf Scriptogr.am aufmerksam wurde, schreibt:

> I am no longer looking at Dropbox Markdown blogging systems. Most are just side project that get deleted, threatened deletion then aren't or become Posterous-like slow once I navigate off the first page of blog posts. I have lost my willingness to try them. I will stick with Blogger.

Zu deutsch: Diese Plattformen sind meist Hobbys ohne Finanzierungsplan und mit kuzer Lebensspanne.

Zum zweiten wollte ich meine eigene Seite nicht von der Plattform eines anderen Abängig machen. Oder wie es [Marco Arment so treffend formuliert](http://www.marco.org/2011/07/11/own-your-identity):

> If you care about your online presence, you must own it.

Wenn Scriptogr.am [pleite geht](http://www.marco.org/2011/04/05/let-us-pay-for-this-service-so-it-wont-go-down), wäre mein Blog weg. Ich hätte zwar noch meine Texte, aber ich hätte keine Platform mehr dazu.

## Mein jetziges Setup mit Octopress

Wie man an der Fußleiste meines Blogs sehen kann bin ich am Ende bei [Octopress ](http://octopress.org) gelandet, einem ["blogging framework for hackers."](https://github.com/imathis/octopress/tree/master/plugins). Octopress basiert auf [Jekyll](http://jekyllrb.com), welches aus meinen Markdown-Dateien eine statische Seite generiert, die als [Git-Repository](https://github.com) gespeichert und auf einem Server gespiegelt wird. Das heißt es gibt weder Webinterface noch Datenbank und die ganze Seite liegt bei mir auf der Festplatte. Updates werden via Terminal gepusht. Keine Sorge, ich hatte vorher auch keine Ahnung, was das alles bedeutet, aber die [Octopress-Dokumentation](http://octopress.org/docs/) ist sehr hilfreich und erklärt [jeden Schritt zum eigenen Octopress-Blog](http://octopress.org/docs/setup/).

Hosten kann man die so erstellte Seite recht einfach und kostenlos über [GitHub](http://octopress.org/docs/deploying/github) oder [Heroku](http://octopress.org/docs/deploying/heroku). Der kostenlose Heroku-Account kann zwar nicht viel, aber für einen leichten Blog[^5] reicht er allemal.

Das Geniale ist, dass ich meine Seite jederzeit auf einen anderen Server spiegeln könnte, falls Heroku mich mal nicht mehr will. Ich bin also völlig unabhängig vom Webhost (und außerdem 100% Open Source)!

Ich habe zwar bestimmt mit Einrichtung und Anpassung des Blogs mehr Zeit verbracht als mit Schreiben, aber das Ganze hat dadurch nur noch mehr Spaß gemacht. Für wen das unverständlich klingt, der ist mit Wordpress[^6] vielleicht doch besser bedient …

[^2]: In John Grubers exzellentem [Markdown](http://daringfireball.net/projects/markdown/).

[^3]: Momentan kann man [meinen alten Scriptogr.am-Blog](http://scriptogr.am/moehrenzahn) sogar noch besuchen.

[^4]: Zu viele Hobby-Blogger machen sich das Leben mit albernen Wordpress-Installationen unnötig schwer. Überlegt doch mal, wenn das veröffentlichen im Internet doch so einfach sein kann: Wie viele nette Leute hätten interessante Sachen zu sagen, tun’s aber nicht weil die Hürde zum eigenen Blog zu hoch ist?

[^5]: Diese Homepage verbraucht im Moment etwas weniger als 1MB Speicher auf dem Server. Die meisten Bilder habe ich [über Dropbox](http://db.tt/4Qy3oFEa) verlinkt; Traffic hab’ ich ja eh keinen. 

[^6]: Auf Heroku könnte man übrigens auch einen Wordpress-Blog hosten. [James Olney zeigt wie das geht](http://blog.webjames.co.uk/hosting-a-wordpress-blog-on-heroku-with-the-svbtle-theme-for-free/201/).