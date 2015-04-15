---
layout: post
title: 'Nachtmodus'
categories: [Technologie]
---

Ich hab wieder einmal ein paar kleine Veränderungen an moehrenzahn.de vorgenommen.

Zum einen habe ich die ganze Seite von [Octopress](http://octopress.org/) zu [Jekyll](http://jekyllrb.com/) migriert.[^1] Jekyll hat in den letzten Jahren einige substantielle Updates mitbekommen, die vor allem die Build-Geschwindigkeit massiv verbessert haben. Ich hatte sowieso kaum noch Features von Octopress genutzt, deshalb entschloss ich mich, zu "reinem" Jekyll zu wechseln. 

[^1]: Das war recht unkompliziert, da Octopress ja im Grunde nur ein aufgebohrtes Jekyll ist. Als Besucher sollte man keine Veränderung bemerken können.

## Nachtmodus

Zum anderen habe ich einen *Nachtmodus* implementiert. Einfach, weil ich selbst gern manchmal einen gehabt hätte. Vielleicht hat ja der eine oder die andere auch einen Nutzen davon. Mit dem Link im Footer lässt sich der Modus ein- und ausschalten.

Am einfachsten implementiert sich so ein Nachtmodus mit Javascript (bzw. jquery). So fügt der Link im Footer (mit der ID `#nightmodetoggle`) einfach dem `body`-Element die Klasse `.dark-mode` hinzu. Mit jquery sieht das so aus:

{% highlight javascript %}
$('#nightmodetoggle').click(function(){
        $('body').toggleClass('dark-mode');
});
{% endhighlight %}

Diese Klasse kann per CSS angesteuert werden und die Farben der enthaltenen Elemente entsprechend verändert werden (sind ja in meinem Falle nicht so viele). 

## Kekse!

Nun macht aber so ein Nachtmodus nur Sinn, wenn der Browser sich den Modus merkt. Man bräuchte also einen Cookie oder so. Wie sich herausstellt, ist das Speichern eines Cookies ganz einfach:

{% highlight javascript %}
document.cookie = "nightmode=on; path=/";
{% endhighlight %}

`nightmode` ist der Name des Cookie, `path=/` braucht man, damit der Cookie Seitenübergreifend gilt. Ohne `path`-Angabe hätte jede `url` ihre eigenen Cookies.

Entfernen kann man den Cookie wieder, indem man den Wert `expires` auf ein Datum in der Vergangenheit setzt.

{% highlight javascript %}
document.cookie = "nightmode=on; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
{% endhighlight %}

Mit diesem Wissen ausgestattet muss jetzt nur noch die Logik programmiert werden, die den Cookie abwechselnd speichert und löscht:[^2]

[^2]: Die Funktion `getcookie` hab ich mir von [w3schools](http://www.w3schools.com/js/js_cookies.asp) "geborgt".

{% highlight javascript %}
$(document).ready(function() {
    if (getCookie("nightmode") == "on") {
        $('body').toggleClass('dark-mode');
    };
});

$('#nightmodetoggle').click(function(){
    if (getCookie("nightmode") == "on") {
        $('body').toggleClass('dark-mode');
        document.cookie = "nightmode=on; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
    else {
        document.cookie = "nightmode=on; path=/";
        $('body').toggleClass('dark-mode');
    };
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
{% endhighlight %}

