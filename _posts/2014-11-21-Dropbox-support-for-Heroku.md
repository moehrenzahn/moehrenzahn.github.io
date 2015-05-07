---
layout: post
title: 'Dropbox Sync for Heroku'
categories: [English]
lang: en
---

[As I wrote before](http://moehrenzahn.de/Bloghosting-with-Heroku/) this blog is hosted on (the free tier of) [Heroku](https://heroku.com/). A couple of days ago the hosting provider announced a great new feature for deploying apps and websites to Heroku: [Dropbox Sync](https://blog.heroku.com/archives/2014/11/19/announcing_beta_dropbox_sync).

This is a huge feature. It means that with Heroku and a static site you can build your own (free!) Dropbox powered blog. You don't need to deal with git deployment at all; you just put your files into a Dropbox directory, hit the "Deploy" button in your Heroku dashboard and there is no third step.

I haven't tried the new feature yet (which Heroku calls "Beta"), but if it works as advertised this is huge for making blogging on Heroku more accessible.

The only problem is that with Jekyll[^octopress] you'll still have to build your site locally first – but Heroku has the theoretical ability to build stuff from source server-side. [It looks like this might be possible with Jekyll](https://coderwall.com/p/st0hcq/automatically-build-and-deploy-jekyll-sites-to-heroku-from-github), but I haven't looked into that too deeply.

[^octopress]: For less technical users [Octopress](http://octopress.org/) is a great starting point into the world of Jekyll.