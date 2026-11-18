---
layout: page
title: Events
permalink: /events/
---

<section class="wrap">
  <p class="lead">Each year LEDC runs a seminar series bringing researchers, practitioners and activists to SOAS. Upcoming seminars and talks are listed first, with past events below.</p>
  <h2 class="band__title">Upcoming</h2>
  {% include events-list.html which="upcoming" full=true past_target="past-events" empty="No events are scheduled right now. New seminars and talks will be listed here." %}

  <div class="link-cards">
    <a class="link-card" href="{{ '/events/collaborations/' | relative_url }}"><strong>Events &amp; Collaborations</strong><span>Workshops, consultations and joint events</span></a>
  </div>

  <h2 class="band__title">Past events</h2>
  {% include events-list.html which="past" full=true id="past-events" empty="Past events will appear here." %}
</section>
