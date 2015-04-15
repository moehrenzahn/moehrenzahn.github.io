---
layout: post
title: A Fantastical plugin for Alfred
categories: [English]
comments: true
lang: en
---

I wrote a new plugin. It’s a [Fantastical](http://flexibits.com/fantastical) plugin for the excellent [Spotlight replacement app Alfred](http://www.alfredapp.com).
<!--more-->

I use Fantastical every day to quickly input new appointments. Its natural language parser is the best and quickest way to enter calendar data. I had Fantastical set to `⌥ Space` because I would use it so frequently.

But I also use and love [Alfred](http://www.alfredapp.com/), the super powerful Spotlight replacement from Running with Crayons. I use it to do everything from opening files and composing mails to performing quick web searches. It replaces Spotlight’s `⌘ Space` shortcut for me. I love to write short workflows[^powerpack] to perform frequent tasks via Alfred.

[^powerpack]: With the [Alfred Power Pack](https://buy.alfredapp.com).

I wanted to unify Alfred and Fantastical and save one keyboard shortcut in the process.

Luckily, Flexibits included Applescript support into Fantastical, so creating a simple workflow was trivial:

{% highlight applescript %}
on alfred_script(q)
    tell application "Fantastical" to parse sentence q
end alfred_script
{% endhighlight %}

Given this code, Alfred would pass whatever argument I passed after my Keyword (I decided on `cal`) to Fantastical, and then I would press `enter` to create the entry[^instant]. It is not very sophisticated and [imartins created a similar plugin](http://www.alfredforum.com/topic/1272-add-to-fantastical/) way before me.

[^instant]: You can also make Fantastical add the entry in the background with the modifier `[add immediately true]`. I didn’t want that because I want to be able to check if Fantastical parses the input correctly. However, one could add a check for a certain symbol (`!`, for example) to the input and use the modifier when the symbol is present.

There was one annoyance, though. I often use Fantastical to view upcoming appointments. When you invoke Fantastical via `parse sentence` it always expands the parsing area, cropping the events list. The workaround was to enter some text and delete it again, then the parsing interface would collapse. Because this is annoying to do I decided to automate this:[^automate]

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

This code checks if the input string is empty. If it is, it turns it into a singe space character to be easily deleted later. After the parse command I simulate the key press of `key code 51`, which is the `delete` key. This collapses the parsing interface.

It has a .5 second delay, but it works for me. If I enter `cal` into Alfred, it opens the normal Fantastical interface (like if I pressed `⌥ Space` before). If I enter `cal` with anything afterwards, Fantastical uses this text to parse a new entry.

You can [download the finished plugin here](/images/Fantastical.alfredworkflow).

[^automate]: It would be much easier if Flexibits improved their Applescript implementation with an "invoke" functionality. The default Applescript function `activate` doesn’t work because Fantastical on the Mac is not a proper window.
