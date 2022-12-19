---
title: 'Free blog hosting for nerds with Octopress'
lang: en
categories: [English]
slug: My current setup with Octopress
---

The point of this post is to briefly explain the technical solution I found for this blog and how I found it.

At first I had [moehrenzahn.de](http://moehrenzahn.de) hosted on [Wordpress.com](http://wordpress.com). That was free, easy and quickly set up.

## Why Wordpress isn’t enough for me

The premium features of Wordpress.com are pretty expensive. I most of all wanted to use my own domain ([moehrenzahn.de](http://moehrenzahn.de)) and customize the design to my liking. The [custom domain support](http://en.support.wordpress.com/domains/) may be relatively affordable, but [$30 a year for a custom design](http://en.support.wordpress.com/custom-design/) was more than I was willing to spend, especially for a blog that is read by about two people.

So I contemplated hosting my own [Wordpress.org](http://wordpress.org) installation. Because I didn’t want to spend any money on this, I looked around for free web hosting offers. Just one thing to say about that: forget it. Everything I tried was absolutely atrocious.

In my time with Wordpress something else became important to me: elegance. I don’t like the Wordpress CMS at all. Especially since I would like to save all my posts to my hard disk the way I wrote them.[^2] With Wordpress, if I would make a small change on a post, I would have to go into my local files and make that same change again manually. In addition I don’t want to have to log in anywhere – my posts are supposed to just appear online.

## Searching for a stabile platform

In fact there are solutions to my seemingly utopic requirements: For example [blogging platforms with Dropbox sync](http://www.fearofconfusion.com/2012/01/three-markdown-dropbox-bloggging.html). For quite a while I had my blog on [Scriptogr.am](http://scriptogr.am).[^3] Even though Scriptogr.am also has a web interface, you really only need one button there: Sync. Then the service took all the markdown files from a certain folder in my Dropbox and turned them into blog posts. When I changed anything in my files, it would automatically propagate online (after a click on "Sync"). 

The whole thing was free, I was able to use my own domain and could even easily play around with the HTML and CSS.  Scriptogr.am was and is really great and I would without hesitation suggest it to anyone who wants to put text online easily and elegantly.[^4]

So why didn’t I stay there? One thing was worry about the future of the platform. Neil Body, via [whose blog](http://www.fearofconfusion.com/2012/01/three-markdown-dropbox-bloggging.html) I became aware of Scriptogr.am in the first place, writes:

> I am no longer looking at Dropbox Markdown blogging systems. Most are just side projects that get deleted, threatened deletion then aren't or become Posterous-like slow once I navigate off the first page of blog posts. I have lost my willingness to try them.

Simply put: Those platforms are mostly hobbies without a financially viable business plan and a short life span.

Secondly I wanted my own site not to be dependant somebody elses platform. Or as [Marco Arment so succinctly put it](http://www.marco.org/2011/07/11/own-your-identity):

> If you care about your online presence, you must own it.

If Scriptogr.am [goes down](http://www.marco.org/2011/04/05/let-us-pay-for-this-service-so-it-wont-go-down) my blog would be gone, too. I would still have my documents, but I wouldn’t have a platform for them anymore.

## My current setup with Octopress

As you can see down in the footer of this blog I finally found [Octopress](http://octopress.org), a ["blogging framework for hackers."](https://github.com/imathis/octopress/tree/master/plugins). Octopress is based on [Jekyll](http://jekyllrb.com), which generates static pages from markdown files. Those pages are saved as a [Git repository](https://github.com) and mirrored to a server. That means it needs neither a web interface nor a database and the whole page is saved on my local hard drive. Updates are pushed via the Terminal. Don’t worry, I, too, had no idea what all this meant at first, but the [Octopress documentation](http://octopress.org/docs/) is very helpful and explains [every step to your own Octopress blog](http://octopress.org/docs/setup/).

A page created in this way is relatively easy to host freely on [GitHub](http://octopress.org/docs/deploying/github) or [Heroku](http://octopress.org/docs/deploying/heroku). My free Heroku account doesn’t do much but is more than enough for a lightweight blog.[^5]

The brillant thing is that I could mirror my pages to another server at any moment, in case Heroku doesn’t want me anymore at some point. I am fully independent from my host (and on top of that 100 % open source)!

I may have spent more time setting up and adjusting this blog than actually writing, but the whole thing was only more fun because of that. If you can’t understand this sentiment, then maybe Wordpress[^6] is the better choice for you after all …

[^2]: With John Grubers excellent [Markdown](http://daringfireball.net/projects/markdown/), of course.

[^3]: Right now you can even still visit [my old Scriptogr.am blog](http://scriptogr.am/moehrenzahn).

[^4]: Too many hobbyist bloggers make their lives unneccessary difficult with overblown Wordpress installations. Think about it, if publishing to the web can be so simple: How many nice people have interesting things to say but don’t because the barrier of entry to blogging is too high?

[^5]: This blog right now takes up about 1 MB of disk space on the server. Most of the pictures I link to [via Dropbox](http://db.tt/4Qy3oFEa);  traffic I don’t get anyways.

[^6]: By the way, with Heroko you could also host a Wordpress installation. [James Olney shows how](http://blog.webjames.co.uk/hosting-a-wordpress-blog-on-heroku-with-the-svbtle-theme-for-free/201/).