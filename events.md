---
layout: page
title: Events
permalink: /events/
---

<section class="wrap">
  <p class="lead">Each year LEDC runs a seminar series bringing researchers, practitioners and activists to SOAS. Upcoming seminars and talks are listed first, with past events below.</p>
  <h2 class="band__title">Upcoming</h2>
  <div class="events" data-events="upcoming" data-past-target="#past-events">
    {%- assign events = site.events | sort: "date" -%}
    {%- for e in events %}
    {% include event-card.html event=e full=true %}
    {%- endfor %}
    <p class="events__empty" hidden>No events are scheduled right now. New seminars and talks will be listed here.</p>
  </div>

  <div class="link-cards">
    <a class="link-card" href="{{ '/events/collaborations/' | relative_url }}"><strong>Events &amp; Collaborations</strong><span>Workshops, consultations and joint events</span></a>
  </div>

  <h2 class="band__title">Past events</h2>
  <div class="events events--past" id="past-events"></div>
</section>
