---
layout: post
title: 'How to create a custom LaTeX build system for Sublime Text'
categories: [Technologie, English, bestof]
lang: en
---

My text editor of choice on the Mac is [Sublime Text](http://www.sublimetext.com/). I use it for taking notes in class, writing in Markdown (I am writing this post in Sublime Text), programming and – really important for my student work – making LaTeX documents. Once you get over the hump of having to manually edit your preferences in various JSON files, Sublime is a incredibly fast and versatile editor. It can be freely improved with custom themes, plugins or build systems.

For example, I made my own build system for compiling LaTeX documents.[^1] A build system is basically a script that lets you do something with your document straight from Sublime. Usually it is used for compiling source code, but you can also use it to send a Markdown file to [Marked](http://marked2app.com) or to turn a `.tex` file into a `.pdf`. The Sublime Text [documentation](http://www.sublimetext.com/docs/build) for custom build systems is quite superficial, so here I will explain how to make a custom build system for LaTeX.

[^1]: There technically is a LaTeX build system built into Sublime Text, but I never got it to work reliably with my LaTeX installation. 

This is the entire build system:

{% highlight json %}
{
    "cmd": ["rm -rf `biber --cache` && latexmk -pdf -xelatex -silent -output-directory=output -interaction=nonstopmode $file_name | grep -i -E \"warn|!\" && open output/$file_base_name.pdf"],
    "shell": true,
    "path": "$PATH:/usr/texbin:/usr/local/bin:/opt/local/bin:/usr/local/:/usr/local/texlive/2014/bin/x86_64-darwin/",
    "file_regex": "^(…*?):([0-9]*):?([0-9]*)",
    "selector": "text.tex.latex"
}
{% endhighlight %}

If you put this into a file with a `.sublime-build` extension and put it into your User Packages folder (in the menu bar, go to "Sublime Text", "Preferences" and "Browse Packages" and the folder will open) and Sublime will automatically detect it and show it as an entry under "Tools": "Build System".

The `"cmd"` is the actual script that is run at build time. For our LaTeX build system, it consists of three parts (connected by `&&` which means they will be executed one after the other):

1. ``rm -rf `biber --cache``` is a workaround for a [known biber bug](http://tex.stackexchange.com/questions/18859/biber-gives-i-found-no-citation-commands-is-there-a-solution) concerning corrupted caches. If you don't use bibTeX or biber in your LaTeX documents you can leave this part out.
2. `latexmk -pdf -xelatex -silent -output-directory=output -interaction=nonstopmode $file_name`[^2] is the command that runs the LaTeX compiler. the `-xelatex` flag is optional, without XeLaTeX it usually runs faster but I frequently need the multi-language support of XeLaTeX.`-output-directory=output` tells `mklatex` to put all created files into a sub-folder "output", so that your project directory does not get messed up by all the temp files. Your finished PDF will also be in this folder.
3. `open output/$file_base_name.pdf` simply opens the finished PDF from the "output" folder with your default PDF reader.

[^2]: Things with a `$` at the beginning are shell variables for accessing stuff like the current file name and path. A list of available variables can be found in the [Sublime Text documentation](http://www.sublimetext.com/docs/build).

The `"shell"` variable tells Sublime Text to run the build script in a virtual terminal. This is usually a good idea because then the build system can access your environmental variables and other goodies. Setting `"shell": true` makes sure that, if your `"cmd"` works in the Terminal, it will work in your build system as well.

`"path"` let's you set your $PATH variable. This is necessary if you need to run external programs in your script (as we do with `latexmk`). If you get a "command not found" error, then you need to put the paths to these tools here (separated by "`:`").

The `latexmk` command is quite verbose. `"file_regex"` lets you set a [regular expression](https://en.wikipedia.org/wiki/Regular_expression) to filter the command output. This is useful for only showing errors and warnings that we actually need to see at build time.

The `"selector"`: This was the most tricky but also the most useful part to figure out. The selector is used if you set "Build System" to "Automatic". We want our build system to be automatically used for LaTeX documents. The selector name of a document can be found by opening a document of that type and pressing `shift-ctrl-P`. This displays the current selector in the Sublime Text status bar at the bottom. You should only use the first part before the space as the selector.

Another useful command is `"working_dir": "$file_path"`. This lets you set a custom working directory for your `"cmd"`, if there is a problem with the default one (which is the path the file being built is at). Be aware that in JSON files, every element-value pair has to end with a "`,`" *except for the last line*. If you do this wrong your build system will not work properly.

----

There you go, a custom build system for LaTeX documents. Now, if you have a `.tex` file open in Sublime you can press `cmd-B` and watch your build system do it's work in the panel that pops up at the bottom of your window (if you don't want to see this panel every time you can add `"show_panel_on_build": false` to your `.sublime-settings` file).

As a bonus, here is a simple build system for displaying Markdown files in Marked 2.app:

{% highlight json %}
{
    "shell": true,
    "cmd": ["open -a 'Marked 2.app' '$file_name'"],
    "path": "$PATH:/usr/texbin:/usr/local/bin:/opt/local/bin",
    "selector": "text.html.markdown"
}
{% endhighlight %}