---
layout: post
title: 'Sichere Social-Media-Links'
categories: [Technologie]
slug: Facebook- und Twitter-Buttons via statischer Links
comments: true
---

Wer auf meinem Blog unter einen Artikel schaut, wird dort unter „Teilen“ Links zu Faceboook, Twitter und Google+ finden. Das kennt man ja von überall aus dem Internet. Sie dienen als eine freundliche Erinnerung, gute Artikel weiterzuempfehlen. Außerdem machen sie Teilen und Liken sehr bequem – mit ein bis zwei Klicks landet ein Artikel in der eigenen Timeline.

<figure><img src='https://dl.dropboxusercontent.com/u/11079930/Artikelbilder/Social%20Sharing/sharing.jpg' /><figcaption>Sharing-Buttons: Das ganze Internet ist voll von ihnen.</figcaption></figure>

Solche Links auf der eigenen Seite einzubinden ist einfach: Man sucht sich den jeweiligen Einbettungscode und fügt diesen an der gewüschten Stelle der Seite in den `HTML`-Code ein. Der Code für den bekannten Facebook-„gefällt mir“-Knopf sieht zum Beispiel in etwa so aus:

{% highlight html %}
<script>
    (function(d, s, id)
    {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/de_DE/all.js#xfbml=1&appId=0000000000000";
      fjs.parentNode.insertBefore(js, fjs);
    }
    (document, 'script', 'facebook-jssdk'));
</script>

<div class="fb-like" data-href="http://moehrenzahn.de/" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>
{% endhighlight %}

Das untere `<div>`-Element ist der eigentliche Like-Button. Das Attribut `data-href` gibt die URL der zu likenden Seite an.

Interessanter ist der JavaScript-Code darüber. Dieser führt ein Skript von `connect.facebook.net` aus, und zwar jedesmal, wenn jemand die Seite mit dem eingebetteten Code aufruft. Was dieses Skript genau macht, lässt sich schwer sagen. Sicher ist, dass es die Anzahl der bisherigen „Likes“ abruft (um sie neben dem Button anzuzeigen) und den eigenen „Like“ registriert, wenn man den Button drückt. [Zusätzlich installiert das Skript einen Cookie im Browser](https://www.facebook.com/help/206635839404055?q=cookies), mit dem Facebook in etwa nachvollziehen kann, wo man sonst so rumsurft – um zum Beispiel gezielt Werbung anzuzeigen.

Viele Leute finden gerade diese Cookies und überhaupt das unbekannte JavaScript besonders problematisch, weil man keinen Einfluss darauf hat, ob die eigenen Daten gespeichert werden – das bloße Besuchen einer Seite mit Facebook- oder Twitter-Button genügt, um ein Cookie zu setzen.

Deshalb hat [heise.de ein Zwei-Klick-System entwickelt](http://www.heise.demar/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html), bei dem der Nutzer erst durch einen Klick den Button aktiviert und dann mit einem zweiten Klick verwenden kann. Das externe Skript wird erst nach dem ersten Klick ausgeführt – wer keine Daten übermitteln will, ignoriert den Button einfach. Dieses System wurde bald in ein Wordpress-Plugin gepackt und weit über das deutschsprachige Internet verbreitet. Das Plugin schützt nicht nur die Privatsphäre der Nutzer, es ist auch hässlich wie die Nacht.

<figure><img src='https://dl.dropboxusercontent.com/u/11079930/Artikelbilder/Social%20Sharing/sharing_2click_heise.jpg' /><figcaption>Zwei-Klick Sharing-Buttons auf Heise.de: Effektiv, aber unästhetisch.</figcaption></figure> 

Es gab keine Chance, dass ich diese scheußlichen Knöpfe auf meiner Seite einbinde. Ich wollte aber auch nicht die ungefilterten Buttons installieren, dafür war mir die Privatsphäre meiner Besucher zu schade.

Also habe ich eine einfachere Lösung gesucht und gefunden: Links.

Wie sich herausstellt, lässt sich der Teilen-Vorgang auf allen gängigen Sozialen Netzwerken via einfacher URLs auslösen, in denen alle wichtigen Daten codiert sind.

So sieht der Code für Google+ aus:

{% highlight html %}
<a href="https://plus.google.com/share?url=[URL]">Google+</a>
{% endhighlight %}

Statt `[URL]` fügt man einfach die zu teilende URL ein – also die der aktuellen Seite. Bei [Jekyll](http://jekyllrb.com) fügt man die aktuelle URL mit dem Befehl `{% raw %}{{ site.url }}{{ page.url }}{% endraw %}` ein.

Beim Code für Facebook ist es das Gleiche:

{% highlight html %}
<a href="http://facebook.com/sharer.php?u=[URL]">Facebook</a>
{% endhighlight %}

Auf Twitter kann man sogar noch zusätzliche Parameter codieren:

{% highlight html %}
<a href="http://twitter.com/intent/tweet?url=[URL]&amp;text=[TITLE]&amp;via=[ACCOUNT]">Twitter</a>
{% endhighlight %}

Neben `[URL]` lässt sich der `[TITLE]` des Artikels oder der Seite angeben und ein „via“-Twitter-Acocunt, der z.B. der des Autors sein kann.

Der Vorteil dieser Social-Links sind, dass einfache Links null JavaScript enthalten. Sie sind also blitzschnell und übermitteln nur die Daten, die im Link codiert sind. Außerdem kann ich die Links mit CSS an das Design meiner Seite anpassen – ich habe zum Beispiel die primäre Farbe des jeweiligen Netzwerks als Hervorhebungsfarbe für die Links gesetzt.[^farben]

[^farben]: Das sind übrigens für Facebook `#3b5a94`, für Twitter `#00aeea`und für Google+ `#e0483e`.

<figure><img src='https://dl.dropboxusercontent.com/u/11079930/Artikelbilder/Social%20Sharing/sharing_moehrenzahn.jpg' /><figcaption>Sharing-Buttons als einfache Links, schick gestylt mit etwas CSS.</figcaption></figure>

Einen Nachteil haben meine Link-Buttons allerdings: Ich kann nicht sehen, wie viele Likes, Tweets etc. ein Artikel bekommen hat, weil meine Links keine dynamischen Zahlen anzeigen.[^2]Außerdem ist es keine richtige Ein-Klick-Lösung – man muss das Teilen und Tweeten in einem zweiten Schritt bestätigen.

[^2]: Die Standard-Widgets von Facebook, Twitter und G+ erfüllen noch einen weiteren Zweck: Sie können auch selbstständige Shares und Tweets erkennen und anzeigen, die man sonst gar nicht bemerken würde.

Aber diese Nachteile nehme ich in Kauf, meine Lösung erscheint mir als die sicherste und eleganteste.[^1]

[^1]: Der Mail-Link ist übrigens ein einfacher `mailto`-Link. In diesem kann man auch Informationen einen Betreff und Inhalt für die neue Mail codieren. Der Link unter dieser Seite sieht zum Beispiel so aus: `<a href="mailto:?subject=Sichere Social-Media-Links%20%7C%20moehrenzahn.de&amp;body=%0A%0ASichere Social-Media-Links%20%7C%20http://www.moehrenzahn.de/Sichere-Social-Media-Links/" target="_top">Mail</a>`
