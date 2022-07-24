---
layout: post
title: 'Ein Mail.app-Plugin für Sublime Text 3'
categories: [Technologie]
---

Ich habe [mein erstes Plugin für Sublime Text](https://github.com/moehrenzahn/Mail) geschrieben. Es ist recht einfach und unkompliziert. Es nimmt den Text des aktiven Dokuments und verwandelt ihn in eine neue Mail.app-Nachricht. Die erste Textzeile wird als Betreff verwendet.

Ursprünglich wollte ich, dass das Plugin die Mail aus konvertiertem Markdown erstellt, aber leider hat Mails AppleScript-Interface keine API für HTML-Nachrichten[^1]

Um im Plugin AppleScript einzubinden habe ich [Dr. Drangs Code zum Kombinieren von Python und AppleScript](http://www.leancrew.com/all-this/2013/03/combining-python-and-applescript/) verwendet:


{% highlight python %}
#!/usr/bin/python

import subprocess

def asrun(ascript):
  "Run the given AppleScript and return the standard output and error."
  osa = subprocess.Popen(['osascript', '-'],
                         stdin=subprocess.PIPE,
                         stdout=subprocess.PIPE)
  return osa.communicate(ascript)[0]

def asquote(astr):
  "Return the AppleScript equivalent of the given string."
  astr = astr.replace('"', '" & quote & "')
  return '"{}"'.format(astr)
{% endhighlight %}

Der Code hat so unter Sublime Text 3 aber nicht funktioniert. Sublime Text 3 verwendet Python Version 3.3. Seit Python 3 hat sich einiges geändert, besonders im [Umgang mit Unicode-Text](http://docs.python.org/3.0/whatsnew/3.0.html#text-vs-data-instead-of-unicode-vs-8-bit). 

Nach etwas suchen kam ich auf die kleine änderung, die ich vornehmen musste, damit der Code funktioniert:

Die Zeile

{% highlight python %}
return osa.communicate(ascript)[0]
{% endhighlight %}

muss geändert werden in 

{% highlight python %}
return osa.communicate(ascript.encode())[0]
{% endhighlight %}

Das liegt daran, dass Python 3 intern Text zu `data` umwandelt. Wenn man wieder Unicode ausgeben will, muss man ihn erst mit `.encode()` wieder umwandeln.

Vielleicht hilft das ja mal irgendjemandem weiter. 

[^1]: Nun, es gibt eine [undokumentierte API](http://macscripter.net/viewtopic.php?id=36778) dafür, aber die scheint nicht richtig zu funktionieren.