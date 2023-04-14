---
title: Parse Bible and Quran versions with ScriptureKit for PHP
categories: [Theologie, Technologie, Devotionalium]
lang: en
link: https://github.com/moehrenzahn/scripturekit-php
---

Today I am happy to announce I am open-sourcing a key component of my [Devotionalium](https://devotionalium.com) project:

**ScriptureKit** is a PHP framework for working with Tanakh, Bible, and Quran XML files from the [Zefania Project](https://zefania-sharp.sourceforge.io/) and [qurandatabase.org](http://qurandatabase.org/).

There are lots of free and open source Tanakh, Bible and Quran editions available on the Internet. However, working with and parsing the source files can be difficult and time-consuming. The goal of *ScriptureKit* is to make using open source Tanakh, Bible and Quran editions as easy as possible on the web.

You can use *ScriptureKit* to:

- load the text of a chapter
- load the text of a verse
- load the text of a set of verses
- render a formatted reference string for a chapter, verse set, or verse
- internationalise book and chapter names used
- load version details for a scripture file (title, author, etc).

When loading verse text, there are the following options available:

- render as HTML or plain text
- highlight individual verses
- automatically add paragraph-breaks at the end of sentences
- include annotations (ZefaniaXML only)

*ScriptureKit* is compatible with the following scripture files:

- ZefaniaXML files (`.xml`)
- `XML Format (One File-Whole Quran)` exported from qurandatabase.org. (`.xml`)

You can find the [complete source code and detailed usage examples for *ScriptureKit* on GitHub](https://github.com/moehrenzahn/scripturekit-php).
