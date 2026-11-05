---
layout: project
title: "Knewton GMAT: VOD"
permalink: /knewton/
date_label: "Winter, 2010"
order: 12
tags: [Key Stakeholder + Team Lead, Research, Prototyping, Content Production]
medium: [JS, JWPlayer]
---

<div class="intro-txt">
<p>
At Knewton, we wanted to explore how we could reach more students and also expand our user
base to less affluent students. In early 2010, I was tasked with delivering an on-demand
version of our GMAT product that would continue to engage students at a deep level...titled
Knewton GMAT: Video On-Demand.
<br>
<span class="subtitle">Key Stakeholder + Team Lead</span>
<span class="subtitle">Research</span>
<span class="subtitle">Prototyping</span>
<span class="subtitle">Content Production</span>
<br>
<span class="subtitle2">JS</span>
<span class="subtitle2">JWPlayer</span>
</p>
</div>

{% include video.html src="https://www.dropbox.com/s/4w2emz0f813et4i/geordie2-1.mov?raw=1" poster="https://www.dropbox.com/s/nyho93zqahufw0d/adobe_connect.jpg?raw=1" %}

<div class="text-block" markdown="1">

Knewton is an adaptive learning education technology company. In the early days, Knewton was
focused on the test-prep market and we were using Adobe Connect to conduct live, online
classes. Adobe Connect had some great features such as the ability to stream both slides and
a video of the teacher side by side.

It also had a chatroom where students could ask questions during the lecture and teaching
assistants could respond without interrupting the lecture for other students. Knewton
students found these live classes incredibly engaging and we were getting rave reviews.

**The Problem**

The problem was that running these online classes was costly. Each live lecture had a
teacher and two teaching assistant staff. On top of that, with our single studio, we could
only run so many classes per day, limiting the number of students we could take on at any
given time. The Marketing and Biz Dev teams wanted to explore how we could reach more
students and also expand our user base to less affluent students. In early 2010, I was
tasked with delivering an on-demand version of our GMAT product that would continue to
engage students at a deep level...titled Knewton GMAT: Video On-Demand.

</div>

{% include lgimg.html src="https://www.dropbox.com/s/mc791kjfp45t7fy/effieTA.jpg?raw=1" caption="This is what our studio looked like." %}

<div class="text-block" markdown="1">

**Research**

We got to work researching what aspects of our current live classes kept students engaged.
We learned a few key things through student interviews: 1) seeing the teacher's face
alongside slides was super compelling, 2) students often reviewed slides later while
studying, 3) there were situations in the live classrooms where teachers would switch out or
tag-team. This diversity in instruction apparently kept the students engaged (mind you these
are paying GMAT students so they're very motivated and vocal in their learning path / feedback).

Through our research, we also uncovered some pain points associated with our live classes.
Some students were time-strapped and would often load heavy Adobe Connect archive lessons on
their phone to try to catch up on lectures they missed. They would often try to skip through
material to just get to the pieces they felt were essential, but scanning through the
lectures and slides was difficult.

**How we solved it**

I corralled a small team consisting of a designer, a developer, a data scientist, a
teacher, and a content developer and we started sketching out some ideas.

</div>

{% include lgimg.html src="https://www.dropbox.com/s/4qfd8sxzbvmyd10/vodsketch.jpg?raw=1" %}

<div class="text-block" markdown="1">

We settled on HTML slides, which would be lightweight enough for students to load on their
phones and we built in a timeline that was scannable by lecture sections and browsable by
slides to make it easy for time-strapped students to skip around. We recorded all our
lectures with two teachers. The team got to building the front end, and I got to work with my
content team to restructure our lessons and shooting pipeline to handle two teachers per
lecture. Here is what we came up with.

</div>

{% include video.html src="https://www.dropbox.com/s/fm81c3r9o824at0/Quant%201-%20Intro.mp4?raw=1" poster="https://www.dropbox.com/s/vyejyuc0fcx01ul/richvod.jpg?raw=1" %}

<div class="text-block" markdown="1">

One reason we chose to use HTML slides was that they allowed us to easily capture more data
for our data science teams. However, through some further testing of our videos, we
discovered that the tiny video of the teachers at the top wasn't as engaging. We iterated to
a version using greenscreen to make the teacher large.

</div>

{% include video.html src="https://www.dropbox.com/s/l4m1rhuc002nxlk/7EE_category_jr_03.mp4?raw=1" poster="https://www.dropbox.com/s/3wkvcs1je71j8cz/rugani.jpg?raw=1" %}

<div class="text-block" markdown="1">

The on-demand GMAT course was a hit and Knewton continued to offer it for several years,
even after pivoting away from test prep because it was a low-cost, hands-off steady source
of revenue.

</div>
