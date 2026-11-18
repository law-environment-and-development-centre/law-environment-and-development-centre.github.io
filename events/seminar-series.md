---
layout: page
title: Annual Seminar Series
permalink: /events/seminar-series/
---

<section class="wrap">
  <p class="lead">Each year LEDC runs a seminar series bringing researchers, practitioners and activists to SOAS. Posters from past series are below; current events are on the <a href="{{ '/events/' | relative_url }}">Events page</a>.</p>
  {% for y in site.data.seminar_archive %}
  <h2 class="band__title">LEDC Seminar Series {{ y.year }}</h2>
  <div class="posters">
    {% for it in y.items %}
    <figure class="poster">
      <a href="{{ it.poster }}"><img src="{{ it.poster }}" alt="{% if it.title %}Poster: {{ it.title }}{% else %}Seminar poster, {{ y.year }}{% endif %}" loading="lazy"></a>
      {% if it.date or it.title %}
      <figcaption>
        {% if it.date %}<span class="poster__date">{{ it.date }}</span>{% endif %}
        {% if it.title %}<strong>{{ it.title }}</strong>{% endif %}
        {% if it.speaker %}<span>{{ it.speaker }}{% if it.affiliation %}, {{ it.affiliation }}{% endif %}</span>{% endif %}
      </figcaption>
      {% endif %}
    </figure>
    {% endfor %}
  </div>
  {% endfor %}
</section>
