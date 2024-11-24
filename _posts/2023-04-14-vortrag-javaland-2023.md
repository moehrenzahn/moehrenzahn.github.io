---
title: "JavaLand-Vortrag: Level up your code"
categories: [Technologie]
---

Durch eine verrückte Verkettung von Ereignissen arbeite ich seit einiger Zeit als Java-Entwickler. Dank meines Arbeitgebers konnte ich schon letztes Jahr [die JavaLand besuchen](https://www.qfs.de/blog/article/javaland-2022.html), eine der größten Java-Entwicklerkonferenzen Europas.

Dieses Jahr bot sich mir die Gelegenheit, auf der JavaLand einen Vortrag zu halten. Also hab ich das gemacht.

![Max hält in einem gut gefüllten Saal einen Vortrag auf der Entwicklerkonferenz JavaLand]({% link images/javaland2023-vortrag.png %})

Es folgt eine etwas gestraffte Textfassung dieses Vortrags.

-----

## Level Up Your Code – OOP-Designtechniken (nicht nur) für Quereinsteiger

Hallo zusammen,

Mein Name ist Max. Ich programmiere jetzt seit 12 Jahren, etwa die Hälfte davon hauptberuflich. Angefangen habe ich mit PHP und JavaScript, dann TypeScript, Swift, Ruby, und aktuell Python und Java.

Ich möchte heute über Designtechniken der objektorientierten Programmierung sprechen. Ich denke, als Quereinsteiger habe ich einen ganz interessanten Zugang zu diesem Thema.

Wer von von euch hat an der Universität was mit Informatik studiert, meldet euch mal!

Ich selbst habe nie was Informatisches studiert, ich bin als völliger Quereinsteiger zur Softwareentwicklung gekommen.

Mir ist es am Anfang schwer gefallen, mit den Designtechniken warm zu werden. Ich habe nicht verstanden, was das mir im echten Leben da draußen helfen soll. Und ich habe auch niemanden gefunden, der mir das so erklären konnte dass ich etwas damit hätte anfangen können. Ich erinnere mich noch deutlich, wie mich damals gebremst und auch frustriert hat.

Heute möchte ich deshalb versuchen, ein paar Dinge so zu erklären, wie es mir damals geholfen hätte. Vielleicht hilft das auch dem einen oder der anderen von euch, oder ihr bekommt einen frischen Blick auf diese grundlegenden Dinge.

## Der Plan für Heute

Ich werde heute zunächst einen Begriff klären, damit wir über die gleiche Sache sprechen wenn es um "Design Patterns" geht.

Dann werde ich kurz von mir und meiner Programmier-Geschichte als Quereinsteiger erzählen.

Als Nächstes stelle ich euch ganz kurz meine Philosophie zum "Warum" der Patterns vor.

Und dann möchte ich zwei ganz unterschiedliche klassische Techniken am Beispiel vorstellen. Ich zeige euch nicht nur, wie diese Techniken ganz praktisch funktionieren, sondern erkläre sie auch aus Sicht eines Quereinsteigers. Und ich erkläre auch die entscheidenden Hintergründe und Haken, die Internet-Tutorials gerne mal auslassen.

Zum Schluss bekommt ihr von mir noch ein paar warnende Worte darüber, wie diese Designtechniken nicht angewendet werden sollten, und wie Entwicklung mit Patterns aus dem Ruder laufen kann.

## Begriffsklärung "Design Patterns"

Wir fangen mal mit einer kurzen Begriffserklärung an:

Ich habe mir ja viel Mühe gegeben, das Wort nicht in meinem Vortragstitel zu erwähnen, aber ich nenne die "Designtechniken", über die ich heute sprechen möchte "Design Patterns". Ich möchte nur keine falschen Erwartungen wecken.

Wer von euch denkt bei "Design Patterns" als erstes an die "Gang of Four"? Meldet euch mal!

Ich werde in diesem Vortrag immer wieder von "Design Patterns" reden. Ich meine damit ausdrücklich nicht nur die "heiligen" GoF-Patterns aus diesem Buch, sondern generell Designtechniken, auch neuere oder solche, die sich mehr um Architektur als um Design drehen.

## Meine Geschichte mit Design Patterns

Ich habe eigentlich etwas völlig un-technisches studiert. Das einzige Computerdingens das ich konnte war, WordPress-Seiten zu installieren und zu pflegen. Aber immerhin, damit war ich unter meinen KommilitonInnen schon ein halber Zauberer und fand allerlei Projekte, an denen ich mich austoben konnte. Dort habe ich mir einige HTML-, CSS- und PHP-Grundkenntnisse angeeignet.

Nach meinem Studium habe ich mich dann beinahe spaßeshalber hier und da als Web-Entwickler beworben. Und tatsächlich gab es eine kleine Bude, die mich eingestellt hat.

Dort habe ich dann auch einiges an gräßlich zusammenkopiertem JavaScript geschrieben, zusätzlich noch ein bisschen wildes PHP, StackOverflow sei dank.

Von Softwaredesign hatte ich überhaupt keine Ahnung, von OOP-Architektur noch viel weniger. Leider waren die meisten Tutorials dazu, die ich im Internet, fand ungefähr so:

![How to draw an owl: 1. Draw two circles, 2. Draw the rest of the damn owl.]({% link images/javaland2023-vortrag-owl.jpeg %})

Ich habe also erst mal so gut wie nichts von objektorientierter Programmierung über die absoluten Basics hinaus verstanden. Ich war einfach froh, wenn durch meinen Code das gewünschte Ergebnis im Browser ankam, egal auf welchem Weg.

Erst in einem späteren Job musste ich an einem super-durcharchitekturierten PHP-Framework arbeiten, das mich zur Verwendung von allerhand OOP-Patterns gezwungen hat. Da hatte ich keine andere Wahl als zu lernen was ein Singleton, ein Proxy, eine Factory, ein Interface, und dann auch was ein `SingletonProxyFactoryInterface` ist (und dieses Beispiel ist wirklich nur leicht übertrieben). Ich hatte zum Glück nette und erfahrenere Kollegen, die mir manche meiner Fragen geduldig beantworteten. Die pingeligen Architektur- und Designvorgaben dieses Frameworks waren zwar rückblickend manchmal wirklich übertrieben, die Vorteile haben aber die Nachteile aufgewogen – ich habe "ordentlich" Programmieren gelernt – auf die harte Tour. Das ich von diesem Framework "Design Patterns" gelernt habe, habe ich erst viel später begriffen, als mir einige dieser Konzepte in anderen Anwendungen wieder begegnet sind.

Und erst dann hat mir ein Kollege von "Design Patterns", dem GoF-Buch, erzählt, und dann ist mir erst klar geworden, dass ich aus Versehen nicht nur *ein bestimmtes* Framework gelernt hatte, sondern weil die sich dort so treu an bekannten Design Patterns orientiert hatten, habe ich allerhand Patterns gelernt, die mir seit dem in meiner Karrierere wieder und wieder begegnet sind.

## Patterns

Um (Framework-)Code zu lesen ist es wahnsinnig nützlich, wenn man Patterns kennt und *er*kennt, denn dann kann man viel Code-Verständnis abkürzen. Wenn ich eine Klasse mit "Proxy", "Visitor" oder "Composite" im Namen sehe, habe ich sofort eine Vorstellung, wie die Klasse funktioniert und verwendet wird, ohne gleich die komplette Implementierung der Klasse verstehen zu müssen.

Dank des großen Einfluss des GoF-Buchs "Design Patterns" haben viele Patterns weit verbreitete Namen, die sich oft in Klassennamen und Code-Kommentaren wiederfinden, so kann man sehr gut auf den ersten Blick erkennen, dass eine Anwendung ein Standard-Pattern verwendet.

Auch wenn Patterns ihre eigene Komplexität mit sich bringen: Nicht selten spart man eben doch Zeit und Kopfzerbrechen, wenn man ein Pattern anwendet. Dann ist es hilfreich, wenn man weiß was geht.

## Praktischer Exkurs

Ich habe für heute zwei der Design Patterns, oder "Designtechniken", mitgebracht. Die Auswahl scheint vielleicht willkürlich, ist aber pragmatisch: Es sind Techniken, die mir als Quereinsteiger Schwierigkeiten gemacht haben, weil ich sie missverstanden habe, oder sie einfach schlecht erklärt waren. Hoffentlich kriege ich das hier heute besser hin.

Los geht's!

### Composition over Inheritance (Delegate Pattern)

Die erste Designtechnik ist eine fast schon zum Allgemeinplatz gewordene Faustregel: *Composition over Inheritance*.

Ich habe im Informatikunterricht noch gelernt, dass "Inheritance", also Vererbung, das tollste Feature der Objektorientierten Programmierung überhaupt ist: Hund erbt von Tier, PKW erbt von Fahrzeug, und so weiter.

Von Composition wurde uns damals, soweit ich mich erinnern kann, gar nichts erzählt.

Wenn man sich moderne Tutorials zu "Composition over Inheritance" anschaut, bekommt man schon ein etwas nuancierteres Bild geliefert:

Da bekommt man oft beigebracht, dass Inheritance am Besten für "is-a", also "Seins-Verhältnisse" geeignet ist, und Composition für "has-a", also "Besitzverhältnisse".

So soll ich also entscheiden, was für mein Projekt oder meine Objekt-Domäne das richtige Muster ist.

Stellen wir uns also vor, wir arbeiten an einer wirklich niedlichen Anwendung, und haben den sprichwörtlichen Hund.

Da greifen wir natürlich zu Vererbung, den was soll man naheliegenderes über einen Hund sagen, als das er ein "Tier" ist.

Und dieses Muster können wir dann fortführen.

```java
abstract class Animal {
    public void eat() {...}
}
class Dog extends Animal {
    public void bark() {...} 
}
class Cat extends Animal {
    public void meow() {...} 
}
```

Auch wenn unsere Anwendung erweitert wird und niedliche Roboter dazukommen sollen, leistet unser Vererbungskonzept uns gute Dienste.

```java
abstract class Robot {
    public void charge() {...}
}
class C3P0 extends Robot {
    public void translate() {...} 
}
```

Und selbst wenn wir schlussendlich auch eine Kategorie nicht so niedlicher Roboter einführen, bleibt unsere Objektstruktur hübsch übersichtlich und nachvollziehbar.

```java
class KillerRobot extends Robot {
    public void kill() {...}
}
class T1000 extends KillerRobot { 
    public void melt() {...}
}
```

Aber das echte Leben ist oft doch komplizierter, und gerade im Detail fallen derartige Kategorien auch schnell auf die Nase.

Jetzt stellen wir uns mal vor unser Projektmanager kommt vorbei und sagt: "Einer unserer besten Kunden ist old-school Doctor-Who-Fan und verlangt nach einem Roboterhund!"

```java
class K9RobotDog extends ??? {
    public void bark() {???} 
    public void charge() {???}
}
```

Wir könnten diesen Roboterhund zwar einfach als `Animal` *oder* als `Robot` abbilden und Methoden entsprechend duplizieren, überschreiben oder ignorieren. Aber damit würden wir jeweils zahlreiche Regeln des guten Code-Geschmacks verletzen. Jedenfalls wäre unsere wunderbar nachvollziehbare Objektstruktur dahin.

*Hätte ich das nur vorher gewusst.*

Die kollektive Erfahrung aus Jahrzehnten Software-Entwicklung hat gezeigt, dass *in der Regel* Composition die nachhaltigere Wahl ist als Inheritance: Also: Objekte "sind" nicht etwas, sondern sie "haben" etwas.

Aber was sollen wir tun, unser K9 *ist* nun mal ein Roboter, und *ist* nun mal ein Hund?!

Nun, um Composition zu verwenden, muss man manchmal Dinge, die man vorher als Seins-Verhältnisse visualisiert hat, etwas kreativ umbiegen:

Wie in diesem Beispiel. Hier haben wir die Abhängigkeit mit den Seins-Kategorien "Tier" und "Roboter" durch Eigenschaften ersetzt:

```java
class K9RobotDog implements Barking, Chargeable {
    private BarkingProvider barker;
    private ChargingProvider charger;

    public K9RobotDog() {
        this.barker = new BarkingProvider();
        this.charger = new ChargingProvider();
    }
    public void bark() {
        barker.bark();
    }
    public void charge() {
        charger.charge();
    }
}
interface Barking {
    public void bark();
}
interface Chargeable {
    public void charge();
}
```

Das Wichtigste sind hier die Interfaces, die diese Eigenschaften repräsentieren: `Barking` und `Chargeable`. Ohne die würde uns der *Polymorphismus* verloren gehen, also die Fähigkeit, in einer Methode z.B. verschiedene bellende Objekte entgegenzunehmen.

Das muss natürlich für alle unsere Objekte gemacht werden, oder ich muss zumindest überall die `Barking` und `Chargeable`-Interfaces implementieren. Wenn man vermutet, dass eine Objektstruktur über ein absolutes Minimum hinaus kompliziert wird, sollte man sich von Anfang an überlegen, Composition statt Inheritance zu benutzen.

Hierfür haben wir übrigens "aus versehen" ein weiteres klassisches *Design Pattern* benutzt, nämlich das "Delegate" Pattern. Der RobotDog "delegiert" seine Funktionalität an verschiedene Provider (statt an eine oder mehrere Parent-Klassen).

Mit diesem praktischen Pattern lässt sich so ziemlich alles, was Vererbung kann, auch über Composition lösen.

### Dependency Injection (Service Container Pattern)

Als zweites möchte ich über "Dependency Injection" sprechen. Da geht es darum, dass man einer Klasse sämtliche anderen Klassen, die sie benutzt über den Konstruktor (oder auch anders) injiziert, statt Sie wie bei `this.charger = new ChargingProvider()` direkt zu instanzieren oder gar *schauder* Singletons zu nutzen, `ChargingProvider.instance()`.

Wenn man im Internet nach Tutorials für Dependency Injection sucht, findet man oft solche Beispiele:

```java
class K9RobotDog {
    BarkingProvider barker;
    ChargingProvider charger;

    public K9RobotDog(BarkingProvider barker, ChargingProvider charger) {
        barker = barker;
        charger = charger;
    }
    public void doStuff() {
        barker.bark();
        charger.charge();
    }
}

public class DiExample {
    public static void main(String[] args) {
        K9RobotDog dog = new K9RobotDog(new BarkingProvider(), new ChargingProvider(new PowerProvider()));
        dog.bark();
        dog.charge();
    }
}
```

Manchmal findet sich auch dieses gleiche Beispiel, aber alles wird mit ein paar `Injector` und `Consumer`-Klassen noch ein bisschen komplizierter gemacht, aber das Grundprinzip ist immer das gleiche.

Das hat zahlreiche Vorteile:

Abhängigkeiten können je nach Situation ausgetauscht werden

Eine Klasse kann ein Interface als Abhängigkeit angeben, was noch mehr Flexibilität bringt.

Wie oft hat man das Problem, dass man um ein Model zu testen eigentlich die ganze Anwendung hochfahren müsste, weil man eine Konfiguration, Datenbank, und Verbindungen zu externen Schnittstellen braucht?

Mittels DI kann man zum Testen der Klasse Dummy-Abhängigkeiten oder sogar Mock-Abhängigkeiten reingeben, und so die Klasse für sich Testen.
Es bringt aber auch einfach eine große Übersichtlichkeit, wenn alle Abhängigkeiten einer Klasse klar aufgelistet sind.

Ich als unbedarfter Quereinsteiger habe mich bei diesen Beispielen immer gefragt, was das soll. Ich habe zwar meine Service-Klasse hübsch aufgeräumt, das sehe ich schon ein. Aber jetzt muss sich eine Klasse darüber um die Instanzierung des Objekts kümmern. Und irgendwann muss ja jemand mal `new BarkingProvider()` machen, also was soll dieses Pattern?

Für mich hat es erst "Klick" gemacht, als ich den folgenden Trick kennengelernt habe, mit dem man die Objektinstanzierung weg-abstrahieren kann.

Mich hat dieses Pattern so fasziniert, dass ich es mal nur für mich als Prototyp nachgebaut habe. Das hat mir sehr geholfen, das Prinzip dahinter zu verstehen und ein bisschen Framework-"Magie" zu entmystifizieren.

```java
import java.lang.reflect.Constructor;
import java.util.Arrays;

public class DiExample {
    public static void main(String[] args) {
        ServiceContainer serviceContainer = new ServiceContainer();
        K9RobotDog dog = serviceContainer.createInstance(K9RobotDog.class);
        dog.doStuff();
    }
}

class ServiceContainer {
    public <T> T createInstance(Class<T> classObj) {
        Constructor<T>[] constrs = (Constructor<T>[]) classObj.getConstructors();
        for (Constructor<T> constr : constrs) {
            Class<?>[] argumentTypes = constr.getParameterTypes();
            try {
                return constr.newInstance(
                    Arrays.stream(argumentTypes)
                        .map(this::createInstance)
                        .toArray()
                );
            } catch (Exception ignored) {}
        }
        throw new RuntimeException();
    }
}
```

Dieser `ServiceContainer` lässt sich natürlich beliebig erweitern.
Und man sollte ihn wohl auch erweitern, weil so skaliert das natürlich nicht. Unser Beispiel ist eher eine Spielerei und kein robustes Fundament für eine Anwendung.

Was wir hier gebaut haben ist natürlich auch wieder ein *Design Pattern*. Es hat nur leider keinen knackigen Namen, weil es in GoF noch nicht vorkam. Es heißt mal "Container", mal "Assembler", mal "Manager, und so weiter.

15 Jahre nach erscheinen des "Design Patterns"-Buchs hat Erich Gamma mal [in einem Interview](https://www.informit.com/articles/article.aspx?p=1404056) gemeint, dass er heute Dependency Injection als Pattern mit aufnehmen würde. Dann hätten wir vielleicht auch einen einheitlichen Namen für dieses Sub-Pattern. Aber was soll's.

Wie jedes Pattern haben wir auch hier nicht nur Vorteile, sondern auch ein paar Nachteile und Fallstricke:

- Performance kann zum Problem werden
- Debugging nervt
- IDE nicht mehr so hilfreich
- Kann unübersichtlich werden
- Macht erst richtig Spaß, wenn eine ganze Anwendung oder Modul darauf aufbaut

Ihr sollt oder müsst also beim besten Willen nicht überall Service Container verwenden. Ich wollte euch diesen super-simplen Service Container vorführen, weil er mir eine "Aha"-Erlebnis gebracht hat und mir gezeigt hat, wie mächtig Dependency Injection sein kann, wenn man ein bisschen kreativ rangeht.

Man muss auch das Rad aber trotzdem nicht neu erfinden! Es gibt natürlich Frameworks, die sich Dependency Injection auf die Fahne geschrieben haben und sowas wie unseren Service Container mitbringen, nur unendlich raffinierter, sicherer, und vor allem performanter: [Spring](https://spring.io) ist ziemlich bekannt und hat eine DI-Framework-Komponente, es gibt noch die neueren Projekte [Guice](https://github.com/google/guice) und [Dagger](https://dagger.dev). Aber das sei nur am Rande erwähnt, wenn euch das interessiert sind das eure Stichworte für weitere Recherche.


## Warnungen – Wie Patterns nicht benutzt werden sollten

Jetzt haben wir einige Patterns in Aktion gesehen, und ich habe viele nette Dinge über Patterns gesagt und euch ermutigt, sie zu erkennen und anzuwenden. Aber zum Schluss möchte ich doch die Begeisterung wieder etwas dämpfen.

Design Patterns sind ein Werkzeug. Damit kann man fantastische Sachen machen. Aber kein Werkzeug ist für alle Fälle geeignet.

Eine gute Software-Architektur ist immer die für das Projekt passende Architektur, nicht die mit den meisten Patterns, der größten Flexibilität oder gar dem cleversten Code.

Denn wie [Brian Kernighan gesagt hat](https://www.goodreads.com/quotes/273375-everyone-knows-that-debugging-is-twice-as-hard-as-writing): 

> Everyone knows that debugging is twice as hard as writing a program in the first place. So if you’re as clever as you can be when you write it, how will you ever debug it?

Bevor ihr ein Pattern einsetzt und euren Code damit mehrschichtiger und komplizierter macht, stellt euch ein paar Fragen:

- Arbeite ich an einem Langfristig angelegten Produkt oder Framework oder baue ich eine Landing-page für ein Startup?
- Verbessere ich damit wirklich mein Design oder spare ich nur Zeilen? Einfacher langer Code ist oft besser als "cleverer" kurzer Code, und trotz DRY ist nicht jede Wiederholung immer schlecht!

(Diese Fragen sollte man sich auch stellen, bevor man einer Kolleg:in in einem Codereview ein "fehlendes" Pattern vorwirft!)


Und wenn ihr dann immer noch ein hergebrachtes Pattern implementiert, achtet darauf, dass euer Code in etwa den (teils ungeschriebenen) Pattern-Gesetzen folgt, damit andere Entwickler sie z.B. an Klassennamen leicht wieder erkennen können.

Und zu guter Letzt: Man darf auch neue Sachen erfinden, hört auf euer Bauchgefühl.

So, genug geredet! Jetzt geht da raus und baut coole Sachen!

![Max hält in einem gut gefüllten Saal einen Vortrag auf der Entwicklerkonferenz JavaLand]({% link images/javaland2023-vortrag.jpeg %})