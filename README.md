Demo
====

See [http://jsfiddle.net/kamalallouzi/wvo36u8e/](http://jsfiddle.net/kamalallouzi/wvo36u8e/) for an example. (Hit run again if it does not work the first time)


What does it do?
================

It makes a table out of repositories that stays up to date with one or more github profiles.

The table can be added to any website/webpage that you desire.

This can be accomplished from the github JSON-P taken from each profile.

How to use?
================

Get the code
------------

You can clone it with git with the following link:

    git clone https://github.com/kamalallouzi/github-table.git

Or you could just download it from github by clicking the "Code" drop down and "Download ZIP"

Set it up
---------
Make sure that Jquery is referenced in your html file above the javascript file.

At the very top of the javascript file, replace "USERNAME" in the getJSON function with the actual username of the profile.

Last is to add " onLoad="makeTable()" " to the body tag of your html file.

From there you can style it as you like as a normal html table in css as you desire.

Things to keep in mind
---------
The github api has a certain limit per ip to the local requests you can make to it. (learned it the hard way)

You need a "?callback" at the end of your github api link to work with the getJSON function.
