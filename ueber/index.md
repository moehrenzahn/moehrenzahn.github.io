---
layout: page
sharing: false
---

{% assign wordcount = 0 %}
{% for post in site.posts %}
    {% capture postwordcount %}
        {{ post.content | number_of_words }}
    {% endcapture %}
    {% capture wordcount %}
        {{ wordcount | plus:{{postwordcount}}
    {% endcapture %}
{% endfor %}

<div class="profile-outer"><div class="profile-image"></div></div>

Mein Name ist Max Melzer. Ich bin Leipziger Theologiestudent und Chefredakteur von [theologiestudierende.de](http://www.theologiestudierende.de).

Hier auf moehrenzahn.de schreibe ich über alles was mich interessiert, in der Hauptsache über [Technisches](/categories/technologie/) und [Theologisches](/categories/theologie/) – manchmal auch [auf Englisch](/en/). Seit 2012 habe ich hier {{ site.posts | size }} Artikel veröffentlicht mit insgesamt {{wordcount}} Wörtern.


----

## Meine Projekte

<div class="projects">
    <a href="http://devotionalium.moehrenzahn.de/mac" target="_blank"><img src="/images/Projekte/devotionalium.jpg" /></a><a href="http://www.theologiestudierende.de" target="_blank"><img src="/images/Projekte/theologiestudierende.jpg" /></a><a href="http://www.theologiestudierende.de/category/sag-mal-der-podcast/" target="_blank"><img src="/images/Projekte/sagmal.jpg" /></a>
</div>

Neben meinem Studium arbeite ich als **Journalist.** Texte von mir sind unter anderem erschienen in [*Der Sonntag*](https://www.sonntag-sachsen.de) und der [*Evangelischen Zeitung*](http://www.evangelische-zeitung-niedersachsen.de). Anfragen nehme ich gern entgegen unter <hallo@moehrenzahn.de>.

[**Devotionalium**](http://devotionalium.moehrenzahn.de/mac) ist
eine moderne, theologenfreundliche Andachts-App mit umfangreicher Unterstützung für die biblischen Ursprachen. Devotionalium gibt es zur Zeit als [OS X-Version](http://devotionalium.moehrenzahn.de/mac) und als [Web-App](http://devotionalium.moehrenzahn.de/). Eine Version für iOS ist geplant.

[**theologiestudierende.de**](http://www.theologiestudierende.de/) ist ein theologisches Online-Magazin, das ich entwickelt habe und seit 2012 ehrenamtlich leite. [Viele meiner Artikel](http://www.theologiestudierende.de/author/max-melzermoehrenzahn-de/) erscheinen zuerst dort.

[**Sag mal**](http://www.theologiestudierende.de/category/sag-mal-der-podcast/) ist ein Podcast, den ich gemeinsam mit zwei Kommilitonen produziere. Bis heute sind 42 Ausgaben zu verschiedenen theologischen und hochschulpolitischen Themen erschienen.

----

## Anderswo

Wem gefällt, was ich hier schreibe, kann den [RSS-Feed](/feed.xml) abonnieren oder auf Twitter dem Feed des Blogs [@moehrenzahn](https://twitter.com/moehrenzahn) folgen.

Neben dieser Seite veröffentliche ich sporadisch kleine Code-Schnipsel auf GitHub: [Meine Repositories auf GitHub](https://github.com/moehrenzahn)

Zu erreichen bin ich auf Twitter unter [@_maxmelzer](http://www.twitter.com/_maxmelzer) und per Mail unter <hallo@moehrenzahn.de>.