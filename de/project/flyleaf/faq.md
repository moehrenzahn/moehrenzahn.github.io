---
title: Häufig gestellte Fragen zu Flyleaf
lang: de
layout: page
image: /images/projects/flyleaf-mac-icon.png
redirect_from:
- /de/flyleaf/faq
---

Hier habe ich einige häufig gestellte Fragen zu meiner Read-Later-App [Flyleaf](/de/project/flyleaf/) gesammelt. Wenn du der Meinung bist, dass deine Frage hier beantwortet werden sollte, dies aber nicht der Fall ist, wende dich bitte an [flyleaf@moehrenzahn.de](mailto:flyleaf@moehrenzahn.de)!

{% include flyleaf-download.html %}

----

## Wie kann ich Links aus anderen Anwendungen an Flyleaf senden?

Flyleaf ist in das Share Sheet des Betriebssystems integriert, so dass Links aus allen möglichen Anwendungen direkt an Flyleaf gesendet werden können. Das Share Sheet befindet sich oft hinter einem Icon, das wie ein nach oben gerichteter Pfeil aussieht, der aus einem Quadrat kommt:

<img loading="lazy" height="40" style="filter:invert(1)" alt="" src="/images/projects/sf-share.svg">

<img loading="lazy" height="500" alt="" src="/images/projects/flyleaf-share-ios.png">

Unter macOS kann es vorkommen, dass Flyleaf nicht standardmäßig im Share Sheet angezeigt wird. Um dies zu beheben, öffne ein Share Sheet, klicke unten in der Liste auf "Erweiterungen verwalten..." und stelle sicher, dass Flyleaf in der angezeigten Liste aktiviert ist.

Wenn Flyleaf unter iOS nicht im Share Sheet angezeigt wird, musst du möglicherweise ganz nach rechts oder unten scrollen und "Mehr..." auswählen, um es zu finden.

Um das Share Sheet in der Instagram-App zu finden, musst du zunächst auf die Papierflieger-Schaltfläche in einem Beitrag tippen.

in der YouTube-App tippe auf "Teilen", scrolle ganz nach rechts und tippe auf "Mehr...", um das Share Sheet zu öffnen.

----

## Mein Browser hat keine Schaltfläche für das Share Sheet, wie kann ich Links zu Flyleaf hinzufügen?

Wenn dein Browser kein Share Sheet anbietet, kannst du stattdessen das Bookmarklet verwenden. Ziehe einfach den folgenden Link in die Lesezeichenleiste deines Browsers:

[An Flyleaf senden](javascript:(function(){window.open('flyleaf://article?url='+encodeURIComponent(window.location));})();)

Du findest den Bookmarklet-Link auch in den Flyleaf-Einstellungen unter "Teilen".

----

## Wie kann ich einen Artikel hinter einer Paywall zu Flyleaf hinzufügen?

Wenn du einen Link zuerst in einem Browser lädst und von dort aus das Share Sheet verwendest, speichert Flyleaf den Inhalt der Webseite so, wie er im Browser dargestellt wird, auch wenn dieser nicht öffentlich zugänglich ist.

Wenn du Flyleaf-Abonnent:in bist, kannst du auch die integrierte archive.is-Integration nutzen, um auf gesperrte Inhalte zuzugreifen.

----

## Was kann ich tun, wenn Flyleaf den Inhalt einer von mir hinzugefügten Webseite nicht korrekt anzeigt?

Du kannst die Aktion "Erneuter Download" ausprobieren. Du findest sie indem du beim Lesen eines Artikels nach oben wischst. Flyleaf wird versuchen, die Webseite auf eine andere Art und Weise herunterzuladen, die bei manchen Websites besser funktioniert.

Wenn die Webseite immer noch nicht richtig in Flyleaf angezeigt wird, sende bitte den Link an [flyleaf@moehrenzahn.de](mailto:flyleaf@moehrenzahn.de), damit ich den Parser in einem zukünftigen Update verbessern kann!

----

## Kann ich ein PDF, eine E-Mail oder andere Dokumente zu Flyleaf hinzufügen?

