---
title: Why I built my own read-later app
image: /images/projects/flyleaf-mac-icon.png
lang: en
---

The first iOS device I ever owned was an iPod touch, 2. Generation. I absolutely loved that thing.

The first ever app I remember buying with it was "Instapaper" by indie developer [Marco Arment](https://marco.org/about). Instapaper was an app for saving interesting web pages to read later when offline. Even back then, I loved to read articles and blog posts by interesting people. And since the iPod touch did not have any cell connection, offline access was vital.

<figure>
  <img src="/images/instapaper-4-macstories.jpeg" alt="Instapaper 4.0 screenshot from 2011">
  <figcaption>Instapaper 4.0 screenshot from 2011 from <a href="https://www.macstories.net/news/instapaper-4-0-available-completely-redesigned-ipad-ui-new-features-search-subscription/">this MacStories review</a>.</figcaption>
</figure>


<!-- Instapaper also had a very nice minimalistic reading view, which was also important since most websites were not very readable on a tiny 3.5 inch screen. -->

<!--  Today, using such an app is less about offline access, since mobile internet today is ubiquitous and fast. Today they more about avoiding ads and popups and generally user-hostile web design. -->

The one big issue I had with Instapaper was that it had no macOS version. Instapaper was only available on iPhone, iPad and as a website. The website was okay, but it lacked the feature I liked the most about Instapaper: In the iOS app, you could choose to read your articles not as a vertically scrolling page of text, but instead as **a horizontally aligned set of pages, like an ebook**.

A couple of years ago, finally, [Instapaper for macOS](https://blog.instapaper.com/post/634511169876557824) was announced. But it turned out to be just a relatively shoddy port lacking many features, especially the book-like pagination.

## Scratching the itch myself

I was and still am convinced that pagination is superior to vertical scrolling for reading longer text on a screen. It must have been around that time that I decided that I would have to scratch that particular itch myself.

I had been playing around with column based web layouts for some time. I build [an experimental column layout for "Die Eule"](https://eulemagazin.de/happy-birthday-digitaldenkschrift/), an online magazine I co-founded in 2017.

Later, I experimented with building a JavaScript plugin that turns any website into a horizontally paginated view. That's where I began to solve some of the technical problems of splitting text into multiple pages. How to detect that a page is "full"? What to do about changing viewport sizes? How to avoid overflows from unexpected or dynamic page contents?

In early 2023, I temporarily put this plugin into action here on my blog. But I was still not satisfied. After all, I didn't want to read my own blog, I wanted to read other people's stuff.

So, in June 2023, motivated by the recent WWDC, I started writing the first lines of SwiftUI under the code name "PageReader" which over the following months turned into a fully featured app called [Flyleaf](/project/flyleaf/). I adapted the JavaScript logic developed for my blog to power the article pagination in the app.

<video width="518" height="360" class="ipad" style="margin: 2rem auto;" controls autoplay loop>
    <source src="/images/projects/flyleaf-ipad-pagination-small.mp4" type="video/mp4">
    Video not available
</video>

**Today, I am incredibly happy to announce that Flyleaf is now available as a 1.0 that you can download right now:**

{% include flyleaf-download.html %}

Flyleaf has – in my opinion – the **best horizontal page scrolling** of any read-later app that I know of. And it has all the other bells and whistles you would expect from an app in 2024: **macOS and iOS** versions that **sync via iCloud**, beautiful and **customizable design and typography**, tools for sorting, searching and **organizing your articles**, and much more.

I'm not yet sure if anyone else will care about this as much as I do. But Flyleaf has been my favorite read-later app since the first prototype.

If you, too, like this idea and would like to support the future development of Flyleaf, here is what you can do:

1. [Download Flyleaf from the App Store](https://apps.apple.com/app/flyleaf-read-later/id6475200381)
2. [Post a (nice) review on the store page](https://apps.apple.com/app/flyleaf-read-later/id6475200381?action=write-review)
3. Tell your friends about Flyleaf
4. Consider becoming a Flyleaf subscriber

Thanks for reading, and keep on reading!