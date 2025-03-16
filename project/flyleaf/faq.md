---
title: Frequently Asked Questions about Flyleaf
lang: en
layout: page
image: /images/projects/flyleaf-mac-icon.png
redirect_from:
- /flyleaf/faq
---

Here, I have collected some frequently asked questions about my read-later app [Flyleaf](/project/flyleaf/). If you believe your question should be answered here but isn't, get in touch at [flyleaf@moehrenzahn.de](mailto:flyleaf@moehrenzahn.de)!

{% include flyleaf-download.html %}

----

## How can I send links to Flyleaf from other apps?

Flyleaf integrates with the system Share Sheet to allow sending links from all kinds of apps directly to Flyleaf. The Share Sheet is often behind an icon that looks like an arrow pointing up coming out of a square:

<img loading="lazy" height="40" style="filter:invert(1)" alt="" src="/images/projects/sf-share.svg">

<img loading="lazy" height="500" alt="" src="/images/projects/flyleaf-share-ios.png">

On macOS, sometimes Flyleaf may not be enabled for the Share Sheet by default. To fix this, open a Share Sheet, click on "Manage Extensions…" at the bottom of the list and then make sure Flyleaf is checked in the list that comes up.

On iOS, if Flyleaf does not show up in the Share Sheet, you may need to scroll all the way to the right or down and select "More..." to find it.

To find the Share Sheet button in the Instagram app, you first have to tap the "paper plane" button on a post.

In the YouTube app, tap "Share", scroll all the way to the right and tap "More…" to open the Share Sheet.

----

## My browser does not have a button for the Share Sheet, how can I add links to Flyleaf?

If your browser does not offer the Share Sheet, you can use the bookmarklet instead. Just drag and drop the following link to your browser bookmarks bar:

[Send to Flyleaf](javascript:(function(){window.open('flyleaf://article?url='+encodeURIComponent(window.location));})();)

You can also find the bookmarklet link in the Flyleaf settings under "Sharing".

----

## How can I add a link behind a paywall to Flyleaf?

If you first load up a page in some kind of browser and use the Share Sheet from there, Flyleaf will save the contents of the webpage as they are presented in the browser, even if they are not publicly available.

If you are a Flyleaf subscriber, you can also use the built-in archive.is integration to access gated content.

----

## What can I do if Flyleaf does not correctly display the contents of a webpage I added?

You can try the "Re-download" action accessible by swiping up while reading an article. This will attempt to download the webpage in a different way which may work better for certain websites.

If the website is still not displayed right in Flyleaf, please send me the link to [flyleaf@moehrenzahn.de](mailto:flyleaf@moehrenzahn.de) so I can improve the parser in a future update!

----

## Can I add a PDF, an email or other documents to Flyleaf?

Flyleaf currently only supports adding URLs, i.e. links to documents. Unfortunately, you cannot add a PDF directly to Flyleaf, only the *link* to a PDF.

When reading an email newsletter, there is often an "Open in Browser" link somewhere. Once you opened the email in a browser, you can use the Share Sheet to add the email to Flyleaf.

----

## Can I use vertical scrolling instead of pagination?

Yes. In the article view, just press the "Aa" button in the bottom toolbar and uncheck "Book-style pagination".

But keep in mind that the book-style pagination is basically the whole point of Flyleaf – if you're not really interested in that then there may be other read-later apps that are better suited for you.

----

## How can I hide the article toolbar and read articles in full screen?

From the article view, swipe up and find a little icon of two arrows pointing away from each other. Tap it to toggle full screen mode.

<img loading="lazy" alt="" height="20" src="/images/projects/sf-fullscreen.svg" style="filter:invert(1)">

The full screen mode is currently only available if you use the pagination feature.

----

## Can you add highlighting and notes?

Highlighting and notes are on the roadmap, but don't hold your breath. My focus right now is on making the reading experience as flawless and polished as possible.

If you are very interested in organizing and referencing articles, you may be served better by other read-later apps.

----

## Can you add support for older devices?

Unfortunately, support for operating systems older than iOS 17 and macOS 14 will almost certainly never be added to Flyleaf.

----

## Can you add feature XYZ?

Maybe. :) Send me an email to [flyleaf@moehrenzahn.de](mailto:flyleaf@moehrenzahn.de) and I'll consider it.

----

## How can I completely delete all my stored articles from iCloud and my devices and start over?

Just follow the following steps:

1. Delete Flyleaf from all your devices.
2. Go to Settings App ⇾ iCloud ⇾ Manage Storage, select "Flyleaf" and choose "Delete from iCloud".
3. Reinstall Flyleaf on all your devices.

----

## Flyleaf is so awesome! How can I support you?

Thanks for asking! As an indie developer, your support means a lot to me. There are several ways you can help me out:

- Head over to both the iOS App Store and the Mac App Store and [give a rating and write a positive review](https://apps.apple.com/app/flyleaf-read-later/id6475200381?action=write-review). Write a new one after each update for maximum effect.
- If you have a blog, a social media following, or lots of friends, recommend Flyleaf to them.
- If you encounter a bug in the App, let me know about it at [flyleaf@moehrenzahn.de](mailto:flyleaf@moehrenzahn.de). If you would like to join the TestFlight beta to help improve future updates, let me know as well.
- Consider becoming a subscriber to the monthly or yearly Flyleaf in-app subscription.

{% include flyleaf-download.html %}