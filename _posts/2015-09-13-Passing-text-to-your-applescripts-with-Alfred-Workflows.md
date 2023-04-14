---
title: 'Passing text to your applescripts with Alfred Workflows'
categories: [Technologie]
lang: en
---

The great thing about [Alfred](https://www.alfredapp.com/), the awesome Spotlight replacement for OS X, is that – unlike Spotlight – you can run applescripts and shell scripts right from the launcher. This makes it a great tool to quickly run all sorts of actions and services[^3] – just type the first few letters of the name of your script and press enter.

[^3]:And it is arguably quicker than burrowing into the Services menu.

However, even more advanced actions are possible with Alfred's Workflows feature. Workflows are basically the same as scripts, but you can use Alfred's interface to pass a String as a variable.[^2] This makes Alfred useful for much more than just executing scripts. Here I will explain several of the workflows that I use.

[^2]: In the Workflow interface, just use the "Keyword" trigger.

## Create new note

I use this one all the time. It creates a new Markdown file with the specified title (or a date stamp, if no title is given) in my "Notes" folder and opens it in my default editor ([Sublime Text](http://www.sublimetext.com/)!). For added convenience, the content of the file are the current clipboard contents (most of the time, that is what I want):

{% highlight applescript %}
on alfred_script(q)
    -- if q is empty, use the current date as filename
    if q is equal to "" then
        set mydate to (current date)
        -- From https://groups.google.com/forum/#!topic/taskpaper/mJKth3xI22E, this formats mydate to YY-MM-DD
        set y to text -4 thru -1 of ("0000" & (year of mydate))
        set m to text -2 thru -1 of ("00" & ((month of mydate) as integer))
        set d to text -2 thru -1 of ("00" & (day of mydate))
        set h to text -2 thru -1 of ("00" & (hours of mydate))
        set min to text -2 thru -1 of ("00" & (minutes of mydate))
        set q to y & "-" & m & "-" & d & "-" & h & "." & min
    end if
    -- Create the note. Use q as filename and the clipboard as content.
    do shell script "pbpaste >> ~/Dropbox/Notes/" & quoted form of q & ".md"
    -- Open the note
    do shell script "open ~/Dropbox/Notes/" & quoted form of q & ".md"
end alfred_script
{% endhighlight %}

## Compose new mail

It can be very useful to be able to compose a new email message without having to see your inbox. For this I have this self-explanatory workflow:

{% highlight applescript %}
on alfred_script(q)
    set c to the clipboard
    tell application "Mail"
        make new outgoing message with properties {visible:true, subject:q, content:c}
        activate
    end tell
end alfred_script
{% endhighlight %}

## Search for synonyms

Many Workflow ideas can also be implemented as custom Alfred searches. For example this simple synonym finder. Just create a new custom web search with the address `http://www.thesaurus.com/browse/{query}`.[^1] I find this very handy while writing.

[^1]:Or for German synonyms: `http://synonyme.woxikon.de/synonyme/{query}.php`