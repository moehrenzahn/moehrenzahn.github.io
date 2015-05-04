---
layout: post
title: Ein Fantastical-Plugin für Alfred
categories: [Technologie]
---

Ich habe ein neues Plugin geschrieben. Es ist ein [Fantastical](http://flexibits.com/fantastical)-Plugin für den ausgezeichneten [Spotlight-Ersatz Alfred](http://www.alfredapp.com).
<!--more-->

Ich verwende Fantastical jeden Tag, um meine Kalender einzusehen und zu verwalten. Seine natürliche Spracherkennung ist der beste und schnellste Weg, um neue Termine in meinen Kalender einzutragen. Ich hatte Fantastical auf `⌥ Leertaste` eingestellt, weil ich es so oft verwendete.

Aber ich verwende und mag auch Alfred sehr, den super fähigen Spotlight-Ersatz von Running with Crayons. Ich mache damit alles vom Dateien öffnen und Mails erstellen bis kurze Webrecherchen anstellen. Es ersetzt bei mir den `⌘ Space` Shortcut von Spotlight. Ich schreibe oft kurze Workflows[^powerpack], um häufige Aufgaben über Alfred schnell zu erledigen.

[^powerpack]: Mit dem [Alfred Power Pack](https://buy.alfredapp.com).

Ich wollte Alfred und Fantastical verbinden und dabei ein Tastaturkürzel einsparen.

Glücklicherweise hat Flexibits Applescript-Unterstützung in Fantastical eingebaut, deshalb war ein einfacher Workflow trivial zu programmieren:

{% highlight applescript %}
    on alfred_script(q)
        tell application "Fantastical" to parse sentence q
    end alfred_script
{% endhighlight %}

Mit diesen Zeilen Code würde Alfred jedes Argument nach meinem Keyword (Ich entschied mich für `cal`) an Fantastical weiterreichen, ich muss nur noch `Enter` drücken, um den Eintrag zu erstellen[^instant]. Es ist nicht besonders Raffiniert und lange vor mir hat [imartins ein ähnliches Plugin erstellt](http://www.alfredforum.com/topic/1272-add-to-fantastical/).

[^instant]: Man kann Fantastical auch mit dem Modifikator `[add immediately true]` dazu bringen, den Eintrag im Hintergrund sofort zu erstellen. Das wollte ich aber nicht, weil ich gerne prüfen will, dass Fantastical meine Eingabe korrekt einliest. Aber man könnte einen Check für ein bestimmtes Symbol einbauen (`!`, zum Beispiel) und den Modifikator verwenden, wenn dieses Symbol im Input vorhanden ist.

Eine Sache war allerdings nervig. Ich verwende Fantastical oft, um kommende Termine einzusehen. Wenn man aber Fantastical mit `parse sentence` aufruft, wird immer der Parsing-Bereich aufgemacht und die Terminliste verkürzt – ich kann kaum noch Termine sehen. Man kann das umgehen, indem man in Fantastical etwas Text eingibt und dann wieder löscht – dann geht das Parsing-Interface wieder zu. 

Aber weil das eine nervige Sache ist, entschied ich, das zu automatisieren:[^automate]

{% highlight applescript %}
on alfred_script(q)
    if q is "" then
        set q to " "
    end if

    tell application "Fantastical" to parse sentence q

    if q is " " then
        tell application "System Events" to key code 51
    end if
end alfred_script
{% endhighlight %}

Dieser Code prüft ob der Input-String leer ist. Wenn das der Fall ist, verwandelt es ihn in ein einzelnes Leerzeichen, dass später leicht gelöscht werden kann. Nach dem Parse-Befehl simuliere ich den Tastendruck von `key code 51`, was die `Löschen`-Taste ist. Damit schließt sich der Parsing-Bereich wieder.

Es gibt zwar eine halbe Sekunde Verzögerung, aber es genügt für mich. Wenn ich in Alfred `cal` eingebe, öffnet sich das normale Fantastical-Interface (wie, wenn ich vorher `⌥ Space` eingab). Wenn ich `cal` mit irgendetwas danach eingebe, verwendet Fantastical diesen Text, um einen neuen Eintrag zu parsen.

Das fertige Plugin gibt’s [hier zum Download](/images/Fantastical.alfredworkflow).

[^automate]: Das wäre viel einfacher, wenn Flexibits ihre AppleScript-Implementierung mit einer "invoke"-Funktionalität erweitern würde. Die normale Applescript-Funktion `activate` funktioniert nicht, weil Fantastical auf dem Mac kein normales Fenster ist.
