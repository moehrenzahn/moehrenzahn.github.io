---
title: 'Anatomy of a Jailbreak Trojan'
lang: en
link: http://ryanhileman.info/posts/webgl
---

Highly disconcerting: [Ryan Hileman](https://twitter.com/lunixbochs/) has discovered a jailbreak tweak that is a part time trojan.<!--more--> The tool was continuously downloading invisible advertisments in the background, earning the developer ad revenue every time the device was used in any way. [In his post, Hileman explains in detail how it was done](http://ryanhileman.info/posts/webgl)[^1]:

>Finishing up the HTML, there are several more affiliate iframes and JavaScript to refresh the page every five minutes. Regular background refreshes could keep your CPU awake, be taxing on your battery, plus slowly and silently wear down at your data plan.

Apple *does* have its reasons in trying to make jailbreaking as difficult as possible. The "tweak" has already been taken offline, but there are certainly many more tools opening similar backdoors on the countless shady Cydia repositories …

[^1]: I laughed when I read [on Twitter](https://twitter.com/lunixbochs/status/382737948363325440) that he wrote his own custom blogging engine just to publish this post.