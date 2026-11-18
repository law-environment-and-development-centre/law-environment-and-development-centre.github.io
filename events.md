---
layout: page
title: Events
permalink: /events/
description: Seminars, talks and events at the SOAS Law, Environment and Development Centre, including the LEDC Seminar Series.
intro: >-
  Each year LEDC runs a seminar series bringing researchers, practitioners and
  activists to SOAS. Upcoming seminars and talks are listed first, with past events below.
---

<nav class="wrap" aria-label="More on events">
  <ul class="subnav">
    <li class="subnav__label">Also in Events:</li>
    <li><a class="more" href="{{ '/events/collaborations/' | relative_url }}">Events and collaborations with partners</a></li>
  </ul>
</nav>

<section class="wrap section" aria-labelledby="upcoming-title">
  <h2 class="section__title" id="upcoming-title">Upcoming events</h2>
  {% include events-list.html which="upcoming" full=true past_target="past-events" empty="No events are scheduled right now. New seminars and talks will be listed here." %}
</section>

<section class="wrap section section--tight" aria-labelledby="past-title">
  <h2 class="section__title" id="past-title">Past events</h2>
  {% include events-list.html which="past" full=true id="past-events" empty="Past events will appear here." %}
</section>
