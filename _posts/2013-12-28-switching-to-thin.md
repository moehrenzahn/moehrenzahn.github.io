---
title: Switching from WEBrick to Thin
categories: [English]
lang: en
comments: true
slug: Changing the Octopress preview engine
---

One great thing about [Octopress](http://octopress.org) is that you can always preview your site in your browser locally with the `rake preview` command. This is a great feature for fiddling with the design without making every change public.[^fiddle]

[^fiddle]: Something that I do much more than I would like to.

But ever since I updated to OS X 10.9 Mavericks, accessing `localhost:4000` was not working in Safari. It would only throw a blank page and 404s for the `.css` and `.html` files.

The odd thing was, the local server *was* working in Chrome and Firefox. Only Safari failed to display anything. Googling the problem, I found [this Issue](https://github.com/imathis/octopress/issues/1395) on the [Octopress GitHub page](https://github.com/imathis/octopress/). The issue seemed to be a bug in the default WEBrick webserver that creates the local `localhost:4000` adress. The suggested fix was to use another web server

I decided to try [Thin](http://code.macournoyer.com/thin/) as a WEBrick alternative. Installing Thin is really simple. Just add `"thin"` to the end of your gem file (the file literally named `gem` in your Octopress installation directory). You can do this elegantly via Terminal with this command:

{% highlight bash %}
cd /your/octopress/root/directory/
echo gem \"thin\" >> Gemfile
{% endhighlight %}

After that you have to tell the ruby bundler to push the newly added gem to the project. Trigger a refresh with:

{% highlight bash %}
bundle install
{% endhighlight %}

That did the trick for me. Previewing Octopress with `rake preview` now works in Safari. With Thin I also got rid of this annoying (but harmless) error message that was constantly cropping up in Terminal while using WEBrick:

{% highlight bash %}
WARN Could not determine content-length of response body.
Set content-length of the response or set Response#chunked = true
{% endhighlight %}

By the way: I made the process of previewing my blog very fast with an Automator workflow that runs `rake preview` and then launches Safari to the server adress with the following Applescript:

{% highlight applescript %}
tell application "Terminal"
        activate
        do script with command "cd your/octopress/directory/ && rake generate && rake preview"
end tell
tell application "Safari" to open location "localhost:4000"
{% endhighlight %}

Easy.