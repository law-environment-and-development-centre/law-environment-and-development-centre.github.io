---
layout: page
title: Annual Seminar Series
permalink: /events/seminar-series/
---

<section class="wrap">
  <p class="lead">Each year LEDC runs a seminar series bringing researchers, practitioners and activists to SOAS. Current events are on the <a href="{{ '/events/' | relative_url }}">Events page</a>.</p>
  {% for y in site.data.seminar_archive %}
  <h2 class="band__title">LEDC Seminar Series {{ y.year }}</h2>
  <div class="seminar-list">
    {% for it in y.items %}
    <article class="seminar">
      {% if it.date %}<p class="seminar__date">{{ it.date }}</p>{% endif %}
      <h3>{{ it.title }}</h3>
      {% if it.speaker %}<p class="seminar__speaker">{{ it.speaker }}{% if it.affiliation %}, {{ it.affiliation }}{% endif %}</p>{% endif %}
    </article>
    {% endfor %}
  </div>
  {% endfor %}
</section>
