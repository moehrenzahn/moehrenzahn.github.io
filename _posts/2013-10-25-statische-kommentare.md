---
layout: post
title: Statische Kommentare mit Jekyll
categories: [Technologie]
---

Dies ist der zweite Teil zwei meiner [Artikelreihe zur Kommentarfunktion auf moehrenzahn.de](/Bloghosting-mit-Heroku).<!-- more --> Hier soll es darum gehen, welche Überlegungen bei der technischen Implementierung eine Rolle gespielt haben und welche Lösung ich gefunden habe.

Diesen Blog schreibe ich [wie bereits gesagt](/Bloghosting-mit-Heroku) mit [Jekyll](http://jekyllrb.com) und [Octopress](http://octopress.org). Das ist eine statische Blogging-Platform. Das bedeutet sie kommt komplett ohne Datenbanken oder serverseitige Scripts aus. Das großartige daran: Es ist fantastisch elegant. Der Nachteil: Dynamische Inhalte (wie Kommentare) sind schwer zu machen.

## Von fremdem Code und Tracking

Es gibt Kommentarplattformen, mit denen man über Javascript auf seiner Seite sehr einfach Kommentare einbinden kann. Der bekannteste Anbieter ist wohl [Facebook](https://developers.facebook.com/docs/plugins/comments/), weniger berüchtigt ist [Disqus](https://disqus.com).

Disqus habe ich sogar mal kurz ausprobiert. Was mich daran stört: Ich kann das Aussehen der Kommentare fast nicht beeinflussen. Das Interface ist voller sinnlosem "engagement"-Kram, der wohl dem Disqus-Netzwerk dient, aber nicht mir. Ich will gar nicht wissen, wie viele Cookies und Tracking-IDs man von so einer Kommentarbox bekommt – und dafür muss man noch nicht mal selber einen schreiben. Ich mag nur ungern auf meinem Blog geschlossenen Code von anderen Parteien ausführen – vor allem von so offensichtlichen Datenkraken.[^code]

[^code]: Deshalb sind die "Teilen"-Knöpfe hier auch nicht die klassischen, im Web bekannten Buttons sondern einfache Links, über die kein Tracking geschieht. Denn wer sind größere Datenkraken als Soziale Netzwerke. Meine einzige Ausnahme: Ein Font, den ich über Google Fonts einbinde.

Also stand für mich fest: kein Disqus! Eine interessante Idee sah ich unter einem [Artikel von Matthew Butterick](http://unitscale.com/mb/bomb-in-the-garden/): Ein schlichter Link am Ende der Seite mit dem Text:

> Comments wel­come—thought­ful ones will be published

Der Link ist einfach nur ein `mailto:`-Link auf die Email-Adresse des Autors. Hat er dann jedesmal die Kommentare manuell unter seinem Artikel hinzugefügt? Ich weiß es nicht. Aber ich fand die Idee gut und machte mich auf die Suche nach einer Möglichkeit, Kommentare statisch auf meiner Seite einzubinden.

## Plugins und Automatisierung 

Aber ich weiß, dass es für Jekyll Plugins gibt, die solche statischen Kommentare relativ elegant lösen. Ich verwende [jekyll-static-comments](https://github.com/mpalmer/jekyll-static-comments). Damit kann ich Kommentare als Textdatein in das Git-Repo meines Blogs laden und dann unter den entsprechenden Artikel einblenden lassen. Das Plugin empfängt Kommentare über ein gewöhnliches HTML-Formular und konvertiert sie über ein serverseitiges PHP-Skript in eine Mail, die dann verschickt wird und in das Git-Repo geht.

Diese Technik habe ich etwas abgeändert, ähnlich wie [hier bei Tomas Carnecky beschrieben](https://blog.caurea.org/2012/03/31/this-blog-has-comments-again.html). Bei mir gibt es kein Formular oder PHP-Script, sondern ihr schickt mir eure Kommentare direkt als Mail.[^nachteil]

[^nachteil]: Ein gewisser Nachteil dieser Technik ist, dass sich das Kommentieren via Mail weniger unmittelbar anfühlt als direkt auf der Seite. Andererseits ist das eigene Mailprogramm eine vertraute Schreibumgebung, die vielleicht zu besser reflektierten und ausführlicheren Kommentaren ermutigt.

Ich kann dann diese Mail nehmen, in eine Textdatei verwandeln und in mein Blogverzeichnis legen.[^automatisieren] Das Jekyll-Plugin übernimmt dann den Rest.

[^automatisieren]: Dieser Vorgang ließe sich auch ganz hervorragend automatisieren. Ein Projekt für später…

Mir gefällt diese Lösung. Sie ist technisch elegant. Außerdem bleibt mein Blog so fein übersichtlich.