Flyleaf unterstützt derzeit nur das Hinzufügen von URLs, also Links zu Dokumenten. Leider kannst du keine PDF-Datei direkt zu Flyleaf hinzufügen, sondern nur den *Link* zu einer PDF-Datei.

Bei E-Mail-Newslettern gibt es oft irgendwo einen Link "Im Browser öffnen". Sobald du die E-Mail in einem Browser geöffnet hast, kannst du das Share Sheet verwenden, um die E-Mail zu Flyleaf hinzuzufügen.

----

## Kann ich anstelle der Paginierung auch vertikal Scrollen?

Ja. Klicke in der Artikelansicht einfach auf die Schaltfläche "Aa" in der unteren Symbolleiste und deaktiviere die Option "Wie Buchseiten blättern".

Denke aber daran, dass das seitenweise Blättern im Grunde das Hauptfeature von Flyleaf ist – wenn du nicht wirklich daran interessiert bist, gibt es vielleicht andere Read-Later-Apps, die besser für dich geeignet sind.

----

## Wie kann ich die Artikelsymbolleiste ausblenden und Artikel im Vollbildmodus lesen?

Wische in der Artikelansicht nach oben und suche ein Symbol mit zwei Pfeilen, die voneinander wegzeigen. Tippe darauf, um den Vollbildmodus umzuschalten.

<img loading="lazy" alt="" height="20" src="/images/projects/sf-fullscreen.svg" style="filter:invert(1)">

Der Vollbildmodus ist derzeit nur verfügbar, wenn du die "Wie Buchseiten blättern"-Funktion verwendest.

----

## Kommen irgendwann Hervorhebungen und Notizen in die App?

Hervorhebungen und Notizen sind auf der Roadmap, aber haben keine hohe Priorität. Ich konzentriere mich im Moment darauf, das Leseerlebnis so schick und ausgefeilt wie möglich zu machen.

Wenn du dich besonders dafür interessierst, Artikel zu organisieren und zu referenzieren, bist du möglicherweise mit anderen Read-Later-Apps besser bedient.

----

## Kommt irgendwann noch Unterstützung für ältere Geräte?

Leider wird Flyleaf höchstwahrscheinlich nie Betriebssysteme unterstützen, die älter als iOS 17 und macOS 14 sind.

----

## Kannst du die Funktion XYZ in die App einbauen?

Vielleicht. :) Schick mir eine E-Mail an [flyleaf@moehrenzahn.de](mailto:flyleaf@moehrenzahn.de) und ich werde darüber nachdenken.

----

## Wie kann ich alle meine gespeicherten Artikel vollständig aus iCloud und von meinen Geräten löschen und von vorne anfangen?

Führe einfach die folgenden Schritte aus:

1. Lösche Flyleaf von allen deinen Geräten.
2. Gehe zur Einstellungen-App ⇾ iCloud ⇾ Speicher verwalten, wähle "Flyleaf" und wähle "Aus iCloud löschen".
3. Installiere Flyleaf auf all deinen Geräten neu.

----

## Flyleaf ist so super! Wie kann ich dich unterstützen?

Danke der Nachfrage! Als Indie-Entwickler bedeutet mir deine Unterstützung sehr viel. Es gibt mehrere Möglichkeiten, wie du mir helfen kannst:

- Gehe sowohl zum iOS App Store als auch zum Mac App Store und [gebe eine Bewertung ab und schreibe eine positive Rezension](https://apps.apple.com/app/flyleaf-read-later/id6475200381?action=write-review). Gib am Besten nach jedem App-Update eine neue Bewertung ab.
- Falls du einen Blog, viele Follower in den sozialen Medien oder viele Freunde hast, empfiehl Flyleaf weiter.
- Wenn du auf einen Fehler in der App stößt, lass es mich unter [flyleaf@moehrenzahn.de](mailto:flyleaf@moehrenzahn.de) wissen. Wenn du an der TestFlight-Beta teilnehmen möchtest, um zukünftige Updates zu verbessern, lass es mich ebenfalls wissen.
- Denk darüber nach, ein monatliches oder jährliches Flyleaf-In-App-Abo abzuschließen.

{% include flyleaf-download.html %}