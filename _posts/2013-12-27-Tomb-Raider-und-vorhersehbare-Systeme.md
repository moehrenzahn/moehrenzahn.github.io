---
title: Tomb Raider und Vorhersehbare Systeme
categories: [Technologie]
slug: … und warum wir mehr davon gebrauchen könnten
---

In diesem Artikel möchte ich am Beispiel von *Tomb Raider* erklären, was Vorhersehbare Systeme sind und warum wir wieder mehr davon gebrauchen könnten.

Als 1996 der erste "Tomb Raider"-Teil erschien, war ich noch ein Kind und hatte wahrscheinlich noch nie in meinem Leben ein Computerspiel gespielt, geschweige denn einen Computer bedient.

<figure><img src='{% link /images/Tomb Raider/Tomb-Raider-Menu.png %}' /><figcaption>Der Menü-Bildschirm von Tomb Raider</figcaption></figure>

Trotzdem hat Lara Croft in meinem Herzen einen besonderen Platz, schließlich ist es das erste Spiel, an das ich mich erinnere, welches es schaffte mich ganz in eine andere Welt zu versetzen: Eine Welt, in der jeder Hebel irgendwo eine Tür öffnet und wo es in verlorenen Tälern noch furchteinflößende Dinosaurier gibt.[^dino]

