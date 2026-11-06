---
layout: project
title: Crescendo
permalink: /crescendo/
date_label: "Summer 2015 – Summer 2016"
order: 4
tags: [App Development, Backend Development]
medium: [iOS, Android, Rails]
---

<div class="intro-txt">
<p>
One of Thunderclap's most requested features came from customers holding rallies or events:
they wanted to send important, time-sensitive messages to the crowd. I joined the company to
lead the development on a mobile app that let them do just that. It was called Crescendo.
<br>
<span class="subtitle">App Development</span>
<span class="subtitle">Backend Development</span>
<br>
<span class="subtitle2">iOS</span>
<span class="subtitle2">Android</span>
<span class="subtitle2">Rails</span>
</p>
</div>

{% include lgimg.html src="https://www.dropbox.com/s/zvyyymnp1pzz8mu/appstore.jpg?raw=1" caption="This was the liner in the App Store." big=true %}

<div class="text-block" markdown="1">

Crescendo was based on a hunch that the one marketing medium that could be stickier than
email was the push notification. Crescendo would allow brands and organizations to reach
their audience without having to build and maintain their own app. To pull this thing off,
we came up with several features that would make Crescendo compelling enough to professional
marketers, who were accustomed to rich analytics, while also fun to use for end-users.

</div>

{% include lgimg.html src="https://www.dropbox.com/s/s0i7z7qfijv08nq/card_create.jpg?raw=1" caption="This is what the Crescendo Rails app push notification creation flow looked like. We called them 'cards'." %}

<div class="text-block" markdown="1">

When I joined, the team already had a Rails app that supported the creation of push
notifications and they had the beginnings of an Android app. I had to build the iOS app,
and, whenever adding new features to it, I'd update the Android app to keep it at parity.

The first feature was branded onboarding. We wanted to offer a custom-branded flow so
organizations felt a sense of ownership when referring their audience to our app. I used
[Branch's deep links](https://branch.io/) to handle referrals, and had a generic
sign-up / onboarding flow for users that discovered Crescendo straight from the App/Play store.

</div>

{% include lgimg.html src="https://www.dropbox.com/s/rl4h7f41vb6q4ay/crescendo_channel.jpg?raw=1" caption="The web page that generated Branch referral urls." %}

{% include lgimg.html src="https://www.dropbox.com/s/sz4etbaqequ12up/onboarding_flow.jpg?raw=1" caption="The branded flow would also set a user up to automatically receive updates from that org." double=true %}

<div class="text-block" markdown="1">

The second feature was rock-solid event tracking. For us to really compete with email, we
needed marketers to be excited about the analytics. The team built some great charts to show
real-time push notification delivery and open rates. I had to ensure that the app sent a
full suite of events to the organizer's analytics dashboard regardless of the app's current
lifecycle state. This entailed sending silent push notifs to wake the client and keeping
background processes fast.

</div>

{% include lgimg.html src="https://www.dropbox.com/s/5jjoqhay9wc53a9/card_stats.jpg?raw=1" caption="Check out these sweet charts that updated in real-time." %}

<div class="text-block" markdown="1">

The third feature was more of a theme — we wanted to create the richest, most FOMO-inducing
notifications possible. That meant riding the bleeding edge of what push could do, such as
using gifs and updating info dynamically. It also meant creating context-specific push
notifications for different types of audience interactions and different end goals. I built
out several "types" of notifications to accomplish this:

- **Share/Amplify** — unlock special content only after sharing a message on social media
- **Rally** — Location-tracking and region-monitoring to unlock location-specific content
- **Ticket** — QR code reading for organizers, and QR code displaying for users
- **Contest** — If there was limited content and responding to a push guaranteed your place in line, then we established a socket connection for real-time charts and rank updates. This became our most popular type of push notification!

</div>

{% include lgimg.html src="https://www.dropbox.com/s/zgmqlibso3pu0sv/results_tribeca.jpg?raw=1" caption="This is what a Contest Card flow looked like." big=true %}

<div class="text-block" markdown="1">

We were fortunate to have [Tribeca Film beta test](https://technical.ly/brooklyn/2016/03/28/will-push-notifications-kill-email-marketing-crescendo-thinks/)
the app and run contests with their audience. Another beta tester,
[Trap Karaoke](http://www.trapkaraoke.com/), had massive success in ticket giveaways to
loyal fans that opened notifications quickly enough. Our hunch turned out to be true — both
Tribeca Film and Trap Karaoke had phenomenal open rates of up to 70% on Crescendo, as
compared to typical rates of 20% for email and 2% for social media. We worked on Crescendo
for a year, but unfortunately we ran out of funding before we hit a tipping point.

</div>
