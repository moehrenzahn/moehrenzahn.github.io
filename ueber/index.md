---
layout: page
comments: false
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

Hier auf moehrenzahn.de schreibe ich über alles was mich interessiert, in der Hauptsache über [Technisches](/categories/technologie/) und [Theologisches](/categories/theologie/) – manchmal auch [auf Englisch](/en/). Bis heute habe ich hier {{ site.posts | size }} Artikel veröffentlicht mit insgesamt {{wordcount}} Wörtern.


----

## Projekte

<div class="projects">
    <img src="/images/Projekte/journalist.jpg" /><a href="http://www.theologiestudierende.de" target="_blank"><img src="/images/Projekte/theologiestudierende.jpg" /></a><a href="http://www.theologiestudierende.de/category/sag-mal-der-podcast/" target="_blank"><img src="/images/Projekte/sagmal.jpg" /></a>
</div>

Neben meinem Studium arbeite ich als **freiberuflicher Journalist.** Texte von mir sind unter anderem erschienen in [*Der Sonntag*](https://www.sonntag-sachsen.de) und der [*Evangelischen Zeitung*](http://www.evangelische-zeitung-niedersachsen.de). Anfragen nehme ich gern entgegen unter <hallo@moehrenzahn.de>.

[**theologiestudierende.de**](http://www.theologiestudierende.de/) ist ein theologisches Online-Magazin, das ich seit 2012 ehrenamtlich leite und entwickelt habe. [Viele meiner Artikel](http://www.theologiestudierende.de/author/portalleitung/) erscheinen zuerst dort. Zu meiner Arbeit dort wurde ich von *Der Sonntag* interviewt [("Bloggen für Christus")](https://www.sonntag-sachsen.de/2015/02/bloggen-fuer-christus).

[**Sag mal**](http://www.theologiestudierende.de/category/sag-mal-der-podcast/) ist ein Podcast, den ich gemeinsam mit zwei Kommilitonen produziere. Bis heute sind 42 Ausgaben zu verschiedenen theologischen und hochschulpolitischen Themen erschienen.

----

## Anderswo

Wem gefällt, was ich hier schreibe, kann den [RSS-Feed abonnieren](/feed.xml) oder auf Twitter [dem Feed des Blogs (@moehrenzahn) folgen](https://twitter.com/moehrenzahn).

Dazu [twittere ich unter @_maxmelzer](http://www.twitter.com/_maxmelzer) interessante Links und kurze Beobachtungen zu allen möglichen Themen.

Außerdem veröffentliche ich ganz sporadisch kleine Code-Schnipsel von mir auf GitHub: [Meine Repositories auf GitHub](https://github.com/moehrenzahn)

Per Mail bin ich erreichbar unter <hallo@moehrenzahn.de>.