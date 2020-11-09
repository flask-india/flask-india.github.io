---
lang: en
layout: post
title:  "Digital Clock"
date:   2017-06-20 14:20:39 -0700
category: Web_Designing
color: green
theme_color: "#4CAF50"
img: /static/img/clock.jpg
tags:
- HTML
- JavaScript
---

# Digital Clock Using JavaScript
Today we will discuss about how to create a digital clock on your website. It is little bit easier task. We can use Javascript for this task. Create a file `time.html` on your `_includes` directory. The time.html is looks like this. You can change styles according to your perspective.

<pre>
<code class="lang-markup">
    &lt;center&gt;
    &lt;style&gt;
    #clock{
    color:#5bb66f;
    display:inline;
    } 
    &lt;/style&gt;
    &lt;script&gt;
    function digclock()
    {
    var d = new Date()
    var t = d.toLocaleTimeString()
    document.getElementById("clock").innerHTML = t
    }
    setInterval(function(){digclock()},1000)
    &lt;/script&gt;
    &lt;font color=#5bb66f&gt;Now: &lt;/font&gt;&lt;div id="clock"&gt;
    &lt;/div&gt;
</code>
</pre>

In the seventeenth line of your code you can see a Now:. The same thing you can see at the footer of this site. If there is no `display:inline;`on the style, the time and Now: displayed on the different lines. The  1 sec. delay is produced using `setInterval(function(){digclock()},1000)` which gives 1000 milli second or 1 second delay. While `var t = d.toLocaleTimeString()` returns the time portion of a Date object as a string, using locale conventions. I am not going to more technical detaild. If you have any doubt [w3schools](https://w3schools.com) will be a greate tutor for you... Most probably your theme have a `footer.html` file. Open that file and include time.html using {% raw %}{% include time.html %}{% endraw %}. Like this you can add this time.html on the header, footer, post, page... anywhereelse.
