---
title:  'A Mail.app plugin for Sublime Text 3'
lang: en
---

I wrote [my first plugin for Sublime Text](https://github.com/moehrenzahn/Mail). It is quite simple. It takes the text of the current document and turns it into a new Mail.app message. The first line of text is used as the subject line.

Originally I wanted it to use converted markdown text, but Mail’s AppleScript interface has no proper API for HTML messages.[^1] 

To implement AppleScript in my plugin I used [Dr. Drang’s Code for combining Python and AppleScript](http://www.leancrew.com/all-this/2013/03/combining-python-and-applescript/):

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

But that code doesn’t work with Sublime Text 3. Sublime Text 3 uses Python version 3.3. Since Python 3, quite a lot has changed, especially in the [treatment of Unicode text](http://docs.python.org/3.0/whatsnew/3.0.html#text-vs-data-instead-of-unicode-vs-8-bit).

After some searching I found the small change I needed to make the code work:

The line

{% highlight python %}
return osa.communicate(ascript)[0]
{% endhighlight %}

needs to be changed to

{% highlight python %}
return osa.communicate(ascript.encode())[0]
{% endhighlight %}

That is because Python 3 internally transforms any text into binary `data`. If you want to output Unicode again, you first have to reencode it with `.encode()`.

Maybe this will be helpful to somebody else.

[^1]: Well, there is an [undocumented API](http://macscripter.net/viewtopic.php?id=36778) for that but it doesn’t seem to work properly.