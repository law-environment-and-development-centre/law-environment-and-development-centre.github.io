---
layout: page
title: Events
permalink: /events/
---

<section class="wrap">
  <h2 class="band__title">Upcoming</h2>
  <div class="events" data-events="upcoming" data-past-target="#past-events">
    {%- assign events = site.events | sort: "date" -%}
    {%- for e in events %}
    {% include event-card.html event=e full=true %}
    {%- endfor %}
    <p class="events__empty" hidden>No events are scheduled right now. New seminars and talks will be listed here.</p>
  </div>

  <h2 class="band__title">Past events</h2>
  <div class="events events--past" id="past-events"></div>
</section>
