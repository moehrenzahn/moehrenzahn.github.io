---
layout: post
title: Boot to Bootcamp with AppleScript
lang: en
categories: [English]
slug: So I wrote an AppleScript
---

Ever since I got my first Mac I also had a Bootcamp partition with Windows 7 installed, because there are some programs that just don't run on Macs and besides, I like to play the occasional video game.

Booting from a Bootcamp partition is a little convoluted. You restart the Mac and keep the `option` key pressed during startup to select the boot partition. I found this method annoying. I often would forget to press the button or press it too late and have to watch the Mac boot to OS X all the way, only to retry the procedure.

Luckily I found [Bootchamp by Kevin Wojniak](http://kainjow.com). Bootchamp is a tiny app that sits in the OS X menu bar. With it you can select which volume to boot from and it takes care of the rest. The app is very useful and worked well. Kevin Wojniak reveals the core of Bootchamp [on his blog](http://kainjow.tumblr.com/post/37319884101/bootchamp-and-windows-7-brightness) – it's a simple terminal command:

{% highlight bash %}
sudo bless --folder PATH --setBoot --legacy --nextonly
{% endhighlight %}

But I wanted to make booting to Windows even faster than with Bootchamp. So I wrote an AppleScript that sets the boot partition to the bootcamp volume and reboots.

{% highlight applescript %}
set theVolume to "Windows"
set theScript to "sudo bless --folder /Volumes/" & theVolume & " --setBoot --legacy --nextonly && reboot"
do shell script theScript with administrator privileges
return theVolume
{% endhighlight %}

Throw this script into an [Alfred workflow](http://support.alfredapp.com/workflows/) and you have a very simple solution for booting to another partition. You have to adjust the `theVolume` variable to the name of your partition (I believe the default is "Bootcamp"). If you are feeling adventurous and want to make the script even faster you can embed your username and password into the script on line three:

{% highlight applescript %}
do shell script theScript with administrator privileges user name "USER" password "PASSWORD"
{% endhighlight %}
