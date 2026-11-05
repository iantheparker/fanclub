---
layout: project
title: Tumbleweed
permalink: /tumbleweed/
playful: true
date_label: "Fall, 2013"
order: 8
tags: [Concept, Director, Editor, Frontend Development, Backend Development]
medium: [iOS, Rails]
---

<div class="intro-txt">
<p>
<a href="https://itunes.apple.com/us/app/no-mans-land-powered-by-tumbleweed/id602227891?mt=8">Tumbleweed</a>
was an experiment in location-based content I worked on from 2012–2013. I teamed up with UX designers
<a href="https://twitter.com/waythingswork">Greg Kuebler</a> and
<a href="https://twitter.com/younglucas">Luke Miller</a> to toy with the question of whether a story
could be better told by taking into account where the audience was currently standing.
<br>
<span class="subtitle">Concept</span>
<span class="subtitle">Director</span>
<span class="subtitle">Editor</span>
<span class="subtitle">Frontend Development</span>
<span class="subtitle">Backend Development</span>
<br>
<span class="subtitle2">iOS</span>
<span class="subtitle2">Rails</span>
</p>
</div>

{% include youtube.html id="YeUt2ji_PAE" %}

<div class="text-block" markdown="1">

I had recently co-directed a short film called No Man's Land, and we came up with the idea
of transforming it into a location-based game. We used a few different interactions:

- Check-in to a nearby venue on Foursquare — so for instance the next scene takes place at a saloon, you'd have to be near a similar category like a bar
- Some scenes required you to move several miles from your last known location to simulate getting out of town
- Some scenes just unlocked when enough time had passed

Kuebler managed the design assets, [Greg Kletsel](http://gregkletsel.com/) illustrated, and I handled the software.

In case you're curious, here were some of the interesting technical challenges I faced. 1) I
had to become a master of parallax. There were three layers of illustration that moved at
different speeds, so not only did I need to figure out the best rate of movement for each,
but I had to guarantee that the appropriate layer responded to each touch event even though
there were overlapping transparent layers. 2) I needed to keep this app fast and light. Not
only did I have to explore different means of compressing and displaying the illustrations
and animations, but I needed to keep the framerate high by efficiently managing processes
running just outside of the view port. 3) Some of our interactions required background
triggers, but you have to assume your app will be terminated after some downtime. After
trying out timed notifications on the client I found it too limiting, so I set up a rails
server to help unlock states of the game and also send multiple push reminders that added
color to the story if the user became inactive.

So, can a story be better told with location data? Maybe. But I think everyone would rather
sit on the couch and watch Netflix.

</div>
