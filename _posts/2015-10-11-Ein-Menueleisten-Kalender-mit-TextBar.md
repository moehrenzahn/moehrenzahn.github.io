---
title: 'Ein Menüleisten-Kalender mit TextBar'
categories: [Technologie]
---

In den letzten Wochen habe ich das kleine Programm TextBar für mich entdeckt. [TextBar](http://www.richsomerfield.com/apps) (von [Rich Somerfield](http://www.richsomerfield.com/)) läuft in der Mac-Menüleiste und zeigt beliebigen Text an. Aber nicht nur das: es lassen sich auch peridosche Skripte ausführen, deren Ergebnis dann in der Menüleiste angezeigt wird. TextBar ist quasi eine Menüleisten-Applikation zum selbst programmieren. Zum Beispiel kann ein einfach Datum und Uhrzeit in der Menüleiste angezeigt werden durch folgenden Code:

{% highlight bash %}
date '+%a, %-d. %B %-H:%M'
{% endhighlight %}

Wer einfache Bash-Skripte schreiben kann, kann auch für TextBar programmieren.

Ich habe die letzten Wochen daran gebastelt, einen einfachen Fantastical-Ersatz mit TextBar zu programmieren. So sieht bisher mein Ergebnis aus:

<figure><img src='/images/menucalendar.png' /><figcaption></figcaption></figure>

Im folgenden veröffentliche den Quellcode für das Kalenderprogramm (mit reichlich erklärenden Kommentaren, [GitHub Gist](https://gist.github.com/moehrenzahn/6e29d3080edb6466db7b)). Einzige Systemvorraussetzung ist das kostenlose Kommandozeilenprogramm "icalBuddy", welches [hier](http://hasseg.org/icalBuddy/) heruntergeladen werden kann. Mein Code kann gern weiterverwendet und verbessert werden, nur sollte irgendwo dabei mein Name und ein Link zu diesem Post stehen.

{% highlight bash %}

export LC_ALL=de_DE.UTF-8; # Set the language of the virtual shell to german. This makes the following "date" command output german day and month names. If you want the date in english, you dont need this line
date '+%a, %-d. %B %-H:%M'; # This outputs the current date, according to the unix "date" command. The Output becomes the first line in the finished menu bar app – the title that is always displayed (this makes the default menu bar clock redundant. Remove it by CMD-dragging). The refresh rate of the TextBar script should be at least be set to something like every 10 seconds so the time is always up to date.

DAY=$(date '+%e') # We save the current day as a variable to highlight the corresponding day in the month overview.

# The following piece of code is a bit of a monstrosity. At its heart lies the unix "cal" command which outputs a simple month calendar.
# This calendar gets piped (with the | character) to a huge awk command which I got from some forum. All it does is rearrange the calendar to start the week on mondays.
# This rearranged calendar is again piped to a piece of code which wraps every line in html tags. These are necessary to preserve white-space and display the calendar in a monospaced font. Also in this piece of code is the command to highlight the $DAY variable if it occurs in the calendar (which it always does, of course).
# (If you want to use the calendar with the default bright menu bar you obviously should set the css color to black instead of white.)

cal | awk '{ print " "$0; getline; print " Mo Di Mi Do Fr Sa So"; \
getline; if (substr($0,1,2) == " 1") print "                    1 "; \
do { prevline=$0; if (getline == 0) exit; print " " \
substr(prevline,4,17) " " substr($0,1,2) " "; } while (1) }' | while IFS= read -r line ; do
    echo "<html><span style='color:white;font-family:DejaVu Sans Mono,Menlo;white-space: pre;font-size:10.5pt;'>${line/ $DAY / <strong style='color:red'>$DAY</strong> }</span></html>";
done;

echo "<html><span style='font-size:5pt'>&nbsp;</span></html>"; # Just adding a little whitespace

# Next comes the list-overview of upcoming calendar events. For this I used the free "icalBuddy" program which you need to install for this script to work.
# The icalBuddy script is quite slow to run, so we need to find a way to not make it run on every refresh of the main script. For this we save the icalBuddy output to a local file.

lastedit=$(find ~/Dropbox/Development/menucalendartemp.txt -newermt "1 hour ago") # Here the find command checks wheather the local temp file has been modified in the last hour. If it wasn't, $lastedit is set to the path of the temp file.

if [[ $lastedit == "" ]]; then # This is the check for the variable set in the last step. If it is empty, the temp file's contents need to be refreshed. 
    echo "`/usr/local/bin/icalBuddy --propertySeparators "| |
        |" --sectionSeparator "" --formatOutput --includeOnlyEventsFromNowOn --noCalendarNames --showTodaysSection  --bullet "● " --limitItems "10" --includeEventProps "datetime,title" --propertyOrder "title,datetime" --dateFormat "%e. %B" --localizationFile --separateByDate "~/.icalBuddyLocalization.plist" --timeFormat "%H:%M" --noPropNames eventsToday+7 `" > ~/Dropbox/Development/menucalendartemp.txt; # Here I run the icalBuddy program with a whole bunch of arguments which are detailed in the manpage of icalBuddy. The resulting list of events is logged to our temp file (via the ">" command). This resets the modification date of the temp file and the next time the script is refreshed, the code will jump right over this step to the next line.
    less ~/Dropbox/Development/menucalendartemp.txt; # lastly, the contents of the temp file are read with the "less" command and printed to our menu bar program. 
else
    less ~/Dropbox/Development/menucalendartemp.txt; # If the temp file is recent enough, it remains unchanged.  
fi
echo "<html><span style='font-size:5pt'>&nbsp;</span></html>"; # Some more white-space.
echo "<html><span style='font-family:-apple-system;font-size:11pt;color:white'>Neuer Eintrag</span></html>"; # this last line creates a "new entry"-link. This doesn't do anything but can be referenced in an action script.

{% endhighlight %}

Als nächstes hier noch der Code für das dazu korrespondierende action script, welches Anweisungen enthält für den Fall, dass Einträge in unserem Menüleistenkalender angeklickt werden ([GitHub Gist](https://gist.github.com/moehrenzahn/d503dd0c714e8eae3676)):

{% highlight bash %}

open /Applications/Calendar.app; # If any line of the list is clicked, open the default Calendar app.

# The following code begins a multi-line applescript. The repeat loop makes sure that the script waits until Calendar has finished opening. 

osascript -e ' 
set calendarDidFinishLaunching to false
repeat while calendarDidFinishLaunching is false 
    tell application "System Events" to set frontApp to name of first application process whose frontmost is true
    if frontApp is "Calendar" then set calendarDidFinishLaunching to true
end repeat

tell application "System Events" to keystroke "t" using command down' # This simulates a press of CMD-T, which tells Calendar to jump to the current day. You could parse the title of an event and jump right to that event, but I havent implemented this functionality yet.

if [[ $TEXTBAR_TEXT == *"Neuer Eintrag"* ]] ; then # This parses the clicked line and checks if it is our link to create a new entry.
    osascript -e 'tell application "System Events" to keystroke "n" using command down' # If it is we simulate a press of CMD-N, opening the quick entry pane of calendar, ready for your input.
fi

{% endhighlight %}

Die Optik und Sprache von icalBuddy lässt sich umfangreich über zwei `.plist`-Dateien anpassen, sodass es so schick aussieht wie oben im Screenshot. Alle Informationen dazu finden sich in der man page[^1] zu icalBuddy.

[^1]: Die man page lässt sich im Terminal aufrufen über den Befehl `man icalBuddy` (oder [hier](http://hasseg.org/icalBuddy/config-man.html) im Browser).