[^dino]: Ja, für einen Elfjährigen war der T-Rex schon gruselig – Das einzige was noch angsteinflößender war: [der stöhnende Butler aus *Tomb Raider 2*](http://www.youtube.com/watch?v=OjqRYpIwnB8).

<figure><img src='/images/Tomb%20Raider/Tomb-Raider-T-Rex.png' alt='Der T-Rex aus dem ersten Tomb Raider-Teil' /><figcaption>Tomb Raiders furchteinflößendster Gegner</figcaption></figure>

## Back to the Roots

Ich hatte keines der alten *Tomb Raider*-Teile je durchgespielt. Ich erinnere mich noch genau an die Sequenz: Fackel anzünden, einen Schritt vor, einen zurück, dann drei Runden auf der Stelle drehen. Mit einem Sprung nach vorne konnte man dann direkt ins nächste Level springen. Dieser Cheat war mir in meiner Kindheit wichtigster Begleiter, denn die Welten, die ich erkunden wollte, entsprachen leider nicht meinen Fähigkeiten (und bisweilen meinem Mut).[^cheats]

[^cheats]:Ich konnte nicht verstehen, warum mein ältester Bruder von dieser Methode so empört war. Er versuchte immer mich dazu zu bringen, das Spiel "normal" zu spielen. Das ging sogar so weit, dass er sich in meine Speicherstände einklinkte und mir alle meine Fackeln wegnahm! Erst viel später sollte ich erkennen, dass er mir damit einen großen Gefallen tun wollte.

Also habe ich neulich entschieden, mich noch einmal in die Welt meiner Jugend zurückzuversetzen und das originale *Tomb Raider* auf meinem Mac zu installieren.[^dosbox] Und ich wunderte mich selbst, wie sehr mich dieses 17 Jahre alte Spiel immer noch begeistern konnte.

Weniger die Handlung, – die rückt doch sehr in den Hintergrund – besonders das Leveldesign hat es mir angetan. Besonders im Kontrast zum aktuellen *Tomb Raider*-Reboot von Crystal Dynamics wurde mir deutlich, warum mir der Klassiker so gut gefällt: *Jedes Level besteht (fast) ausschließlich aus Quadern.*

[^dosbox]: [DOSBox](http://www.dosbox.com/information.php) sei dank!

<figure><img src='{% link /images/Tomb Raider/Tomb-Raider-Level.png %}' alt='Screenshot eines Tomb Raider-Levels' /><figcaption>Die Level in Tomb Raider sind aus einem System von Quadern zusammengesetzt</figcaption></figure>

## Am Anfang war der Block

Was heutzutage als technisch bedingte grafische Schwäche (oder als Retro-Stilelement á la *Minecraft*) gehandelt wird, hat einen riesigen Vorteil: Vorhersehbarkeit. Da die Anzahl der möglichen Kombinationen aus untschiedlich hohen Blöcken und Schrägen relativ begrenzt ist, kann die Engine für jeden Fall genau bestimmen, wie die Spielfigur sich zu ihrer Umgebung verhalten muss: Sie kann sich an Kanten festhalten. Sie kann zwei Block weit Springen, mit Anlauf genau drei. Ab einer gewissen Neigung des Untergrunds beginnt sie abzurutschen.

Mit diesem begrenzten Reportoire mussten auch die Leveldesigner bei Core Design arbeiten. Und sie kosteten die Möglichkeiten voll aus. Ein geübter Spieler könnte in jedem *Tomb Raider* Level nach einem Blick genau vorhersagen, wo man wie springen und klettern muss, um zum Ziel zu gelangen. Damit es nicht zu einfach wurde, mussten die Entwickler sehr kreativ arbeiten. Trotzdem entspricht jedes Level diesem Baukastenprinzip. Am Anfang war der Block, und die Designer bauten drum herum ihre Welten.

Bei modernen Spielen, ganz besonders den aktuelleren *Tomb Raider*-Titeln, ist es genau anders herum: Die Designer erfinden atemberaubende Schauplätze, die dann als grafisch realistische und Überzeugende 3D-Welt gerendert werden. Danach wird das Level, das eigentliche Gameplay, hineingebaut und strategisch zum Beispiel kletterbare Bereiche definiert (man denke nur an die Kletterhaken-Flächen im *Tomb Raider*-Reboot von 2013). Der nervige Nebeneffekt ist, dass man nur dorthin Klettern kann, wo es ein Designer wollte. So werden hüfthohe Felsen schnell zur unüberwindlichen Barriere.

<figure><img src='/images/Tomb%20Raider/tomb-raider-kletterbereich.png' alt='Screenshot einer Klettersequenz aus Tomb Raider (2013)' /><figcaption>"Bitte nur im markierten Bereich klettern!" (Tomb Raider 2013)</figcaption></figure>

Diese Welten sind zwar sehr hübsch anzusehen und sehen viel realistischer aus als die altbackenen Blöcke von 1996, dafür verhalten sie sich viel weniger wie ein echter Ort. Sie opfern Nachvollziehbarkeit für Optik – ein Handel, den das originale *Tomb Raider* nicht eingeht. 

Diese Nachvollziehbarkeit wird auf einer verwaisten Seite der Universität Amsterdam zum [Kurs "topical media & game development" treffend definiert](http://www.cs.vu.nl/~eliens/demo/pattern-predictableconsequences.html):

> Players can predict how the game state will change if they perform actions, or possibly sequences of actions.
When players can understand how actions and events affect the game state of a game, those actions and events have Predictable Consequences.

Das wichtigste beim Einsatz von predictable consequences ist, dass die Berechenbarkeit einer Spielmechanik über einzelne Elemente hinaus geht. Ich nenne das ein *Vorhersehbares System* (Predictable System). In einem solchen System sind alle Elemente und Konsequenzen des Systems logisch miteinander verknüpft.

Nur wenige moderne Spiele setzen dieses Prinzip der Vorhersehbaren Systeme wieder um. Na klar, Spiele wie *Minecraft* sind aus ihrer grafischen Einfachheit zum "Quader-Modell" gezwungen. Auch viele 2D-Games haben Spielwelten, in denen sich alle Oberflächen vorhersehbar und (innerhalb deren Logik) nachvollziehbar verhalten.[^2d]

[^2d]: Gute Beispiele für Levels als Vorhersehbare Systeme sind Plattformer wie das ausgezeichnete *[Spelunky](http://spelunkyworld.com)*, *[Super Meatboy](http://supermeatboy.com)* oder *[Dustforce](http://dustforce.com)*. Bei diesem Genre sind Präzision und Vorhersehbare Systeme besonders wichtig.

Es gibt neben Levelgeometrie auch noch andere Bereiche, in denen Vorhersehbare Systeme sinnvoll eingesetzt werden können. Ein gutes Beispiel ist der Umgang mit Schatten in der [*Thief*-Serie](http://de.wikipedia.org/wiki/Thief): *Thief* (in Deutschland eher als *Dark Project* bekannt) und *Thief II* arbeiteten technisch bedingt mit Schatten, die direkt auf die Texturen gerendert wurden. Die Platzierung der Schatten ergab aber nicht immer intuitiv Sinn. *Thief: Deadly Shadows* führte 2004 dynamische Schatten in die Serie ein. Das Spielprinzip blieb das gleiche, aber das Spiel von Licht und Schatten wurde ein Vorhersehbares System: Nur wo eine Lichtquelle schien war auch Licht; nur wo ein Gegenstand zwischen Lichtquelle und Spieler kam, war er im Schatten. Jeder Schatten wurde live gerendert und war stets eindeutig erkenn- und vorhersehbar.

## Emergent Gameplay à la 1996

Vorhersehbare Systeme ermutigen zum Erkunden und zum kreativen Erfinden neuer Spielmechaniken.

An manchen Stellen in *Tomb Raider* (dem originalen) kann man Teile eines Levels mit einem waghalsigen Sprung übergehen und Wege durch die Welt finden, an die die Entwickler vielleicht nicht gedacht hatten. Manchmal konnte man so sogar den Rand der Welt erreichen – eine unsichtbare Wand, dahinter nur die Skybox. Das fühlte sich aber nicht an wie ein Bug, sondern als hätte man den Leveldesigner ausgetrickst.

In *Thief: Deadly Shadows* kann man selbst Schatten erzeugen – zum Beispiel durch kreatives Stapeln von Kisten – und so neue Herangehensweisen an eine Situation erfinden.

## Indies als Hüter der Vorhersehbaren Systeme?

In der modernen AAA-Szene ist es inzwischen üblich, das Gameplay die Optik verfeinern zu lassen statt umgekehrt. Vorhersehbare Systeme sucht man dort meist vergeblich.

Viele Indie-Entwickler haben sich das zu nutze gemacht, um grafisch einfache, aber spielerisch raffinierte Spiele zu entwickeln, die der *Call of Battlehonor*-Verkümmerung des Mediums trotzen als letzte Bastion der Vorhersehbaren Systeme.

## Fazit

Ein Vorhersebares System bedeutet nicht, dass jede Spielwelt aus Blöcken bestehen muss. Aber es bedeutet, dass die Reaktion der Welt auf die Aktionen des Spielers logisch nachvollziehbar sein muss. Für ein gutes *Gameplay* ist das für mich unabdingbar und ich bemerke, dass selbst sehr alte Spiele wie *Tomb Raider* mich noch fesseln können, weil sie auf Vorhersehbare Systeme gebaut sind.