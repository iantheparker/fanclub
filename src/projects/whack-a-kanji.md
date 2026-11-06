---
layout: project
title: Whack-a-Kanji
permalink: /whack-a-kanji/
playful: true
date_label: "May, 2018"
order: 2
tags: [Concept, Development]
medium: [React, TensorFlow]
---

<div class="intro-txt">
<p>
<a href="https://whack-a-kanji.fun">Whack-a-Kanji</a> is a quick site I made to prove to
my Japanese wife that Kanji is impossible to master. I riffed on
<a href="http://blog.otoro.net/2015/12/28/recurrent-net-dreams-up-fake-chinese-characters-in-vector-format-with-tensorflow/">David Ha's SketchRNN</a>
to generate fake Kanji + <a href="https://github.com/RhodesPeter/whack-a-mole-react">Peter Rhodes' whack-a-mole-react</a>
to get the site up in a night and had her questioning her Kanji skills by the morning.
<br>
<a class="subtitle" href="https://github.com/iantheparker/whack-a-kanji" title="Source code"><i class="fab fa-github"></i></a>
<a class="subtitle" href="https://whack-a-kanji.fun" title="Go to site"><i class="far fa-bookmark"></i></a>
<br>
<span class="subtitle">Concept</span>
<span class="subtitle">Development</span>
<br>
<span class="subtitle2">React</span>
<span class="subtitle2">TensorFlow</span>
</p>
</div>

<a href="https://whack-a-kanji.fun">
{% include video.html src="https://www.dropbox.com/s/8x2t6fykh0279bi/screencap.mp4?raw=1" poster="https://www.dropbox.com/s/4wynq1p17ear5iv/screencap.jpeg?raw=1" autoplay=true %}
</a>

<div class="text-block" markdown="1">

My first pass at getting this up involved reskinning that whack-a-mole game in React to use
10 real and 10 fake Kanji images I sliced up. I then also added scoring functionality to
support the notion of a bad whack and a strategic miss — you only earn points by whacking
the fakes and by letting real ones go unwhacked. The version my wife played in the morning
had limited samples, so two play-throughs and she saw every fake kanji I could throw at
her...but she got one wrong! Eureka!

For my next pass, I needed an endless amount of samples to trip her up. I
[forked SketchRNN](https://github.com/iantheparker/sketch-rnn) and made changes to the
drawing functions to guarantee that the real stuff from [KanjiVG](http://kanjivg.tagaini.net/)
and the output from the model looked stylistically indistinguishable. This is effectively an
API endpoint to generate either type of character depending on the arguments passed, but
instead of getting too ahead of myself and throwing it on a server for real-time generation,
I just cranked out one thousand characters each and put them on S3. As long as characters
are shown at random, I figured that was more than enough to challenge her. Lastly, I
fine-tuned the scoring feedback so it was crystal clear when she got something wrong (or right).

As of mid-May 2018, her average score is 85%. She's furious and addicted. She got her mother
and friends (all native speakers) to try it out and they haven't done much better. Yup. I'm
patting myself on the back. It's impossible to master.

</div>
